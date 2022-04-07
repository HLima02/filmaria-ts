import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {FavoriteContainer, EmptyList} from './styleFavoritePage';

import { toast } from 'react-toastify';

import { Props } from '../../components/Helper';
import {BsTrashFill} from 'react-icons/bs';

export default function Favorite(){
  const [favoriteList, setFavoriteList] = useState<Props[]>([]);

  useEffect(() => {
   const loadFavoriteListe = () => {
    let myList = localStorage.getItem('movies');
    let parsedList = JSON.parse(myList) || [];
    setFavoriteList(parsedList);
   }

   loadFavoriteListe();
   () => {return;}
  }, []);

  function handleDelete(id:number){
    let newList = favoriteList.filter(item => item.id !== id);
    setFavoriteList(newList);
    localStorage.setItem('movies', JSON.stringify(newList));
    toast.info('Filme deletado da sua lista');
  }

  if(favoriteList.length == 0){
    return (
      <EmptyList className="empty-list">
        <h1>Sua lista de filmes esta vazia :(</h1>
      </EmptyList>
    )
  }

  return(
    <FavoriteContainer>
      <h2>Lista de filmes favoritos</h2>
      <ul>
        {favoriteList.map(item => (
          <li key={item.id}>
            <span>{item.nome}</span>
           <div className="list-options">
            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
              <BsTrashFill onClick={() => handleDelete(item.id)} size={16}/>
           </div>
          </li>
        ))}
      </ul>
    </FavoriteContainer>
  );
}