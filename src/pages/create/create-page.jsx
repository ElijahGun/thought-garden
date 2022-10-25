import "./create-page.scss";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { postData } = useFetch("http://localhost:3000/thoughts", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, text });
  };

  return (
    <div className="thought-box">
      <form className="thought-form" onSubmit={handleSubmit}>
        <h2 className="thought-form__title">New Thought</h2>
        <input
          required
          className="thought-form__input"
          placeholder="Thought Title"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="title">Thought Title</label>
        <textarea
          required
          className="thought-form__textarea"
          type="text-area"
          name="text"
          id="text"
          placeholder="Your Thought Here"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <label htmlFor="text">Thought Text</label>
        <button type="submit" className="btn thought-form__btn">
          Submit Thought
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
