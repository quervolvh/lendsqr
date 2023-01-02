import { ActiveUsersIcons, CardsUsersIcon, SmallSummaryCard, UsersOnLoanIcons, UserWithSavingsIcons } from 'components';
import { ComponentFilter } from 'components/Filters/ComponentFilter';
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

  const mockData = [

    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status table-status-pending'> Pending </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status  table-status-inactive'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status  table-status-blacklisted'> Blacklisted </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status  table-status-active'> Active </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ],
    [

      "Lendsqr",

      "Adedeji",

      "adedeji@lendsqr.com",

      "08078903721",

      "May 15, 2020 10:00 AM",

      () => <div className='table-status'> Inactive </div>

    ]

  ];

  const HeaderComponent: React.FC<{ title: string }> = ({ title }) => {

    return (

      <div className='table-td-filter'>

        <p> {title} </p>

        <ComponentFilter

          filterOptions={{

            safeParams: [],

            options: [

              {
                label: "Organization",
                value: "organization",
                type: "option",
                options: []
              },

              {
                label: "Username",
                value: "username",
                type: "plain",
                options: []
              },

              {
                label: "Email",
                value: "email",
                type: "plain",
                options: []
              },

              {
                label: "Date",
                value: "date",
                type: "date",
                options: []
              },

              {
                label: "Phone Number",
                value: "phone",
                type: "plain",
                options: []
              },

              {
                label: "Status",
                value: "status",
                type: "option",
                options: []
              },

            ],

            onSubmit: e => console.log(e)

          }}

        />

      </div>


    )

  }

  return (

    <MainLayout
      title='Lendsqr - Customer'
      displayTitle='Users'
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      active={"customers"}
    >

      <>

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

          heading={[

            <HeaderComponent title='ORGANIZATION' />,

            <HeaderComponent title='USERNAME' />,

            <HeaderComponent title='EMAIL' />,

            <HeaderComponent title='PHONE NUMBER' />,

            <HeaderComponent title='DATE JOINED' />,

            <HeaderComponent title='DATE JOINED' />,

          ]}

          data={mockData}

        />

      </>

    </MainLayout>

  )

}

export default Customers;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
