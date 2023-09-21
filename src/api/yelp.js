import axios from 'axios';
import { YELP_KEY } from '@env';


const API_KEY = YELP_KEY

export default axios.create({
    // where we make the root of the request 
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

