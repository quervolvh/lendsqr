import React, { useState } from 'react';
import { useFetching } from 'hooks/useFetching';
import { MainLayout } from 'layout/MainLayout';
import { customerType } from 'types';
import { CustomerOverview } from 'common/customers/CustomerOverview.tsx/CustomerOverview';

export const Customer: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const [state, setState] = useState<{

        loading: boolean,

        customer?: customerType,

    }>({

        loading: true,

    });

    const { customer } = state;

    useFetching({

        dispatcher: () => (

            fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1", { method: "GET" })

                .then(item => item?.json())

                .catch(() => console.log("error")

                )
        ),

        setter: (e) => setState((prevState) => ({ ...prevState, loading: false, customer: e })),

        safeParams: []

    });



    return (

        <MainLayout
            title='Lendsqr - Customer'
            displayTitle='User Details'
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            active={"customers"}
        >

            <>

                <CustomerOverview customer={customer} />

            </>

        </MainLayout>

    )

}

export default Customer;

interface Props {

    isMobile: boolean,

    deviceWidth: number

}
