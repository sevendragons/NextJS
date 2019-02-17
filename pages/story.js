import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import Error from './_error';

export default class story extends Component {
  static async getInitialProps({ req, res, query}) {
    let story;
    
    try {
      const storyId = query.id;
      const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
      story = await response.json();
      
    } catch (error) {
      console.log(error);
      story = null; 
      
    }

  
    return {story}

  }
  let 
  render() {
    const {story} = this.props;
    // let time = story.time_ago;
    // let hour = time/60;

    if (!story) {
      return <Error statusCode="503"></Error>
    }

    return (
      <Layout title="Hacker Story" backButton={true}>
        <main>
          <h1 className="story-title"><a href={story.url} target="_blank">{story.title}</a></h1>
          <div className="story-detail d-flex justify-content-start">
            <strong className="p-2 points">{story.points} Points</strong>
            <strong className="p-2">{story.comments_count} comment</strong>
            <strong className="p-2">{story.time_ago}</strong>
          </div>
        </main>


        <style jsx>{`
          main{
            padding: 1em;
          }
          .story-title{
            font-size: 1.2rem;
            margin: 0;
            border - top: 4 px solid orange;

          }
          .points {
            padding-left: 0!important;
          }
        
        `}</style>
      </Layout>
    )
  }
}
