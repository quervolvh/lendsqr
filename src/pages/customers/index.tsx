import { ActivateUserIcon, ActiveUsersIcons, BlackListUserIcon, CardsUsersIcon, EyeIcon, Pagination, SmallSummaryCard, TableOptionItem, UsersOnLoanIcons, UserWithSavingsIcons } from 'components';
import { ComponentFilter } from 'components/Filters/ComponentFilter';
import { OptionsInput } from 'components/FormField/OptionInput';
import { Table } from 'components/Table';
import { useFetching } from 'hooks/useFetching';
import { MainLayout } from 'layout/MainLayout';
import { useState } from 'react';
import { customerType } from 'types';
import { DD_MM_YY_HH_mm_a } from 'utils';

export const Customers: React.FC<Props> = ({ isMobile, deviceWidth }) => {

  const [state, setState] = useState<{

    loading: boolean,

    data: customerType[],

    page: number

  }>({

    loading: true,

    data: [],

    page: 1

  });

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

  const data = state?.data?.map((item) => ([
    item?.orgName,
    item?.userName,
    item?.email,
    item?.phoneNumber,
    DD_MM_YY_HH_mm_a(item.createdAt || ""),
    () => <div className='table-status table-status-pending'> Pending </div>,
    () => (
      <OptionsInput
        selectorBoxClass="select-button"
        className='m-0 table-option'
        isContextMenu={true}
        type="option"
        options={[
          () => <TableOptionItem svgIcon={EyeIcon} label={"View Details"} />,
          () => <TableOptionItem svgIcon={BlackListUserIcon} label={"Blacklist User"} />,
          () => <TableOptionItem svgIcon={ActivateUserIcon} label={"Activate User"} />,
        ]}
      />
    )
  ]));

  const HeaderComponent = (title: string) => (

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

  );

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

          loader={state.loading}

          uniqueKey={"customers-table"}

          heading={[

            () => HeaderComponent('ORGANIZATION'),

            () => HeaderComponent('USERNAME'),

            () => HeaderComponent('EMAIL'),

            () => HeaderComponent('PHONE NUMBER'),

            () => HeaderComponent('DATE JOINED'),

            () => HeaderComponent('STATUS'),

            ""

          ]}

          data={data}

        />

        <Pagination
          pages={5}
          page={state.page}
          perPageSelector={true}
          dataCount={state.data?.length || 0}
          onClick={pageAndPerPage => console.log(pageAndPerPage)}
          empty={state?.data?.length === 0}
          perPage={20}
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
