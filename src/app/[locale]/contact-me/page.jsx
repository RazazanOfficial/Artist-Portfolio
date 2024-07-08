import React from 'react';
import ContactMe from '@/components/ContactMe';
import { useTranslations } from 'next-intl';
const page = () => {
    const tc = useTranslations('contactMe');
    return (
        <div>
            <ContactMe
                contactMe={tc('contactMe')}
                error1={tc('error1')}
                error2={tc('error2')}
                firstName={tc('firstName')}
                lastName={tc('lastName')}
                email={tc('email')}
                subject={tc('subject')}
                message={tc('message')}
                success={tc('success')}
                submit={tc('submit')}
            />
        </div>
    );
};

export default page;
