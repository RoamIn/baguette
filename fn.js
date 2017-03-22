let fs = require('fs');

const PATH = './api'; // 目录

//  遍历目录得到文件信息
function walk (path, callback) {
    let files = fs.readdirSync(path);

    files.forEach(function (file) {
        if (fs.statSync(path + '/' + file).isFile()) {
            callback(path + '/' + file);
        }
    });
}

function makeFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            throw err;
        }

        console.log('It\'s saved!');
    });
}

// 运行
walk(PATH, (file) => {
    let map = require(file);
    let interfaces = Object.keys(map);

    interfaces.forEach((interface) => {
        fs.open('dist/api.txt', 'r+', (err, fd) => {
            fs.writeFile('message.txt', JSON.stringify(map, null, 2), (err) => {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        });
    });
});