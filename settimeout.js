// timeout_vs_immediate.js

//Runs after 300 ms
setTimeout(function timeout () {
  console.log('timeout');
},300);

//Runs immediately
setImmediate(function immediate () {
  console.log('immediate');
});
