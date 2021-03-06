import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    // This is given to the <MovieCard/> component by the outer world
    // which, in this case, is `MainView`, as `MainView` is what’s
    // connected to your database via the movies endpoint of your API
    const { movie } = this.props;

    return (
      <div className="col-lg-3 col-md-4 col-sm-4 p-2">
        <Card className="movie-card">
          <Card.Img variant="top" src={movie.ImagePath} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Description}</Card.Text>
            <Link to={`/movies/${movie._id}`}>
              <Button variant="primary">Open</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );

    /*return (
    <div onClick={()=>onClick(movie)} className="movie-card">
        <span>{movie.Title}</span>
        <img className="movie-poster" src={movie.ImagePath} />
    </div>
    );*/
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string
  }).isRequired
};
