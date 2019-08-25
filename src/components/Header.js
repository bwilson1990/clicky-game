import React from "react";
// import Background from "./backgroundImage.jpg"

function Header(){

    const style = { 
        // backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }

    return (
        <div className="jumbotron jumbotron-fluid" style={style}>
            <div className="container centered">
                <h1 className="display-4">Click the Crystals to get the High Score!</h1>
            </div>
        </div>
    )
}
export default Header;