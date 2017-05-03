// timeout_vs_immediate.js

//Runs after 300 ms
setTimeout(function timeout () {
  console.log('timeout');
},400);

setTimeout(function timeout () {
  console.log('timeout');
},0);

//Runs immediately
setImmediate(function immediate () {
  console.log('immediate');
});
