import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {

    checkAllChange = (event)=>{
    this.props.checkAllChange(event.target.checked)
    }
 
    clearDone = (event)=>{    
    if (window.confirm('confirm to delete the items?')) {
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
                    <span>Done items ({todosDone})</span> / All items ({todos.length})
                </span>
                <button className="btn btn-danger" onClick={this.clearDone} >clear finished items</button>
            </div>
        );
    }
}