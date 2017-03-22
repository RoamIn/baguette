function walk(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
        	console.log(stat);
        	results = results.concat(walk(file));
        } else {
        	results.push(file);
        }
    })
    return results
}