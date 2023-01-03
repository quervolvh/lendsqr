import React from 'react';
import { ActiveUsersIcons, CardsUsersIcon, SmallSummaryCard, UsersOnLoanIcons, UserWithSavingsIcons } from 'components';

export const CustomersListingSummary: React.FC = ({ }) => {

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

        <div className='customers-summary'>

            {summaryData.map((item) =>

                <SmallSummaryCard

                    key={`summary-for-${item.label}`}

                    {...item}

                />

            )}

        </div>

    )

}

