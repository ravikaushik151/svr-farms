'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const slides = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpg`,
  alt: `Gallery Image ${i + 1}`,
}));

export default function Gallery() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  const handleSlideClick = useCallback((src: string, index: number) => {
    mainSwiper?.slideToLoop(index, 400);
    setPopupImage(src);
  }, [mainSwiper]);

  const handleThumbScroll = useCallback(
    (swiper: any) => {
      if (mainSwiper && !swiper.params.cssMode) {
        mainSwiper.slideToLoop(swiper.realIndex, 0);
      }
    },
    [mainSwiper]
  );

  const renderedSlides = useMemo(
    () =>
      slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1080}
            className="img-fluid rounded-3 px-3 "
            loading="lazy"
            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
            onClick={() => handleSlideClick(slide.src, index)}
          />
        </SwiperSlide>
      )),
    [handleSlideClick]
  );

  return (
    <section className="gallery-section same-gap gallery faq-section py-5" id="gallery">
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="section-heading text-center mb-0">Gallery</h2>
          <div className="mx-auto mb-md-5 mb-4 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>
        </div>

        <div className="row">
          {/* Main Swiper */}
          <div className="col-md-8 position-relative d-flex align-items-center">
            <Swiper
              onSwiper={setMainSwiper}
              modules={[Autoplay, Navigation, Thumbs]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              navigation={{
                nextEl: '.swiper-button-next-main',
                prevEl: '.swiper-button-prev-main',
              }}
              thumbs={{ swiper: thumbsSwiper }}
              slidesPerView={1}
              className="rounded-xl overflow-hidden"
            >
              {renderedSlides}

              {/* Nav buttons (mobile only) */}
              <div className="swiper-button-prev swiper-button-prev-main theme-bg-light  " />
              <div className="swiper-button-next swiper-button-next-main theme-bg-light" />
            </Swiper>
          </div>

          {/* Thumbnail Swiper */}
          <div className="col-md-4  position-relative d-md-flex d-none align-items-center">
            <Swiper
              modules={[Navigation, Thumbs, Mousewheel]}
              onSwiper={setThumbsSwiper}
              direction="vertical"
              spaceBetween={50}
              slidesPerView={2}
              loop
              mousewheel
              watchSlidesProgress
              onSlideChangeTransitionEnd={handleThumbScroll}
              className="mySwiper-thumbs "
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={380}
                    height={276}
                    className="img-fluid  rounded-2 swiper-thumb-image"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Popup Lightbox */}
      {popupImage && (
        <div
          className="popup-overlay"
          onClick={() => setPopupImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <Image
              src={popupImage}
              alt="Popup Image"
              width={1920}
              height={1080}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
            <button
              onClick={() => setPopupImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .mySwiper-thumbs {
          height: 100%;
          max-height: 580px;
        }
        .swiper-thumb-image {
          opacity: 0.6;
          transition: transform 0.3s, opacity 0.3s;
          cursor: pointer;
        }
        .mySwiper-thumbs .swiper-slide-thumb-active .swiper-thumb-image {
          opacity: 1;
          transform: scale(1.05);
          border: 3px solid var(--theme-color-light, #fff);
        }
        .swiper-button-prev-main,
        .swiper-button-next-main {
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        .swiper-button-next-main {
          right: 10px !important;
          top:50% !important;
          color:#fff !important;
          background: #5b8c51 !important;
        }
        .swiper-button-prev-main {
          left: 10px !important;
          top:50% !important;
          color:#fff !important;
          background: #5b8c51 !important;
        }
      `}</style>
    </section>
  );
}
