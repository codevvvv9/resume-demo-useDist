var APP_ID = 'Ab4oz3wKJtsVx6Kl2hFRLMSC-gzGzoHsz';
var APP_KEY = 'itr83SzDAu6ccBwvfnkoSJoO';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
    .then(
        function (messages) {
            let array = messages.map(function (item) {
                return item.attributes
            })
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messagesList = document.querySelector('#messagesList')
                messagesList.appendChild(li)
            })
        },
        function (error) {
            alert('提交失败， 请改天来留言')
        })
    .then(() => {}, (error) => {
        console.log(error)
    });
let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messagesList = document.querySelector('#messagesList')
        messagesList.appendChild(li)
        myForm.querySelector('input[name=name]').value = ''
        myForm.querySelector('input[name=content]').value = ''
        console.log(object);
    })

})

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