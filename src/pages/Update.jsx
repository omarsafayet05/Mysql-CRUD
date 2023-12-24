import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import Switch from "react-switch";

// const Update = (props) => {
const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  console.log(bookId);
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
      await axios.put("http://localhost:3305/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(props);
  return (
    <div className="container_two">
      <div className="switch">
        {/* <Switch
          onChange={props.toggleTheme}
          checked={props.theme === "light"}
        /> */}
      </div>
      <div className="form">
        <h2> Update the Book</h2>
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
          type="text"
          name="cover"
          onChange={handleChange}
          placeholder="cover"
        />
        <button onClick={handleClick} className="formButton">
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
