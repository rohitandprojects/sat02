"use client";
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Mousewheel,FreeMode, A11y } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelComponent from '../b2b/components/model';
import SocialMedia from '@/app/components/social';

gsap.registerPlugin(ScrollTrigger);

const Media = () => {
  const mediaReveal = useRef(false);
  const letsConnectRef = useRef(null);
  useEffect(() => {
    	// Trigger a class name change on scro
		window.scrollTo(0, 0);
		ScrollTrigger.create({
			trigger: mediaReveal.current,
			start:'top center',
			end:'bottom top',
			onEnter() {
				mediaReveal.current.classList.add('transition_media');				
				},
				onLeave() {
					//worldMapRef.classList.add('dropping_leave');
				},
				onEnterBack() {
					//worldMapRef.classList.remove('dropping_leave');
				},
				onLeaveBack() {
					const transition_media_class = document.querySelector(".transition_media");
					if(transition_media_class){
						mediaReveal.current.classList.remove('transition_media');
					}		
				}
		});
		// Trigger a class name change on scroll
		ScrollTrigger.create({
			trigger:letsConnectRef.current,
			start: 'top 68%', 
	  		end: 'bottom top',
			onEnter() {
				letsConnectRef.current.classList.add('reveal');				
				},
				onLeave() {
					//worldMapRef.classList.add('dropping_leave');
				},
				onEnterBack() {
					//worldMapRef.classList.remove('dropping_leave');
				},
				onLeaveBack() {
					const domestic_international_class = document.querySelector(".domestic-international");
					if(domestic_international_class){
						letsConnectRef.current.classList.remove('reveal');
					}		
				}
		});
   		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	},[]);
  return (
    <>
        <section className="section min-height100 d-flex align-items-center justify-content-center banner-main media-banner cust-pad-left" ref={mediaReveal}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className="d-flex"><div className="m-title">M</div><div className="m-title">e</div><div className="m-title">d</div><div className="m-title">i</div><div className="m-title">a</div><span className="m-title">.</span></h1>
					</div>
				</div>
			</div>
		</section>
		<section className="section mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">TVC and<br/> Corporate Film</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<div className="mediatvc-carousel btmToTp2">
							<Swiper
									breakpoints={{
										 // when window width is <= 499px
										 575: {
											spaceBetween:25,
										  },
										  768: {
											spaceBetween:35,
										  },
										  // when window width is <= 999px
										  992: {
											spaceBetween:50,
										  }
									}}
									// install Swiper modules
									modules={[Pagination,Mousewheel,FreeMode,A11y]}
									spaceBetween={50}
									slidesPerView={1}
									mousewheel={true}
									freeMode={false}
									pagination={{ 
										clickable: true, 
										el: '.mediatvc-pagination',
										type:'bullets'
									}}
									onSwiper={(swiper) => console.log(swiper)}
									onSlideChange={() => console.log('slide change')}
									className='mediaTVCswiper media-carousel position-relative'
								>
								<SwiperSlide><div className="media-card"><ExportedImage src="/images/media/tvc/tvc1.webp" width={800} height={500} loading="lazy" alt="tvc"/></div></SwiperSlide>
								<SwiperSlide><div className="media-card"><ExportedImage src="/images/media/tvc/tvc2.webp" width={800} height={500} loading="lazy" alt="tvc"/></div></SwiperSlide>
								
							</Swiper>
							<div className="swiper-pagination mediatvc-pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section event-media mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">Events</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<div className="mediatvc-carousel btmToTp2">
							<Swiper
								breakpoints={{
									// when window width is <= 499px
									575: {
									spaceBetween:25,
									},
									768: {
									spaceBetween:35,
									},
									// when window width is <= 999px
									992: {
									spaceBetween:50,
									}
								}}
								// install Swiper modules
								modules={[Pagination,Mousewheel,FreeMode,A11y]}
								spaceBetween={50}
								slidesPerView={1}
								mousewheel={true}
								freeMode={false}
								pagination={{ 
									clickable: true, 
									el: '.mediaEvent-pagination',
									type:'bullets'
								}}
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
								className='mediaEventswiper media-carousel position-relative'
							>
								<SwiperSlide>
									<div className="media-card"><ExportedImage src="/images/media/event/event1.webp" width={800} height={560} loading="lazy" alt="Events"/></div>
									<div className="media-dtl">
										<div className="media-date">18-20 June 2023</div>
										<h2>Africa’s Big 7</h2>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="media-card"><ExportedImage src="/images/media/event/event2.webp" width={800} height={560} loading="lazy" alt="Events"/></div>
									<div className="media-dtl">
										<div className="media-date">1-3 December 2023</div>
										<h2>Delhi Sial Exhibition</h2>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="swiper-pagination mediaEvent-pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">Outdoors</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<div className="mediatvc-carousel btmToTp2">
							<Swiper
								breakpoints={{
										// when window width is <= 499px
										575: {
										spaceBetween:25,
										},
										768: {
										spaceBetween:35,
										},
										// when window width is <= 999px
										992: {
										spaceBetween:50,
										}
								}}
								// install Swiper modules
								modules={[Pagination,Mousewheel,FreeMode,A11y]}
								spaceBetween={50}
								slidesPerView={1}
								mousewheel={true}
								freeMode={false}
								pagination={{ 
									clickable: true, 
									el: '.outdoors-pagination',
									type:'bullets'
								}}
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
								className='outdoorsSwiper media-carousel position-relative'
							>
								<SwiperSlide><div className="media-card"><ExportedImage src="/images/media/outdoors/outdoors1.webp" width={800} height={560} loading="lazy" alt="Outdoors"/></div></SwiperSlide>
								<SwiperSlide><div className="media-card"><ExportedImage src="/images/media/outdoors/outdoors2.webp" width={800} height={560} loading="lazy" alt="Outdoors"/></div></SwiperSlide>
							</Swiper>
							<div className="swiper-pagination outdoors-pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section cust-pad-left-right we-are-social d-flex align-items-center">
			<div className="container-fluid">
				<div className="row position-relative">
					<div className="col-12">
						<h1 className="text-center text-uppercase btmToTp">#satvamnutrifoods<br/>
							We are Social</h1>
						<h5 className="text-center btmToTp2">SHARE WITH YOUR <span>FRIENDS</span></h5>
						<div className='media-social'>
							<SocialMedia></SocialMedia>
						</div>
						{/* <ul className="media-social btmToTp3">
							<li><Link href={'https://www.facebook.com/satvamnutrifoods/'} target='_blank' className="facebook"><Image src="/images/facebook.svg" width={27} height={28} alt="facebook"/></Link></li>
							<li><Link href={'#'} target='_blank' className="instagram"><Image src="/images/instagram.svg" width={27} height={28} alt="instagram"/></Link></li>
							<li><Link href={'#'} target='_blank' className="twitter"><Image src="/images/twitter.svg" width={27} height={28} alt="twitter"/></Link></li>
							<li><Link href={'#'} target='_blank' className="linkedin"><Image src="/images/linkedin.svg" width={27} height={28} alt="linkedin"/></Link></li>
							<li><Link href={'#'} target='_blank' className="youtube"><Image src="/images/youtube.svg" width={27} height={28} alt="youtube"/></Link></li>
						</ul> */}
					</div>
				</div>
				<div className="row media-social-row btmToTp">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<div className="media-social-card">
							<div className="media-social-img" data-src="images/media/social/Rectangle 47.webp" data-fancybox="social"><ExportedImage src="/images/media/social/Rectangle 47.webp" width={500} height={500} className="w-100" alt="social"/></div>
						</div>
						<div className="media-social-card">
							<div className="media-social-img" data-src="images/media/social/Rectangle 50.webp" data-fancybox="social"><ExportedImage src="/images/media/social/Rectangle 50.webp" width={500} height={500} className="w-100" alt="social"/></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4">
						<div className="media-social-card">
							<div className="media-social-img" data-src="images/media/social/Rectangle 48.webp" data-fancybox="social"><ExportedImage src="/images/media/social/Rectangle 48.webp" width={500} height={500} className="w-100" alt="social"/></div>
						</div>
						<div className="media-social-card">
							<div className="media-social-img" data-src="images/media/social/Rectangle 52.webp" data-fancybox="social"><ExportedImage src="/images/media/social/Rectangle 52.webp" width={500} height={500} className="w-100" alt="social"/></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4">
						<div className="media-social-card">
							<div className="media-social-img" data-src="images/media/social/Rectangle 49.webp" data-fancybox="social"><ExportedImage src="/images/media/social/Rectangle 49.webp" width={500} height={500} className="w-100" alt="social"/></div>
						</div>
						<div className="media-social-card">
							<div className="media-social-img" data-src="images/media/social/Rectangle 51.webp" data-fancybox="social"><ExportedImage src="/images/media/social/Rectangle 51.webp" width={500} height={500} className="w-100" alt="social"/></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">Blog</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<div className="mediatvc-carousel btmToTp2">
						<Swiper
								breakpoints={{
									// when window width is <= 499px
									575: {
									spaceBetween:25,
									},
									768: {
									spaceBetween:35,
									},
									// when window width is <= 999px
									992: {
									spaceBetween:50,
									}
								}}
								// install Swiper modules
								modules={[Pagination,Mousewheel,FreeMode,A11y]}
								spaceBetween={50}
								slidesPerView={1}
								mousewheel={true}
								freeMode={false}
								pagination={{ 
									clickable: true, 
									el: '.mediaBlog-pagination',
									type:'bullets'
								}}
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
								className='mediaBlogswiper media-carousel position-relative'
							>
								<SwiperSlide>
									<div className="media-card"><ExportedImage src="/images/media/blog/blog1.webp" width={800} height={500} loading="lazy" alt="Events"/></div>
									<div className="media-dtl">
										<h2>Best Spices Exporters in India (2021)</h2>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="media-card"><ExportedImage src="/images/media/blog/blog2.webp" width={800} height={500} loading="lazy" alt="Events"/></div>
									<div className="media-dtl">
										<h2>Best 7 Black Pepper Benefits for Weight Loss</h2>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="media-card"><ExportedImage src="/images/media/blog/blog3.webp" width={800} height={500} loading="lazy" alt="Events"/></div>
									<div className="media-dtl">
										<h2>Masala Manufacturers in India</h2>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="media-card"><ExportedImage src="/images/media/blog/blog4.webp" width={800} height={500} loading="lazy" alt="Events"/></div>
									<div className="media-dtl">
										<h2>Masala Ni Season, E Vali Shu?</h2>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="swiper-pagination mediaBlog-pagination"></div>
							 
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="domestic-international position-relative">			
			<div className="container-fluid position-relative" ref={letsConnectRef}>
				<div className="lets-connect position-absolute">
					<div className="satvam-circle"><h1><span>Let's</span>Connect.</h1></div>
				</div>
				<div className="row">
					<ModelComponent></ModelComponent>
				</div>
			</div>	
		</section>
    </>
  )
}

export default Media