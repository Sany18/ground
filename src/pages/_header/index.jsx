import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

import './styles.scss';

export const Header = () => {
  return (
    <header>
      <Link to='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img id='logo' src={logo} alt='logo' />
        <b className='c-black' style={{ marginLeft: '4px', fontSize: '24px' }}>Pirat</b>
      </Link>
      <div className='c-black' style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
        Телефон:
        <a className='c-black' href="tel:+380971522468">(+380) 97 152 2468</a>
      </div>
    </header>
  );
}

export default Header;
