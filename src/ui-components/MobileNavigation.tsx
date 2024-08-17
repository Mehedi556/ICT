import { ReactNode } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../components/ui/sheet"

import { Home } from "lucide-react";



const MobileNavigation = ({ children }: { children: ReactNode }) => {
    return (
        <Sheet>
            <SheetTrigger className="w-full text-white">{children}</SheetTrigger>
            <SheetContent className="w-[100%] bg-white ">
                <nav className="flex w-full">
                    <ul className="flex flex-col p-4 space-y-2">
                        {/* Home */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer flex items-center">
                                <Home /> <span className="ml-2">Home</span>
                            </div>

                        </li>

                        {/* About Us */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">About Us</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[400px] grid grid-cols-2 z-10">
                                {/* About Us dropdown items */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">About Division</h4>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">History & Activities</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Vision & Mission</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Honorable Adviser</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">List of Ex-Ministers</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Secretary</a>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Manpower</h4>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Officers</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Work Distribution</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Information Officer</a>
                                </div>
                            </div>
                        </li>

                        {/* Affiliated Offices/Institutions */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">Affiliated Offices/Institutions</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[200px] z-10">
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">List of Offices/Institutions</a>
                            </div>
                        </li>

                        {/* Project/Programme */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">Project/Programme</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[400px] grid grid-cols-2 z-10">
                                {/* Project/Programme dropdown items */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Project</h4>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Ongoing Projects</a>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Completed Projects</a>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Programme</h4>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Completed Programme</a>
                                </div>
                            </div>
                        </li>

                        {/* Gallery */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">Gallery</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[200px] z-10">
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Photo Gallery</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Video Gallery</a>
                            </div>
                        </li>

                        {/* Acts/Policy */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">Acts/Policy</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[400px] z-10">
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Guidelines</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Strategies</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Draft Acts</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Rules</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Policy</a>
                            </div>
                        </li>

                        {/* E-Service */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">E-Service</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[400px] z-10">
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Innovation</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Information System</a>
                                <a href="#" className="block text-sm p-2 hover:bg-gray-200">Management System</a>
                            </div>
                        </li>

                        {/* Contact & Comment */}
                        <li className="group relative">
                            <div className="text-xs p-2 cursor-pointer">Contact & Comment</div>
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg p-4 w-[400px] grid grid-cols-2 z-10">
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Contact</h4>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Office Address</a>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Comment</h4>
                                    <a href="#" className="block text-sm p-2 hover:bg-gray-200">Your Question & Comment</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>

    )
}




export default MobileNavigation