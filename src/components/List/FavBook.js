import { useState } from "react";

function FavBook(props) {
  //console.log(props.favBook);
  if (props.favBook.isEdit) {
    return (
      <span>
        <input value={props.updateTitle} onChange={props.handleUpdateTitle} />
      </span>
    );
  } else {
    return <span>{props.favBook.title}</span>;
  }
}

export default FavBook;
