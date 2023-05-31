import React, { Component } from 'react'

import SocialMediaHandlers from './SocialMediaHandlers'

export class MediaItem extends Component {

    let = urlLink = "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/11/12/hacker-914537-1605128771.png?itok=3qvWFOBb"
 

  render() {
    return (
      <div>

      <SocialMediaHandlers urlLink={urlLink}/>
        
      </div>
    )
  }
}

export default MediaItem
