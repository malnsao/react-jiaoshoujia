const fs = require('fs');
const delay = require('mocker-api/utils/delay');
function fromJSONFile(filename) {
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();
        const json = JSON.parse(data);
        return res.json(json);
    };
}
const proxy = {
    'GET /api/profile': fromJSONFile('profile'),
    'POST /api/profile1': (req, res) => {
        res.send({
            status: true,
            ifLogin: true,
            content: {
                uid: 101,
                url: 'test.png'
            }
        })
    },
    'GET /private/getUserCount': (req, res) => {
        res.send({
            status: true,
            ifLogin: true,
            content: {
                uid: 101,
                url: 'test.png'
            }
        })
    }
}
module.exports = delay(proxy, 1000);


