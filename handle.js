module.exports =  (data) => {
    const result = [];

    data.forEach((apiObj) => {
        let item = {};

        item.api = apiObj.properties[0].key.value;


        switch (type) {
            case 'ObjectExpression':
                handleObjectExpression();
                break;
            case 'ArrayExpression':
                handleArrayExpression();
                break;
            default:
                break;
        }

    });
};