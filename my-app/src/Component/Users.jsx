import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../api/apiUsers';
import ShowUser from './users/ShowUser';

const Users = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.items);

    useEffect(() => {
        try {
            dispatch(getUser())
        } catch(e) {
            console.error(e)
        }
    }, []);



    return (
        <div className="mt-5">
            <h3>Table users</h3>
           <div>
                {
                    [user].map(data => 
                        <ShowUser data={data} />)
                }
           </div>
        </div>
    )
}

export default Users;