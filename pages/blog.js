import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout';
import { authInitialProps } from '../lib/auth';

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}




const blog = (props) => {
  return (
    <Layout title="My Blog" {...props}>
      <Link href="/hireme"><a className="btn btn-sucess">Hire Me</a></Link>
      <ul>
        <PostLink slug="react-post" title="React Post"></PostLink>
        <PostLink slug="angular-post" title="Angular Post"></PostLink>
        <PostLink slug="react-post2" title="React Post 2"></PostLink>
        <PostLink slug="vue-post" title="Vue Post"></PostLink>
        <PostLink slug="react-native" title="React  Native"></PostLink>
      </ul>

      <style jsx>{`
        .btn{ font-size: 17pt }
      `}</style>
    </Layout>
  )
}

blog.getInitialProps = authInitialProps();

export default blog

