import React, { useState } from "react";
import { MainLayout } from "layout/MainLayout";
import { CustomersListing } from "common/customers/CustomerListing";
import { useFetching } from "hooks/useFetching";
import { customerType } from "types";
import { useRouter } from "next/router";
import { CustomerDetails } from "common/customers/CustomerDetails";

export const Customers: React.FC<Props> = ({ isMobile, deviceWidth }) => {

  const router = useRouter();

  const [state, setState] = useState<{

    loading: boolean,

    data: customerType[],

    error: boolean

  }>({

    loading: true,

    data: [],

    error: false

  });

  const { id } = router.query;

  const selectedUser = (id ? !isNaN(parseInt(String(id))) : false);

  useFetching({

    dispatcher: () => (

      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, { method: "GET" })

        .then(item => item?.json())

        .catch(() => setState((prevState) => ({

          ...prevState,

          error: true

        }))

        )
    ),

    setter: (e) => setState((prevState) => ({ ...prevState, loading: false, data: e })),

    safeParams: []

  });

  return (

    <MainLayout
      title='Lendsqr - Customers'
      displayTitle='Users'
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      active={"customers"}
    >

      <>

        {selectedUser === false &&

          <CustomersListing

            loading={state.loading}

            data={state.data}

            isMobile={isMobile}

            deviceWidth={deviceWidth}

            error={state.error}

          />

        }

        {selectedUser && <CustomerDetails id={String(id)} />}

      </>

    </MainLayout >

  );

}

export default Customers;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
