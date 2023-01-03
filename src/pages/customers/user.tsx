import React, { useState } from 'react';
import { useFetching } from 'hooks/useFetching';
import { MainLayout } from 'layout/MainLayout';
import { customerType } from 'types';
import { GoldenStar, SummaryCardSvg, ViewFormatter } from 'components';
import { ItemTypeToggle } from 'components/ItemTypeToggle';

export const Customer: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const [activeTab, setActiveTab] = useState("general");

    const [state, setState] = useState<{

        loading: boolean,

        customer?: customerType,

    }>({

        loading: true,

    });

    const { customer } = state;

    const name = `${customer?.profile?.firstName || ""} ${customer?.profile?.lastName || ""}`;

    const UserTier = () => (

        <div className='customer-user-tier'>

            <p> {"User's"} Tier </p>

            <div>

                <span dangerouslySetInnerHTML={{ __html: GoldenStar }} />

                <span dangerouslySetInnerHTML={{ __html: GoldenStar }} />

                <span dangerouslySetInnerHTML={{ __html: GoldenStar }} />

            </div>

        </div>

    );

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

                <div className='customers-user-summary'>

                    <div className='summary-card summary-card-big'>

                        <div className='summary-card-big-top'>

                            <div
                                className="summary-card-small-icon"
                                dangerouslySetInnerHTML={{ __html: SummaryCardSvg }}
                            />

                            <div className='summary-card-big-top-content'>

                                <ViewFormatter label="LSQFf587g90" value={name} />

                                <UserTier />

                                <ViewFormatter value={customer?.accountBalance} label={"9912345678/Providus Bank"} />

                            </div>

                        </div>

                        <ItemTypeToggle

                            items={[

                                {
                                    label: "General Details",
                                    onClick: () => setActiveTab("general"),
                                    active: activeTab === "general"

                                },

                                {
                                    label: "Document",
                                    onClick: () => setActiveTab("document"),
                                    active: activeTab === "document"

                                },

                                {
                                    label: "Bank Details",
                                    onClick: () => setActiveTab("details"),
                                    active: activeTab === "details"

                                },

                                {
                                    label: "Loans",
                                    onClick: () => setActiveTab("loans"),
                                    active: activeTab === "loans"

                                },

                                {
                                    label: "Savings",
                                    onClick: () => setActiveTab("savings"),
                                    active: activeTab === "savings"

                                },

                                {
                                    label: "App and System",
                                    onClick: () => setActiveTab("app"),
                                    active: activeTab === "app"

                                }

                            ]}

                        />

                    </div>


                </div>

            </>

        </MainLayout>

    )

}

export default Customer;

interface Props {

    isMobile: boolean,

    deviceWidth: number

}
