// API Example 2
module.exports({
    '/api/common/upload': {
        type: 'POST',
        request: {
            Width: 600, // 宽
            Height: 800 // 高
        },
        response: {
            Data: 'https://cdn.example.com/example.png', // 返回图片地址
            Status: true, // true-成功，false-失败
            Message: 'Everything goes well' // 返回消息
        }
    }
});