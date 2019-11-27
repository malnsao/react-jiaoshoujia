export default function request(url, options) {
    const defaultOptions = {
        credentials: 'include',
    };
    const newOptions = { ...defaultOptions, ...options };
    newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // authorization: 'authorization-text',
        // 'x-csrf-token': getCookie('csrfToken'),
        ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
    return fetch(url, newOptions)
        .then((response) =>  response.json())
        .then((data) => data)
        .catch(() =>  response.text())
}
