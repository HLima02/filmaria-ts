import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {MovieContainer, EmptyList} from './styleMoviePage';
import {getMovieListe} from '../../services/api';

import { toast } from 'react-toastify';

import { Props } from '../../components/Helper';

type Params = {
  id:string;
}

export default function Movie(){
  const {id}:Params = useParams();
  const [movie, setMovie] = useState<Props>({});
  
  useEffect(() => {
    const loadSingleFilme = async () => {
      const movie = await getMovieListe(`r-api/?api=filmes/${id}`);
      setMovie(movie.data)
    }

    loadSingleFilme();
    () => {return;}
  }, []);

  const handleSalvar = () => {
    let mySavedList = localStorage.getItem('movies');
    let parseList:Props[] = JSON.parse(mySavedList) || [];
    let hasMovie = parseList.some(item => (item.id === movie.id));
    
    if(!hasMovie){
      parseList.push(movie);
      localStorage.setItem('movies', JSON.stringify(parseList));
      toast.success('Filme salvo!!!')
    } else {
      toast.warning('Esse filme ja faz parte da sua lista de favoritos. ;)');
    }
    
    
  }

  if(Object.keys(movie).length == 0){
    return (
      <EmptyList>
        <h1>Carregando o filme...</h1>
      </EmptyList>
    )
  }

  return(
    <MovieContainer>
      <h2>{movie.nome}</h2>
      <img src={movie.foto} />
      <h3>Sinopse</h3>
      <p>{movie.sinopse}</p>
      <div className="btn-area">
        <button onClick={handleSalvar}>Salvar</button>
        <a href={`https://www.youtube.com/results?search_query=${movie.nome}`} target="_blank">Trailers</a>
      </div>
    </MovieContainer>
  );
}