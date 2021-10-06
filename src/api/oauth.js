import { post  } from 'axios';

const clientId = '501175d01d75424692331abafd6160bd';
const clientSecret = 'pQEiokXQx8Tq2JS79arMgQsrN1WZnTKq';
const region = 'eu';
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken () {
    const body = new FormData();
    body.append('grant_type', 'client_credentials');
    const config = {
        header: {
            'Content-Type' : 'multipart/form-data',
        },
        auth: {
            username: clientId,
            password: clientSecret,
        }
    }

    return post(API_URL, body, config);
}
export {
    getToken
}