import * as FFmpeg from '@ffmpeg/ffmpeg';
import {getFileName, getFullUrl, StringToUint8Array, Uint8ArrayToString,} from './utils';
import logger from './logger';
import {Parser} from 'm3u8-parser';

const { fetchFile } = FFmpeg;
const reg = /(.*\/).*\.m3u8$/;

const retry =
  (fn, retryCount = 3) =>
  async (...args) => {
    for (let i = 0; i < retryCount; i++) {
      try {
        return await fn.apply(null, args);
      } catch (error) {
        logger.log(`download ${args[0]}go wrong,Attempts${i + 1}`);
        if (i === retryCount - 1)
            throw new Error(`number of attempts${retryCount}Second-rate,fetch failed！`);
      }
    }
  };

export const retryFetchFile = retry(fetchFile);

const parseM3u8 = async (url) => {
  const res = await retryFetchFile(url);
  const data = Uint8ArrayToString(res);
  let copyMediaList = data;
  // @ts-ignore
  const parser = new Parser();
  parser.push(data);
  parser.end();

  const { manifest } = parser;
  const { playlists, segments } = manifest;
  const [_, prefixUrl] = url.match(reg);
  if (playlists?.length) {
    // If there are multiple code rates, the first one is selected by default
    const playList = playlists[0];
    const fullUrl = getFullUrl(prefixUrl, playList.uri);
    return await parseM3u8(fullUrl);
  }

  if (segments?.length) {
    const results = [];
    let key;

    for (const item of segments) {
      const obj = {
        name: item.uri,
        fileName: getFileName(item.uri),
        path: getFullUrl(prefixUrl, item.uri),
      };
      if (!key && item.key) {
        key = item.key;
      }
      copyMediaList = copyMediaList.replace(obj.name, obj.fileName);
      results.push(obj);
    }

    if (key) {
      results.push({
        name: 'key.key',
        fileName: 'key.key',
        path: getFullUrl(prefixUrl, key.uri),
      });
      copyMediaList = copyMediaList.replace(key.uri, 'key.key');
    }

    return { tsArr: results, 'index.m3u8': StringToUint8Array(copyMediaList) };
  }

  return null;
};

export default parseM3u8;
