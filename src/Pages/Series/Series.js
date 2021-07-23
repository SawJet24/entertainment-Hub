import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenres from "../../hooks/useGenres";

const Series = () => {
    const [page, setPage] = useState(1);
    const[content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres]= useState([]);
    const [genres, setGenres ] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchMovies = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
        );
        //console.log(data);
        setContent(data.results)
        setNumOfPages(data.total_pages)
    };

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL])


    return (
        <div>
            <h5 className="PageTitle"> TV Series </h5>
            <Genres 
             type="tv"
             selectedGenres={selectedGenres}
             setSelectedGenres={setSelectedGenres}
             genres={genres}
             setGenres={setGenres}
             setPage={setPage}
            />
            <div className='trending'>
            {
                    content && content.map((content) => (
                        <SingleContent 
                        key={content.id}
                        id={content.id}
                        poster={content.poster_path}
                        title={content.title || content.name} 
                        date= {content.first_air_date || content.release_date}
                        media_type="tv"
                        vote_average={content.vote_average}
                        />
                    ))
            }
            </div>
            {numOfPages > 1 && 
            (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
        
        </div>
    );
};

export default Series;
