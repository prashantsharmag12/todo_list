import React ,{Component} from 'react';
import TodoItem from './TodoItem'
export default class Todolist extends Component{
    render() {
        return (
            
            <ul className="list-group my-5">
                <h3 className="text-captilize text-center">
                    to-do LList
                </h3>
                <TodoItem />
                <button type="button" className="btn btn-danger btn-block text-captilize mt-5">Clear</button>
            </ul>
            
        )
    }
}