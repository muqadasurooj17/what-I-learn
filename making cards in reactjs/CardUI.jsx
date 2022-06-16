import React from "react";
import "./Card.css";

const Card =props=>{
    return(
<>
<div className="card text-center">
    <div className="overflow">
<img src={props.imgsrc} alt="img1" className="card-img-top"></img></div>
    <div className="card-body text-dark">
        <h4 className="card-title" >{props.title}</h4>
            <p className="card-text text-secondary">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam saepe excepturi debitis quas doloremque dicta quis fugiat, quae a 
non repudiandae? Facilis temporibus nesciunt dolorem reiciendis accusantium nihil at.
            </p>
    <a href="#" className="btn btn-outline-primary">GO SOMEWHERE</a>
    </div>
</div>
</>
    );
}
export default Card;