import React from "react";
import { MainLayout } from "layout/MainLayout";
import { CustomersListing } from "common/customers/CustomerListing";

export const Customers: React.FC<Props> = ({ isMobile, deviceWidth }) => {

  return (

    <MainLayout
      title='Lendsqr - Customers'
      displayTitle='Users'
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      active={"customers"}
    >

      <CustomersListing

        isMobile={isMobile}

        deviceWidth={deviceWidth}

      />

    </MainLayout>

  );

}

export default Customers;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
