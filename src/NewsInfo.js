import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { Navigation } from "swiper";
import styles from "./styles/style.module.css";
const NewsInfo = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container">
        <div className="d-lg-flex">
          <div className="swiper">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <div class="card-body">
                    <img alt="" src="./images/image1.png" />
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button className="bg-dark text-white">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <div class="card-body">
                    <img alt="" src="./images/image1.png" />
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button className="bg-dark text-white">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <div class="card-body">
                    <img alt="" src="./images/image2.png" />
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button className="bg-dark text-white">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <div class="card-body">
                    <img alt="" src="./images/image1.png" />
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button className="bg-dark text-white">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div id={styles.infoall}>
            <p id={styles.topnews}>Top News</p>
            <p id={styles.topnewspara}>
              Id blandit convallis ipsum commodo fermentum urna pellentesque.
              Consectetur fringilla sit sed morbi ultrices pellentesque eget
              elementum pharetra.
            </p>
            <div className="d-inline-flex" id={styles.button}>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                id={styles.prev}
              >
                Prev
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                id={styles.next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsInfo;
