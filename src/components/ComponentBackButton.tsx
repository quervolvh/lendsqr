import React from 'react';
import { ArrowLeft } from 'components';
import { LinkWrapper } from './LinkWrapper';

export const ComponentBackButton: React.FC<{ link?: string, onClick?: () => void }>
    = ({ link, onClick }) => {

        return (

            <div className='component-header-back-button-holder'>

                <LinkWrapper link={link}>

                    <div
                        className='component-header-back-button'
                        tabIndex={0}
                        role={"button"}
                        onClick={() => onClick && onClick()}
                    >

                        <div dangerouslySetInnerHTML={{ __html: ArrowLeft }} />

                        <p className="color-secondary"> Back </p>

                    </div >

                </LinkWrapper>

            </div>

        )
    }

