import React from "react"
import "./profile.css"
function Card3(props){
    return(
    
        <div className="Card">
          
            <div className="CardPargraph">
            <h4 className="Date">{props.h4}</h4>
            <button className="Imporvement">Imporvement</button>
            <p><img src= {props.img} alt='card3'/> Kevin Joe</p>
                <p className="description">{props.p} </p>
                
            </div>
            <button className="Download">Download</button>
        </div>
    )
}
export default Card3