'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import '@/styles/artworks.css';
import dynamic from 'next/dynamic';

// Import images
const images = Array.from({ length: 15 }, (_, i) => {
    return require(`@/images/artworks/artwork${i + 1}.jpg`).default;
});

const ArtWorks = ({ totalArtworks, seeMore, sec, notArtworkAvailable }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [showButton, setShowButton] = useState(true);
    const [imageSources, setImageSources] = useState([]);
    const [buttonCountdown, setButtonCountdown] = useState(3);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
        setButtonDisabled(true);
        setButtonCountdown(3);
    };

    useEffect(() => {
        setImageSources(images);
    }, [totalArtworks]);

    useEffect(() => {
        if (buttonDisabled) {
            if (buttonCountdown > 0) {
                const timer = setTimeout(() => {
                    setButtonCountdown((prevCountdown) => prevCountdown - 1);
                }, 1000);
                return () => clearTimeout(timer);
            } else {
                setButtonDisabled(false);
            }
        }
    }, [buttonCountdown, buttonDisabled]);

    if (!images || images.length === 0) {
        return <p>{notArtworkAvailable}</p>;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {imageSources.slice(0, visibleCount).map((artwork, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="d-flex justify-content-center">
                            <Image
                                src={artwork}
                                alt={`Artwork ${index + 1}`}
                                width={400}
                                height={400}
                                loading="lazy"
                                className="artworkImage no-select animate__animated animate__flipInX"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {showButton && visibleCount < images.length && (
                <div className="d-flex justify-content-center mb-4">
                    <button
                        onClick={showMore}
                        disabled={buttonDisabled}
                        className={
                            buttonDisabled
                                ? 'disabled-button'
                                : 'enabled-button'
                        }
                    >
                        {buttonDisabled
                            ? `${seeMore} ${buttonCountdown}${sec}`
                            : `${seeMore}`}
                    </button>
                </div>
            )}
        </div>
    );
};

ArtWorks.propTypes = {
    totalArtworks: PropTypes.number.isRequired,
};

export default dynamic(() => Promise.resolve(ArtWorks), { ssr: false });
