import Layout from './Layout';
import Link from 'next/link';

const StoryList = ( {stories} ) => (
  <div className="story-list">
    { 
      stories.map( story => (
        <div key={story.id}>
          <h2 className="story-title"><a href={story.url} target="_blank">{story.title}</a></h2>   
          <div className="story-details d-flex justify-content-start">
            <span className="p-2 points">{ story.points || 0 } points</span>
            <Link href={`/story?id=${story.id}`}>
              <span className="d-flex align-items-center comments"><a>{story.comments_count || 0} comments (click here 🖥 💻 💪)</a></span>
            </Link>
          </div>
        </div>
      ) )
    }


    <style jsx>{`
      story-list{
        padding: 0 1.2em;
      }
      .story{
        padding: 1em 0;
      }

      .story-title{
        font-size: 1.3rem;
        font-weight: 400;
        margin: 16px 0 0 0;
        border-top: 4px solid orange;
        padding-top: 8px
      }

      .points, .comments{
        font-size: 1.2rem;
        font-family: cursive
        margin-bottom: 12px;
      }
      
      .comments{
        padding-left: 8px;
        cursor: copy;
      }
      .comments:hover{
        color: #460ce8;
      }
    
    `}
    </style>
  </div>

)

export default StoryList
