import axios from 'axios';


const API_KEY = process.env.YELP_KEY

export default axios.create({
    // where we make the root of the request 
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer 1sbomFnGTb5N4TXRXxlnIcczgEnCI8f5asqXyDW4_MPEggPCV5sxvrh_TRJZT8WBXiShMJ0b4kYBEKGTFdYzQfQ-gHywmXk1_bRobAPEEricGHYSn0SJGZ-qWLYjZHYx`
    }
})

