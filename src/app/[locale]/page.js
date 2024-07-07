import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('IndexPage');

    return (
        <>
            <h1 className="display-4 mb-4 font-weight-semibold">
                {t('title')}
            </h1>
            <p>{t('description')}</p>
        </>
    );
}
