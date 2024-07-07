import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/styles/font[En].css';
import '@/styles/font[Fa].css';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'Hiva Aslany',
    description: 'Hiva Aslany personal website',
};

export default function RootLayout({ children, params: { locale } }) {
    const tf = useTranslations('Footer');
    const th = useTranslations('Navigation');
    return (
        <html lang={locale} dir={locale == 'en' ? 'ltr' : 'rtl'}>
            <body
                style={
                    locale == 'en'
                        ? { fontFamily: 'FuturaLT' }
                        : { fontFamily: 'Shabnam' }
                }
            >
                <div className="d-flex flex-column min-vh-100 max-w-4xl mx-auto">
                    <Header
                        home={th('home')}
                        artwroks={th('artworks')}
                        aboutMe={th('aboutMe')}
                        contactMe={th('contactMe')}
                    />
                    <main className="flex-grow-1">{children}</main>
                    <Footer
                        copyright={tf('copyright')}
                        developer={tf('developer')}
                        contact={tf('contact')}
                        sayMyName={tf('sayMyName')}
                    />
                </div>
            </body>
        </html>
    );
}
