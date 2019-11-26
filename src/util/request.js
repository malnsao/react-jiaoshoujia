// export default function request(url, options) {
//     return fetch(url, options)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log('object', data)
//             return data;
//         })
//         .catch(function () {
//             return response.text();
//         })
// }

export default function request(url, options) {
    return new Promise((resolve,reject) => {
        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log('object', data)
                resolve(data);
            })
            .catch(function () {
                reject(response.text());
            })
    })
    
}
