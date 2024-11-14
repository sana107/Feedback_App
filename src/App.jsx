import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Average from "./components/Average";
import ListGroup from "./components/ListGroup";

const App = () => {
  const removeFeedback = (id) => {
    console.log(id);
    setFeedbacks(feedbacks.filter((item) => item.id !== id));
  };

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      rating: 3,
      review: "read",
    },
  ]);

  const [edit, setEdit] = useState({
    
    feedback: {},
    isEdit: false,
  });

  const addFeedback = (rating, review) => {
    setFeedbacks([{ id: crypto.randomUUID(), rating, review }, ...feedbacks]);
  };

  const editFeedback = (feedback) => {
    console.log(feedback);
    setEdit({
     
      feedback: feedback, 
      isEdit: true, 
    });
  };

  const updateFeedback = (updatedFeedback) => {
  
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === updatedFeedback.id ? updatedFeedback : feedback
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form
          addFeedback={addFeedback}
          edit={edit}
          updateFeedback={updateFeedback}
        />
        <Average feedbacks={feedbacks} />
        <ListGroup
          feedbacks={feedbacks}
          removeFeedback={removeFeedback}
          editFeedback={editFeedback}
        />
      </div>
    </>
  );
};

export default App;
