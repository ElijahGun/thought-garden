import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import "./create-page.scss";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false)

  const { postData } = useFetch("http://localhost:3000/thoughts", "POST");
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault();
    postData({ title, text });
    setSent(true)
    setTitle("");
    setText("");
  };

  useEffect(()=> {
    if (sent) navigate('/')

  },[sent, navigate])

  return (
    <div className="thought-box">
      <form className="thought-form" onSubmit={handleSubmit}>
        <h2 className="thought-form__title">Plant A New Thought In Your Garden...</h2>
        <input
          name="title"
          required
          placeholder="Thought Title Here.."
          id="title"
          className="thought-form__input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="title">Thought Title:</label>
        <textarea
          name="text"
          required
          placeholder="Thought Title Here.."
          id="text"
          className="thought-form__text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="thought-form__btn">Submit Your Thought</button>
      </form>
    </div>
  );
};

export default CreatePage;
