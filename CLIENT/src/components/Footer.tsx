import React from 'react';

function Footer() {
    return (
        <footer className="flex justify-between mt-auto bg-[#4d148c] px-[5%] text-white text-sm space-x-3 p-3">
            <span>© Interval House 2023</span>
            <a href='/K' className="hover:cursor hover:underline"> Contact the Developer</a>
        </footer>
    );
}

export default Footer;