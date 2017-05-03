// timeout_vs_immediate.js
setTimeout(function timeout () {
  console.log('timeout');
},300);

//Runs immediately
setImmediate(function immediate () {
  console.log('immediate');
});
