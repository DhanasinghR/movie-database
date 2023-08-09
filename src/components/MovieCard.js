
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function MovieCard(props) {
    console.log(props);
    const { movie } = props;
    const navigate = useNavigate();

    const goToMoviePage = (movieId) => {
        navigate(`/${movieId}`);
        return;
    };

    return (
        <Card style={{ width: '18rem', marginBottom: '10px'}}>
            <Card.Img 
                variant="top" 
                src={movie.Poster} 
                style={{ minHeight: '400px', maxHeight: '400px' }} 
            />
            <Card.Body style={{ flexBasis: '175px' }}>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    Year: {movie.Year}, Type: {movie.Type}
                </Card.Text>
                <Button variant="primary" onClick={() => goToMoviePage(movie.imdbID)}>Check this movie</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;