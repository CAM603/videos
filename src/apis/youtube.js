import axios from 'axios'

const KEY = 'AIzaSyDeZVAmAG6KixrmzhQ6vYHhJQPx5x7kbcM';

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});