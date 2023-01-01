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
        loader={false}
        heading={["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS"]}
        data={[

          [

            "Lendsqr",

            "Adedeji",

            "adedeji@lendsqr.com",

            "08078903721",

            "May 15, 2020 10:00 AM",

            ()=> <div className='table-status table-status-pending'> Pending </div>

          ],
          [

            "Lendsqr",

            "Adedeji",

            "adedeji@lendsqr.com",

            "08078903721",

            "May 15, 2020 10:00 AM",

            ()=> <div className='table-status  table-status-inactive'> Inactive </div>

          ],
          [

            "Lendsqr",

            "Adedeji",

            "adedeji@lendsqr.com",

            "08078903721",

            "May 15, 2020 10:00 AM",

            ()=> <div className='table-status  table-status-blacklisted'> Blacklisted </div>

          ],
          [

            "Lendsqr",

            "Adedeji",

            "adedeji@lendsqr.com",

            "08078903721",

            "May 15, 2020 10:00 AM",

            ()=> <div className='table-status  table-status-active'> Active </div>

          ],
          [

            "Lendsqr",

            "Adedeji",

            "adedeji@lendsqr.com",

            "08078903721",

            "May 15, 2020 10:00 AM",

            ()=> <div className='table-status'> Inactive </div>

          ],
          [

            "Lendsqr",

            "Adedeji",

            "adedeji@lendsqr.com",

            "08078903721",

            "May 15, 2020 10:00 AM",

            ()=> <div className='table-status'> Inactive </div>

          ]

        ]}
      />

    </MainLayout>

  )

}

export default Customers;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
