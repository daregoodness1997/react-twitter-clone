import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from '../../firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Dare Goodness',
      username: '_DareGoodness',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });
  };
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBoxInput'>
          <Avatar src=''></Avatar>
          <input
            placeholder="What's happening?"
            type='text'
            value={tweetMessage}
            onChange={e => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder='Optional: Enter image URL'
          type='text'
          className='tweetBoxImageInput'
        />

        <Button className='tweetBoxTweetButton'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
