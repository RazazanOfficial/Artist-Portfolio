import '@/styles/footer.css';
import email from '@/images/email.svg';
import whatsapp from '@/images/whatsapp.svg';
import instagram from '@/images/instagram.svg';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer({ copyright, developer, contact, sayMyName }) {
    return (
        <div className="mt-4 pt-5 pb-1 footer">
            <div className="container">
                <div className="top d-flex justify-content-between align-items-center">
                    <div className="social-media-sec">
                        <p>{contact}</p>
                        <div className="social-media d-flex gap-2">
                            <Image
                                src={email}
                                width={45}
                                height={45}
                                alt="Email"
                            />
                            <Image
                                src={whatsapp}
                                width={45}
                                height={45}
                                alt="WhatsApp"
                            />
                            <Image
                                src={instagram}
                                width={45}
                                height={45}
                                alt="Instagram"
                            />
                        </div>
                    </div>
                    <div className="name-sec">
                        <h1>{sayMyName}</h1>
                    </div>
                </div>
                <hr />
                <div className="bottom d-flex flex-column justify-content-between w-100 text-center">
                    <p>{copyright}</p>
                    <Link href="https://meraj-razazan.ir" target='_blank'>{developer}</Link>
                </div>
            </div>
        </div>
    );
}
