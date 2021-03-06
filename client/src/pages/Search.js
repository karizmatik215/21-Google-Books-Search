import React, { Component } from 'react';
import Form from '../components/Form';
import Results from '../components/Results';
import API from '../utils/API';

class Search extends Component {
  state = {
    value: '',
    books: [],
  };

  componentDidMount() {
    this.searchBook();
  }

  makeBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((bookData) => this.makeBook(bookData)),
        })
      )
      .catch((err) => console.error(err));
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <h2>Results</h2>
          <Results books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;
