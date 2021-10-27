import {locales} from "../utils/regions";
import store from "../store";
import axios from "axios";

const protocol = 'https://';
const host = '.api.blizzard.com/';

function getApiAccount ({region, account}) {
    const resource = `d3/profile/${account}/`;
    const API_URL = `${protocol}${region}${host}${resource}`;
    const locale = locales[region];

    const params = {
        access_token: store.state.oauth.accessToken,
        locale,
    };

    return axios.get(API_URL,{ params });
}

function getApiHero ({region, account, heroId}) {
    const resource = `d3/profile/${account}/hero/${heroId}`;
    const API_URL = `${protocol}${region}${host}${resource}`;
    const locale = locales[region];

    const params = {
        'access_token' : store.state.oauth.accessToken,
        locale,
    }

    return axios.get(API_URL, { params });
}

function getApiDetailHeroItems ({ region, account, heroId }) {
    const resource = `d3/profile/${account}/hero/${heroId}/items`;
    const API_URL = `${protocol}${region}${host}${resource}`;
    const locale = locales[region];

    const params = {
        'access_token' : store.state.oauth.accessToken,
        locale,
    }

    return axios.get(API_URL, { params });
}

export {
    getApiAccount,
    getApiHero,
    getApiDetailHeroItems
}