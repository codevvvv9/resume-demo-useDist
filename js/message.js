var APP_ID = 'Ab4oz3wKJtsVx6Kl2hFRLMSC-gzGzoHsz';
var APP_KEY = 'itr83SzDAu6ccBwvfnkoSJoO';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('运行到这里没有错')

// //创建 TestObject表
// var TestObject = AV.Object.extend('Wushao');
// //在表中创建一行数据
// var testObject = new TestObject();
// //在表中写入words: Hello World 并保存
// //保存成功后弹出对话框
// testObject.save({
//   words: '第二次!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })