/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../config";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

function Movie() {
    const [movieResult, setMovieResult] = useState({});
    const params = useParams();
    console.log(params, 'params');

    useEffect(() => {
        if (params.id) {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${params.id}`)
                .then(function (data) {
                    return data.json();
                })
                .then(function (response) {
                    console.log(response);
                    setMovieResult(response);
                })
                .catch(function (err) {
                    console.error(err);
                    setMovieResult({});
                });
        }
    }, []);

    if (Object.keys(movieResult).length === 0) {
        return (<p>Loading...</p>)
    }
    return (
        <section>
            <Container>
                <h2 style={{ textAlign: 'center' }}>{movieResult.Title}</h2>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>{movieResult.Title}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col xs={12} md={12} style={{ margin: '0 auto', width: '50%', height: '400px' }}>
                        <Image src={movieResult.Poster} rounded style={{ width: '100%', height: '100%' }} />
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <h2>Movie Details: </h2>
                    <ListGroup>
                        <ListGroup.Item>Language: {movieResult.Language || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Released on: {movieResult.Released || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Country: {movieResult.Country || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Plot: {movieResult.Plot || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Genre: {movieResult.Genre || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Run Time: {movieResult.Runtime || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Actors: {movieResult.Actors || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Director: {movieResult.Director || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Writer: {movieResult.Writer || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Box Office: {movieResult.BoxOffice || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>Awards: {movieResult.Awards || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>imdbRating: {movieResult.imdbRating || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item>imdbVotes: {movieResult.imdbVotes || 'N/A'}</ListGroup.Item>

                    </ListGroup>
                </Row>
            </Container>
        </section>
    )
}

export default Movie;