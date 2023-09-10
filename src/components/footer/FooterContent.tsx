import React from 'react';

import { ActiveLink, LinkBlockSection, TextBlockSection } from '@components';
import { Rodape, StyledFooter } from './styles';

import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { Col, Row } from 'react-bootstrap';
import { ONGContext } from '@contexts';
import { formatPhoneNumber } from '@utils';

interface FooterContentProps {
  isMobileView?: boolean;
}

export function FooterContent({ isMobileView = false }: FooterContentProps) {
  const ongData = React.useContext(ONGContext);

  const { email, endereco, telefone } = ongData?.data.attributes.contato || {};

  return (
    <>
      <StyledFooter
        className={(!isMobileView && 'd-none d-md-block') || 'd-md-none'}
      >
        <Row
          className={`justify-content-between block-container my-5 h-100  ${
            isMobileView && 'flex-column-reverse'
          }`}
        >
          <Col xs={12} lg={'auto'} md={'auto'}>
            <Col xs={'auto'}>
              <TextBlockSection.Root>
                <TextBlockSection.Title>
                  <h2 style={{ color: 'white' }}>About The Hope Project</h2>
                </TextBlockSection.Title>
                <TextBlockSection.Paragrap
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim minim veniam, nostrud exercitation ullamco laboris nisi ut
              aliquip. Turpis egestas sed tempus urna et. Egestas diam in arcu
              cursus euismod quis viverra nibh. Nec nam aliquam sem et tortor
              consequat. Sed risus ultricies tristique nulla aliquet.  "
                />
              </TextBlockSection.Root>
            </Col>

            <TextBlockSection.Social />
          </Col>

          <Col className="block-links mb-3" xs={12} lg={'auto'} md={'auto'}>
            <Row
              className={`${!isMobileView ? 'flex-column' : 'flex-arow mb-3'}`}
            >
              <Col xs={'auto'} className="mb-3">
                <LinkBlockSection.Root>
                  <LinkBlockSection.Title title="Important Links" />
                  <LinkBlockSection.Link href="#" content="Privacy Policy" />
                  <LinkBlockSection.Link href="#" content="Cookies Policy" />
                  <LinkBlockSection.Link
                    href="#"
                    content="Terms & Conditions"
                  />
                </LinkBlockSection.Root>
              </Col>

              <Col xs={'auto'} className="links">
                <LinkBlockSection.Root>
                  <LinkBlockSection.Title title="Links Úteis" />
                  <ActiveLink href="/contato">
                    <p>Contato</p>
                  </ActiveLink>
                  <ActiveLink href="/loja">
                    <p>Loja</p>
                  </ActiveLink>
                  <ActiveLink href="/doacao">
                    <p>Doações</p>
                  </ActiveLink>
                  <ActiveLink href="/transparencia">
                    <p>Transparência</p>
                  </ActiveLink>
                </LinkBlockSection.Root>
              </Col>
            </Row>
          </Col>

          <Col className="block-contact d-none d-xl-flex" xs={3}>
            <Row className="flex-column">
              {ongData && ongData?.data.attributes.contato ? (
                <>
                  <Col className="mb-3">
                    <LinkBlockSection.Root contectMode>
                      <LinkBlockSection.Icon icon={Mail} />
                      <LinkBlockSection.Link
                        href={'mailto:' + email || ''}
                        content={email || ''}
                      />
                    </LinkBlockSection.Root>
                  </Col>

                  <Col className="mb-3">
                    <LinkBlockSection.Root contectMode>
                      <LinkBlockSection.Icon icon={PhoneCall} />
                      <LinkBlockSection.Link
                        href={`https://api.whatsapp.com/send?phone=55${
                          telefone || ''
                        }`}
                        content={'+55 ' + formatPhoneNumber(telefone)}
                      />
                    </LinkBlockSection.Root>
                  </Col>

                  <Col>
                    <LinkBlockSection.Root contectMode>
                      <LinkBlockSection.Icon icon={MapPin} />
                      <LinkBlockSection.Link
                        href={`https://www.google.com.br/maps/place/${
                          endereco ? endereco.replace(/\s+/g, '+') : ''
                        }`}
                        content={endereco || ''}
                      />
                    </LinkBlockSection.Root>
                  </Col>
                </>
              ) : (
                <div className="error-text">
                  <p>Não foi possível obter os dados.</p>
                </div>
              )}
            </Row>
          </Col>
        </Row>
        <Rodape>
          <p className="mb-1">
            Construindo Possibilidades, Transformando Vidas.
          </p>
          <p>© 2023 Maicon Gabriel Alves.</p>
        </Rodape>
      </StyledFooter>
    </>
  );
}
