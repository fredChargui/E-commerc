import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [postname, setPostname] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/api/posts/create", {
        postname: postname,
        image: image,
        price: price,
        users_idusers:"1"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Post Name:
          <input
            type="text"
            value={postname}
            onChange={(event) => setPostname(event.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddPost;
