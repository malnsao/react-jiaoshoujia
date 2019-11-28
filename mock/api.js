
// import profile from './data/profile.js';

// const profile = require('./data/profile.js')

// console.log(profile)


const fs = require('fs');

const delay = require('mocker-api/utils/delay');

function fromJSONFile(filename) {
    
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();
        const json = JSON.parse(data);
        return res.json(json);
    };
}

// 获取是否开启反向代理的变量
const isProxy = process.env.PROXY === 'true';

console.log(isProxy)
if (!isProxy) {

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


// module.exports = proxy;

// console.log(process.env)

// console.log(noProxy)

module.exports = delay(proxy, 1000);


