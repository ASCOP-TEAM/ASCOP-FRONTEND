import React from 'react';
/* import SwiperCore from 'swiper'; */
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
/* import 'swiper/css/pagination';
import 'swiper/css/navigation'; */

import Image from 'next/image';

/* import { Autoplay, Navigation, Pagination } from 'swiper/modules'; */
import { Container, TextWrapper } from './style';

/* SwiperCore.use([Autoplay, Navigation, Pagination]); */

import { Autoplay } from 'swiper';

interface BackgroundCarouselProps {
  images: string[];
  children: React.ReactNode;
}

export const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({
  images,
  children,
}) => {
  return (
    <Container>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              layout="fill"
              alt={`Slide-${index}`}
              objectFit="cover"
              priority
            />
            <div className="gradient-overlay"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TextWrapper>{children}</TextWrapper>
    </Container>
  );
};
