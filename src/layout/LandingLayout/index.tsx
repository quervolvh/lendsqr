import React from 'react';
import { classnames } from 'utils';
import { MetaHead } from 'components';
import Image from 'next/image';
import { images } from 'constants/images';

export const LandingLayout: React.FC<Props> = ({

    headTitle,

    className = "",

    ...props

}) => {

    return (
        <>

            <MetaHead title={headTitle} />

            <div className={classnames('LandingLayout', className)}>

                <div className='LandingLayout-left'>

                    <Image

                        src={images.lendsqr}

                        alt={"Sign up"}

                        className={"LandingLayout-lendsqr"}

                        placeholder={"blur"}

                        blurDataURL={"/placeholder/blur.webp"}

                        width={173.76}

                        height={36}

                        role={"button"}

                    />

                    <Image

                        className='LandingLayout-banner'

                        src={images.lendsqr_landing}

                        alt={"Sign up"}

                        placeholder={"blur"}

                        blurDataURL={"/placeholder/blur.webp"}

                        width={600}

                        height={338}

                    />

                </div>

                <div className="LandingLayout-right">

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
