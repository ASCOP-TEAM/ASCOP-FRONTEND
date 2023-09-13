import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

import { Container } from './style';

import { ArrowRight } from 'lucide-react';

import { useScreenWidth } from '@utils';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  const width = useScreenWidth();
  const [showArrow, setShowArrow] = React.useState(false);

  const spaceBetween =
    width >= 1440
      ? 60
      : width >= 1250
      ? 10
      : width >= 768
      ? 15
      : width >= 425
      ? 20
      : 1;

  const slidesPerView =
    width >= 1440
      ? 5
      : width >= 1250
      ? 4
      : width >= 768
      ? 3
      : width >= 425
      ? 2
      : 1;

  React.useEffect(() => {
    const productCount = React.Children.count(children);
    setShowArrow(productCount > 4);
  }, [children]);

  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={false}
        navigation={{
          nextEl: '.arrowRight',
        }}
      >
        {children}
      </Swiper>

      {showArrow && (
        <div className="arrow arrowRight">
          <ArrowRight />
        </div>
      )}
    </Container>
  );
};

export { List };
