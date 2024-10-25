const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let todos = [];

app.get('./todos',(req,res)=>{
    res.status(200).send(todos);
})

app.get('./todos/:id',(req,res)=>{
    const todo = todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo){
        res.status(404).send("No todo!!");
    }
    else{
        res.status(200).json(todo);
    }
})

app.post('./todos',(req,res)=>{
    let newtodo = {
        id : Math.floor(Math.random()*1000),
        title : req.body.title,
        description : req.body.description
    };
    todos.push(newtodo);
    res.status(201).json(newTodo);
})

app.put('./todos/:id',(req,res)=>{
    const todobeindex = todos.find(t=> t.id === parseInt(req.params.id));
    if(todobeindex === -1){
        res.status(404).send("No Todo !!");
    }
    else{
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        res.json(todos[todobeindex]);
    }
    
    
})

app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
      }
      else{
        todos.splice(todoIndex,1);
        res.status(200).send();
      }

})    


app.all('*',(req,res)=>{
    res.status(404).send();
})

app.listen(3000);
