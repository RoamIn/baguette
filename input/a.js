/**
 * Created by ivill on 2017/3/19.
 */

module.exports = {
    // get list
    '/api/emailLog/SendStatus/getList': {
        Type: 'GET', // Request type
        Request: { // Request Query Parameters
            PageNum: 1,
            PageLen: 10
        },
        Response: {
            Data: {
                TotalNum: 22,
                List: [
                    {
                        Id: '',
                        Name: 'Jhon'
                    }
                ]
            },
            Status: true, // true-success, false-failure
            Message: 'Success'
        }
    }
};
