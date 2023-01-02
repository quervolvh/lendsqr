import React from 'react';
import { FormField } from '.';

export const OptionInputItemSelector: React.FC<DisplayOptionProps> = ({

    multiSelect, label, isSelected

}) => {

    return (

        <div className={"form-field-li-div"}>

            {multiSelect &&

                <FormField

                    type="checkbox"

                    value={isSelected}

                    onClick={() => null}

                />

            }


            <span>

                {label}

            </span>


        </div>
    )

}

interface DisplayOptionProps {

    isSelected: boolean,

    multiSelect: boolean,

    label: string | number

}
