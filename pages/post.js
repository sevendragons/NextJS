import React from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';


// const post = ({url}) => {
const post = ({router}) => {
  return (
    <Layout title={router.query.title }>
      <p style={{ width:'80vw' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eveniet accusantium sed amet, repellat ratione!</p>  
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
    </Layout>
  )
} 



export default withRouter(post);