<h1 align="center">Welcome to m3u8tomp4 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.5-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/CodeByZack/m3u8Tomp4/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> A handy tool that converts m3u8 to mp4 files and works in the browser!

## Credit

Based on the excellent FFMPEG [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)，Simply encapsulated。

## Demo

See demo under the folder。

[online demo](https://m3u8-tomp4.vercel.app/index.html)

## Installation

### In Browser

```
<script src="https://unpkg.com/@zackdk/m3u8tomp4@1.0.4/dist/m3u8tomp4.browser.mini.js"></script>
```

### npm

```
npm i @zackdk/m3u8tomp4
```

## Usage

```javascript
//node端
//import m3u8tomp4 from 'm3u8tomp4'; ES Module
const m3u8tomp4 = require('m3u8tomp4');
const fs = require('fs');
//返回一个promise, data 是一个 Unit8Array。
const data = await m3u8tomp4.default(m3u8Url, options);
fs.promises.writeFile('./test.mp4', data);

//浏览器内
const data = await m3u8tomp4(m3u8Url, options);
const url = URL.createObjectURL(new Blob([res.buffer], { type: 'video/mp4' }));

//log信息
m3u8tomp4.setLogger((msg) => console.log);
```

## Options

```typescript
interface MergeOptions {
  /** The maximum number of concurrent download requests, default 6 */
  maxLimit?: number;
  /** Whether to print the log, default true */
  logOpen?: boolean;
  /** If the download of ts fragments fails, the number of times to re-download all failed fragments, the default is 3 */
  retryTimes?: number;
}
```

## Limits

For details, please refer to ffmpeg.wasm at [FAQ](https://github.com/ffmpegwasm/ffmpeg.wasm#faq).

1. only support SharedArrayBuffer browsers running.(Currently only PC 端的谷歌浏览器可以用)

2. WebAssembly limits the maximum supported file input to 2GB.

## Support

If this library helps you please star itt️!
