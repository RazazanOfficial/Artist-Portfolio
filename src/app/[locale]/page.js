import HomePage from '@/components/HomePage';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('homePage');

    return (
        <>
            <HomePage smallBio={t('smallBio')} btnArtwroks={t('btnArtwroks')}/>
        </>
    );
}
