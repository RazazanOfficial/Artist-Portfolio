'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import '@/styles/local-switcher.css';
import enFlag from '@/images/en.png';
import faFlag from '@/images/fa.png';
import Image from 'next/image';

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (nextLocale) => {
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return (
        <div className="dropdown">
            <button
                className="btn btnsecondary dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    src={localActive === 'en' ? enFlag.src : faFlag.src}
                    alt={localActive}
                    className="flag-icon"
                />{' '}
                {localActive === 'en' ? 'English' : 'فارسی'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li>
                    <button
                        className="dropdown-item"
                        data-locale="en"
                        onClick={() => onSelectChange('en')}
                        disabled={isPending || localActive === 'en'}
                    >
                        <Image
                            width={25}
                            height={25}
                            src={enFlag.src}
                            alt="English"
                            className="flag-icon"
                        />{' '}
                        English
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        data-locale="fa"
                        onClick={() => onSelectChange('fa')}
                        disabled={isPending || localActive === 'fa'}
                    >
                        <Image
                            src={faFlag.src}
                            width={25}
                            height={25}
                            alt="فارسی"
                            className="flag-icon"
                        />{' '}
                        فارسی
                    </button>
                </li>
            </ul>
        </div>
    );
}
