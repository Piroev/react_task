import React from "react";
import users from "./users.json";

function UsersList(){
    return (
        <div className="Users">
            <ul>
                {users.map( (user) => {

                    return <li className="usersList" key = {user.id}><span className="infoLable">Name:</span><span className = "userInfo">{user.first_name}</span>
                                                                     <span className="infoLable">Surname:</span><span className = "userInfo">{user.last_name}</span>
                                                                     <span className="infoLable">E-mail:</span><span className = "userInfo">{user.email}</span>
                                                                     <span className="infoLable">Gender:</span><span className = "userInfo">{user.gender}</span>
                                                                     <span className="infoLable">City:</span><span className = "userInfo">{user.city}</span>
                                                                     <span className="infoLable">Country:</span><span className = "userInfo">{user.country}</span>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default UsersList;