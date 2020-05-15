import React ,{Component} from 'react';
import TodoItem from './TodoItem'
export default class Todolist extends Component{
    render() {
        const {items,clearList} = this.props;
        return (
            
            <ul className="list-group my-5">
                <h3 className="text-captilize text-center">
                    to-do LList
                </h3>
                { 
                 items.map (item =>{
                    return (
                    <TodoItem key={item.id} title={item.title} />)
                })}
                <button type="button" onClick={clearList} className="btn btn-danger btn-block text-captilize mt-5">
                    Clear
                    </button>
            </ul>
            
        )
    }
}