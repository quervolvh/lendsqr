import { MainLayout } from 'layout/MainLayout';

export const Customers: React.FC<Props> = ({ isMobile, deviceWidth }) => {

  return (

    <MainLayout
      title='Lendsqr - Customer'
      displayTitle='User'
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      active={"customers"}
    >

     <></>

    </MainLayout>

  )

}

export default Customers;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
