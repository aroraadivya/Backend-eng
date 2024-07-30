//const EventEmitter=require("events");
import { EventEmitter } from 'node:events';
const event=new EventEmitter();

event.on("invokeEve",()=>{
    console.log("this is going to be triggered");
});

event.on("invokeEve",()=>{
    console.log("another time going to be triggered");
});

event.on("invokeEve",()=>{
    console.log(" going to be triggered");
});
event.emit("invokeEve");

/*event.on("checkpage",(status,info)=>{
    console.log(`status code is ${status} & info is ${info}`);
});

event.emit("checkpage",200,"ok");*/

