import React from "react";

const ListItem = ({feedback,removeFeedback,editFeedback}) => {

  
  return (
    <li className="list-group-item">
      <h1>Rating:{feedback.rating}</h1>
      <p>review:{feedback.review}</p>
      <span className="float-end">
        <button className="btn btn-danger btn-sm rounded-0 mx-3 my-3" onClick={()=>removeFeedback(feedback.id)}>
          Delete
        </button>
        <button className="btn btn-warning btn-sm rounded-0" onClick={()=> editFeedback(feedback)} >Edit</button>
      </span> 
    </li>
  );
};

export default ListItem;
