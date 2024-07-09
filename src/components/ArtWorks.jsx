'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import imgWhite from '@/images/imgWhite.png';
import '@/styles/artworks.css';
import loading from '@/images/loading.gif';

const ArtWorks = ({ totalArtworks, seeMore, sec, notArtworkAvailable }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [showButton, setShowButton] = useState(true);
    const [imageSources, setImageSources] = useState([]);
    const [buttonCountdown, setButtonCountdown] = useState(3);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const s3BaseUrl =
        'https://artworks-h-a.s3.ir-thr-at1.arvanstorage.ir/artworks%2Fartwork';
    const artworks = Array.from(
        { length: totalArtworks },
        (_, i) => `${s3BaseUrl}${i + 1}.jpg?versionId=`
    );

    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
        setButtonDisabled(true);
        setButtonCountdown(3);
    };

    const handleImageError = (index) => {
        setImageSources((prevSources) => {
            const newSources = [...prevSources];
            newSources[index] = imgWhite;
            return newSources;
        });
        setShowButton(false);
    };

    useEffect(() => {
        setImageSources(artworks);
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

    if (!artworks || artworks.length === 0) {
        return <p>{notArtworkAvailable}</p>;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {imageSources.slice(0, visibleCount).map((artwork, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="d-flex justify-content-center">
                            <Image
                                src={imageSources[index]}
                                alt={`Artwork ${index + 1}`}
                                width={1700}
                                height={1700}
                                // objectFit='contain'
                                // loader={loading}
                                // style={{maxWidth:'100%', maxHeight: '100%', objectFit: 'contain'}}
                                className="artworkImage no-select animate__animated animate__flipInX"
                                onError={() => handleImageError(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {showButton && visibleCount < artworks.length && (
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

export default ArtWorks;
