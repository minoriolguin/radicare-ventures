import React from 'react';
import { GoTriangleDown } from "react-icons/go";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50 p-4 bg-white shadow-lg">
            <a href="/" className='pl-10'>
                <img src="/radicare_logo.svg" alt="Radicare Logo" className="h-10" />
            </a>
            <ul className="flex ml-2 md:ml-5 items-center list-none lg:space-x-5 pr-2 lg:pr-6 text-lg">

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <a href="/home" className="no-underline">Home</a>
                    </button>
                </li>

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <a href="/services" className="no-underline">
                            <div className="flex flex-row items-center gap-3">
                                Request a Service
                                <GoTriangleDown />
                            </div>
                        </a>
                    </button>
                </li>

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <a href="/our_work" className="no-underline">
                            <div className="flex flex-row items-center gap-3">
                                Our Work
                                <GoTriangleDown />
                            </div>
                        </a>
                    </button>
                </li>

                <li>
                    <button className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        <a href="/about" className="no-underline">About</a>
                    </button>
                </li>
                <li>
                    <button className="bg-customGreen rounded-full p-2.5 px-5 hover:bg-darkGreen">
                        <a href="/contact" className="text-white text-lg no-underline">Contact</a>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
