import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import ResultAnswer from './ResultAnswer';

//non open ended
const ResultQuestion = ({ data }) => {
    if (!data) {
        console.log("ResultQuestion did not receive data")
        return
    }

    if (data.type === "Open Ended") return;

    let buttonType = null;
    if (data.type === "Multiple Choice") buttonType = "radio";
    if (data.type === "Check Boxes") buttonType = "checkbox"

    return (
        <>
            {
                data.index === 0 ?
                <Card.Header style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                }} className="card-header alt">
                    <Card.Text className="construct-question"
                        style={{
                            
                            width:"65%"
                        }}>
                        {data.question}
                    </Card.Text>
                    <Card.Text>Submissions</Card.Text>
                </Card.Header>
                :

                <Card.Header className="card-header alt" >
                    
                    <Card.Text className="construct-question"
                        style={{
                            width:"65%"
                        }}>
                        {data.question}
                    </Card.Text>
                  
                    
                </Card.Header>


            }
            

            <Card.Body className="radio-button-container"
                style={{
                    padding: "0",
                }}>
                { //if open ended, call a different component
                    data.answers.map((answer, i) => (
                        <ResultAnswer
                            total={data.total}
                            type={buttonType}
                            key={i}
                            index={i}
                            answer={data.answers[i]}
                            submissions={data.submissions[i]}
                        />
                    ))
                }
            </Card.Body>
        </>

    )
}

export default ResultQuestion;