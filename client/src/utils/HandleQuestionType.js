import React from "react";
import Form from "react-bootstrap/Form";
import RadioButton from "../components/survey_taker/RadioButton";
import CheckBox from "../components/survey_taker/CheckBox";
import OpenEnded from "../components/survey_taker/OpenEnded";


const handleQuestionType = (data, disabled, id = 0, updateCheckBoxes=null, updateRadioButtons=null, updateOpenEnded=null) => {
    if (!data.type) return;

    if (data.type === "Open Ended") {
        return <OpenEnded
            id={id}
            disabled={disabled}
            updateOpenEnded={updateOpenEnded} />
    }
    return (
        <> {data.type === "Multiple Choice" ?
            <div onChange={(e) => updateRadioButtons(e, id, 0)}>
                {
                    data.answers.map((answer, i) => (
                        <RadioButton
                            key={i}
                            value={i}
                            id={id}
                            disabled={disabled}
                            answer={answer}
                            updateRadioButtons={updateRadioButtons}
                        />
                    ))}
            </div>
            :
            <div onChange={(e) => updateCheckBoxes(e, id, 0)}>
                {
                    data.answers.map((answer, i) => (
                        <CheckBox
                            key={i}
                            value={i}
                            id={id}
                            disabled={disabled}
                            answer={answer}
                     />
                    ))
                }
            </div>

        }
        </>
    )

}

export default handleQuestionType;