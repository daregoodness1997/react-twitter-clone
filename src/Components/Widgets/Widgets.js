import { Search } from '@material-ui/icons';
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgetsInput'>
        <Search className='widgetsSearchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>

      {/* Widget widgets container */}
      <div className='widgetsWidgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'933354946111705097'} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='_DareGoodness'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://facebook.com/daregoodness'}
          options={{ text: '#reactjs is awesome', via: '_DareGoodness' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
