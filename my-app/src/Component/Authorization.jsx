import React from 'react';
import { useDispatch } from 'react-redux';
import { getRepo } from '../api/apiAuthorization';

const Authorization = () => {
    let username;
    let password;
    const dispatch = useDispatch();
    
    const getUserName = (e) => username = e.target.value;
    const getPasswordName = (e) => password = e.target.value;
    
    const checkAuth = () => {
        if(username === 'erp_user' && password === '12qwaszx12qwaszx') {
            alert('HTTP 200 OK')
            dispatch(getRepo())
        }
        else {
            alert('detail: "No active account found with the given credentials') 
        } 
    }
    
    

    return (
            <div>
                <div id="post-object-form">
                <div className="form-horizontal">
                    <div>
                        <div className="form-group ">
                            <label className="col-sm-2 control-label ">
                                Username
                            </label>
                        <div className="col-sm-10">
                            <input onInput={getUserName} name="username" className="form-control" type="text" id="username" />
                        </div>
                        </div>
                        <div className="form-group ">
                            <label className="col-sm-2 control-label ">
                                Password
                            </label>
                        <div className="col-sm-10">
                            <input onInput={getPasswordName} name="password" className="form-control" type="text" id="password" />
                        </div>
                        </div>
                            <div className="form-actions">
                                <button onClick={()=> checkAuth() } className="btn btn-primary mt-3" >POST</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authorization;