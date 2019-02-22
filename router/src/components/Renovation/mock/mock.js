var Mock = require('mockjs');

let data=Mock.mock({
    "data|18":[{
        "id|+1":1,
        "title":"@ctitle(3)",
        "logo":"@image('28×28')",
        "detailstop":{
            "imgtop":"@image('750x390')",
            "text":"@cparagraph()"
        },
        "details|5":[{
            "img": "@image('458x234')",
            "title": "@ctitle",
            "headimg": "@image('28×28')",
            "specialname": "@cname",
            "expimg":"@image('750x368')",
            "exptitle": "@ctitle",
            "exptext":"@cparagraph()"
        }]
    }]
})

Mock.mock("/getrenovation","post",(config)=>{
    return data;
})