import _ from 'Lodash';
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTsearch from 'youtube-api-search';
import VideoList  from './components/videoList';
import VideoDetail from './components/videoDetail';

const APIkey = "AIzaSyBvrkVLCHG-1T7C_9xKGK51iBdxJiHNsHY";


class App extends Component {

    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Dusk till dawn');
}

    videoSearch(term) {
                
    YTsearch({key: APIkey , term: term} , (videos) => {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
});
    }

    render(){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
        <div>
        <SearchBar onSearchTermChange={videoSearch}
        
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} 
         />
        </div>
    );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));