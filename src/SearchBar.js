import React from 'react';
import './SearchBar.css'
import FilterBookType from './FilterBookType';
import FilterPrintType from './FilterPrintType';
import Results from './Results';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            showResults: false,
            input: '',
            print: 'all',
            book: 'null',
            res: [],
            infoTitle: '',
            error: ''
          }
    }

    inputChanged = (value) => {
        this.setState({
            input: value
        });
    }

    printTypeChange(e) {
        this.setState({
          print: e
        });
      }
    
    bookTypeChange(value) {
        this.setState({
            book: value
        });
    }

    setShowResults(show) {
        this.setState({
          showResults: show
        });
    }

    fetchBooks(baseURL, params) {
        function formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
        };
    
        const queryString = formatQueryParams(params);
        const url = baseURL + '?' + queryString;
        const filters = {
            method: 'GET',
        };
    
        fetch(url, filters)
            .then(response => {
                if (!response.ok) {
                throw new Error('Something went wrong, please try again later.');
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    res: data.items, 
                    error: null
                });
            })
            .then(() => this.setShowResults(true))
            .catch(err => {
                this.setState({
                error: err.message
                });
            });   
    }

    searchClick(e, parameters) {
        e.preventDefault();
        e.stopPropagation();
        const baseURL = 'https://www.googleapis.com/books/v1/volumes'; 
        const paramsA = {
            'q': parameters[0],
            'filter': parameters[1],
            'printType': parameters[2],
            'key': 'AIzaSyB4bzrgkKCjJaiNcuraOA31G6z8I5J47gU'
        };
        const paramsB = {
            'q': parameters[0],
            'printType': parameters[2],
            'key': 'AIzaSyB4bzrgkKCjJaiNcuraOA31G6z8I5J47gU'
        };

        if (!paramsA.q) {
            alert('Please enter search terms!')
        }
        else if (!paramsA.filter) {
            let params = paramsB
            this.fetchBooks(baseURL, params)
        }
        else {
            let params = paramsA
            this.fetchBooks(baseURL, params)
        }
        
    }

    render() {
        const parameters = [this.state.input, this.state.books, this.state.print];
        return(
            <div className = 'searchBar'>
                <form className = 'searchWrapper'>
                    <label className = 'font' htmlFor = 'SearchBar'>Search:</label>
                    <input 
                        type = 'text' 
                        name = 'searchInput' 
                        placeholder = 'henry'
                        value = {this.state.input}
                        onChange = {e => this.inputChanged(e.target.value)}/>
                    <button 
                        className = 'search'
                        type = 'click'
                        onClick = {(e) => this.searchClick(e, parameters)}>
                            Search
                    </button>
                </form>
                <form className = 'filterWrapper'>
                    <label className = 'font' htmlFor = 'printType' >Print Type:</label>
                    <FilterPrintType 
                        print = {this.props.print}
                        printTypeChange = {e => this.printTypeChange(e)}/>
                    <label className = 'font' htmlFor = 'bookType'>Book Type:</label>
                    <FilterBookType 
                        book = {this.props.book}
                        bookTypeChange = {e => this.bookTypeChange(e)}/>
                </form>
                <section 
                    className = 'resultsWrapper'
                    style = {{display: this.state.showResults ? 'block' : 'none'}}>
                    <h2>Search Results for {this.state.input}</h2>
                    <Results 
                        response = {this.state.res}/>
                </section>
            </div>
        )
    }

}

export default SearchBar;