
import request from './request';


export async function getAbout(){
    const resp = await request.get('/api/about');
    return resp;
}