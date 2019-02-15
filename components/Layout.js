import Link from 'next/link';
import Head from 'next/head';
import Styled, { ThemeProvider, keyframes  } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
  
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();



const Layout = ({children, title}) => (
    <div className="layout">
      <Head>
        <title>Next Something Folio</title>
      </Head>

      <header className="animated fadeIn">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/hireme"><a>Hire Me</a></Link>
      </header>

      <h1>{title}</h1>
      {children}

      <footer>
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </footer>

      <style jsx>{`
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


export default Layout