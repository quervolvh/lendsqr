import React from 'react';
import { SIDENAVLINKS } from 'constants/index';
import { classnames } from 'utils';
import { LinkWrapper } from 'components';

const MainLayoutSideNav: React.FC<{ active?: string }> = ({ active }) => {

    return (
        <div className="main-layout-sideNav">

            <div className="main-layout-sideNav-content">

                {SIDENAVLINKS.map((item, index) => {

                    const activeLink = active?.toLocaleLowerCase() || "";

                    return (

                        <div
                            className={classnames("main-layout-sideNav-item")}
                            key={`side-nav-item-${index}`}>

                            {item.title && item.type === "side-nav-item-block" &&

                                <>

                                    <LinkWrapper link={item.link}>

                                        <p className='main-layout-sideNav-item-block-title'> {item.title} </p>

                                    </LinkWrapper>

                                    <div className='main-layout-sideNav-item-block-links'>

                                        {item.links.map((link_item) =>

                                            <LinkWrapper
                                                className={`/${activeLink}` === link_item.link ? 'active' : ''}
                                                link={item.link === "/logout" ? '' : link_item.link}
                                                key={`side-nav-item-${index}-${link_item.title}`}
                                            >

                                                <>

                                                    <div

                                                        dangerouslySetInnerHTML={{ __html: link_item.icon }}

                                                        className="bulb"

                                                    />

                                                    <span> {link_item.title} </span>

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
