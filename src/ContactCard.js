import React, { useState }from "react";

const ContactCard = (props) => {
    const [showBooks, setShowBooks] = useState(false); //react hook
    const [awards, setAwards] = useState(false);
return(
    <div className='contact-card'>
    <img src={props.picUrl}
    alt="profile">
    </img>
  <div className='user=deatils'>
    <p> Name: {props.name}</p>
    <p> Age : {props.age}</p>
    <p> About the author : {props.about} </p>
    <p> This author is on my list because... {props.iLike}</p>
    <button onClick={()=> {setShowBooks(!showBooks); setAwards(!awards); }}>Show more!</button>
    {showBooks && <p> Best Sellers: {props.books}</p>}
    {awards && <p> Awards: {props.awards}</p>}
  </div>
  </div>
);
};

export default ContactCard