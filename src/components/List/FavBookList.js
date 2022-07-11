import { useState } from "react";
import FavBook from "./FavBook";
import "./FavBook.css";

function FavBookList() {
  const [favBooks, setFavBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [id, setId] = useState(0);
  const [errorTitle, setErrorTitle] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleUpdateTitle(e) {
    e.preventDefault();
    setUpdateTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    /*validate input - avoid empty title*/
    /*  trim() used to removed whitespace from title string without changing it
    Source: https://www.w3schools.com/jsref/jsref_trim_string.asp#:~:text=The%20trim()%20method%20removes,not%20change%20the%20original%20string..*/
    if (title.trim().length !== 0) {
      console.log("Input value: not empty");
      setErrorTitle(""); //error will be empty because no error needed to be displayed
      setFavBooks(function (favBooks_arr) {
        setId(id + 1);
        setTitle("");
        return [...favBooks_arr, { title: title, id: id, isEdit: false }];
      });
      console.log(favBooks); //to see favBooks info in console
    } else {
      console.log("Input value: empty");
      setErrorTitle("Please enter a book title");
    }
  }

  function handleDelete(e, id) {
    var favBooks_arr = [...favBooks];
    var index = favBooks.indexOf(
      favBooks.find(function (favBook) {
        return favBook.id === id;
      })
    );
    favBooks_arr.splice(index, 1);
    setFavBooks(favBooks_arr);
  }

  function handleEdit(e, id) {
    e.preventDefault();
    var favBooks_arr = [...favBooks];
    var index = favBooks_arr.indexOf(
      favBooks_arr.find(function (favBook) {
        return favBook.id === id;
      })
    );
    favBooks_arr[index].isEdit = true;
    setUpdateTitle(favBooks_arr[index].title);
    setFavBooks(favBooks_arr);
  }

  function handleUpdate(e, id) {
    e.preventDefault();
    var favBooks_arr = [...favBooks];
    var index = favBooks_arr.indexOf(
      favBooks_arr.find(function (favBook) {
        return favBook.id === id;
      })
    );
    favBooks_arr[index].isEdit = false;
    setUpdateTitle("");
    favBooks_arr[index].title = updateTitle;
    setFavBooks(favBooks);
  }

  return (
    <div className="favbooks-container">
      <input
        value={title}
        onChange={handleInput}
        placeholder="Enter book title"
        className="favbook-input-field"
      />
      <button onClick={handleSubmit} className="favbook-button">
        Add Book
      </button>
      {errorTitle && <h4 className="error-msg"> {errorTitle}</h4>}
      <ul>
        {favBooks.map(function (i, index) {
          if (i.isEdit) {
            return (
              <li key={index}>
                <FavBook
                  favBook={favBooks[index]}
                  handleUpdateTitle={handleUpdateTitle}
                  updateTitle={updateTitle}
                />
                <button
                  onClick={function (e) {
                    handleUpdate(e, i.id);
                  }}
                >
                  Done
                </button>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <div>
                  <FavBook
                    favBook={favBooks[index]}
                    handleUpdateTitle={handleUpdateTitle}
                    updateTitle={updateTitle}
                  />
                  <button
                    onClick={function (e) {
                      handleDelete(e, i.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={function (e) {
                      handleEdit(e, i.id);
                    }}
                  >
                    Update
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default FavBookList;
