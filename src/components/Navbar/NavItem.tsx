import Link from 'next/link';
import style from 'styles/components/NavItem.module.scss';
import { useRouter } from 'next/router';

type INavItem = { to: string };

const NavItem: React.FC<INavItem> = ({ children, to }) => {
  const { pathname } = useRouter();
  const isActive = pathname === to;

  return (
    <Link href={to}>
      <a className={`${style.link} ${isActive && style.selected}`}>
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
