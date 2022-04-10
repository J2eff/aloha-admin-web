import React , {useEffect,useState} from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'


const UserInformation = (props) => {
    const [user, setUsers] = useState({userInfo:{}})
    const userId = props.match.params.id
    useEffect(() => {
        const fetchUserList = async () => {
            const {data} = await axios(`http://localhost:4321/users/${userId}`)
            setUsers({userInfo: data})
            console.log(data)
        }
        fetchUserList()
    },user)

    return (
            <div className="form-container">
                <Form className="signup-form">
                    id
                    <Form.Control className="name-input" readOnly={true} type="text" placeholder={user.userInfo.id} name="name"></Form.Control>
                    회원가입 계정
                    <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.email} name="email" ></Form.Control>
                    nickname
                    <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.nickname} name="email" ></Form.Control>
                    os
                    <Form.Control className="os" readOnly={true} type="text" placeholder="os" name="os" ></Form.Control>
                    일정등록건수
                    <Form.Control className="os" readOnly={true} type="text" placeholder={user.userInfo.schedule_count} name="schedule_count" ></Form.Control>
                    매칭건수
                    <Form.Control className="" readOnly={true} type="text" placeholder="os" name="os" ></Form.Control>
                    깐부
                    <Form.Control className="friend_count" readOnly={true} type="text" placeholder="friend_count" name="friend_count" ></Form.Control>
                    가입일시
                    <Form.Control className="sign_in_date" readOnly={true} type="text" placeholder="sign_in_date" name="sign_in_date" ></Form.Control>
                    접속일시
                    <Form.Control className="login_date" readOnly={true} type="text" placeholder="login_date" name="login_date" ></Form.Control>

                    <div>
                        nickname
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.nickname} name="email" ></Form.Control>
                        성별
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.gender} name="email" ></Form.Control>
                        휴대폰 번호
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.phone} name="email" ></Form.Control>
                        연령
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.age} name="age" ></Form.Control>
                        백신접종여부
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.corona} name="age" ></Form.Control>
                        차량보유여부
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.car} name="age" ></Form.Control>
                        상태
                        <Form.Control className="email-input" readOnly={true} type="text" placeholder={user.userInfo.is_block} name="age" ></Form.Control>

                    </div>
                    <Button className="edit" value="edit" type="submit">Edit</Button>
                </Form>
            </div>
    )

}

export default UserInformation
