import React from "react";
import { Button } from "components";

export const CustomerSpecificProcesses: React.FC<Props> = ({ }) => {

    return (

        <div className="component-header-process-buttons">

            <Button label="BLACKLIST USER" className="no-bg" />

            <Button label="ACTIVATE USER" className="no-bg" />


        </div>

    );

}

interface Props {

    id?: string

}
