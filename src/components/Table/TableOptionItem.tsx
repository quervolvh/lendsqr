import React from "react";
import { useRouter } from "next/router";
import { EyeIcon } from "components/Assets";

export const TableOptionItem: React.FC<Props> = ({ svgIcon, label, link }) => {

    const router = useRouter();

    return (

        <div

            className="table-option-item"

            onClick={() => link ? router.push(link) : null}

        >

            <span dangerouslySetInnerHTML={{ __html: (EyeIcon || svgIcon) }} />

            <p> {label || "Label"}  </p>

        </div>

    )


}

interface Props {

    svgIcon?: string,

    label?: string,

    link?: string

}
