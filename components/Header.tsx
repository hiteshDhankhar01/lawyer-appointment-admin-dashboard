"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
} from "@/components/ui/drawer";

const Header: React.FC = () => {
    return (
        <div className="h-full w-full bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 p-6 flex items-center justify-center">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                        Access Form
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gray-900 text-gray-100 rounded-t-lg">
                    <DrawerHeader className="border-b border-gray-700 pb-4">
                        <DrawerTitle className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Login Form
                        </DrawerTitle>
                        <DrawerDescription className="text-sm text-gray-400">
                            Access your account with your credentials.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto">
                        <form action="" className="space-y-6 grid grid-cols-2 gap-6">
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                    User
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-2 p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-2 p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label htmlFor="gender" className="text-sm font-medium text-gray-300">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    id="gender"
                                    className="mt-2 p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                                    placeholder="Enter your gender"
                                />
                            </div>
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-2 p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <DrawerFooter className="mt-6 border-t border-gray-700 pt-4">
                        <DrawerClose asChild>
                            <Button variant="outline" className="w-fit mx-auto px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300">
                                Close
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Header;
