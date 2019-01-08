


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
