
import request from './request';


export async function getBanners(){
    const resp = await request.get('/api/banner');
    // console.log('111', resp);
    return resp;
}