import ArtWorks from '@/components/ArtWorks';
import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
    const totalArtworks = 500; // تعداد کل تصاویر موجود
    const tA = useTranslations('artworks')

    return (
        <>
            <ArtWorks totalArtworks={totalArtworks} seeMore={tA('seeMore')} sec={tA('sec')} notArtworkAvailable={tA('notArtworkAvailable')}/>
        </>
    );
};

export default page;
