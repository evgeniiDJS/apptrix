import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../api/apiTask';



const Task = () => {
     const dispatch = useDispatch();
     const task = useSelector(state => state.task.items);
     let textInput= 'project';
     useEffect(() => {
         
         dispatch(getTask(textInput))
     }, [])

    console.log(task)
     
     

     const onFindProject = (e) => {
        
     }
    return (
        <div className="mt-5">
            <h3>Search task</h3>
            <form className="navbar-form" role="search">
                <div className="input-group" style={{width: '380px'}}>
                    <input onChange={onFindProject} type="text" autocomplete="on" className="form-control" placeholder="Search" name="search" id="search-input" />
                    <span className="input-group-btn">
                        <button className="btn" id="srchbtn" type="btn-default" >
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
            </form>
            <table className="table mt-5">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Summary</th>
                    <th>Project</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            task.map(data => 
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.summary}</td>
                                    <td>{data.project.name}</td>
                                </tr> )
                        }
                </tbody>
                </table>
        </div>
    )
}

export default Task;