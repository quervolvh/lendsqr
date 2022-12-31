import { Button } from 'components'
import { FormField } from 'components/FormField'
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

        <div className='auth-form'>

          <FormField placeHolder={"Email"} />

          <FormField placeHolder={"Password"} type={"password"} />

          <p

            className='auth-forgot-password-switch'

            role={"button"}

          >

            FORGOT PASSWORD?

          </p>

          <Button label='LOG IN' />

        </div>

      </div>

    </LandingLayout>

  )
}
