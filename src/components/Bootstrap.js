'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bootstrap = () => {
    useEffect(() => {
        if (typeof document !== undefined) {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return null;
};

export default Bootstrap;
