<div></div>

# esbuild-serve

[Serve](https://github.com/nativew/serve) with live reload for [esbuild](https://github.com/evanw/esbuild).

<br>

### Simple esbuild wrapper

### Serves your site locally

### With live reload

### Using esbuild's watch

### And an ultralight server

<br>

### Install

```zsh
npm install esbuild-serve -D
```

<br>

### Use

`esbuild.config.js`

```js
import esbuildServe from 'esbuild-serve';

esbuildServe(
    {
        // esbuild options
    },
    {
        // serve options (optional)
        port: 7000,
        root: '.'
    }
);
```

`package.json`

```json
{
    "type": "module",
    "scripts": {
        "start": "node esbuild.config.js -w",
        "build": "node esbuild.config.js"
    }
}
```

<br>

### Includes

[esbuild](https://github.com/evanw/esbuild) &nbsp; → &nbsp; Extremely fast bundler and minifier.

[Serve 🍛](https://github.com/nativew/serve) &nbsp; → &nbsp; Ultralight http server with live reload.

<br>

### Check

[esbuild-plugin-pipe](https://github.com/nativew/esbuild-plugin-pipe) &nbsp; → &nbsp; Pipe esbuild plugins output.

[esbuild-plugin-babel](https://github.com/nativew/esbuild-plugin-babel) &nbsp; → &nbsp; Babel plugin for esbuild.

[esbuild-plugin-svg](https://github.com/nativew/esbuild-plugin-svg) &nbsp; → &nbsp; Svg files import plugin for esbuild.

[esbuild-plugin-postcss-literal](https://github.com/nativew/esbuild-plugin-postcss-literal) &nbsp; → &nbsp; PostCSS tagged template literals plugin for esbuild.

<br>
