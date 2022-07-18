import React, { useState } from "react";
import { SButton } from "./SButton";
import { ListComponent } from "./ListComponent";

const TestApp = (props) => {
    const [components, setComponents] = useState([])

    function addComponent() {
        setComponents([...components, "Sample Component"]);
        console.log(components);
    };

    function removeComponent() {
        setComponents([...components].slice(0, components.length - 1));
    }

    return (
        <div>
            <SButton onClick={addComponent} text="Add Component"/>
            <SButton onClick={removeComponent} text="Remove Component"/>
            {components.map((item, index) => ( <ListComponent text={item}/> ) )}
        </div>
    )
}

export default TestApp;