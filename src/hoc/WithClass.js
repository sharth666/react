import React from "react";

const withClass = (props) => {
    console.log("Some changes");
    return <div className={props.class}>
                {props.children}
           </div>
}

export default withClass;
