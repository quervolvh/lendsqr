import React from 'react';
import { SearchIcon } from 'components';
import { FormField } from 'components/FormField';

export const MainLayoutHeaderSearch : React.FC<Props> = ({}) => {

    return (

        <div className='main-layout-topBar-search'>

            <FormField

                type={'plain'}

                placeHolder={"Search for anything"}

                withButton={{

                    vectorIcon : SearchIcon
                
                }}

            />

        </div>


    );

};


interface Props {}
