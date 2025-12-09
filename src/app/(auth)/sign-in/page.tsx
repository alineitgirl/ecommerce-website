import AuthForm from '@/src/components/AuthForm';
import { signIn } from '@/src/lib/auth/actions';

const Page = () => {
  return <AuthForm mode="sign-in" onSubmit={signIn}/>
}

export default Page;