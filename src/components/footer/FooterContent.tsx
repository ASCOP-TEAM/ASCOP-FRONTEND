import React from 'react';

import { LinkBlockSection, TextBlockSection } from '@components';
import { Rodape, StyledFooter } from './styles';

import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { Col, Row } from 'react-bootstrap';
import { ONGContext } from '@contexts';
import { formatPhoneNumber } from '@utils';
import { Footer } from '@interfaces';
import Link from 'next/link';

interface FooterContentProps {
  isMobileView?: boolean;
}

export function FooterContent({ isMobileView = false }: FooterContentProps) {
  const ongData = React.useContext(ONGContext);

  const { email, endereco, telefone } = ongData?.data.attributes.contato || {};

  const footerData = ongData?.data?.attributes?.footer[0] || [];

  const { aboutproject, importantLinks, linksUteis } = footerData as Footer;

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
          {ongData?.data && footerData && (
            <>
              <Col xs={12} lg={'auto'} md={'auto'}>
                <Col xs={'auto'}>
                  <TextBlockSection.Root>
                    <TextBlockSection.Title>
                      <h2 style={{ color: 'white' }}>{aboutproject?.titulo}</h2>
                    </TextBlockSection.Title>
                    <TextBlockSection.Paragrap
                      content={aboutproject?.descricao}
                    />
                  </TextBlockSection.Root>
                </Col>
                <TextBlockSection.Social />
              </Col>

              <Col className="block-links mb-3" xs={12} lg={'auto'} md={'auto'}>
                <Row
                  className={`${
                    !isMobileView ? 'flex-column' : 'flex-arow mb-3'
                  }`}
                >
                  <Col xs={'auto'} className="mb-3">
                    <LinkBlockSection.Root>
                      <LinkBlockSection.Title title="Important Links" />
                      {importantLinks &&
                        importantLinks.map((links) => (
                          <LinkBlockSection.Link
                            key={links.id}
                            href={links.url}
                            content={links.titulo}
                          />
                        ))}
                    </LinkBlockSection.Root>
                  </Col>

                  <Col xs={'auto'} className="links">
                    <LinkBlockSection.Root>
                      <LinkBlockSection.Title title="Links Úteis" />
                      {linksUteis &&
                        linksUteis.map((links) => (
                          <Link href={links.url} key={links.id}>
                            <p>{links.titulo}</p>
                          </Link>
                        ))}
                    </LinkBlockSection.Root>
                  </Col>
                </Row>
              </Col>
            </>
          )}

          <Col className="block-contact d-none d-xl-flex" xs={3}>
            {ongData && ongData?.data.attributes.contato ? (
              <Row className="flex-column">
                <ul style={{ listStyle: 'none' }} className="m-0 p-0">
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
                </ul>
              </Row>
            ) : (
              <div className="error-text">
                <p>Não foi possível obter os dados.</p>
              </div>
            )}
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
