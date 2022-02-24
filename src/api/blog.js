import request from './request';

/**
 * 获取博客列表数据
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryid   分类  -1代表全部
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    const resp = await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId,
        }
    });
    return resp;
}

/**
 * 获取博客的分类
 * @returns 
 */
export async function getBlogCategories() {
    const resp = await request.get('/api/blogtype');
    return resp;
}

/**
 * 获取单个博客文章
 * @param {*} id 文章id
 * @returns 
 */
export async function getBlog(id){
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export async function postComment(commentInfo){
    return await request.post('/api/comment', commentInfo);
}

/**
 * 分页获取评论
 * @param {*} blogid 
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
export async function getComments(blogid, page = 1, limit = 10){
    return await request.get('/api/comment', {
        params: {
            blogid,
            page, 
            limit,
        },
    });
}