import React from 'react';

const videoDetail = ({video}) => {

    if(!video){
        return <div>Breath in........Breath Out......!!</div>
    }


    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><h3>{video.snippet.title}</h3></div>
                <div><p>{video.snippet.description}</p></div>
            </div>
        </div>
    );

};

export default videoDetail;