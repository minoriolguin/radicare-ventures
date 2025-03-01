"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Menu and Close icons

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full sm:max-w-screen flex items-center justify-between z-50 p-4 bg-white shadow-md sm:shadow-lg">
            {/* Logo */}
            <Link href="/" className="pl-10">
                <Image src="/radicare_logo.svg" alt="Radicare Logo" className="h-10" width={128} height={40} />
            </Link>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <ul className="hidden lg:flex ml-2 md:ml-5 items-center list-none lg:space-x-5 pr-2 lg:pr-6 text-lg">
                <li>
                    <Link href="/" className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/" className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen flex flex-row items-center gap-3">
                        Request a Service <GoTriangleDown />
                    </Link>
                </li>
                <li>
                    <Link href="/" className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen flex flex-row items-center gap-3">
                        Our Work <GoTriangleDown />
                    </Link>
                </li>
                <li>
                    <Link href="/" className="rounded-lg py-2.5 px-5 text-black hover:bg-lightGreen hover:text-customGreen">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="bg-customGreen rounded-full p-2.5 px-5 hover:bg-darkGreen text-white text-lg">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden p-2 text-black hover:text-gray-600"
                onClick={() => setIsOpen(true)}
            >
                <HiOutlineMenu size={28} />
            </button>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 p-2 text-black hover:text-gray-600"
                    onClick={() => setIsOpen(false)}
                >
                    <HiX size={28} />
                </button>

                {/* Mobile Navigation Links */}
                <ul className="mt-16 flex flex-col space-y-4 px-6 text-lg">
                    <li>
                        <Link href="/" className="block py-2 px-3 rounded-lg hover:bg-gray-200" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block py-2 px-3 rounded-lg hover:bg-gray-200 flex items-center gap-3" onClick={() => setIsOpen(false)}>
                            Request a Service <GoTriangleDown />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block py-2 px-3 rounded-lg hover:bg-gray-200 flex items-center gap-3" onClick={() => setIsOpen(false)}>
                            Our Work <GoTriangleDown />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block py-2 px-3 rounded-lg hover:bg-gray-200" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block bg-customGreen text-white py-3 px-5 rounded-full text-center hover:bg-darkGreen" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

