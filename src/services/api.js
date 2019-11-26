import request from '@/util/request';

//获取学生姓名
export async function profile(params) {
    return request(`/api/profile`);
}
