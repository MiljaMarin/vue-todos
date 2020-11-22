<template>
    <div>
        <h3>
            Meine Todos
            <form @submit.prevent>
                <input type="text" v-model="newTodoText" required>
                <button @click="addTodo">Add Todo</button>
            </form>
        </h3>
        <ul>
            <li :key="item.id" v-for="item in todos">
                <!--input type="checkbox" v-if="item.done" checked/>
                <input type="checkbox" v-else/>
                <span v-if="item.done" class="done">{{item.text}}</span>
                <span v-else>{{item.text}}</span>
                <button class="button-del">Löschen</button-->
                <input type="checkbox" v-model="item.done" @change="updateTodo(item)">
                <span :class={done:item.done}>{{ item.text }}</span>
                <button class="del" @click="deleteTodo(item)">löschen</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
const apiURL = "http://videostore.loc/api/todos";

export default {
    name: "Todos",
    data() {
        return {
            todos: [],
            newTodoText: null,
        }
    },
    created() {
        this.getTodos()
    },
    methods: {
        updateTodo(todo) {
            axios.put(apiURL + "/" + todo.id, todo)
                .then(resp => {
                    if(resp.data.success) {
                        // aktualisiere angezeigte todos liste
                        this.todos = this.todos.map(item => item === todo ? todo : item);
                    }
                })
                .catch(err => console.error(err));
        },
        deleteTodo(todo) {
            axios.delete(apiURL + "/" + todo.id)
                .then(resp => {
                    if(resp.data.success) {
                        // aktualisiere angezeigte todos liste
                        this.todos = this.todos.filter(item => item !== todo);
                    }
                })
                .catch(err => console.error(err));
        },
        addTodo() {
            const newTodo = {
                text: this.newTodoText,
                done: false,
            };
            axios.post(apiURL, newTodo)
                .then(resp => {
                    if(resp.data.success) {
                        // aktualisiere angezeigte todos liste
                        this.todos.push(resp.data.result);
                    }
                })
                .catch(err => console.error(err));
        },
        getTodos() {
            axios.get(apiURL)
                .then(resp => {
                    if(resp.data.success) {
                        this.todos = resp.data.result;
                    }
                })
                .catch(err => console.error(err));
        },
    }
}
</script>

<style type="text/css" scoped>
h3 form button {
    background-color: #0af;
    color: #fff;
    border-radius: 3px;
    border: none;
    padding: 6px 10px;
    margin-left: 5px;
    cursor: pointer;
}
h3 form button:hover {
    background-color: #00a;
}
h3 form input {
    height: 20px;
    width: 200px;
    border: 1px solid #aaa !important;
}
ul {
    width: 50%;
    margin: auto;
    text-align: left;
}
li {
    list-style: none;
    list-style-type: none;
    margin: 15px;
}
li span {
    margin: 10px;
}
li button.del {
    float: right;
    background-color: red;
    color: #fff;
    border-radius: 3px;
    border: none;
    padding: 3px 10px;
}
li button.del:hover {
    background-color: #aaa;
    cursor: pointer;
}
.done {
    text-decoration: line-through;
    color: #0a0;
}
</style>
