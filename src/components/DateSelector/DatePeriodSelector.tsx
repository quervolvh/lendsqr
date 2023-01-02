import React, { useEffect, useState } from 'react';
import { FormField } from 'components/FormField';
import { change, classnames } from 'utils';
import { DateFilter } from './DateFilter';
import dayjs from 'dayjs';
import { quickDateFormat } from 'utils/date';
import { useGetParamsOnLoad } from 'hooks/useGetParamsOnLoad';

export const DatePeriodSelector: React.FC<Props> = ({

    onChange,

    getParamsOnLoad

}) => {

    const [state, setState] = useState<{
        period: "All Time" | "Custom Select" | "Today" | "Specific Day",
        startDate: string,
        endDate: string,
        loadParams: { show?: boolean, value?: { startDate: string, endDate: string } }
    }>(
        {
            period: "All Time",
            startDate: "",
            endDate: "",
            loadParams: {  }
        });

    const display = {

        start: ["Specific Day", "Custom Select"].includes(state.period),

        end: ["Custom Select"].includes(state.period)

    };

    useGetParamsOnLoad({

        safeParams: getParamsOnLoad ? ["startDate", "endDate"] : undefined,

        setter: (value) => {

            if (Object.keys(value).length > 0) {

                setState((prevState) => ({ 
                    
                    ...prevState, 
                    loadParams: { value, show: true }, 
                    period: "Custom Select",
                    ...value
                }));

                return;

            }

        }
    });

    useEffect(() => {

        const setter = () => {

            switch (state.period) {

                case "All Time":

                    onChange({ startDate: null, endDate: null });

                    return;

                case "Today":

                    onChange({ startDate: quickDateFormat(new Date().toISOString()), endDate: dayjs(new Date()).add(1, "day").format("YYYY-MM-DD") })

                    return;

                case "Specific Day":
                case "Custom Select":

                    const endDate = () => {

                        if ((state.period === "Specific Day" && state.startDate) || (!state.endDate && state.startDate)) {

                            return dayjs(new Date(state.startDate)).add(1, "day").format("YYYY-MM-DD");

                        }

                        return state.endDate ? quickDateFormat(state.endDate) : null;

                    }

                    const obj = {
                        start: state.startDate ? quickDateFormat(state.startDate) : null,
                        end: endDate()
                    }

                    onChange({ startDate: obj.start, endDate: obj.end });

                    return;

                default:

                    onChange({ startDate: null, endDate: null });

                    return;
            }

        }

        setter();

        // eslint-disable-next-line
    }, [state.period, state.startDate, state.endDate]);

    return (

        <div>


            <FormField

                type="option"

                label={"Date Period"}

                value={state.period}

                defaultValue={state.loadParams.value ? "Custom Select" : undefined}

                options={[
                    "All Time",
                    "Today",
                    "Specific Day",
                    "Custom Select"
                ]}

                onChange={(e) => change(e, "period", setState)}

            />

            {(display.start || display.end) &&

                <div className='form-field-label'>

                    <p> Choose Range </p>

                </div>

            }

            <div className={classnames(
                (!display.start && !display.end) && 'date-filter-hidden',
                display.end && "date-filter-with-halves",
                'date-filter-box'
            )}>

                <DateFilter

                    value={{}}

                    singleMode={true}

                    onChange={(date, onSuccess) => (change(date?.start, "startDate", setState), onSuccess())}

                    defaultDateValue={{ start: state?.loadParams?.value?.startDate }}

                    placeholder={"Start Date"}

                    datePickerId={"startDate--"}

                    className={classnames(

                        !display.start && "date-filter-hidden",

                        !display.end && "date-filter-full"

                    )}

                />

                <DateFilter

                    value={{}}

                    defaultDateValue={{ start: state?.loadParams?.value?.endDate }}

                    singleMode={true}

                    placeholder={"End Date"}

                    datePickerId={"endDate--"}

                    onChange={(date, onSuccess) => (change(date?.start, "endDate", setState), onSuccess())}

                    className={classnames(!display.end && "date-filter-hidden")}

                />

            </div>


        </div>
    )

}

interface Props {
    onChange: (e: { startDate?: string | null | undefined, endDate?: string | null | undefined }) => void,
    getParamsOnLoad?:boolean
}
