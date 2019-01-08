<<<<<<< HEAD



let EventList = {
   //key:[]
}


const $on = (EventName,cb)=>{

    if(!(EventList[EventName])){

        EventList[EventName] = [];
    }
    EventList[EventName].push(cb);
}


const $emit = (EeventName,params)=>{
    if(!EventList[EeventName])return;

    let EventLists = EventList[EeventName];
    EventLists.map((cb)=>{
        params?cb(params):cb();
    })
}

const $off = (EventName,callback)=>{
   if(EventList[EventName]){
       let EventListsOff = EventList[EventName];
       if(callback){
            EventList[EventName] =  EventListsOff.filter((cb)=>{
                return cb != callback;
            })
       }else{
            EventList[EventName].length = 0;
       }
   }
}


export default {
    $on,
    $emit,
    $off
}
=======
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
>>>>>>> heng
