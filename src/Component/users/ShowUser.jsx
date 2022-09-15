import React from 'react';

const ShowUser = (props) => {
    const data = props.data;
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Login</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{data.id}</th>
                        <td>{data.name}</td>
                        <td>{data.login}</td>
                        <td>{data.email}</td>
                    </tr>
                </tbody>
                </table>
        </div>
        
    )
}

export default ShowUser;