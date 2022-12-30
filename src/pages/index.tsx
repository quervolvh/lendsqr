import { LandingLayout } from 'layout/LandingLayout'

export default function Home() {
  return (

    <LandingLayout

      headTitle='Lendsqr - Sign in'
      isMobile={false}
      deviceWidth={1200}
    >

    <div className='auth'>

      <h1 className='auth-title'> Welcome! </h1>
      <p className='auth-subtitle'> Enter details to login. </p>

    </div>

    </LandingLayout>

  )
}
