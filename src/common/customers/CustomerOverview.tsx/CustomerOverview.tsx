import React, { useState } from 'react';
import { customerType } from 'types';
import { GoldenStar, SummaryCardSvg, ViewFormatter } from 'components';
import { ItemTypeToggle } from 'components/ItemTypeToggle';

export const CustomerOverview: React.FC<Props> = ({ customer }) => {

    const [activeTab, setActiveTab] = useState("general");

    const name = `${customer?.profile?.firstName || ""} ${customer?.profile?.lastName || ""}`;

    const tabs = [

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

    ];

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


    return (

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

                <ItemTypeToggle items={tabs} />

            </div>

        </div>

    )

}

interface Props {

    customer?: customerType

}
