#!/usr/bin/env node

var harp = require('harp'),
    chokidar = require('chokidar'),
    livereload = require('livereload'),
    http = require('http'),
    ecstatic = require('ecstatic');

var harpDir = process.cwd() + '/_harp';
var publicDir = process.cwd() + '/public';

chokidar.watch('_harp', { ignored: /[\/\\]\./ }).on('change', function(path, event) {
    console.log('change:', path);
    harp.compile(harpDir, publicDir, function (err) {
      if (err) {
          throw err;
      }
      console.log('Harp re-compiled');
    });
});

livereload.createServer().watch(publicDir);

http.createServer(
    ecstatic({ root: publicDir })
).listen(8080);

console.log('Listening on :8080');
