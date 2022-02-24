// 导出指令的配置对象

// export default {
//     bind(el, binding){  // 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置。
//         // el  被绑定的元素对应的真实dom
//         // binding 是一个对象，描述了指令中提供的信息

//         // 创建一个img元素，放到el元素内部
//     },
//     insert(){  // 被绑定元素插入父节点时调用

//     },
//     update(){  // 所在组件的VNode更新时调用
//         // 根据binding.value的值，决定创建或删除img元素
//     }
// }

// 配置简化
import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';

/**
 * 得到el中loading效果的img元素
 * @returns 
 */
function getLoadingImg(el) {
    return el.querySelector('img[data-role=loading]');
}

function createdLoadingImg() {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;

}

export default function (el, binding) {
    // 简化的写法，该函数会被同时设置到bind和update中

    // 根据binding.value的值，决定创建或删除img元素
    const curImg = getLoadingImg(el);

    if (binding.value) {
        if (!curImg) {
            const img = createdLoadingImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}


