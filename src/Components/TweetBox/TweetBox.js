import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBoxInput'>
          <Avatar src=''></Avatar>
          <input placeholder="What's happening?" type='text' />
        </div>
        <input
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
