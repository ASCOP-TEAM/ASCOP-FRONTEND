import { Social } from './styles';

import { Facebook, Instagram, Twitter } from 'lucide-react';

import { ImWhatsapp } from 'react-icons/im';

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
  return (
    <Social socialTheme={props.theme ? lightTheme : darkTheme}>

      {!props.disableTitle && (
        <div className="label mb-4">
          <div className="text-wrapper">Redes sociais:</div>
        </div>
      )}


      <ul>
        <li>
          <a href="#">
            <span>
              <Facebook />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Instagram />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Twitter />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <ImWhatsapp />
            </span>
          </a>
        </li>
      </ul>
    </Social>
  );
}
