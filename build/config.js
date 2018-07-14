const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const merge = require('webpack-merge');

const isProduction = !!((argv.env && argv.env.production) || argv.p);
const isWatching = !!(argv.w);

const rootPath = process.cwd();

const config = {
  paths: {
    root: rootPath,
    assets: path.join(rootPath, 'app/assets'),
    public: '/dist/',
    dist: path.join(rootPath, 'public/dist')
  },
  enabled: {
    watcher: isWatching,
    optimize: isProduction,
    sourceMaps: !isProduction
  },
};

module.exports = merge(config, {
  env: Object.assign({
    production: isProduction,
    development: !isProduction
  },
    argv.env)
});

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = isProduction ? 'production' : 'development';
}
