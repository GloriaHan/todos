import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {

    checkAllChange = (event)=>{
    this.props.checkAllChange(event.target.checked)
    }
 
    clearDone = (event)=>{    
    if (window.confirm('确定删除？')) {
    this.props.clearDone(event.target.checked)
    }}


    render() {
        const{todos}=this.props
        const todosDone = todos.reduce((preValue,current)=>
        {return preValue + (current.done ? 1:0)},0)    

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" 
                    checked= {todos.length === todosDone && todos.length>0} 
                    onChange={this.checkAllChange}/>
                </label>
                
                <span>
                    <span>已完成{todosDone}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.clearDone} >清除已完成任务</button>
            </div>
        );
    }
}