import { IRouters } from '@interfaces';
import { ActiveLink } from 'src/components/link';
import { ContainerMenuLinks } from './styles';
import { Offcanvas } from 'react-bootstrap';

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
                <ActiveLink href={route.path}>{route.name}</ActiveLink>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </ContainerMenuLinks>
    </>
  );
}
