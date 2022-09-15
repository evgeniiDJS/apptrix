import React from 'react';
import { useSelector } from 'react-redux';


const TableUser = () => {
    const time = useSelector(state => state.time.items)
    console.log(time)



    return (
        <div className="mt-5">
            <h3>Timesheets</h3>
            <table className="table mt-5">
                <thead>
                    <tr>
                    <th>UserName</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            {
                                time.map((data) => 
                                    <tr>
                                        <td style={{padding:'10px 0'}}>{data.project.name}</td>
                                        <td>1 hour 10 minutes</td>
                                    </tr>
                                )
                            }
                            
                        </tr>
                </tbody>
                </table>
        </div>
    )
}

export default TableUser;