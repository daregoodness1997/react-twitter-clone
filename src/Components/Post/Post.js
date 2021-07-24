import { Avatar } from '@material-ui/core';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';
import React, { forwardRef } from 'react';
import './Post.css';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className='post' ref={ref}>
        <div className='postAvatar'>
          <Avatar src={avatar} />
        </div>
        <div className='postBody'>
          {/* start post header */}
          <div className='postHeader'>
            <div className='postHeaderText'>
              <h3>
                {displayName}
                <span className='postHeaderSpecial'>
                  {verified && <VerifiedUser className='postBadge' />} @
                  {username}
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
  }
);

export default Post;
