"use client";
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { Controller, EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
//import { Pagination, Grid, A11y } from 'swiper/modules';
 
const Carousel = () => {
   /* useEffect(() => {

    let isVertical = true,direction = 'vertical',setDirection;
    let swipersVarHor = initOneSwiper(direction);
    let swipersHor = initTwoSwiper(direction);
    var flag=1; 
    const gallerySwiper = document.querySelector('.slider-one-container');
    var myTimeout;

    function initOneSwiper(direction) {
      return new Swiper(".slider-one-container", {
          loop:false,    
          centeredSlides:true,
          slidesPerView:3,
          initialSlide:5,
          pagination: {
            el:".sliderOne-pagination",
            clickable:true
          },
          direction: direction
      });
    }
    function initTwoSwiper() {
      return new Swiper(".slider-two-container", {
        lazy: true,
        crossFade:true,
        loop:false,
        effect:'fade',    
        centeredSlides: true,
        initialSlide:5,
        slidesPerView:3,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".sliderTwo-pagination",
          clickable: true
        },on: {
          init: function (index) {
            myTimeout = setTimeout(slider_combined, 100);
            slide_num = index.activeIndex + 1;        
            product_slider_text();
          },
          'slideChange': function (index) {
            slide_num = index.activeIndex + 1;
            product_slider_text()
          }
        }
      });
    }
    function slider_combined(){
      clearTimeout(myTimeout);
      swipersVarHor.controller.control = swipersHor;
      swipersHor.controller.control = swipersVarHor;
    }
    function changeDirection(){
      if(flag == 1){
        direction = 'vertical';
      }
      else{
        direction = 'horizontal';
      }

        swipersVarHor.destroy(true, true);
        swipersVarHor = initOneSwiper(direction);
        swipersVarHor.initialSlide=5;

        swipersHor.destroy(true, true);
        swipersHor = initTwoSwiper(direction);
        swipersHor.initialSlide=5;
    }
    function windowResize() {
      if(gallerySwiper){
        if(window.innerWidth > 767){
          flag = 1;
          changeDirection();
        }
        else{
          flag = 0;
          changeDirection();
        }
      }
    }
    window.onresize = windowResize;
    setTimeout(
      function(){
        windowResize();
      },100
    );
      
    function product_slider_text(){
      var past_slide_element = document.querySelector('.int_pro_slide'+slide_past_num+' .int_pro_txt');
      past_slide_element.classList.remove('opened');
      var close_element = document.querySelector('.int_pro_slide'+slide_past_num);  
      close_element.style.transition = "all 0.3s ease-in-out";
      close_element.style.height = '0px';

      var slide_element = document.querySelector('.int_pro_slide'+slide_num+' .int_pro_txt');
      var active_element = document.querySelector('.int_pro_slide'+slide_num);
      active_element.style.transition = "all 0.3s ease-in-out";
      active_element.style.height = slide_element.offsetHeight+'px';
      slide_element.classList.add('opened');
      slide_past_num = slide_num;
    }
},[]);*/

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const handleSlide = (activeIndex) => {
        console.log('firstCategory: ' + activeIndex);
        setActiveCategory(activeIndex);
        
      }
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check initial width
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (<section className="section product_all min-height100">
  <div className="export-contents position-absolute">
        <div className="slider-two-main">
            {/* <div className="slider-two-container"> */}
            <Swiper
                initialSlide={1}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                /*autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}*/
                pagination={{
                    el: ".sliderTwo-pagination",
                    clickable: true
                }}
                modules={[Controller,EffectFade]}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                //onSlideChange={() => console.log('slide change')}                
                onSlideChange={(swiperCore) => {
                    const {
                      activeIndex,
                      snapIndex,
                      previousIndex,
                      realIndex,
                    } = swiperCore;
                    console.log({ activeIndex, snapIndex, previousIndex, realIndex });
                    handleSlide(activeIndex)
                }}
                effect="fade"
                className="slider-two-container"
                //onSwiper={(swiper) => console.log(swiper)}
                >
                <div className="swiper-wrapper">
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices3.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices3.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices3.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices1.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                    <SwiperSlide><div className="int-pro-holder"><ExportedImage src="/images/ground_spices2.webp" width={800} height={800} className="w-100 h-auto" alt="" loading="lazy"/></div><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
                </div>
            </Swiper>     
            <div className="export-pagination">
                <div className="swiper-pagination sliderOne-pagination"></div>
            </div>
        </div>
      {/* <div className="slider-one-container"> */}
      <Swiper
              direction={isMobile ? 'horizontal' : 'vertical'}
                initialSlide={1}
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides ={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    el: ".sliderOne-pagination",
                    clickable: true,
                    type:'bullets'
                }}
                modules={[Controller, Pagination, Autoplay]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                onSlideChange={() => console.log('slide change')}
                className="slider-one-container"
                //onSwiper={(swiper) => console.log(swiper)}
                >
          <div className="swiper-wrapper">
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices3.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices3.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices3.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices1.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
              <SwiperSlide><div className="vert-slide"><div><ExportedImage src="/images/ground_spices2.webp" width={200} height={200} className="w-100 h-auto" alt=""/></div></div></SwiperSlide>
          </div>
      </Swiper>
  </div>
  <div className="banner-contents position-absolute">
      <div className="container">
          <div className="row">
              <div className="col-12 export-title position-relative">
                {/* <div className="export-text">
                <p className={activeCategory === 0 ? 'active' : ''}>0</p>
                <p className={activeCategory === 1 ? 'active' : ''}>1</p>
                <p className={activeCategory === 5 ? 'active' : ''}>5</p>
                <p className={activeCategory === 6 ? 'active' : ''}>6</p>
                <p className={activeCategory === 7 ? 'active' : ''}>7</p>
                <p className={activeCategory === 8 ? 'active' : ''}>8</p>
                </div> */}
                <div className={activeCategory === 0 ? 'active slide-content' : 'slide-content'}>
                        <h3>1. Whole Spices</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 1 ? 'active slide-content' : 'slide-content'}>
                        <h3>2. Premium spices</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 2 ? 'active slide-content' : 'slide-content'}>
                        <h3>3. Blended spices</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 3 ? 'active slide-content' : 'slide-content'}>
                        <h3>4. Instant spices</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 4 ? 'active slide-content' : 'slide-content'}>
                        <h3>5. Recipe Mix</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 5 ? 'active slide-content' : 'slide-content'}>
                        <h3>6. Whole spices 5</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 6 ? 'active slide-content' : 'slide-content'}>
                        <h3>7. Pickles</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 7 ? 'active slide-content' : 'slide-content'}>
                        <h3>8. Papad</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 8 ? 'active slide-content' : 'slide-content'}>
                        <h3>9. Jaggery</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 9 ? 'active slide-content' : 'slide-content'}>
                        <h3>10. Flours</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>
                  <div className={activeCategory === 10 ? 'active slide-content' : 'slide-content'}>
                        <h3>11. Pulses</h3>
                        <p>Best taste and aroma by cryogenic<br/> grinding.</p>
                        <div><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                  </div>

                  {/* <div className="slide-content int_pro_slide2">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 2</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide3">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 3</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide4">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 4</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide5">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 5</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide6">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 6</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide7">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 7</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide8">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 8</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide9">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 9</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div>
                  <div className="slide-content int_pro_slide10">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 10</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>	
                  </div>
                  <div className="slide-content int_pro_slide11">
                      <div className="int_pro_txt">
                          <div className="lines"><h1>Ground Spices 11</h1></div>
                          <div className="lines"><p>Best taste and aroma by cryogenic<br/> grinding.</p></div>
                          <div className="lines"><Link href={'#'} className="view-job-offers-link position-relative">Learn More</Link></div>
                      </div>
                  </div> */}
              </div>
          </div>
      </div>
  </div>
</section>
  )
}

export default Carousel