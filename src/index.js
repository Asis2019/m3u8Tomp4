import * as FFmpeg from '@ffmpeg/ffmpeg';
import parseM3u8, {retryFetchFile} from './parseM3u8';
import logger from './logger';
import {requestPool} from './requestPool';

// interface MergeOptions {
//   /** The maximum number of concurrent download requests, default 6 */
//   maxLimit?: number;
//   /** Whether to print the log, default true */
//   logOpen?: boolean;
//   /** If the download of ts fragments fails, the number of times to re-download all failed fragments, default 3 */
//   retryTimes?: number;
// }

logger.setLogger(console.log);
const {createFFmpeg} = FFmpeg;

const merge2mp4 = async (url, options) => {
    const {maxLimit = 6, logOpen = true, retryTimes = 3} = options || {};
    if (!logOpen) {
        logger.setLogger(undefined);
    }
    const ffmpeg = createFFmpeg();
    logger.log(`Starting download of ${url}`);
    const parseObj = await parseM3u8(url);
    if (!parseObj) {
        logger.log(`analyze m3u8 list error！`);
        return null;
    }
    debugger
    let tsArr = parseObj.tsArr;

    logger.log(`loading ffmpeg...`);
    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'index.m3u8', parseObj['index.m3u8']);
    ffmpeg.setLogging(logOpen);
    ffmpeg.setProgress(({ratio}) => {
        if (ratio === 1) {
            logger.log(`Video download completed.`);
        } else {
            let percentage = Math.round(ratio * 100);
            logger.log(`Merge progress ${percentage}%.`);
        }
    });

    const downLoadResult = {
        successItems: [],
        errorItems: [],
        totalItems: tsArr,
    };

    for (let i = 0; i < retryTimes; i++) {
        await requestPool({
            data: tsArr,
            maxLimit,
            iteratee: async ({item}) => {
                try {
                    ffmpeg.FS(
                        'writeFile',
                        item.fileName,
                        await retryFetchFile(item.path),
                    );
                    // const index = tsArr.indexOf(item);
                    downLoadResult.successItems.push(item);
                    const successCount = downLoadResult.successItems.length;
                    const errorCount = downLoadResult.errorItems.length;
                    const totalCount = downLoadResult.totalItems.length;

                    logger.log(
                        `Downloading ts fragments: success ${successCount} part，fail ${errorCount} part，total ${totalCount} part`,
                    );
                } catch (error) {
                    logger.log(error);
                    downLoadResult.errorItems.push(item);
                }
            },
        });

        if (downLoadResult.successItems.length === downLoadResult.totalItems.length) {
            break;
        } else {
            tsArr = downLoadResult.errorItems;
            downLoadResult.errorItems = [];
        }
    }

    // for (const ts of tsArr) {
    //   ffmpeg.FS('writeFile', ts.fileName, await retryFetchFile(ts.path));
    //   const index = tsArr.indexOf(ts);
    //   logger.log(`正在下载ts片段: 第${index}段，共${tsArr.length}段`);
    // }
    logger.log(`Starting ts merge.`);
    await ffmpeg.run(
        '-allowed_extensions',
        'ALL',
        '-i',
        'index.m3u8',
        '-c',
        'copy',
        'output.mp4',
    );
    return ffmpeg.FS('readFile', 'output.mp4');
};

export const setLogger = logger.setLogger;

export default merge2mp4;
