import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";

const Main = (props) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    console.log("rerender");
    axios
      .get("http://localhost:8000/api/author")
      .then((allAuthors) => {
        setAuthors(allAuthors.data);
        console.log(allAuthors);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to={"/new"}>Add an author</Link>
      <h3>We have quotes by:</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="table">Authors</th>
            <th className="table">Actions Available</th>
          </tr>
        </thead>
        {authors.length > 0
          ? authors.map((author, index) => (
              <tbody key={index}>
                <tr>
                  <td className="table">{author.name}</td>
                  <td className="table">
                    <button onClick={() => navigate(`/edit/${author._id}`)}>
                      Edit
                    </button>
                    <DeleteButton
                      id={author._id}
                      onDeleteFunctionProp={() => handleDelete(author._id)}
                    />
                  </td>
                </tr>
              </tbody>
            ))
          : null}
      </table>
    </div>
  );
};

export default Main;
