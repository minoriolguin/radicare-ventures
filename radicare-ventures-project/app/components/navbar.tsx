import React from 'react';
import { GoTriangleDown } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 p-4 bg-white shadow-lg">
            <Link href="/" className='pl-10'>
                <Image src="/radicare_logo.svg" alt="Radicare Logo" className="h-10" />
            </Link>
            <ul className="flex ml-2 md:ml-5 items-center list-none lg:space-x-5 pr-2 lg:pr-6 text-lg">

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <Link href="/" className="no-underline">Home</Link>
                    </button>
                </li>

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <Link href="/" className="no-underline">
                            <div className="flex flex-row items-center gap-3">
                                Request a Service
                                <GoTriangleDown />
                            </div>
                        </Link>
                    </button>
                </li>

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <Link href="/" className="no-underline">
                            <div className="flex flex-row items-center gap-3">
                                Our Work
                                <GoTriangleDown />
                            </div>
                        </Link>
                    </button>
                </li>

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <Link href="/" className="no-underline">About</Link>
                    </button>
                </li>
                <li>
                    <button className="bg-customGreen rounded-full p-2.5 px-5 hover:bg-darkGreen">
                        <Link href="/" className="text-white text-lg no-underline">Contact</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
