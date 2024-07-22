import React from 'react';
import '@/styles/aboutMe.css';
import img1 from '@/images/aboutMe/img1.jpg'
import img2 from '@/images/aboutMe/img2.jpg'
import Image from 'next/image';
const AboutMe = ({ name, bioText1, bioText2, bioText3, bioText4, quote }) => {
    return (
        <div className='d-flex justify-content-center base-about-me'>
            <div className="container about-me">
                <div className="row mx-auto">
                    <div className="div1 col-md-4">
                        <Image
                            src={img1}
                            className="img-fluid"
                            alt="Tori Tipton"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="div2 col-md-8">
                        <h2> {name}</h2>
                        <p>{bioText1}</p>
                        {/* <p>{bioText2}</p> */}
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <div className="row mx-auto artist-statement">
                    <div className="div2 col-md-8">
                        <h2>{quote}</h2>
                        <p>{bioText3}</p>
                        {/* <p>{bioText4}</p> */}
                    </div>
                    <div className="col-md-4">
                        <Image
                            src={img2}
                            className="img-fluid"
                            alt="Artwork"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
