import {
    stringify
} from 'qs';
import request from '@/util/request';

export async function profile(params) {
    return request(`/api/profile?${stringify(params)}`);
}

export async function profile1(params) {
    return request(`/api/profile1`, {
        method: 'POST',
        body: params
    });
}