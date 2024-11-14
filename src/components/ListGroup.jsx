import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({feedbacks,removeFeedback,editFeedback={editFeedback}}) => {
  return <ul className="list-group">
    {
      feedbacks.map((feedback) => (
      <ListItem key={feedback.id} feedback={feedback} removeFeedback={removeFeedback} editFeedback={editFeedback}/>
    ))}
  </ul>;
};

export default ListGroup;
