import React from 'react'
import axios from 'axios'
//import {Link} from 'react-router-dom'


class Admin extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            
    }
}
handleSubmit = (e) => {
    e.preventDefault() 
    
    const id=this.props.match.params.id
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
        .then((response)=>{
            const list=response.data
           this.setState({list})
        })
         
        .catch((err)=>{
            console.log(err)
        })
        
    } 

     


render(){
    return(
        <div>
             <button onClick={() => {
                                    this.handleClick()
                                    }}> Front-End Developer </button> 
            <input type="button" value="Node.js Developer"/>
            <input type="button" value="MEAN Stack Developer"/>
            <input type="button" value="FULL Stack Developer"/>
        </div>
    )
}
}
export default Admin