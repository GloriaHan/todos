import React, { Component } from 'react';
import './index.css'
export default class Item extends Component {

    constructor(props){
        super(props)
        this.state = {mouseIsEnter:false}
        this.handleMouse=this.handleMouse.bind(this)
    }

    handleMouse = ()=>{
        const{mouseIsEnter} = this.state
        this.setState({mouseIsEnter:!mouseIsEnter})
        }

    handleDelete = (id)=>{
     return () =>{
       if (window.confirm('confirm to delete?')) {
        this.props.deleteTodo(id)}
     }
    }
    

     handleCheck = (id)=>{
         return (event) =>{
             this.props.updateTodo(id,event.target.checked)
         }
       
     }

    

    render() {
        const{id,name,done} = this.props
        const{mouseIsEnter} = this.state
        return (
            <div>
                <li 
                onMouseEnter={this.handleMouse} 
                onMouseLeave={this.handleMouse}
                className = {mouseIsEnter ? 'active' : ''}> 
                    <label>
                        <input type="checkbox" checked={done} 
                        onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" 
                    style={{ display: mouseIsEnter ? 'block' : 'none' }}
                    onClick = {this.handleDelete(id)}
                    >delete</button>
                   
                </li>

            </div>
        )
   }}