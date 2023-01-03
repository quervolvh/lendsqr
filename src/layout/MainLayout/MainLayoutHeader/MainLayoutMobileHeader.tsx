import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { LinkWrapper, MobileHeaderToggler } from 'components';
import { SIDENAVLINKS } from 'constants/index';
import { useRouter } from 'next/router';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { classnames } from 'utils';

export const MainLayoutMobileHeader: React.FC<Props> = ({ active, avatar }): JSX.Element => {

    const ref: React.MutableRefObject<any> = useRef();

    const [isExpanded, setIsExpanded] = useState(false);

    const router = useRouter();

    // const reset = () => {
    //     router.push("/");
    // };

    useOnClickOutside(ref, () => isExpanded ? setIsExpanded(false) : null);

    return (
        <div className="LandingLayout-header-mobile main-layout-header-mobile main-layout-header-main" ref={ref} >

            <MobileHeaderToggler setExpansion={setIsExpanded} isExpanded={isExpanded} />

            <div className={`LandingLayout-header-mobile-exp ${isExpanded ? "expanded" : ""}`}>

                <MobileHeaderToggler setExpansion={setIsExpanded} isExpanded={isExpanded} />

                <div
                    className="main-layout-header-mobile-userBox"
                    tabIndex={0}
                    role={"button"}
                    onKeyDown={(e) => e.key === "Enter" && router.push("/account")}>

                    <Link href={"/account"}>

                        <img src={avatar || "/png/user-avatar.png"} alt={'user--'} />

                    </Link>

                </div>

                <div className="main-layout-header-mobile-links">

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

            </div>

        </div>

    );
}

interface Props {
    active: string,
    avatar?: string
}
