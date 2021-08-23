import React, { useState } from "react";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";

const CreateAuthor = (props) => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling Submit");
    const newAuthorData = {
      name,
    };

    axios
      .post("http://localhost:8000/api/author", newAuthorData)
      .then((newAuthor) => console.log(newAuthor))
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response);
      });
    setName("");
  };
  return (
    <div>
      <h1>Favorite Authors</h1>
      <h3>We have quotes by:</h3>
      <AuthorForm
        errors={errors}
        setErrors={setErrors}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
      />
    </div>
  );
};

export default CreateAuthor;
