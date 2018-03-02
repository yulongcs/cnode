import axios from 'axios';

const instance = axios.create({
    baseURL: `https://cnodejs.org/api/v1`,
    timeout: 1000 * 10,
});

const common = (method, url, para) => {
    return new Promise((resolve, reject) => {
        instance[method](url, para).then(res => {
            if (res.success) {
                resolve(res);
            } else {
                reject(res);
            }
        }).catch(err => {
            reject({
                success:false
            });
        })
    });
};

const get = (url, para) => common(`get`, url, para);

const post = (url, para) => common(`post`, url, para);

export default {
    get,
    post
};