import React, { Component } from "react";
import  Card from "./CardUI";
import img1 from "../../img/carosole2.jpg";
import img2 from "../../img/carosole2.jpg";
import img3 from "../../img/carosole3.jpg";
class Cards extends  Component{
    render(){
        return(
<div className="container-fulid d-flex justify-content-center ">
    <div className="row">
        
        <div className="col-md-4">
            <Card imgsrc={img2} title="Interior"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc={img2}  title="Computer"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc={img3}  title="Mathmatics"/>
        </div>
       
    </div>
</div>

    );
        }
}
export default Cards;