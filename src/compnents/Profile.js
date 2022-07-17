import React from "react";
import "./profile.css"

function Card1(props){
    return(
    <div className="Card">
          
            <div className="CardPargraph">
            <h4 className="Date">{props.h4}</h4>
            <button className="New">New</button>
              <p className="P"><img src={props.img} alt='profile' />Kevin Joe</p>
                <p className="description">{props.p} </p>
                
                </div>
            <button className="Download">Download</button>
        </div>
    )
}
export default Card1