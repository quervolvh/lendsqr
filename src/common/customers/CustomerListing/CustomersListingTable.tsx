import { ComponentFilter } from 'components/Filters/ComponentFilter';
import { OptionsInput } from 'components/FormField/OptionInput';
import { Table } from 'components/Table';
import { useState } from 'react';
import { customerType } from 'types';
import { DD_MM_YY_HH_mm_a } from 'utils';
import { ActivateUserIcon, BlackListUserIcon, EyeIcon, Pagination, TableOptionItem } from 'components';
import { customersFilterOptions } from 'constants/customers';

export const CustomersListingTable: React.FC<Props> = ({ loading , data , isMobile }) => {

    const [state, setState] = useState<{

        page: number,

        perPage: number

    }>({

        page: 1,

        perPage: 20

    });

    const listingData = (data || [])?.map((item) => ([

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

                    options: customersFilterOptions,

                    onSubmit: () => null

                }}

            />

        </div>

    );

    return (

        <>

            <Table

                loader={loading}

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

                data={listingData?.filter((_, index) => {

                    const itemsToDisplayStart = (state.page - 1) * state.perPage;

                    const lowerLimit = itemsToDisplayStart;

                    const upperLimit = (state.page) * state.perPage;

                    if (index >= lowerLimit && index < upperLimit) {

                        return true;

                    }

                    return false;

                }

                )}

            />

            <Pagination

                isMobile={isMobile}

                pages={(data?.length || 0) / state.perPage}

                page={state.page}

                perPageSelector={true}

                dataCount={data?.length || 0}

                onClick={(pageAndPerPage) =>

                    setState({

                        page: pageAndPerPage.page,

                        perPage: pageAndPerPage.perPage,

                    })

                }

                empty={data?.length === 0}

                perPage={20}

            />

        </>

    )

}

interface Props {

    isMobile: boolean,

    loading: boolean,

    data: customerType[],

}
