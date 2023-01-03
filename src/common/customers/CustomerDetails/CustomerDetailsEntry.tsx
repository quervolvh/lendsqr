import React from 'react';
import { customerType } from 'types';
import { CustomerOverview } from 'common/customers/CustomerOverview.tsx/CustomerOverview';
import { ViewFormatter } from 'components';
import { customerInformationBlock } from 'utils/customers';

export const CustomerDetailsEntry: React.FC<Props> = ({ customer , loading }) => {

    return (

            <>

                <CustomerOverview

                    customer={customer}

                    loader={loading}

                />

                <div className='customers-details'>

                    {customerInformationBlock(customer)?.map((item) => (

                        <div className='customers-details-block' key={`customers-details-for-${item.title}`}>

                            <h1 className='customers-details-block-title'> {item.title} </h1>

                            <div className='customers-details-block-entries'>

                                {item.blocks.map((item, index) =>

                                    <ViewFormatter

                                        className={loading ? "view-formatter-loader" : ""}

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

    )

}

interface Props {

    customer?: customerType,

    loading: boolean

}
