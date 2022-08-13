import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import alternateBG from '../../utils/AlternateBG';
const ResultAnswer = ({ type, answer, submissions, index = 0, total }) => {
    /*
:root {
    --dark-primary: rgb(43, 42, 51);
    --dark-secondary: rgba(66, 65, 77, 1);
    --dark-tertiary: rgb(56, 56, 65);
    --light-primary: #F1F1F1;
}
    */
    let backgroundColor = alternateBG(index);
    const percentage = submissions === 0 ? 0 : ((submissions / total) * 100).toFixed(1) + " %";
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            height: "50px",
            backgroundColor: backgroundColor,
            
        }}>
            <Form.Check
                className="construct-answer"
                id="disabled"
                type={type}
                disabled={true}
                label={answer}
            />
            <Card.Text style= {{
                width: "100px",
                textAlign:"center",
        }}>{percentage}</Card.Text>
        </div>

    )
}

export default ResultAnswer;