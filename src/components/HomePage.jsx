'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import bg1 from '@/images/bg-1.jpg';
import bg2 from '@/images/bg-2.jpg';
import bg3 from '@/images/bg-4.jpg';
import img4 from '@/images/banner-4.jpg';
import Link from 'next/link';
import '@/styles/home-page.css';
import { useLocale } from 'next-intl';

const HomePage = ({ smallBio, btnArtwroks }) => {
    const locale = useLocale();

    useEffect(() => {
        const updateHeight = () => {
            const carouselDiv = document.querySelector('.craousel-div');
            const images = document.querySelectorAll('.carousel-item img');
            if (carouselDiv) {
                const width = window.innerWidth;
                const navMargin = 100; // Margin for fixed nav
                const extraMargin = 40; // Additional margin from top and bottom
                const maxHeight =
                    window.innerHeight - navMargin - extraMargin * 2;

                // Calculate height based on the width and maintain 16:9 ratio
                let height = (width * 9) / 16;

                // Ensure the height does not exceed the available height
                if (height > maxHeight) {
                    height = maxHeight;
                }

                carouselDiv.style.height = `${height}px`;
                images.forEach((img) => {
                    img.style.height = `${height}px`;
                });
            }
        };

        window.addEventListener('resize', updateHeight);
        updateHeight(); // Initial call

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade craousel-div mx-auto"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={bg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={bg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={bg3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h4 className="container">{smallBio}</h4>
            <div className="container d-flex gap-4 w-100 art-sec justify-content-center mt-5">
                <Image src={img4} className="rounded-4" />
                <Image src={img4} className="rounded-4" />
                <Image src={img4} className="rounded-4" />
            </div>
            <div className='container d-flex justify-content-center'>

                <Link className='custom-btn' href={`/${locale}/artworks`}>{btnArtwroks}</Link>
         

            </div>
        </>
    );
};

export default HomePage;
