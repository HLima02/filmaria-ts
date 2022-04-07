import {Link} from 'react-router-dom';
import {HeaderComponent} from './headerStyles';

export default function Header(){
  return(
    <HeaderComponent>
      <nav>
        <Link to="/" className="logoTitle">Filmaria</Link>
        <Link to="/favoritos" className="favoritos">Favoritos</Link>
      </nav>
    </HeaderComponent>
  );
}