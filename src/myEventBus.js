
const listeners = {}; 
// 里面的每一项是一个数组
// listeners = {
//     "event1": [handler1, handler2],
//     "event2": [handler1, handler2],
// }

// 事件总线
export default {
    // 监听某个事件
    $on(eventName, handler){
        if(!listeners[eventName]){
            listeners[eventName] = new Set();
        }
        listeners[eventName].add(handler);
    },
    // 取消监听
    $off(eventName, handler){
        if(!listeners[eventName]){
            return;
        }
        listeners[eventName].delete(handler);
    },
    // 触发事件
    $emit(eventName, ...args){
        if(!listeners[eventName]){
            return;
        }
        for(const handler of listeners[eventName]){
            handler(...args);
        }
    }
}