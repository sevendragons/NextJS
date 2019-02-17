import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';  
import Error from './_error';

import Link from 'next/link';
import Layout from '../components/Layout';
import { Button } from 'reactstrap';
import { authInitialProps } from '../lib/auth';

export default class About extends Component {
  // state = {
  //   user: null
  // };
  
  // static getInitialProps(){
  //    fetch('https://api.github.com/users/sevendragons')
  //    .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //       });

  //       return {};
  // }

  static async getInitialProps(){
     const res = await fetch('https://api.github.com/users/sevendragons');
     const statusCode = res.status > 200 ? res.status : false;
     
     const data = await res.json();

     return { user: data, statusCode };
  }

  // .err(console.log("Something Wrong Ehh. \u{1F627}")); 
  // componentDidMount() {
  // fetch('https://api.github.com/users/sevendragons')
  // .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user: data
  //       });
  //     });
  // }

  render() {
    const { user, statusCode } = this.props;

    if(statusCode) {
      return (<Error statusCode={statusCode}/>)
    }

    return (
      <Layout title="About Page">
          <h4>A Next JS Practice Program</h4>
          <Link href="/blog"><Button color="warning">Blog</Button></Link>
          <p>{user.name}</p> 
          <img src={user.avatar_url} alt="githubUser"/>
          <img src="/static/next.png" alt="logo next"/>
          
          {/* {JSON.stringify(this.props.user)} */}

      </Layout>
    )
    }
}

// About.getInitialProps = authInitialProps();

/**
|--------------------------------------------------
| Name of the file relate to name in route, If it capital route is capital.
| Sensitive case. localhost/About will not work because file name is about.js.
| Even you make a const About it still /about
|--------------------------------------------------
*/

