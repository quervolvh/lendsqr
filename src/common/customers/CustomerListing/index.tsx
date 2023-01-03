import React from "react";
import { customerType } from "types";
import { CustomersListingSummary } from "./CustomersListingSummary";
import { CustomersListingTable } from "./CustomersListingTable";

export const CustomersListing: React.FC<Props> = ({ isMobile , loading, data }) => {

    return (

        <>

            <CustomersListingSummary />

            <CustomersListingTable

                data={data}

                loading={loading}

                isMobile={isMobile}

            />

        </>

    )

}

interface Props {

    isMobile: boolean,

    deviceWidth: number,

    loading: boolean,

    data: customerType[],

    error: boolean

}
