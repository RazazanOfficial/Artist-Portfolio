import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/styles/font[En].css';
import '@/styles/font[Fa].css';

export const metadata = {
    title: 'Hiva Aslany',
    description: 'Hiva Aslany personal website',
};

export default function RootLayout({ children, params: { locale } }) {
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
                    <Header />
                    <main className="flex-grow-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
