import React from "react";

const Average = ({feedbacks}) => {

  const avg = feedbacks.reduce((p,c)=> p+c.rating/feedbacks.length,0);
  
  return (
    <div className="d-flex align-items-center justify-content-between my-3 mx-2">
      <h6>Total review:{feedbacks.length}</h6>
      <p>average review{avg.toFixed(2)}</p>
    </div>
  );
};

export default Average;
