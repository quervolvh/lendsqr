import { Button } from 'components'
import { FormField } from 'components/FormField'
import { useRouter } from 'next/router'

export const Login: React.FC = () => {

    const router = useRouter();

    return (

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

                <Button label='LOG IN' onClick={()=> router.push("/customers")} />

            </div>

        </div>

    )
}
