const esprima = require('esprima');
const through = require('through2');

module.exports = function test(options) {
	return through.obj(function compilePug(file, enc, cb) {
		const content = String(file.contents);
		const tokenization = esprima.tokenize(content, {
			comment: true
		});

		console.log(JSON.stringify(tokenization, null, '\t'));

		cb(null, file);
	});
};