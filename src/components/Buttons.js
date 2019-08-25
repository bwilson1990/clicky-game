import React from "react";

function Buttons(props) {

    const { id, image, name } = props;

    return (
        <div className="click-item" id={id} data-id={id}>
            <img src={image} alt={name} width="150px" height="150px" />
        </div>
    );
}

export default Buttons;