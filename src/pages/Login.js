import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";
import { Form, Button } from "react-bootstrap";

// export default function Login() {
//   const responseFacebook = (response) => {
//     console.log(response);
//   };
//   return (
//     <div>
//       <FacebookLogin
//         appId="656968314900863"
//         fields="name,email,picture"
//         callback={responseFacebook}
//       />
//     </div>
//   );
// }

export default function Login({ setLoginUser }) {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  console.log("part1");
  const loginWithEmail = async () => {
    const data = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    console.log("part2");

    console.log("part3");

    const loginUser = await data.json();

    const user = loginUser.data.user.name;

    const token = loginUser.data.token;

    setLoginUser(token, user);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => loginWithEmail(email, password)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
