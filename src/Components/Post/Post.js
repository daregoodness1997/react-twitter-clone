import { Avatar } from '@material-ui/core';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';
import PostImage from '../../Images/postGif.jpg';
import React from 'react';
import './Post.css';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='postAvatar'>
        <Avatar src='' />
      </div>
      <div className='postBody'>
        {/* start post header */}
        <div className='postHeader'>
          <div className='postHeaderText'>
            <h3>
              Dare Goodness{' '}
              <span className='postHeaderSpecial'>
                <VerifiedUser className='postBadge' /> @daregoodness
              </span>
            </h3>
          </div>
          {/* start post header description */}
          <div className='postHeaderDescription'>
            <p>Building a Twitter Clone in react can be quite fun tho!</p>
          </div>
          {/* /end post header description */}
          <img src={PostImage} alt='' />
          <div className='postFooter'>
            <ChatBubbleOutline fontSize='small' />
            <Repeat fontSize='small' />
            <FavoriteBorder fontSize='small' />
            <Publish fontSize='small' />
          </div>
        </div>
        {/* /end post header */}
      </div>
    </div>
  );
};

export default Post;
