import React, { useEffect, useState } from 'react';
import { useFetching } from 'hooks/useFetching';
import { customerType } from 'types';
import { CustomerDetailsEntry } from './CustomerDetailsEntry';

export const CustomerDetails: React.FC<Props> = ({ id }) => {

    const [state, setState] = useState<{

        loading: boolean,

        customer?: customerType,

        error?: boolean

    }>({

        loading: true,

    });

    const mainLayoutBody = document?.getElementsByClassName("main-layout-page-content");

    useFetching({

        dispatcher: () => (

            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`, { method: "GET" })

                .then(item => item?.json())

                .catch(() =>({}))
        ),

        setter: (e) => {

            if (e?.id) {

                setState((prevState) => ({ ...prevState, loading: false, customer: e }))

                localStorage.setItem(`customer-${id}`, JSON.stringify(e))

            } else {

                setState((prevState)=> ({...prevState , error: true}))

            }

        },

        safeParams: []

    });

    useEffect(() => {

        if (mainLayoutBody?.[0]) {

            mainLayoutBody?.[0]?.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

        const item = localStorage?.getItem(`customer-${id}`);

        if (item) {

            try {

                const parsedItem = JSON.parse(item);

                if (parsedItem?.id) {

                    setState((prevState) => ({ ...prevState, customer: parsedItem, loading: false }))

                }

            } catch (e) { }

        }

        // eslint-disable-next-line
    }, []);

    return (


        <CustomerDetailsEntry

            customer={state?.customer}

            loading={state.loading}

            error={!state?.customer?.id && state.error === true}            

        />

    )

}


interface Props {

    id: string

}
