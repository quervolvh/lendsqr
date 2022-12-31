import { Login } from 'common/auth/Login'
import { LandingLayout } from 'layout/LandingLayout'

export const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

  return (

    <LandingLayout
      headTitle='Lendsqr - Sign in'
      isMobile={isMobile}
      deviceWidth={deviceWidth}
    >

      <Login />

    </LandingLayout>

  )

}

export default Home;

interface Props {

  isMobile: boolean,

  deviceWidth: number

}
