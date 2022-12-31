import React, { ReactElement } from 'react';
import { PlainInput } from './PlainInput';

export const FormField: React.FC<Props> = (props) => {

    const redefinedProps = {
        ...props,
        className: props.className ? props.className : ""
    }

    let RenderElement: ReactElement | any = () => null;

    switch (props?.type) {
        default:
            RenderElement = PlainInput;
    }

    return (
        <RenderElement {...redefinedProps} />
    );
};

interface Props {
    type?:  'plain' | 'password',
    label?: string,
    onChange?: (e?: any) => void,
    value?: string | undefined | null | number,
    placeHolder?: string | React.FC | React.ReactElement,
    className?: string,
    disabled?: boolean,
    error?: boolean | string,
    onKeyDown?(e: React.KeyboardEvent): void,
    errorClass?: string,
    onClick?(): void ,
    onFocus?: () => void,
    onBlur?: () => void
}
