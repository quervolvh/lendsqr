import React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'components';

export const MainLayoutUserBox: React.FC<Props> = ({ avatar, title }) => {

  return (

        <div className="main-layout-topBar-userBox">

          <Link

            href={"/customers"}

          >

            <img 
            
                className='main-layout-topBar-user-avatar' 
                
                src={( avatar || "/png/user-avatar.png") as any} 
                
                alt={'user--'} 
                
            />

            <p> { title || "Adedeji"} </p>

            <span dangerouslySetInnerHTML={{ __html: ArrowDown }} />

          </Link>

        </div>

  );

};


interface Props {
  avatar?: string,
  title?: string
}
