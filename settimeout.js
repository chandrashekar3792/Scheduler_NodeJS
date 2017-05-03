// timeout_vs_immediate.js
setTimeout(function timeout () {
  console.log('timeout');
},300);

setImmediate(function immediate () {
  console.log('immediate');
});
