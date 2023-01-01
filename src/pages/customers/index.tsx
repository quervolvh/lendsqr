import { ActiveUsersIcons, CardsUsersIcon, SmallSummaryCard, UsersOnLoanIcons, UserWithSavingsIcons } from 'components';
import { Table } from 'components/Table';
import { MainLayout } from 'layout/MainLayout';

export const Customers: React.FC<Props> = ({ isMobile, deviceWidth }) => {

  const summaryData = [

    {

      svgIcon: CardsUsersIcon,

      value: "2,435",

      label: "USERS"

    },

    {

      svgIcon: ActiveUsersIcons,

      value: "2,435",

      label: "ACTIVE USERS"

    },

    {

      svgIcon: UsersOnLoanIcons,

      value: "12,453",

      label: "USERS WITH LOANS"

    },

    {

      svgIcon: UserWithSavingsIcons,

      value: "102,453",

      label: "USERS WITH SAVINGS"

    }

  ];

  return (

    <MainLayout
      title='Lendsqr - Customer'
      displayTitle='Users'
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      active={"customers"}
    >

      <div className='customers-user-summary'>

        {summaryData.map((item) =>

          <SmallSummaryCard

            key={`summary-for-${item.label}`}

            {...item}

          />

        )}

      </div>

      <Table
        loader={true}
        heading={["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS"]}
        data={[]}
      />

    </MainLayout>

  )

}

export default Customers;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
