import React, { Component } from 'react'

import Layout from '../components/Layout';
import { getUserProfile, authInitialProps } from '../lib/auth';


export default class profile extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    getUserProfile().then(user => this.setState({ user }))
  }
  
  render() {
    return (
      <Layout title="Profile User" {...this.props}>
        <pre>
          {JSON.stringify(this.state.user, null, 2)}
        </pre>


      </Layout> 
    )
  }
}

profile.getInitialProps = authInitialProps(true);