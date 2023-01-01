import React from 'react';
import { SIDENAVLINKS } from 'constants/index';
import { classnames } from 'utils';
import { LinkWrapper } from 'components';

const MainLayoutSideNav: React.FC<{ active?: string }> = ({ active }) => {

    return (
        <div className="main-layout-sideNav">

            <div className="main-layout-sideNav-content">

                {SIDENAVLINKS.map((item, index) => {

                    const activeItem = active?.toLocaleLowerCase() || "";

                    const isActive = `/${activeItem}` === String(item.link).toLowerCase();

                    return (

                        <div
                            className={classnames("main-layout-sideNav-item", isActive && "active")}
                            key={`side-nav-item-${index}`}>

                            {item.title && item.type === "side-nav-item-block" &&

                                <>

                                    <LinkWrapper link={item.link}>

                                        <p className='"main-layout-sideNav-item-block-title'> {item.title} </p>

                                    </LinkWrapper>

                                    <div className='main-layout-sideNav-item-block-links'>

                                        {item.links.map((item) =>

                                            <LinkWrapper
                                                className={isActive ? 'active' : ''}
                                                link={item.link === "/logout" ? '' : item.link}
                                                key={`side-nav-item-${index}-${item.title}`}
                                            >

                                                <>

                                                    <div

                                                        dangerouslySetInnerHTML={{ __html: item.icon }}

                                                        className="bulb"

                                                    />

                                                    <span> {item.title} </span>

                                                </>

                                            </LinkWrapper>

                                        )}

                                    </div>

                                </>

                            }

                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default MainLayoutSideNav;
