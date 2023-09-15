import { IRouters } from '@interfaces';
import { ContainerMenuLinks } from './styles';
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link';

type MenuLinksProps = {
  routers: IRouters[];
  isMenuOpen: boolean;
  bgColor?: string;
  txColor?: string;
};

export function MenuLinks({
  routers,
  isMenuOpen,
  bgColor,
  txColor,
}: MenuLinksProps) {
  return (
    <>
      <ContainerMenuLinks
        bgColor={bgColor}
        txColor={txColor}
        show={isMenuOpen}
        onHide={!isMenuOpen}
        placement={'top'}
        scroll={false}
        backdrop={false}
      >
        <Offcanvas.Body>
          <ul className={isMenuOpen ? 'is-Active' : ''}>
            {routers.map((route) => (
              <li key={route.id}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </ContainerMenuLinks>
    </>
  );
}
