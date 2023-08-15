import { LinkBlockSection, TextBlockSection } from '@components';
import { Rodape, StyledFooter, StyledFooterMobile } from './styles';

import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { Col } from 'react-bootstrap';

export function FooterContent() {
  return (
    <>
      {/* desktop 👇 */}
      <StyledFooter className="d-none d-md-block">
        <Col className="block-container my-3 h-100">
          <TextBlockSection.Root>
            <TextBlockSection.Title title="About The Hope Project" />
            <TextBlockSection.Paragrap
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim minim veniam, nostrud exercitation ullamco laboris nisi ut
              aliquip. Turpis egestas sed tempus urna et. Egestas diam in arcu
              cursus euismod quis viverra nibh. Nec nam aliquam sem et tortor
              consequat. Sed risus ultricies tristique nulla aliquet.  "
            />
            <TextBlockSection.Social />
          </TextBlockSection.Root>

          <div className="block-links">
            <LinkBlockSection.Root>
              <LinkBlockSection.Title title="Important Links" />
              <LinkBlockSection.Link href="" content="Privacy Policy" />
              <LinkBlockSection.Link href="" content="Cookies Policy" />
              <LinkBlockSection.Link href="" content="Terms & Conditions" />
            </LinkBlockSection.Root>

            <LinkBlockSection.Root>
              <LinkBlockSection.Title title="Useful Links" />
              <LinkBlockSection.Link href="" content="Contato" />
              <LinkBlockSection.Link href="" content="Loja " />
              <LinkBlockSection.Link href="" content="Doações" />
              <LinkBlockSection.Link href="" content="Transparência" />
            </LinkBlockSection.Root>
          </div>

          <div className="block-contact d-none d-xl-flex">
            <LinkBlockSection.Root contectMode>
              <LinkBlockSection.Icon icon={Mail} />
              <LinkBlockSection.Link
                href="mailto:ascopsktcosteira@gmail.com"
                content="ascopsktcosteira@gmail.com"
              />
            </LinkBlockSection.Root>

            <LinkBlockSection.Root contectMode>
              <LinkBlockSection.Icon icon={PhoneCall} />
              <LinkBlockSection.Link
                href="https://api.whatsapp.com/send?phone=5548991941212"
                content="+55 (48) 99194–1212"
              />
            </LinkBlockSection.Root>

            <LinkBlockSection.Root contectMode>
              <LinkBlockSection.Icon icon={MapPin} />
              <LinkBlockSection.Link
                href="https://goo.gl/maps/9wY13tkkm9vqvkRz7"
                content="Av. Jorge Lacerda, 1244 - Carianos, Florianópolis - SC, 88047-010"
              />
            </LinkBlockSection.Root>
          </div>
        </Col>

        <Rodape>
          <p className="mb-1">
            Construindo Possibilidades, Transformando Vidas.
          </p>
          <p>© 2023 Maicon Gabriel Alves.</p>
        </Rodape>
      </StyledFooter>

      {/* mobile 👇 */}

      <StyledFooterMobile className="d-md-none">
        <Col className="block-container-mobile my-3 h-100">
          <div className="block-links-mobile">
            <LinkBlockSection.Root>
              <LinkBlockSection.Title title="Important Links" />
              <LinkBlockSection.Link href="" content="Privacy Policy" />
              <LinkBlockSection.Link href="" content="Cookies Policy" />
              <LinkBlockSection.Link href="" content="Terms & Conditions" />
            </LinkBlockSection.Root>

            <LinkBlockSection.Root>
              <LinkBlockSection.Title title="Useful Links" />
              <LinkBlockSection.Link href="" content="Contato" />
              <LinkBlockSection.Link href="" content="Loja " />
              <LinkBlockSection.Link href="" content="Doações" />
              <LinkBlockSection.Link href="" content="Transparência" />
            </LinkBlockSection.Root>
          </div>

          <TextBlockSection.Root>
            <TextBlockSection.Title title="About The Hope Project" />
            <TextBlockSection.Paragrap
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim minim veniam, nostrud exercitation ullamco laboris nisi ut
              aliquip. Turpis egestas sed tempus urna et. Egestas diam in arcu
              cursus euismod quis viverra nibh. Nec nam aliquam sem et tortor
              consequat. Sed risus ultricies tristique nulla aliquet.  "
            />
            <TextBlockSection.Social />
          </TextBlockSection.Root>
        </Col>
        <Rodape>
          <p className="mb-1">
            Construindo Possibilidades, Transformando Vidas.
          </p>
          <p>© 2023 Maicon Gabriel Alves.</p>
        </Rodape>
      </StyledFooterMobile>
    </>
  );
}
