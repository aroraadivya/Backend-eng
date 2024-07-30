//const EventEmitter=require("events");
import { EventEmitter } from 'node:events';
const event=new EventEmitter();

var listener1=function listener1(){
    console.log('listener1 executed');
}
var listener2=function listener1(){
    console.log('listener2 executed');
}
//bind the neweve event with the listener1 function
event.addListener('neweve',listener1);
//bind the neweve event with the listener1 function
event.on('neweve',listener2);

//fire the neweve event
event.emit('neweve');

//remove the binding of listener1 function
event.removeListener('neweve',listener1);
console.log("listener1 will not listen now");

//fire the neweve event
event.emit('neweve');




/*event.on("invokeEve",()=>{
    console.log("this is going to be triggered");
});

event.on("invokeEve",()=>{
    console.log("another time going to be triggered");
});

event.on("invokeEve",()=>{
    console.log(" going to be triggered");
});
event.emit("invokeEve");*/

/*event.on("checkpage",(status,info)=>{
    console.log(`status code is ${status} & info is ${info}`);
});

event.emit("checkpage",200,"ok");*/