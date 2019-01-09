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
