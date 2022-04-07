import {useState, useEffect} from 'react';
import {Container} from './homeStyle';
import MovieItem from '../../components/MovieItem';

import {getMovieListe} from '../../services/api';
import { Props } from '../../components/Helper';

export default function Home(){
  const [movieList, setMovieList] = useState<Props[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const promiseRequest = await getMovieListe('r-api/?api=filmes/');
      let listRequest = promiseRequest.data;
      if(listRequest !== ''){
        setMovieList(listRequest);
      }  
    }

    loadList();
  }, []);

  return(
    <Container>
      {movieList.length === 0 &&
        <div className="empty-list">
          <h1>Carregando seus filmes</h1>
        </div>
      }
      <div className="list-movies">
        {movieList.map(item => (
          <MovieItem key={item.id} items={item}/>
        ))}
      </div>
    </Container>
  );
}