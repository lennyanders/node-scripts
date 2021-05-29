#!/usr/bin/env node

import ytDl from 'youtube-dl-exec';
import ffmpegLocation from 'ffmpeg-static';

let [urlOrYtId] = process.argv.slice(2);

if (!urlOrYtId) {
  console.log('please provide an URL for the download');
  process.exit();
}

if (/\..+/.test(urlOrYtId) && !/^http.?:\/\//.test(urlOrYtId)) urlOrYtId = `https://${urlOrYtId}`;

(async () => {
  try {
    await ytDl(
      urlOrYtId,
      { format: 'bestvideo+bestaudio/best', output: '%(title)s.%(ext)s', ffmpegLocation },
      { stdout: 'inherit' },
    );
  } catch (_error) {}
})();
