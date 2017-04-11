var express =require('express');
var schedule=require('node-schedule');
var app=express();

var newDate = new Date();
   newDate = newDate.setMinutes(newDate.getMinutes() + 1);
schedule.scheduleJob(newDate, function(){
  console.log('The world is going');
});

app.listen(8000);
