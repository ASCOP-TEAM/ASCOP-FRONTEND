import { Social } from './styles';

import { Facebook, Instagram, Twitter } from 'lucide-react';

import { ImWhatsapp } from 'react-icons/im';

export function TextBlockSectionkSocial() {
  return (
    <Social>
      <div className="label mb-4">
        <div className="text-wrapper">Redes sociais:</div>
      </div>

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
