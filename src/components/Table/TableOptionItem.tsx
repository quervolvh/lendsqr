import React from "react";
import { EyeIcon } from "components/Assets";

export const TableOptionItem: React.FC<Props> = ({ svgIcon, label }) => {

    return (

        <div className="table-option-item">

            <span dangerouslySetInnerHTML={{ __html: (EyeIcon || svgIcon) }} />

            <p> {label || "Label"}  </p>

        </div>

    )


}

interface Props {

    svgIcon?: string,

    label?: string

}