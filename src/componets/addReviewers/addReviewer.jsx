import { useState } from "react";
import "./addReviewer.css";

const AddReviewer = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/reviews", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        setTitle("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>The input element</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title"
        />

        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddReviewer;
