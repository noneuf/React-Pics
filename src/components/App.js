import React, { Component } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

    state = { images: [] }

     /* use async instead of .then -->*/ onSearchSubmit = async term => {
        const response = await /* <-- use this instead of .then */ unsplash.get('search/photos', {
            params: { query: term},
            
        });
        // .then((res) => {
        //     console.log(res.data.results);
        // }); //this is the method we can use to handle the response, the other one is async await.
        this.setState( { images: response.data.results } ) // using async await, you just do whatever with the data without .then
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App


