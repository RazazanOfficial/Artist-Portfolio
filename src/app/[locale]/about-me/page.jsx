import AboueMe from '@/components/AboueMe';
import { useTranslations } from 'next-intl';
const page = () => {
    const tAu = useTranslations('aboutMe');
    return (
        <>
            <AboueMe
                bioText1={tAu('bioText1')}
                // bioText2={tAu('bioText2')}
                name={tAu('name')}
                quote={tAu('quote')}
                bioText3={tAu('bioText3')}
                // bioText4={tAu('bioText4')}
            />
        </>
    );
};

export default page;
