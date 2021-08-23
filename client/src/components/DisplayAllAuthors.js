import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const DisplayAllAuthors = (props) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((allAuthors) => {
        setAuthors(allAuthors.data);
        console.log(allAuthors);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Favorite Authors</h1>
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
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            ))
          : null}
      </table>
    </div>
  );
};

export default DisplayAllAuthors;
