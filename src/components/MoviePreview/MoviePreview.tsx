import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return (
    <div className={styles.movieCard} onClick={goToMovieDetails}>
      <img src={POSTER_URL_PREFIX + movie.poster_path}></img>
      <p className={styles.title}>{movie.title}</p>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
        <span className={`${styles.star} ${
          ((movie.vote_average/2) <= index) ? styles.gray : styles.yellow
        }`}>★</span>
      ))}
      </div>
      
    </div>
  );
};

export default MoviePreview;
