import React from 'react';
import { images } from 'constants/index';
import { LinkWrapper, NotificationsIcon } from 'components';
import { MainLayoutUserBox } from './MainLayoutUserBox';
import { MainLayoutHeaderSearch } from './ManLayoutHeaderSearch';

export const MainLayoutFullHeader: React.FC<Props> = ({ avatar, title }) => {

  return (
    <div className="main-layout-full-header main-layout-topBar">

      <div className="main-layout-topBar-company">

        <div className="main-layout-topBar-company-box">

          <LinkWrapper link='/'>

            <img src={images.lendsqr} alt={"Lendsqr"} />

          </LinkWrapper>

        </div>

      </div>

      <div className='main-layout-topBar-right'>

        <MainLayoutHeaderSearch />

        <LinkWrapper

          className='main-layout-topBar-right-docs'

          link={"/customers"}>

          <p> Docs  </p>

        </LinkWrapper>

        <span

          className='main-layout-topBar-right-notifications'

          dangerouslySetInnerHTML={{ __html: NotificationsIcon }}

        />

        <MainLayoutUserBox avatar={avatar} title={title} />

      </div>


    </div>
  );

};


interface Props {
  avatar?: string,
  title?: string
}
