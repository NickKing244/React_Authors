import React from "react";
import { navigate } from "@reach/router";

const AuthorForm = (props) => {
  const { errors, name, setName, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <button onClick={() => navigate("/")}>Cancel</button>
        <input type="submit" value="Submit" />
      </form>
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </div>
  );
};

export default AuthorForm;
