import React from 'react';
import { Social } from './styles';

import {
  Ban,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';

import { ImWhatsapp } from 'react-icons/im';
import { ONGContext } from '@contexts';

const darkTheme = {
  color: '#fff',
};

const lightTheme = {
  color: '#121212',
};

interface TextBlockSectionkSocialProps {
  disableTitle?: boolean;
  theme?: boolean;
}

export function TextBlockSectionkSocial(props: TextBlockSectionkSocialProps) {
  const ongData = React.useContext(ONGContext);

  function selectIcon(networkname: string) {
    const normalizeNetworkName = networkname.toLowerCase();

    switch (normalizeNetworkName) {
      case 'facebook':
        return <Facebook />;
      case 'twitter':
        return <Twitter />;
      case 'instagram':
        return <Instagram />;
      case 'linkedin':
        return <Linkedin />;
      case 'whatsapp':
        return <ImWhatsapp />;
      case 'email':
        return <Mail />;
      default:
        return <Ban />;
    }
  }

  return (
    <Social socialTheme={props.theme ? lightTheme : darkTheme}>
      {!props.disableTitle && (
        <div className="label mb-4">
          <div className="text-wrapper">Redes sociais:</div>
        </div>
      )}

      {ongData && ongData?.data ? (
        <ul>
          {ongData?.data.attributes.redesSociais.map((redes) => (
            <li key={redes.id}>
              <a href={redes.url}>
                <span>{selectIcon(redes.titulo)}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="error-text">
          <p>Não foi possível obter os dados.</p>
        </div>
      )}
    </Social>
  );
}
