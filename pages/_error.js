import Layout from '../components/Layout';

import React from 'react'

const error = ({ statusCode }) => {
  return (
    <Layout title="Error!! 😰 😱">
      {statusCode ? `Could not load your user Data: Status Code 🐏 ${statusCode}`
      : `We cann't find this page!!! sorry 😢 🐏 🐳 🐑 ` }
    </Layout>
  )
};


export default error