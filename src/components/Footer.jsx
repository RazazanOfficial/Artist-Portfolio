import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <div className="my-4 text-center">
            <p>{t('copyright')}</p>
        </div>
    );
}
