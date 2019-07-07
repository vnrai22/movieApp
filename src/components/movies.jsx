import React, { Component } from 'react';
import Pagination from './common/pagination';
import { getMovies }  from '../services/fakeMovieServices';

class Movies extends Component {
    state = { 
        movies : getMovies() ,
        pageSize: 2
    };
    
     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : movies});
    }
    handlePagechange = (page) =>{
        console.log(page);
    }

    render() { 
        const {length: moviesCount} = this.state.movies;
        if(moviesCount === 0 ) return <p>There are no movies </p>

        return ( 
            <React.Fragment>
            <p>Showing {moviesCount} movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>In Stock</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => <tr key={movie._id}>
                        <td>{movie._id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.price}</td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    )}
                    
                </tbody>

            </table>
            <Pagination 
                itemsCount={this.state.movies.length} 
                pageSize={this.state.pageSize} 
                onPageChange= {this.handlePagechange}></Pagination>
            </React.Fragment>
        );
    }
}
 
export default Movies;