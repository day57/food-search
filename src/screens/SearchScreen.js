import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('')
    const [ results, setResults ] = useState([]);


    // const response is await get '/search'
    const searchApi = async () => {
        //waiting for the data , then when we get the data we assing it to the response variable
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        
        //we are calling our useState as setResults
        // the response comes with a .data property we can use to get the data back from the api and we get he businesses object 
        setResults(response.data.businesses)
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
          
            <Text>We have found: {results.length} results </Text>
        </View>
    )
}

export default SearchScreen