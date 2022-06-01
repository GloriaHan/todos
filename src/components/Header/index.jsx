import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Header extends Component {
  handleKeyUp = (event)=>{
    const {value} = event.target
   if(event.keyCode !== 13) return
   if(value.trim()==='') return alert('The input content cannot be empty')
   const todoObj = {id:uuidv4(),name:value,done:false}
   this.props.addTodo(todoObj)
   event.target.value=''
  }

  render() {
    return (
      <div className='todo-header'>
        <input type='text' onKeyUp={this.handleKeyUp} placeholder="enter your item's name please, press 'enter' to confirm"/>
      </div>
    )
  }
}
