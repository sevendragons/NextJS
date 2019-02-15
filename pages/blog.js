import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}




const blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react-post" title="React Post"></PostLink>
        <PostLink slug="angular-post" title="Angular Post"></PostLink>
        <PostLink slug="react-post2" title="React Post 2"></PostLink>
        <PostLink slug="vue-post" title="Vue Post"></PostLink>
        <PostLink slug="react-native" title="React  Native"></PostLink>
      </ul>
    </Layout>
  )
}

export default blog
