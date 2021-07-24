import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';
import db from '../../firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, []);

  return (
    <div className='feed'>
      <div className='feedHeader'>
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <FlipMove>
        {posts.map(post => (
          <Post key={post.text} {...post} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
