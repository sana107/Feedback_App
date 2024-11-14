import React, { useEffect, useState } from "react";

const Form = ({ addFeedback ,edit,updateFeedback}) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      updateFeedback({id:edit.feedback.id,rating,review});//ye value udhar app me update function me isi sequence me jayegi , //ye jo id :edit.feedback.id he ye naa purana id h isko user ne click kiya h , isko match karan h sabse aur check krna h taki humko pata chkle ki kime changes krna h
    }else{
      addFeedback(rating,review);
    }
 
    setRating(1)
    setReview("")
  };

  useEffect(() => {
    setRating(edit.feedback.rating);
    setReview(edit.feedback.review);

  },[edit]); //jab bhi edit btn me changes honge click hoga,yaa input wala change? jab bhi changes honge ye chalega is useeffect se hamara edit pe click krne se input me reflect hota h 



  return (
    <div className="card p-3">
      <form onSubmit={(e) => handleSubmit(e)}>
        <select className="form-select" onChange={(e)=> setRating(e.target.value)} value={rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          className="form-control my-3"
          placeholder="enter review here"
          onChange={(e)=> setReview(e.target.value)}
          value={review}
        ></textarea>
        <button className="btn btn-warning ">submit</button>
      </form>
    </div>
  );
};

export default Form;
