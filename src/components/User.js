import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Users = () => {
    const [user, setUser] = useState({
        email: "",
        password1: "",
        password2: "",
        show: true,
    })

    function handleChange(e) {
        let user1 = { ...user, [e.target.name]: e.target.value }
        setUser(user1)
    }
    let info;
    if (user.show) {
        info = (
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="password1"
                        type="password"
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="password2"
                        type="password"
                        placeholder="Confirm password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <Button variant="success" type="submit">
                    Log out
                </Button>
            </Form>
        )
    } else {
        info = (
            <div>
                {user.email}
                <button onClick={() => logout()}>Logout</button>
            </div>
        )
    }
    function handleLogIn(e) {
        e.preventDefault();
        if (user.password1 === user.password2) {
            let user1 = { ...user, show: false }
            setUser(user1)
        }
    }
    function logout() {
        let user1 = { email: "", password1: "", password2: "", show: true }
        setUser(user1)
    }
    return (
        <div>
            {info}
        </div>
    );
};

export default Users;

