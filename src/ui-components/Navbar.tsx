import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import logo from "../assets/logo.png"
import { Menu } from "lucide-react"
import NavbarSheet from "./NavbarSheet"

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF30] py-2 sticky top-0 z-50">
    <div className="max-w-[1024px] mx-2 lg:mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
          <p className="text-lg font-semibold text-white">Bangladesh National Portal</p>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>

            </div>
            <input type="text" id="search-navbar" className="block w-[200px] lg:w-[300px] p-2 ps-10 text-sm text-gray-900 rounded-md bg-gray-50 focus:outline-none border border-color-primary" placeholder="Search..." />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-x-1 md:gap-x-2 ">
          <div>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Bangla</SelectItem>
                <SelectItem value="dark">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[100px]">
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
        <div className="block md:hidden">
          <NavbarSheet>
            <button>
              <Menu className="text-white h-7 w-7"/>  
            </button>
            
          </NavbarSheet>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar