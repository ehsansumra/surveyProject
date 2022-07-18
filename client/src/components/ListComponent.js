import React from "react";
import Card from "react-bootstrap/Card";
const ListComponent = (props) => {

    return (
        <Card style={{width: "1000px"}}>
            <Card.Body>
                <h3>{props.text}</h3>
            </Card.Body>  
        </Card>
    )
}

export {ListComponent};