import React ,{Component} from 'react';
export default class Todolist extends Component{
    render() {
        const{title,handleDelete,handleEdit}=this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>

                <div className="todo-icon">

                    <span className="mx-2 text-success">
                    <button className="button" onClick={handleEdit}>edit</button>
                    </span>

                    <span className="mx-2 text-danger">
                    <button className="button" onClick={handleDelete}>delete</button>
                    </span>


                </div>
            </li>
        );
    }
}