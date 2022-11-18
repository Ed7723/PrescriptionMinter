import React, { Component } from 'react'
import "./index.css"

class Inputform extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div className ="max-w-2xl mx-auto bg-white p-16">
                    <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                </div>
            </form>
        )
    }
}

export default Inputform