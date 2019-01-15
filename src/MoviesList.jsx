import React, { Component } from 'react';
import Movie from './Movie';
import styled from 'styled-components';

class MoviesList extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=131c87cb54773ae0f6c9b813ce9041b2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })

    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { movies } = this.state
    if (movies < 1) return <h1 data-testid='loading'>Loading...</h1>
    return (
      <MovieGrid>
        {movies.map(movie => <Movie data-testid='movie-link' key={movie.id} movie={movie} />)}
      </MovieGrid>

    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
display:grid;
padding:2rem 10rem;
grid-template-columns: repeat(5, 1fr);
grid-row-gap:1rem;

`;
