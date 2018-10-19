import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
    state = {
        movie: {},
    }
    async componentDidMount() {

        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=131c87cb54773ae0f6c9b813ce9041b2&language=en-US`);

            const movie = await res.json();
            this.setState({
                movie: movie,
            })
        } catch (e) {
            console.log(e)
        }
    }


    render() {

        const { movie } = this.state;

        return (
            <div backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <img className="backdrop" src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
                <MovieInfo>
                    <Overdrive id={`${movie.id}`}>
                        <img className="poster" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                    </Overdrive>
                    <Description >
                        <h2>{movie.title}</h2>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </Description>
                </MovieInfo >
            </div >
        );
    }
}

export default MovieDetail;

const MovieInfo = styled.div`
background: white;
text-align: left;
padding: 2rem 2rem;
display: flex;
border: 2px solid #0F2027;
border-radius: 7px;
margin: 1rem 20%
`;

const Description = styled.div`
margin-left: 20px;
`;
