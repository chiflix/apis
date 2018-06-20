# Media Quick Hash

media_quickhash is designed for identifying media files quickly.

## static files

media_quickhash for any file can be assembled by four MD5 hashes of 4k bytes data block from four positions of a file.
The first position is the 4096 bytes from the beginning of the file.
The second position is 1/3 of total file length.
The third position is 2/3 of total file length.
The fourth and the last position is 8192 bytes before the end of the file.
Concat four hashes by separator `-`.

```
56	CString CSVPhash::ComputerFileHash(CString szFilePath)
57	{
58	      int stream;
59	      errno_t err;
60	      _int64 offset[4];
61	      DWORD timecost = GetTickCount();
62	      CString szRet = _T("");
63	      err = _wsopen_s(&stream, szFilePath, _O_BINARY|_O_RDONLY , _SH_DENYNO , _S_IREAD );
64	      if(!err){
65	              __int64 ftotallen  = _filelengthi64( stream );
66	              if (ftotallen < 8192){
67	                      //a video file less then 8k? impossible!
68	                     
69	              }else{
70	                      offset[3] = ftotallen - 8192;
71                        	  offset[2] = ftotallen / 3;
72	                      offset[1] = ftotallen / 3 * 2;
73	                      offset[0] = 4096;
74	                      CMD5Checksum mMd5;
75	                      BYTE bBuf[4096];
76	                      for(int i = 0; i < 4;i++){
77	                              _lseeki64(stream, offset[i], 0);
78	                              //hash 4k block
79	                              int readlen = _read( stream, bBuf, 4096);
80	                              CString szMD5 = mMd5.GetMD5( bBuf , readlen);
81	                              if(!szRet.IsEmpty()){
82	                                      szRet.Append( _T(";") );
83	                              }
8                                szRet.Append(szMD5);
85	                      }
86	              }
87	              _close(stream);
88	      }
89	      timecost =  GetTickCount() - timecost;
90	      return szRet;
93	}
```

Sample File：  https://docs.google.com/file/d/0B2yI4786fKzdQjNvLWJPUjg3UU0/edit?usp=sharing
Media Hash for the Sample File: `84f0e9e5e05f04b58f53e2617cc9c866-b1f0696aec64577228d93eabcc8eb69b-f54d6eb31bef84839c3ce4fc2f57991c-f497c6684c4c6e50d0856b5328a4bedc`

## streaming files

## web pages
