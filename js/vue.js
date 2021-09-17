var app2 = new Vue({
    el: '#vue_app',
    created: function () {
        console.log(this.todo_list);
    },
    data: function () {
        return {
            todo_title: '',
            todo_list: [
                {
                    checked: false,
                    title: 'test1'
                },
                {
                    checked: false,
                    title: 'test2'
                },
                {
                    checked: false,
                    title: 'test3'
                },
                {
                    checked: false,
                    title: 'test4'
                },
            ]
        }
    },
    methods: {
        show_todo_title_value: function () {
            console.log(this.todo_title);
        },
        add_new_data: function() {
            let data = {
                checked: false,
                title: this.todo_title
            }
            this.todo_list.push(data);
            this.todo_title = '';
        }
    }
  })