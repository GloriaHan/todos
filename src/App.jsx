import React, { Component } from 'react'
import './index.css'
import Footer from './components/Footer'
import Header from'./components/Header'
import List from './components/List'

export default class App extends Component {
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:false},
            {id:'003',name:'学习',done:true},
        ]}
  
    addTodo = (todoObj)=>{
        const{todos} = this.state
        this.setState({todos:[todoObj,...todos]})
    }

    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj, index)=>{
        return todoObj.id !==id
        })
      this.setState({todos:newTodos})
    }
    
    updateTodo = (id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id === id){
                todoObj.done = done
            }
            return todoObj
        })
        this.setState({todos:newTodos})
    }

    checkAllChange = (done)=>{
        const{todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            todoObj.done = done
            return todoObj
        })
        this.setState({todos:newTodos})
    }

    clearDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
        return !todoObj.done
        })
      this.setState({todos:newTodos})
    }

  render() {
    return (
        <div id="root">
        <div className="todo-container">
        <div className="todo-wrap">
        <Header addTodo ={this.addTodo}/>
        <List todos={this.state.todos} 
        deleteTodo = {this.deleteTodo} 
        updateTodo= {this.updateTodo} />
        <Footer todos={this.state.todos} checkAllChange={this.checkAllChange} clearDone={this.clearDone}/>
        </div>
        </div>
        </div>
    )
  }
}
