# A LiveReload [harp](http://harpjs.com/) server

## Install

From `harp-reload` checkout do
```
npm i -g .
```

## Usage
Assuming a harp project structure like

```
.
├── _harp
│   ├── index.jade
│   ├── _layout.jade
│   ├── main.less
│   ├── ...
└── public
│   ├── 404.html
│   ├── index.html
│   ├── main.css
│   ├── ...
```

Running

```
harp-livereload
```
Will watch for changes in `_harp/`, harp-compile to `public` and notify `LiveReload`
