import React from 'react';
import VideoListItem from './videoListItem';


const videoList = (props) => {

    const videoItem = props.videos.map((video) => {
        return (
              <VideoListItem 
              onVideoSelect = {props.onVideoSelect}
              key={video.etag} 
              video={video} 
            />
        );
        });

    return(
    <ul className = 'col-md-4 list-group'>
        {videoItem}
    </ul>
    );
}

export default videoList;