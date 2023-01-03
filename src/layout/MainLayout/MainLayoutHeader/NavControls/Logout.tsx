import { LinkWrapper, LogoutIcon } from "components";
import React from "react";

export const LogOut = () => {

    return (

        <div className="main-layout-sideNav-item main-layout-sideNav-item-logout">

            <LinkWrapper
                className='active'
                link={"/logout"}
            >

                <>

                    <div

                        dangerouslySetInnerHTML={{ __html: LogoutIcon }}

                        className="bulb"

                    />

                    <span> Logout </span>

                </>

            </LinkWrapper>

        </div>

    )

}
