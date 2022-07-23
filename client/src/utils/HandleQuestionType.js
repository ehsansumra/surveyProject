import React from "react";
import Form from "react-bootstrap/Form";
import RadioButton from "../components/survey_taker/RadioButton";
import CheckBox from "../components/survey_taker/CheckBox";
import OpenEnded from "../components/survey_taker/OpenEnded";
const handleQuestionType = (data, disabled, id = 0, updateCheckBoxes, updateRadioButtons, updateOpenEnded) => {
    if (!data.type) return;
    
    //gonna have to make this into actual components to bind state to the values.
    if (data.type === "Open Ended") {
        return <OpenEnded 
        id={id}
        disabled={disabled} 
        updateOpenEnded={updateOpenEnded} />
    }
    return (
        <>{
            data.answers.map((answer, i) => (
                data.type === "Multiple Choice" ?
                    <RadioButton
                        key={i}
                        index={i}
                        id={id}
                        disabled={disabled}
                        answer={answer}
                        updateRadioButtons={updateRadioButtons}
                         />
                    : <CheckBox
                        key={i}
                        index={i}
                        id={id}
                        disabled={disabled}
                        answer={answer}
                        updateCheckBoxes={updateCheckBoxes} />
            ))
        }</>
    )

}

export default handleQuestionType;