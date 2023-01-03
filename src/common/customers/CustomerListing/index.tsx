import { EmptyHistory } from "components/EmptyHistory";
import React from "react";
import { customerType } from "types";
import { CustomersListingSummary } from "./CustomersListingSummary";
import { CustomersListingTable } from "./CustomersListingTable";

export const CustomersListing: React.FC<Props> = ({ isMobile, loading, data, error }) => {

    return (

        <>

            <CustomersListingSummary loading={error || loading} />

            {!error &&

                <>

                    <CustomersListingTable

                        data={data}

                        loading={loading}

                        isMobile={isMobile}

                    />

                </>

            }

            {error && <EmptyHistory />}

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
