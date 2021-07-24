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
              {displayName}
              <span className='postHeaderSpecial'>
                {verified && <VerifiedUser className='postBadge' />} @{username}
              </span>
            </h3>
          </div>
          {/* start post header description */}
          <div className='postHeaderDescription'>
            <p>{text}</p>
          </div>
          {/* /end post header description */}
          <img src={image} alt='' />
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
