
import request from './request';

export async function getSetting(){
    const resp = await request.get('/api/setting');
    return resp;
}