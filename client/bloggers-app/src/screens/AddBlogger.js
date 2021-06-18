import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddBlogger() {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter a name "></Form.Control>
        <Form.Control placeholder="enter a position "></Form.Control>
        <Form.Control placeholder="enter a email "></Form.Control>
        <Form.Control placeholder="enter a dob "></Form.Control>
        <Form.Control placeholder="enter a city "></Form.Control>
        <Button type="submit" className="btn btn-warning">SAVE</Button>
      </Form>
    </Container>
  );
}

export default AddBlogger;
