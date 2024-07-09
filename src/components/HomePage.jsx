'use client';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import Link from 'next/link';

import '@/styles/home-page.css';

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
                const maxHeight = window.innerHeight - navMargin - extraMargin * 2;

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
                        <img src="https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/home%2Fslider1.jpg?versionId=" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/home%2Fslider2.jpg?versionId=" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/home%2Fslider3.jpg?versionId=" className="d-block w-100" alt="..." />
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
            <h4 className="container small-bio mx-auto animate__animated animate__fadeInDown">{smallBio}</h4>
            <div className="container d-flex gap-4 w-100 art-sec justify-content-center mt-5">
                <img src="https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/home%2Fhome1.jpg?versionId=" className="rounded-4" alt="Artwork 1" />
                <img src="https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/home%2Fhome2.jpg?versionId=" className="rounded-4" alt="Artwork 2" />
                <img src="https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/home%2Fhome3.jpg?versionId=" className="rounded-4" alt="Artwork 3" />
            </div>
            <div className='container d-flex justify-content-center'>
                <Link className='custom-btn' href={`/${locale}/artworks`}>{btnArtwroks}</Link>
            </div>
        </>
    );
};

export default HomePage;
