// 某页面接口
module.exports({
    '/api/common/getList': {
        type: 'GET',
        request: {
            Id: '', // 空为不限

            CurrPage: 1, // 当前页
            PageLen: 10 // 每页数量
        },
        response: {
            TotalNum: 0, // 总数据条数
            Data: [
                {
                    Id: 1,
                    Name: '炉石传说', // 名称
                    OS: 1, // 1-Android，2-iOS

                    UpdateTime: 1493630096904 // 更新时间，时间戳格式
                }
            ],
            Status: true, // true-成功，false-失败
            Message: 'Everything goes well' // 返回消息
        }
    }
});