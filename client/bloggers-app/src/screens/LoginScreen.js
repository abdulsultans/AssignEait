import { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { Button, Form } from "react-bootstrap";

const LoginScreen = () => {
  const { LoginUser } = useContext(UsersContext);
  const [email, setEmail] = useState();
  const [passwowrd, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const loginuser = {
      email,
      passwowrd,
    };
    LoginUser(loginuser);
  }
  return (
    <div
      style={{
        height: "75vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
          gridGap: "20px",
          padding: "20px",
          border: "1px solid green",
        }}
      >
        <Form.Control
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="enter password"
          value={passwowrd}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button className="btn btn-success" type="submit">
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
