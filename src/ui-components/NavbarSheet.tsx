import { ReactNode } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../components/ui/sheet"
import logo from "../assets/logo.png"

const NavbarSheet = ({ children }: { children: ReactNode }) => {
    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent>
                <div>
                    <div className="flex items-center gap-x-1">
                        <img className="w-[40px] h-[40px]" src={logo} alt="" />
                        <p className="text-sm font-semibold text-black">Bangladesh National Portal</p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>

                        </div>
                        <input type="text" id="search-navbar" className="block w-full mt-10 p-2 ps-10 text-sm text-gray-900 rounded-md bg-gray-50 focus:outline-none border border-color-primary" placeholder="Search..." />
                    </div>
                    <div className="mt-10">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Bangla</SelectItem>
                                <SelectItem value="dark">English</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-3">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Office" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Dhaka</SelectItem>
                                <SelectItem value="dark">Rajshahi</SelectItem>
                                <SelectItem value="system">Khulna</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarSheet