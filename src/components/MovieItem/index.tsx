import { MovieItemComponent } from './styleMovie';
import { Props } from '../../components/Helper';

import { Link } from 'react-router-dom';

export default function MovieItem({items}){
  return(
    <MovieItemComponent>
      <h2>{items.nome}</h2>
      <img src={items.foto} />
      <Link to={`/filme/${items.id}`}>Acessar</Link>
    </MovieItemComponent>
  );
}