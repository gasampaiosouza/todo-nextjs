import { BsPlus } from 'react-icons/bs';
import style from 'styles/components/Header.module.scss';

interface IHeader {
  title: string;
  callback?: () => void;
}

const Header: React.FC<IHeader> = ({ title, callback }) => {
  return (
    <header className={style.container}>
      <h1>{title}</h1>

      <div className={style['right-side']}>
        {callback && <BsPlus onClick={callback} className={style.icon} />}
      </div>
    </header>
  );
};

export default Header;
