import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3305/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container_two">
      <div className="form">
        <h2>hello Add Books</h2>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="description"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="price"
        />
        <input
          type="url"
          name="cover"
          onChange={handleChange}
          placeholder="cover"
        />
        <button onClick={handleClick} className="formButton">
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
