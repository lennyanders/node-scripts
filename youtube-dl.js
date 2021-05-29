#!/usr/bin/env node

import ytDl from 'youtube-dl-exec';
import ffmpegLocation from 'ffmpeg-static';

let [url] = process.argv.slice(2);

if (!url) {
  console.log('please provide an URL for the download');
  process.exit();
}

if (!/^http.?:\/\//.test(url)) url = `https://${url}`;

(async () => {
  try {
    await ytDl(
      url,
      { format: 'bestvideo+bestaudio/best', output: '%(title)s.%(ext)s', ffmpegLocation },
      { stdout: 'inherit' },
    );
  } catch (_error) {}
})();
