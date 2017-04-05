## What's included

```
baguette/
├── input/
│   ├── a.api.js
│   ├── b.api.js
│   └── c.api.js
├── output/
│   ├── mock
│   │   ├── a.mock.js
│   │   ├── b.mock.js
│   │   └── c.mock.js
│   └── doc.html
└── gulpfile.js
```

## Steps

- **Clean**

Clear all old files.
```
gulp.task('clean', () => {
    del([
        'output/*'
    ]);
});
```

- **Output mock file**

    - Import all file
    - Output mock file
    
    For example:
    ```
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
    ```
  