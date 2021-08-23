import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";

const EditAuthor = (props) => {
  const { authorId } = props;
  const [name, setName] = useState("");
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/author/${authorId}`, {
        name,
      })
      .then((updatedAuthor) => {
        console.log(updatedAuthor);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <h3>Edit This Author</h3>
      <AuthorForm
        handleSubmit={handleUpdateSubmit}
        setName={setName}
        name={name}
      />
    </div>
  );
};

export default EditAuthor;
