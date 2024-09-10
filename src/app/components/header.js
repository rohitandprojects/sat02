"use client";
import React, { useRef, useState } from 'react';
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Nav from './nav';
import Link from 'next/link';
import SocialMedia from './social';
const links = [
  {
      path:'/',
      name:'Home'
  },
  {
      path:'/about',
      name:'About Us'
  },
  {
      path:'/product',
      name:'Products'
  },
  {
      path:'/b2b',
      name:'B2B/Bulk'
  },
  {
      path:'/export',
      name:'Export'
  },
  {
      path:'/media',
      name:'Media'
  },
  {
      path:'/contact',
      name:'Contact'
  }
]
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  const [isSearchActive, setSearchIsActive] = useState(false);
  const toggleSearchClass = (e) => {
    e.preventDefault();
    setSearchIsActive(!isSearchActive);
  };
   return (
    <> 
    <header id="header" className={`position-fixed ${isActive ? 'opened' : ''} ${isSearchActive ? 'search-opened' : ''}`}>
    </header> 
    <a className="satvam-brand position-fixed d-block" href={'/'}><img src="/images/satvam.svg" loading="eager" width={55} height={80} className="w-100" alt="satvam" /><span className="position-absolute"><img src="/images/satvam.svg" width={55} height={80} className="w-100" alt="satvam" /></span></a> 
    <div className="hamburger-search position-fixed d-flex">
          <div className="search-main position-relative">
          <Link href="#" onClick={toggleSearchClass} className={`search-link position-relative d-block ${isSearchActive ? 'active' : ''}`}>
            <img src="/images/search.svg" width={37} height={37} className="search-icon w-100" alt="search" /><div className="searchbars-close-overlay position-absolute"><img src="/images/close.svg" width={37} height={37} className="cloase-icon-overlay w-100" alt="search" /></div>
          </Link>           
          </div>
          <Link href="#" onClick={toggleClass} className="hamburger d-block position-relative">
            <img src="/images/hamburger.svg" width={47} height={27} className="w-100" alt="hamburger" />
            <span className="bars bar1 position-absolute" /><span className="bars bar2 position-absolute" /><span className="bars bar3 position-absolute" />
          </Link>
      </div>
    <div className="menu-main position-fixed">
        <div className="menu-logo position-absolute"><img src="/images/menu-logo.svg" width={103} height={150} alt="search" /></div>
        <div className="menu-sub d-flex justify-content-between">
            <div className="menu-links">
                <ul>
                  {/* <li><Link href="/" className="anchor">Home</Link></li>
                    <li><Link href="/about" className="anchor">About Us</Link></li>
                    <li><Link href="/product" className="anchor">Products</Link></li>
                    <li><Link href="/b2b">B2B/Bulk</Link></li>
                    <li><Link href="/export">Export</Link></li>
                    <li><Link href="/media">Media</Link></li>
                    <li><Link href="/contact">Contact</Link></li> */}
                    <li><a href="/" className="anchor">Home</a></li>
                    <li><a href="/about" className="anchor">About Us</a></li>
                    <li><a href="/product" className="anchor">Products</a></li>
                    <li><a href="/b2b">B2B/Bulk</a></li>
                    <li><a href="/export">Export</a></li>
                    <li><a href="/media">Media</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
                <div className="shop-link"><Link href={"https://shop.satvam.in"} target='_blank' className="bullet-link">Shop</Link></div>
            </div>
            <div className="social-links">
              <SocialMedia></SocialMedia>
            </div>
        </div>
        <div className="menu-footer d-flex justify-content-between">
            <p>© 2022 - Satvam Nutrifoods Limited. | <a href={"/terms-policy"}>Terms and Policy</a></p>
            <p>Agency Credits  <Link href={"https://netglobes.com/"} target='_blank'>Netglobes</Link></p>
        </div>
    </div>
    <div className={`search-container position-fixed ${isSearchActive ? 'opened' : ''}`}>
        <div className="search-sub position-absolute">
          <input className="form-control" placeholder="Search for anything in the Satvam World." />
          <button className="search-btn position-absolute"><img src="/images/search.svg" width={37} height={37} className="w-100" alt="search" /><span className="position-absolute"><img src="/images/search.svg" width={37} height={37} className="w-100" alt="search" /></span></button>
        </div>
      </div>
    </>
  )}

export default Header