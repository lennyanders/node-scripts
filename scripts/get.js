#!/usr/bin/env node

import fetch from 'node-fetch';

let [url] = process.argv.slice(2);

if (!url) {
  console.log('please provide an URL to fetch');
  process.exit();
}

if (!/^http.?:\/\//.test(url)) url = `https://${url}`;

let res;
try {
  res = await fetch(url);
} catch (error) {
  console.log(error);
  process.exit();
}

const contentType = res.headers.get('content-type');
if (contentType.includes('application/json')) {
  res = await res.json();
} else {
  res = await res.text();
}

console.log(res);
