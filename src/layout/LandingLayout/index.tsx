import React from 'react';
import { classnames } from 'utils';
import { MetaHead } from 'components';

export const LandingLayout: React.FC<Props> = ({
    headTitle,
    className = "",
    ...props
}) => {
    return (
        <>
            <MetaHead
                title={headTitle}
            />
            <div className={classnames('LandingLayout', className)}>

                <div className="landingLayout-body">
                    {props.children}
                </div>

            </div>
        </>
    );
}

interface Props {
    headTitle: string,
    isMobile: boolean,
    deviceWidth: number,
    className?: string,
    children?: React.ReactNode
}
