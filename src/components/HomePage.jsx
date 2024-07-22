'use client';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import Link from 'next/link';
import img1 from '@/images/slider/img1.jpg';
import img2 from '@/images/slider/img2.jpg';
import img3 from '@/images/slider/img3.jpg';
import img4 from '@/images/home/img4.jpg';
import img5 from '@/images/home/img5.jpg';
import img6 from '@/images/home/img6.jpg';

import '@/styles/home-page.css';
import Image from 'next/image';

const HomePage = ({ smallBio, btnArtwroks }) => {
    const locale = useLocale();

    useEffect(() => {
        const updateHeight = () => {
            const carouselDiv = document.querySelector('.craousel-div');
            const images = document.querySelectorAll('.carousel-item img');
            if (carouselDiv) {
                const width = window.innerWidth;
                const navMargin = 100;
                const extraMargin = 40;
                const maxHeight =
                    window.innerHeight - navMargin - extraMargin * 2;

                let height = (width * 9) / 16;

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
        updateHeight();

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade craousel-div mx-auto animate__animated animate__fadeInDown"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={img3} className="d-block w-100" alt="..." />
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
            <h4 className="container small-bio mx-auto animate__animated animate__fadeInDown">
                {smallBio}
            </h4>
            <div className="container d-flex gap-4 w-100 art-sec justify-content-center mt-5">
                <Image src={img4} className="rounded-4" alt="Artwork 1" />
                <Image src={img5} className="rounded-4" alt="Artwork 2" />
                <Image src={img6} className="rounded-4" alt="Artwork 3" />
            </div>
            <div className="container d-flex justify-content-center">
                <Link className="custom-btn" href={`/${locale}/artworks`}>
                    {btnArtwroks}
                </Link>
            </div>
        </>
    );
};

export default HomePage;
