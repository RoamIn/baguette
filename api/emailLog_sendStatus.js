/**
 * Created by ivill on 2017/3/19.
 */

module.exports = {
    // 获取邮件日志列表
    '/api/emailLog/SendStatus/getList': {
        Type: 'GET', // 请求类型
        Request: {
            Page: 1, // 当前页码
            PageSize: 10, // 每页数据条数

            Id: '', // 邮件 Id
            Tags: '[]', // 标签
            Title: '', // 标题
            EmailType: '', // 邮件类型，空-全部，1-指定用户，2-PC游戏，3-PC平台，4-移动平台，5-移动游戏
            Status: '' // 邮件状态，空-全部，1-未发送，2-已发送，3-已暂停，4-已发送，5-已过期
        },
        Response: {
            Data: {
                Count: 22,
                List: [
                    {
                        Id: '', // Id
                        EmailType: 1,  // 邮件类型，1-指定用户，2-PC游戏，3-PC平台，4-移动平台，5-移动游戏
                        Tags: [], // 标签
                        Title: '', // 标题
                        Status: '', // 邮件状态，1-未发送，2-已发送，3-已暂停，4-已发送，5-已过期
                        AmountOfSent: 570000000, // 发送总量
                        AmountOfReceived: 56925624562, // 发送成功总量
                        AmountOfRead: 20020201230 // 已读用户量
                    }
                ]
            },
            Status: 0, // 非负数表示成功，（布尔值更好，随你咯）
            Message: 'Success'
        }
    },
    // 导出用户 Id
    '/api/emailLog/SendStatus/exportUserId': {
        Type: 'GET', // 请求类型
        Request: {
            Id: 1 // 邮件 Id
        },
        Response: {}
    }
};
