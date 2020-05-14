import React ,{Component} from 'react';
import TodoItem from './TodoItem'
export default class Todolist extends Component{
    render() {
        return (
            
            <div>
                <h1>
                    In the todolist component
                </h1>
                <TodoItem />
            </div>
        )
    }
}