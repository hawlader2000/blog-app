import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper";
import styles from "./styles/style.module.css";
const NewsInfo = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container" id={styles.section}>
        <div className="row">
          <div className="col-xl-9" id={styles.card}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide id={styles.swiperslide}>
                <div className="card" id={styles.hw}>
                  <img alt="" src="./images/image1.png" />
                  <div class="card-body">
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button
                      className="bg-black text-white"
                      id={styles.readmore}
                    >
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <img alt="" src="./images/image1.png" />
                  <div class="card-body">
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button
                      className="bg-black  text-white"
                      id={styles.readmore}
                    >
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <img alt="" src="./images/image2.png" />
                  <div class="card-body">
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button
                      className="bg-black  text-white"
                      id={styles.readmore}
                    >
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card" id={styles.hw}>
                  <img alt="" src="./images/image2.png" />
                  <div class="card-body">
                    <h2>Title</h2>
                    <p class="card-text">
                      Aliquam massa scelerisque varius nulla vitae mattis ac
                      nunc dignissim. Posuere consequat nibh varius auctor sit
                      netus diam sodales in.
                    </p>
                    <button
                      className="bg-black text-white"
                      id={styles.readmore}
                    >
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div id={styles.infoall} className="col-xl-3">
            <p id={styles.topnews}>Top News</p>
            <p id={styles.topnewspara}>
              Id blandit convallis ipsum commodo fermentum urna pellentesque.
              Consectetur fringilla sit sed morbi ultrices pellentesque eget
              elementum pharetra.
            </p>
            <div>
              <button className="bg-black text-white" id={styles.viewall}>
                View All
                <FaArrowRight />
              </button>
            </div>
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
                <i class="bi bi-arrow-left-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsInfo;
