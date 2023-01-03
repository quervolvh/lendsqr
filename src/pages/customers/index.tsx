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

  }>({

    loading: true,

    data: [],

  });

  const { id } = router.query;

  const selectedUser = (id ? !isNaN(parseInt(String(id))) : false);

  useFetching({

    dispatcher: () => (

      fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", { method: "GET" })

        .then(item => item?.json())

        .catch(() => console.log("error")

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
