import React, { useState } from 'react';
import { FormField } from 'components';
import { classnames } from 'utils';
import { PaginationPages } from './PaginationPages';

export const Pagination: React.FC<Props> = ({ pages, page, perPageSelector, perPage = 20, empty, dataCount, ...props }) => {

    const initialState = perPage || 20;

    const [_perPage, _setPerPage] = useState(initialState);

    const Page = Number(page || 0) || 0;

    const Pages = Number(pages || 0) || 0;

    const conditions = {

        doublePrev: Page !== 1,

        prev: Page - 1 > 0 && Page > 1,

        next: (Page + 1) <= Pages,

        doubleNext: Page !== Pages

    }

    const greyOut = "color-secondary-text";

    const clickHer = (e: { page: number, perPage: number }) => props.onClick(e);

    const buttonProps = { role: "button", tabIndex: 0 };

    return (
        <div className='pagination'>
            {

                !empty &&

                <div className="pagination-flex">

                    {
                        perPageSelector !== false &&

                        <div className="pagination-opt">

                            <b> SHOWING </b>

                            <FormField

                                type="option"
                            
                                options={["20", "40", "60", "80", "100"]}
                            
                                value={String(perPage || _perPage)}
                            
                                onChange={(e) => {
                                    _setPerPage(e);
                                    clickHer({ perPage: e, page: 1 })
                                }}
                                
                            />

                            <b> OUT OF {dataCount} </b>

                        </div>

                    }

                    <PaginationPages 
                    
                        page={page} 
                        
                        pages={pages}

                        perPage={perPage}
                        
                    />

                </div>

            }

        </div>

    );
};

interface Props {
    dataCount: number,
    pages: number,
    page: number,
    perPage?: number,
    onClick: (e: { perPage: number, page: number }) => void,
    perPageSelector?: boolean,
    empty?: boolean
}
