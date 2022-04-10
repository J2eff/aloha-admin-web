import React , {useEffect,useState} from 'react'
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap'
import {Link} from "react-router-dom";


const UserList = () => {
    const [users, setUsers] = useState({userList:[]})

    useEffect(() => {
        const fetchUserList = async () => {
            const {data} = await axios("http://localhost:4321/users")
            setUsers({userList: data})
        }
        fetchUserList()
    },[setUsers])

    return(
        <div>
            <Link to="/test">
                <ReactBootstrap.Button>Test</ReactBootstrap.Button>
            </Link>
            <ReactBootstrap.Table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nicname</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    users.userList && users.userList.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nickname}</td>
                        <td>
                            <Link to={`/users/${item.id}`}>
                                <ReactBootstrap.Button>Edit</ReactBootstrap.Button>
                            </Link>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </ReactBootstrap.Table>

        </div>
    )
}

export default UserList
