import React from "react";
import "../styles/MultipleChoice.css";

const MultipleChoice = (props) => {
    return (
        <div className="qContainer">
            <label> Test
                <input type="text" name="qTitle" />
            </label>
            <input type="submit" value="Submit" /> 
        </div>
    )
}

export {MultipleChoice};