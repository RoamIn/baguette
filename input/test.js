/**
 * Created by ivill on 2017/3/19.
 */

module.exports = {
    // 获取PC游戏群发邮件列表
    '/api/massEmail/pcGame/getList': {
        Type: 'GET', // 请求类型
        Request: {
            Page: 1, // 当前页码
            PageSize: 10, // 每页数据条数

            GameId: '', // 游戏 Id，空为不限   反正是游戏键值，是 Id 还是 Code 我懵逼
            Tags: '[]', // 标签
            Title: '', // 标题
            ExpiryTime: 1489889760698, // 有效时间，时间戳
            SendTime: 1489889760698, // 发送时间，时间戳
            Status: '' // 邮件状态，空-全部，1-未发送，2-已发送，3-已暂停，4-已发送，5-已过期
        },
        Response: {
            Data: {
                Count: 22,
                List: [
                    {
                        Id: 1, // Id
                        Tags: [], // 标签
                        Title: '', // 标题
                        UpdateTime: 1489890232934, // 最后操作时间，时间戳
                        UpdateAdministrator: 'liwei1468[74]', // 最后操作人
                        SendTime: 1489889760698, // 发送时间，时间戳
                        ExpiryTime: 1489889760698, // 有效时间，时间戳
                        Status: '' // 邮件状态，1-未发送，2-已发送，3-已暂停，4-已发送，5-已过期
                    }
                ]
            },
            Status: 0, // 非负数表示成功，（布尔值更好，随你咯）
            Message: 'Success'
        }
    },
    // 获取邮件详情
    '/api/massEmail/pcGame/getInfo': {
        Type: 'GET', // 请求类型
        Request: {
            Id: 1 // 邮件 Id
        },
        Response: {
            Data: {
                Id: 1, // Id
                Game: [],
                Tags: [], // 标签
                Title: '', // 标题
                Content: '', // 富文本
                Attachments: [
                    {
                        AwardContent: '',
                        StartTime: '',
                        EndTime: '',
                        IconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1736635811,2312695723&fm=11&gp=0.jpg', // 图片
                        Amount: 200 // 发放个数
                    }
                ], // 附件
                SendTime: 1489889760698, // 发送时间，时间戳
                ExpiryTime: 1489889760698, // 有效时间，时间戳
                Status: '' // 邮件状态，1-未发送，2-已发送，3-已暂停，4-已发送，5-已过期
            },
            Status: 0, // 非负数表示成功，（布尔值更好，随你咯）
            Message: 'Success'
        }
    }
};