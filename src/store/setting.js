
import { getSetting } from '@/api/setting'
import { titleController } from '@/utils'
export default {
    namespaced: true,

    state: {
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit('setLoading', true);
            const res = await getSetting();
            ctx.commit('setData', res);
            ctx.commit('setLoading', false);

            // 设置网站icon
            // <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"></link>
            if(res.favicon){
                let link = document.querySelector(`link[rel="icon"]`) || document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "image/x-icon";
                link.href = res.favicon;
                document.querySelector("head").appendChild(link);
            }
            // 设置网站标题
            if(res.siteTitle){
                titleController.setSiteTitle(res.siteTitle);
            }
        }
    }
}