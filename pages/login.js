import React from 'react'

import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import { authInitialProps } from '../lib/auth';

export default function login(props) {
  return (
    <Layout title="Login with cookies" {...props }>
      <LoginForm></LoginForm>
      <h3>Password is website; check the json file</h3> 
    </Layout>
  )
}

login.getInitialProps = authInitialProps();