import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTime } from '../api/apiTimesheets';
import { Link } from 'react-router-dom';

const Timesheets = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.time.items)

    useEffect(() => {
        dispatch(getTime())
    }, [])

    
    return (
        <div className="mt-5">
            <h3>Timesheets</h3>
            <table className="table mt-5">
                <thead>
                    <tr>
                    <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            {
                                time.map((data) => 
                                    <tr>
                                        <td style={{padding:'10px 0'}}>{data.summary}
                                            <Link to='/table'>
                                                <button className="btn btn-info"style={{float:'right'}}>Timesheets</button>
                                            </Link>
                                         </td>
                                    </tr>
                                )
                            }
                            
                        </tr>
                </tbody>
                </table>
        </div>
    )
}

export default Timesheets;