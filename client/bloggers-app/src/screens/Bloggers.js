import React, { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { BloggersContext } from "../contexts/BloggersContext";
import { FiEdit, FiEye, FiDelete } from "react-icons/fi";

function Bloggers() {
  const { loading, bloggers, getBloggers } = useContext(BloggersContext);
  useEffect(() => {
    getBloggers();
  }, [getBloggers]);
  return (
    <section>
      {loading && <Spinner animation="grow" />}
      {bloggers.length > 0 ? (
        <Table className="table-striped table-hover ">
          <thead>
            <tr>
              <th>NAME</th>
              <th>POSITION</th>
              <th>EMAIL</th>
              <th>DOB</th>
              <th>CITY</th>
              <th>EDIT</th>
            </tr>
          </thead>
          {bloggers.map((blogger) => (
            <tr>
              <td>{blogger.name}</td>
              <td>{blogger.position}</td>
              <td>{blogger.email}</td>
              <td>{blogger.dob}</td>
              <td>
                <FiDelete /> <FiEdit /> <FiEye />
              </td>
            </tr>
          ))}
        </Table>
      ) : (
        !loading && <h1>NO RECORD </h1>
      )}
    </section>
  );
}

export default Bloggers;
