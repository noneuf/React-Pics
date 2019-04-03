import React, { Component } from 'react'

class SearchBar extends Component {

    state = {term: ''};
    // onInputChange(event) { //it is a convention to name methods likewise, on (or handle) The Name Of The Element And The Event
    //     console.log(event.target.value)
    // }

    onFormSubmit = (event) => {
        event.preventDefault(); //prevents the page to refresh on submit
        this.props.onSubmit(this.state.term)
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input 
                    type="text" 
                    value={this.state.term} 
                    placeholder="Search..." 
                    /*onChange={this.onInputChange}*/ 
                    onChange={(e) => this.setState({ term: e.target.value})}/> {/* the event handler (onChange here) might be shortened using inline sintax: (e) => console.log(e.target.value)*/}
            </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
