import Link from 'next/link';
import Head from 'next/head';
import Styled, { ThemeProvider, keyframes  } from 'styled-components';
import Router, { withRouter } from 'next/router';
import NProgress from 'nprogress';
import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

import { logoutUser } from '../lib/auth';

Router.onRouteChangeStart = router => {
  console.log(router);
  NProgress.start();
  
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


class Layout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  render(){
    const { children, title, auth ,backButton}  = this.props;
    const { user = {} } = auth || {}; 
      return (
        <div className="layout">
          <Head>
            <title>Port Folio - Hacker Next</title>
          </Head>

          <header className="animated fadeIn">
            <Link href="/"><a>
              <span className="text-light welcome"> Welcome, <strong>  { user.name || "Guest" } </strong></span>
              <i className="fas fa-home"></i></a>
            </Link>

            {user.email ? (
              <React.Fragment>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle className="btn btn-info" caret>
                    Other
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem color="warning" onClick={logoutUser}>Logout</DropdownItem>
                    <Link href="/profile"><DropdownItem>Profile</DropdownItem></Link>
                    <Link href="/about"><DropdownItem>About</DropdownItem></Link>
                    <Link href="/hackerNews"><DropdownItem>Hacker News</DropdownItem></Link>
                  </DropdownMenu>
                </Dropdown>

                {/* <Link href="/blog"><a>Blog</a></Link> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link href="/register"><a>Register</a></Link>
                <Link href="/login"><a>Login</a></Link>  
              </React.Fragment>


            ) }          
          </header>

          <h1>{title}</h1>
          { backButton && <span onClick={ () => Router.back() } className="back-buuton btn btn-info">&#x2b05; Back 🤯 👈 ⬅️</span> } 
          { children }

          <footer>
            <span>&copy;</span>
            <span>{new Date().getFullYear()}</span>
          </footer>

          <style jsx>{`
            h1{
              margin: 16px auto;
            }
            .layout {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin: 0 auto;
            }
            
            header{
              width: 100%;
              display: flex;
              justify-content: space-around;
              padding: 1.2em;
              font-size: 1.2rem;
              background: rgb(37.4%, 10.9%, 90.9%);
            }
            .welcome{
              margin-right: 12px
            }

            header a{ 
              color: whitesmoke;
              text-decoration: none;
            }
            header a: hover{
              font-weight: bold;
              color: lightgrey;
            }
            footer{
              padding: 1em;
              display: flex;
              justify - content: center;
              flex - direction: column;
            }
            footer span{
              margin-right: 12px;
              font-size: 21pt;
            }
          `}</style>

          <style global jsx>{`
            body {
              margin: 0;
              font-size: 110%;
              background: #f0f0f0
            }
          `}
          </style>
        </div>
      )
    }
}


export default withRouter(Layout);


{/* second technique */}
{/* const Layout = ({ title, children, auth}) => {
  const { user = {} } = auth || {};
  return (
    <div className="something"></div>
  )
} */}
