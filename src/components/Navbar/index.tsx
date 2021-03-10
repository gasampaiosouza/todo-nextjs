import Image from 'next/image';
import Link from 'next/link';
import { BsCheckCircle, BsLightning, BsPeopleFill } from 'react-icons/bs';
import style from 'styles/components/Navbar.module.scss';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  return (
    <nav className={style.container}>
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="do.to Logo" width={25} height={25} />
        </a>
      </Link>

      <div className={style.items}>
        <NavItem to="/">
          <BsCheckCircle />
        </NavItem>

        <NavItem to="/tasks">
          <BsLightning />
        </NavItem>

        <NavItem to="/pool">
          <BsPeopleFill />
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
