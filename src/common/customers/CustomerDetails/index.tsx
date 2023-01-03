import React, { useEffect, useState } from 'react';
import { useFetching } from 'hooks/useFetching';
import { customerType } from 'types';
import { CustomerDetailsEntry } from './CustomerDetailsEntry';

export const CustomerDetails: React.FC<Props> = ({ id }) => {

    const [state, setState] = useState<{

        loading: boolean,

        customer?: customerType,

    }>({

        loading: true,

        // customer: localStorage?.getItem("customer")?.id === id ? (localStorage?.getItem("customer") as unknown as customerType) : undefined

    });

    const mainLayoutBody = document?.getElementsByClassName("main-layout-page-content");

    useFetching({

        dispatcher: () => (

            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`, { method: "GET" })

                .then(item => item?.json())

                .catch(() => ({}))
        ),

        setter: (e) => {

            if (e?.id) {

                setState((prevState) => ({ ...prevState, loading: false, customer: e }))

                localStorage.setItem(`customer-${id}`, JSON.stringify(e))

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

        />

    )

}


interface Props {

    id: string

}
