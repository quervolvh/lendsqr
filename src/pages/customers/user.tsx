import React, { useState } from 'react';
import { useFetching } from 'hooks/useFetching';
import { MainLayout } from 'layout/MainLayout';
import { customerType } from 'types';
import { CustomerOverview } from 'common/customers/CustomerOverview.tsx/CustomerOverview';
import { ViewFormatter } from 'components';

export const Customer: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const [state, setState] = useState<{

        loading: boolean,

        customer?: customerType,

    }>({

        loading: true,

    });

    const { customer } = state;

    const name = `${customer?.profile?.firstName || ""} ${customer?.profile?.lastName || ""}`;

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

    const informationBlocks = [

        {

            title: "Personal Information",
            blocks: [

                {
                    title: "FULL NAME",
                    value:  customer?.userName ? name : ""
                },

                {

                    title: "PHONE NUMBER",
                    value: customer?.phoneNumber

                },

                {

                    title: "EMAIL ADDRESS",
                    value: customer?.email

                },

                {

                    title: "BVN",
                    value: customer?.profile?.bvn

                },

                {

                    title: "GENDER",
                    value: customer?.profile?.gender

                },

                {

                    title: "MARITAL STATUS",
                    value:  customer?.userName ? "Single" : ""

                },

                {

                    title: "CHILDREN",
                    value: customer?.userName ? "None" : ""

                },

                {

                    title: "TYPE OF RESIDENCE",
                    value:  customer?.userName ? "Parents Apartment" : ""

                }

            ]

        },

        {

            title: "Education and Employment",
            blocks: [

                {
                    title: "LEVEL OF EDUCATION",
                    value: customer?.education?.loanRepayment
                },

                {
                    title: "EMPLOYMENT STATUS",
                    value: customer?.education?.employmentStatus
                },

                {
                    title: "SECTOR OF EMPLOYMENT",
                    value: customer?.education?.sector
                },

                {
                    title: "DURATION OF EMPLOYMENT",
                    value: customer?.education?.duration
                },

                {
                    title: "OFFICE EMAIL",
                    value: customer?.education?.officeEmail
                },

                {
                    title: "MONTHLY EMAIL",
                    value: customer?.education?.monthlyIncome
                },

                {
                    title: "LOAN REPAYMENT",
                    value: customer?.education?.loanRepayment
                }

            ],

        },

        {

            title: "Socials",
            blocks: [

                {
                    title: "TWITTER",
                    value: customer?.socials?.twitter
                },

                {
                    title: "FACEBOOK",
                    value: customer?.socials?.facebook
                },

                {
                    title: "INSTAGRAM",
                    value: customer?.socials?.instagram
                },

            ]

        },

        {

            title: "Guarantor",
            blocks: [

                {
                    title: "FULL NAME",
                    value:  customer?.userName ? `${customer?.guarantor?.firstName || ""} ${customer?.guarantor?.lastName || ""}` : ""
                },

                {
                    title: "PHONE NUMBER",
                    value: customer?.guarantor?.phoneNumber
                },

                {
                    title: "EMAIL ADDRESS",
                    value: customer?.guarantor?.email
                },

                {
                    title: "RELATIONSHIP",
                    value: customer?.guarantor?.relationship
                }

            ]

        },

        {

            title: "Next Of Kin",
            blocks: [

                {
                    title: "FULL NAME",
                    value:  customer?.userName ? `${customer?.guarantor?.firstName || ""} ${customer?.guarantor?.lastName || ""}` : ""
                },

                {
                    title: "PHONE NUMBER",
                    value: customer?.guarantor?.phoneNumber
                },

                {
                    title: "EMAIL ADDRESS",
                    value: customer?.guarantor?.email
                },

                {
                    title: "RELATIONSHIP",
                    value: customer?.guarantor?.relationship
                }

            ]

        }


    ]

    return (

        <MainLayout
            title='Lendsqr - Customer'
            displayTitle='User Details'
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            active={"customers"}
        >

            <>

                <CustomerOverview 
                
                    customer={customer} 
                    
                    loader={state.loading} 
                    
                />

                <div className='customers-details'>

                    {informationBlocks.map((item) => (

                        <div className='customers-details-block' key={`customers-details-for-${item.title}`}>

                            <h1 className='customers-details-block-title'> {item.title} </h1>

                            <div className='customers-details-block-entries'>

                                {item.blocks.map((item, index) =>

                                    <ViewFormatter

                                        className={state.loading ? "view-formatter-loader" : ""}

                                        key={`customers-details-for-${item.title}-data-${index}`}

                                        value={item.value}

                                        label={item.title}

                                    />

                                )}

                            </div>

                        </div>

                    ))}


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
