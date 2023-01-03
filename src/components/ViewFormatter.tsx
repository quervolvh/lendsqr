import React from "react";
import { classnames } from "utils";

export const ViewFormatter: React.FC<Props> = ({ value, label, className }) => {

    return (

        <div className={classnames("view-formatter", className)}>

            {value && <h1 className="view-formatter-value"> {value} </h1>}

            {label && <p className="view-formatter-label"> {label} </p>}

        </div>

    )

}

interface Props {

    value?: string,

    label?: string,

    className?: string

}
