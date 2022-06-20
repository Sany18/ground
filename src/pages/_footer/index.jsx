import './styles.scss';

const EMAIL = 'mumik.xxx@gmail.com';

export const Footer = () => {
  return (
    <footer>
      {new Date().getFullYear()} рік
      <a href={`mailto:${EMAIL}`} target='_blank' rel='noreferrer' style={{ marginLeft: '6px' }}>{EMAIL}</a>
    </footer>
  );
}

export default Footer;
