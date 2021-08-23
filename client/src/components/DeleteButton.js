import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  // const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
  const { id, onDeleteFunctionProp } = props;
  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/author/${id}`)
      .then((response) => {
        console.log("Author Deleted");
        onDeleteFunctionProp();
      })
      .catch((err) => console.log("Error Deleting Author", err));
  };
  return (
    <>
      <button onClick={deleteHandler}>DELETE</button>
    </>
  );
};

export default DeleteButton;
