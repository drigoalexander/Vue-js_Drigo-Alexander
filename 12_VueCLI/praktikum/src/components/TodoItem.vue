<template>
<div>
<ul>
            <li type="1" v-for="list in todo" :key="list">{{ list }} </li>
        </ul>
        <input type="text" v-model="value">
        <button v-on:click="addTodo">add</button>
        <p v-if="todo.length >= 4">Hebat!</p>
</div>
        
       
</template>

    <script>
    export default{
    name: 'TodoItem',
    data() {
            return {
              todo: [],
              value: ""
            }
          },
          methods: {
              addTodo: function(){
                  if(this.value === '' || this.value === null) alert("Fill the box")
                  else{
                    this.todo.push(this.value)
                    this.value = ""       
                  }
              }
          }
    }
      </script>
 
    <style scoped>


    input:focus{
    outline: none !important;
        border:solid #41B883;
        transition: border 1s;
        }
    button{
    background-color: #41B883;
    border: none;
    width: auto;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 10px;}

    button:hover{
    background-color: #34495E;
    color: white;
   }
    </style>
    