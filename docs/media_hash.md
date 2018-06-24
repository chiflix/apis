# Media Quick Hash

Quick hash is designed for identifying files without I/O intensive operations.

## static files

media_quickhash for any file can be assembled by four MD5 hashes of 4k bytes data block from four positions of a file.
The first position is the 4096 bytes from the beginning of the file.
The second position is 1/3 of total file length.
The third position is 2/3 of total file length.
The fourth and the last position is 8192 bytes before the end of the file.
Concat four hashes by separator `-`.

```
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

export default {
  methods: {
    mediaQuickHash(file) {
      function md5Hex(text) {
        return crypto.createHash('md5').update(text).digest('hex');
      }
      const filePath = path.join(__dirname, file);
      const fd = fs.openSync(filePath, 'r');
      const len = fs.statSync(filePath).size;
      const position = [
        4096,
        Math.floor(len / 3),
        Math.floor(len / 3) * 2,
        len - 8192,
      ];
      const res = [];
      const buf = Buffer.alloc(4096);
      for (let i = 0; i < 4; i += 1) {
        const bufLen = fs.readSync(fd, buf, 0, 4096, position[i]);
        res[i] = md5Hex(buf.slice(0, bufLen));
      }
      fs.closeSync(fd);
      return res.join('-');
    },
  },
};
```

Sample File：  https://docs.google.com/file/d/0B2yI4786fKzdQjNvLWJPUjg3UU0/edit?usp=sharing
Media Hash for the Sample File: `84f0e9e5e05f04b58f53e2617cc9c866-b1f0696aec64577228d93eabcc8eb69b-f54d6eb31bef84839c3ce4fc2f57991c-f497c6684c4c6e50d0856b5328a4bedc`

## streaming files

## web pages
