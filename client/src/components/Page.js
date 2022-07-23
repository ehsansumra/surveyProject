import React, {useState} from "react";

const Page = ({children}) => {

    return (
        <div className="page">
            {children}
        </div>
    )
}

export default Page;