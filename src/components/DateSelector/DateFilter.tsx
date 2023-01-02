import React, { useEffect, useState } from 'react';
import { FormField } from 'components';
import DateInput from './DateInput';
import { classnames } from 'utils';
import { quickDateFormat } from 'utils/date';

export const DateFilter: React.FC<Props> = ({
    value,
    datePickerId,
    className,
    onChange,
    defaultDateValue,
    singleMode,
    placeholder,
    label
}) => {

    const initialState = {
        value: {
            start: value?.start || "",
            end: value?.end || ""
        },
        defaultValue: defaultDateValue
    };

    const [date, setDate] = useState<dateType>(initialState);

    const [showRange, setShowRange] = useState(false);

    const toggle = () => setShowRange(prevState => (!prevState));

    const buttonProps = { role: "button", "tabIndex": 0 };

    const rawOutput = {
        start: date?.[date.defaultValue ? "defaultValue" : "value"]?.start || "",
        end: date?.[date.defaultValue ? "defaultValue" : "value"]?.end || "",
        readableFormat: date?.defaultValue ? true : false
    }

    const output = {
        start: rawOutput?.start && !rawOutput.readableFormat ? quickDateFormat(rawOutput.start) : rawOutput.start,
        end: rawOutput?.end && !rawOutput.readableFormat ? " - " + quickDateFormat(rawOutput.end) : rawOutput.end,
    }

    const buttonOutput = singleMode ? output.start : `${output.start}${output.end}`;

    useEffect(()=> {


        if ( defaultDateValue ) {

            setDate((prevState)=> ({ ...prevState , defaultValue : defaultDateValue }));

        }

    // eslint-disable-next-line
    },[defaultDateValue?.start === undefined]);

    return (

        <div className={classnames("date-filter", className)}>


            <div className="date-filter-context">

                <FormField
                    type="plain"
                    label={label}
                    value={buttonOutput}
                    onClick={() => toggle()}
                    placeHolder={placeholder}
                    {...buttonProps}
                />

            </div>


            <div className="date-filter-selector">

                <DateInput
                    onChange={(date) => {

                        setShowRange(false);

                        onChange(

                            date,

                            () => setDate({ defaultValue: undefined, value: date })

                        );

                    }}
                    visibility={showRange}
                    toggleVisibility={() => toggle()}
                    selection={[]}
                    datePickerId={datePickerId}
                    singleMode={singleMode}
                />

            </div>

        </div>
    );

}

type dateType = {
    value: { start?: string, end?: string },
    defaultValue?: { start?: string, end?: string }
};

interface Props {
    onChange(value: { start?: string, end?: string }, onSuccess: () => void): void,
    value: { start?: string, end?: string },
    datePickerId: string,
    className?: string,
    label?: string,
    placeholder?: string,
    singleMode?: boolean,
    defaultDateValue?: {
        start?: string,
        end?: string
    }
}
