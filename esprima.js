'use stric';

const gutil = require('gulp-util');
const through = require('through2');
const esprima = require('esprima');

const handle = require('./handle');


module.exports = function (options) {
    return through.obj(function compilePug(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);

            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-esprima', 'Streaming not supported'));
            return;
        }

        // 解析 API 文件
        const data = esprima.parse(file.contents.toString(), {
            attachComment: true,
            sourceType: 'deduceSourceType'
        });

        // 输出解析内容
        file.contents = new Buffer('const data = ' + JSON.stringify(data, null, '\t'));

        cb(null, file);
    });
};