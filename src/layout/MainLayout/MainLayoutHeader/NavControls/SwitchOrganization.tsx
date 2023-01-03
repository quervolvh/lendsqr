import React from "react";
import { ArrowDown, LinkWrapper, LogoutIcon, OrganizationIcon } from "components";

export const SwitchOrganization = () => {

    return (

        <div className="main-layout-sideNav-item">

            <LinkWrapper
                className='active'
                link={"/logout"}
            >

                <>

                    <div

                        dangerouslySetInnerHTML={{ __html: OrganizationIcon }}

                        className="bulb"

                    />

                    <span> Switch Organization </span>

                    <div

                        dangerouslySetInnerHTML={{ __html: ArrowDown }}

                        className="bulb ml-2"

                    />

                </>

            </LinkWrapper>

        </div>

    )

}
