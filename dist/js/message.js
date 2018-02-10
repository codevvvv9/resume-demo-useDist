'use strict';

!function () {
    var view = View('section.message');

    var model = Model({ resourceName: 'Message' }); //就是表名是Message

    var controller = Controller({
        messagesList: null,
        form: null,
        init: function init(view, controller) {
            this.messagesList = view.querySelector('#messagesList');
            this.form = view.querySelector('form');
            this.loadMessages();
        },
        loadMessages: function loadMessages() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                var array = messages.map(function (item) {
                    return item.attributes;
                });
                array.forEach(function (item) {
                    var li = document.createElement('li');
                    li.innerText = item.name + ': ' + item.content;
                    _this.messagesList.appendChild(li);
                });
            }, function (error) {
                alert('提交失败， 请改天来留言');
            }).then(function () {}, function (error) {
                console.log(error);
            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            console.log(this.form);
            this.form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this2.saveMessage();
            });
        },
        saveMessage: function saveMessage() {
            var myForm = this.form;
            var name = myForm.querySelector('input[name=name]').value;
            var content = myForm.querySelector('input[name=content]').value;
            this.model.save({
                'name': name,
                'content': content
            }).then(function (object) {
                var li = document.createElement('li');
                li.innerText = object.attributes.name + ': ' + object.attributes.content;
                var messagesList = document.querySelector('#messagesList');
                messagesList.appendChild(li);
                myForm.querySelector('input[name=name]').value = '';
                myForm.querySelector('input[name=content]').value = '';
                console.log(object);
            });
        }
    });

    controller.init(view, model);
}.call();