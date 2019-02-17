import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Link from 'next/link';

import Layout from '../components/Layout';
import Error from './_error';
import StoryList from '../components/StoryList';
import { authInitialProps } from '../lib/auth';



class hackerNews extends Component {
  static async getInitialProps({req, res, query}) {
    let stories;
    let page;
    console.log(query);
    
    
    try {
      page = Number(query.page) || 1 ;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
      
    } catch (error) {
      console.log(error);
      stories = [];
    }
    
    return { page, stories };
  }


  componentDidMount() {
    if("serviceWorker" in navigator){
      navigator.serviceWorker
      .register('service-worker.js')
      .then(registration => {console.log('service worker registration successful', registration)} )
      .catch(err => {console.warn('service worker resgistration failed with emoji harrash 😩 😡 😕 🙁 😣 😖 😞 😒 😏 😔 😟 😳 😱 😨 😰 😥 😓 🤕 😢 😭', err.message)}
      )
    }
  }

  render() {
    const { stories, page } = this.props;
    if ( stories.length === 0 ) {
      return <Error statusCode={503} />
    }

    return (
      <Layout title="Hacker News">
        <StoryList stories={stories}/>
        
        <footer>
          <Link href={`/hackerNews/?page=${page+1}`}>
            <a>Next Page ({ page + 1 })</a>
          </Link>
        </footer>

        <style jsx>{`
          footer a {
            text-decoration: none;
            color: deeppink;
            text-align: center;
          
          }
          footer a:hover {
            color: black
          }
        `}</style>
      </Layout>
      
    )
  }
}


export default hackerNews
