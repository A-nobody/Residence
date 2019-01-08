let list = {};
const $on = (eventName,fn)=>{
    if(!list[eventName]){
        list[eventName]=[];
    }
    list[eventName].push(fn)
}
const $emit = (eventName,data)=>{
    if(list[eventName]){
        list[eventName].map((fn)=>{
            fn(data)
        })
    }
}
const $off = (eventName,fn)=>{
    if(list[eventName]){
        if(fn){
            list[eventName] = list[eventName].filter((fn1)=>{
                return fn1!=fn
            })
        }else{
            list[eventName].length=0
        }
    }
}
export default{
    $on,
    $emit,
    $off
}

/*
    $on:事件绑定
        $on(事件名称,回调函数)

        1个事件名称上面可能会绑定多个函数

        思路:
            如果不存在则创建一个数组，然后在将当前函数push到数组中去
            首先判断当前事件名称是否存在,如果事件名称存在则直接将当前函数push到当前数组中去




    $emit:事件触发
        $emit(事件名称,params)


        触发事件的时候需要触发当前事件身上所以的函数

        思路:
            如果存在的情况下,获取到当前事件名称所对应的所有函数，遍历执行

            如果第二次参数存在的情况下，调用函数的时候将第二个参数传递进去






    $off:事件解绑
        $off(事件名称,需要解绑的函数)

        如果没有传递第二个参数则解绑所以事件
        如果传递了第二个参数则解绑指定函数

        思路:
            如果事件名称存在，则判断第二值是否存在，如果存在则将这个函数从数组中移除，如果不存在直接将数组清空


*/

// $on("lh",fn)
// $on("lh",fn1)
// function fn(val){
//     console.log(111,val)
// }
// function fn1(val){
//     console.log(222,val)
// }
// $off('lh')
// $emit("lh",'qwer')


