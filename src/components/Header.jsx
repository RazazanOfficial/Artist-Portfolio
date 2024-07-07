'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/header.css';
import LocalSwitcher from './Local-switcher';

export default function Header({ home, artwroks, contactMe, aboutMe }) {
    const locale = useLocale();

    const closeNavbar = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarToggler && navbarCollapse) {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    };

    return (
        <header className="header container-fluid">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href={`/${locale}`}
                                    onClick={closeNavbar}
                                >
                                    {home}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href={`/${locale}/artworks`}
                                    onClick={closeNavbar}
                                >
                                    {artwroks}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href={`/${locale}/about-me`}
                                    onClick={closeNavbar}
                                >
                                    {aboutMe}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href={`/${locale}/contact-me`}
                                    onClick={closeNavbar}
                                >
                                    {contactMe}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <LocalSwitcher />
                </div>
            </nav>
        </header>
    );
}
