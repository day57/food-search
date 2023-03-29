import axios from 'axios';


const API_KEY = process.env.YELP_KEY

export default axios.create({
    // where we make the root of the request 
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

