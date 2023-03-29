import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);
    const [errorMessage, setErroMessage ] = useState('');


    // const response is await get '/search'
    const searchApi = async (searchTerm) => {
        try {    
            //waiting for the data , then when we get the data we assing it to the response variable
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            
            //we are calling our useState as setResults
            // the response comes with a .data property we can use to get the data back from the api  
            setResults(response.data.businesses)
    
        } catch (err) {
            setErroMessage('Something went wrong ');
        }
    }

    

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
          
            <Text>We have found: {results.length} results </Text>
        </View>
    )
}

export default SearchScreen