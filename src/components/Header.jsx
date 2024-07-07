import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from '@/components/Local-switcher';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/header.css'; // فرض می‌کنیم که فایل CSS شما در این مسیر است

export default function Header() {
    const t = useTranslations('Navigation');
    const locale = useLocale();

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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href={`/${locale}`}
                                >
                                    {t('home')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href={`/${locale}/artworks`}
                                >
                                    {t('artworks')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href={`/${locale}/about-me`}
                                >
                                    {t('aboutMe')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href={`/${locale}/contact-me`}
                                >
                                    {t('contactMe')}
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
