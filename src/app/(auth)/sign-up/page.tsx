import React from 'react'
import AuthForm from '@/src/components/AuthForm'
import { signUp } from '@/src/lib/auth/actions';

const Page = () => {
  return <AuthForm mode="sign-up" onSubmit={signUp}/>
}

export default Page;