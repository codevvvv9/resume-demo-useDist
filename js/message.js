!function () {
    var view = View('section.message')
    
    var model = Model({resourceName: 'Message'}) //就是表名是Message
    
    var controller = Controller({
        messagesList: null,
        form: null,
        init: function (view, controller){
            this.messagesList = view.querySelector('#messagesList')
            this.form = view.querySelector('form')
            this.loadMessages()
        },
        loadMessages: function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => {return item.attributes})
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messagesList.appendChild(li)
                    })
                },
                function (error) {
                    alert('提交失败， 请改天来留言')
                })
                .then(() => { }, (error) => {
                    console.log(error)
                });
        },
        bindEvents: function () {
            console.log(this.form)
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.save({
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

        }
    })
    
    controller.init(view, model)
}.call()