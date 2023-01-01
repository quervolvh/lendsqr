import React from 'react';
import { SearchIcon } from 'components';
import { FormField } from 'components/FormField';

export const MainLayoutHeaderSearch : React.FC<Props> = ({}) => {

    return (

        <div className='main-layout-topBar-search'>

            <FormField

                type='plain'

                withButton={{

                    vectorIcon : SearchIcon
                
                }}

            />

        </div>


    );

};


interface Props {}
