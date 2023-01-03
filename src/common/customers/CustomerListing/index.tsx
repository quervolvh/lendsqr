import { useFetching } from "hooks/useFetching";
import { useState } from "react";
import { customerType } from "types";
import { CustomersListingSummary } from "./CustomersListingSummary";
import { CustomersListingTable } from "./CustomersListingTable";

export const CustomersListing: React.FC<Props> = ({ isMobile }) => {

    const [state, setState] = useState<{

        loading: boolean,

        data: customerType[],

    }>({

        loading: true,

        data: [],

    });

    useFetching({

        dispatcher: () => (

            fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", { method: "GET" })

                .then(item => item?.json())

                .catch(() => console.log("error")

                )
        ),

        setter: (e) => setState((prevState) => ({ ...prevState, loading: false, page: 1, data: e })),

        safeParams: []

    });

    return (

        <>

            <CustomersListingSummary />

            <CustomersListingTable

                data={state.data}

                loading={state.loading}

                isMobile={isMobile}

            />

        </>

    )

}

interface Props {

    isMobile: boolean,

    deviceWidth: number

}
