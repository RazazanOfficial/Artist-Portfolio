import Bootstrap from '@/components/Bootstrap';

export default function RootLayout({ children }) {
    return (
        <>
            <Bootstrap />
            {children}
        </>
    );
}
