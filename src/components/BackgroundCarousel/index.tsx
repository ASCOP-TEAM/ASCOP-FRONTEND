import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Image from 'next/image';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Container, TextWrapper } from './style';

SwiperCore.use([Autoplay, Navigation, Pagination]);

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
        spaceBetween={1}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        navigation={false}
        loop={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              layout="fill"
              alt={`Slide-${index}`}
              objectFit="cover"
            />
            <div className="gradient-overlay"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TextWrapper>{children}</TextWrapper>
    </Container>
  );
};
