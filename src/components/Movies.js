import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API_KEY } from "../config";
import MovieCard from "./MovieCard";

function Movies() {
    const [searchItem, setSearchItem] = useState('');
    const [movieResults, setMovieResults] = useState([]);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=god&y=2023`)
            .then(function(data) {
                console.log(data);
                return data.json();
            })
            .then(function(response) {
                console.log(response);
                if (response.Response === 'True') {
                    setMovieResults(response.Search);
                } else {
                    setMovieResults([]);
                }
            })
            .catch(function(err) {
                console.error(err);
                setMovieResults([]);
            });
    }, []);

    const searchMovies = (event) => {
        event.preventDefault();
        console.log('submit', searchItem);
        if (searchItem) {
            console.log('if case');
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchItem}`)
            .then(function(data) {
                console.log(data);
                return data.json();
            })
            .then(function(response) {
                console.log(response);
                if (response.Response === 'True') {
                    setMovieResults(response.Search);
                } else {
                    setMovieResults([]);
                }
            })
            .catch(function(err) {
                console.error(err);
                setMovieResults([]);
            });
        }
    };
    return (
        <section>
            <Container>
                <Form style={{ margin: '20px auto' }} onSubmit={searchMovies}>
                    <Form.Group 
                        className="mb-3" 
                        controlId="exampleForm.ControlInput1" 
                        style={{ textAlign: 'center' }}
                    >
                        <Row style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter a movie name.." 
                                style={{ width: '50%', background: '#a3a1b9'}}
                                onChange={(event) => setSearchItem(event.target.value)}
                                value={searchItem}
                            />
                            <Button variant="primary" type="submit" style={{ width: '100px', marginLeft: '10px', background: '#a3a1b9' }}>Search</Button>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
            
            <Container>
                {searchItem && movieResults.length > 0 && (<p>Search Movie: {searchItem}</p>)} 
                {searchItem && movieResults.length === 0 && (<p>No movies found {searchItem}</p>)}
            </Container>
            {movieResults.length > 0 ? (
                 <Container>
                    <Row>
                        {movieResults.map((movie) => {
                            return (
                                <Col key={movie.imdbID}>
                                    <MovieCard movie={movie} />
                                </Col>
                            )
                        })}
                    </Row>
               </Container>
            ) : null}
        </section>
    )
}

export default Movies;