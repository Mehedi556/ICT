/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Home } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { cn } from "../lib/utils";
import React from "react";
import MobileNavigation from "./MobileNavigation";


const Navigation = () => {
  return (
    <div className="max-w-full">
      <div className="max-w-[1024px] lg:hidden block mx-2 lg:mx-auto p-2 bg-[#FFFFFF30] rounded-md mt-3">
        <MobileNavigation>
          <button className="w-full text-center">All Categories</button>
        </MobileNavigation>
      </div>
      <div className="max-w-[1024px] hidden lg:block mx-2 lg:mx-auto p-2 bg-[#FFFFFF30] rounded-md mt-3">
        <NavigationMenu className="">
          <NavigationMenuList className="flex flex-nowrap justify-between items-center">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2"><Home /></NavigationMenuTrigger>
              {/* <p>Home</p> */}
            </NavigationMenuItem>

            {/* About Us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-4">
                  {/* About Division */}
                  <ListColumn title="About Division">
                    <ListItem href="#">History & Activities</ListItem>
                    <ListItem href="#">Vision & Mission</ListItem>
                    <ListItem href="#">Honorable Adviser</ListItem>
                    <ListItem href="#">List of Ex-Ministers</ListItem>
                    <ListItem href="#">Secretary</ListItem>
                    <ListItem href="#">List of Ex-Secretaries</ListItem>
                    <ListItem href="#">Organogram</ListItem>
                    <ListItem href="#">Allocation of Business</ListItem>
                    <ListItem href="#">Principal Function</ListItem>
                    <ListItem href="#">Work Distribution</ListItem>
                    <ListItem href="#">Member Nomination</ListItem>
                  </ListColumn>

                  {/* Manpower */}
                  <ListColumn title="Manpower">
                    <ListItem href="#">Officers</ListItem>
                    <ListItem href="#">Work Distribution</ListItem>
                    <ListItem href="#">Information Officer</ListItem>
                    <ListItem href="#">GRS and Appellate Officer</ListItem>
                    <ListItem href="#">Focal Point officers</ListItem>
                  </ListColumn>

                  {/* Services of Divisions */}
                  <ListColumn title="Services of Divisions">
                    <ListItem href="#">Citizen Charter</ListItem>
                    <ListItem href="#">List of Citizen e-Services</ListItem>
                  </ListColumn>

                  {/* Committees of Ministry/Division */}
                  <ListColumn title="Committees of Ministry/Division">
                    <ListItem href="#">
                      Committees chaired by Honorable PM
                    </ListItem>
                    <ListItem href="#">
                      Honorable Minister Regarding Ministry/Division
                    </ListItem>
                  </ListColumn>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Affiliated Offices/Institutions */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">
                Affiliated Offices/Institutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <ListItem href="#">List of Offices/Institutions</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Project/Programme */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">Project/Programme</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                  {/* Project */}
                  <ListColumn title="Project">
                    <ListItem href="#">Ongoing Projects</ListItem>
                    <ListItem href="#">Procurement Plan</ListItem>
                    <ListItem href="#">Completed Projects</ListItem>
                  </ListColumn>

                  {/* Programme */}
                  <ListColumn title="Programme">
                    <ListItem href="#">Completed Programme</ListItem>
                  </ListColumn>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Gallery */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">Gallery</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <ListItem href="#">Photo Gallery</ListItem>
                  <ListItem href="#">Video Gallery</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Acts/Policy */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">Acts/Policy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <ListItem href="#">Guidelines</ListItem>
                  <ListItem href="#">Strategies</ListItem>
                  <ListItem href="#">Draft Acts</ListItem>
                  <ListItem href="#">Rules</ListItem>
                  <ListItem href="#">Policy</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* E-Service */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">E-Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-2">
                  <ListColumn title="E-Service">
                    <ListItem href="#">Innovation</ListItem>
                    <ListItem href="#">Information System</ListItem>
                    <ListItem href="#">Management System</ListItem>
                    <ListItem href="#">Casual</ListItem>
                    <ListItem href="#">Leave Management</ListItem>
                    <ListItem href="#">Smart Dashboard</ListItem>
                    <ListItem href="#">Get Your Freelancer ID</ListItem>
                    <ListItem href="#">Fellowship & Innovation</ListItem>
                    <ListItem href="#">Fund Application</ListItem>
                  </ListColumn>

                  <ListColumn title="">
                    <ListItem href="#">e-Nothi</ListItem>
                    <ListItem href="#">Web mail</ListItem>
                    <ListItem href="#">Online Salary Submission</ListItem>
                    <ListItem href="#">e-Tendering (e-GP)</ListItem>
                    <ListItem href="#">Mygov</ListItem>
                    <ListItem href="#">GRP</ListItem>
                    <ListItem href="#">Project Monitoring System</ListItem>
                    <ListItem href="#">Online ACR</ListItem>
                    <ListItem href="#">Online Recruitment</ListItem>
                  </ListColumn>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact & Comment*/}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs p-2">Contact & Comment</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                  {/* Project */}
                  <ListColumn title="Contact">
                    <ListItem href="#">Office Address</ListItem>
                  </ListColumn>

                  {/* Programme */}
                  <ListColumn title="Comment">
                    <ListItem href="#">Your Question & Comment</ListItem>
                  </ListColumn>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
};

const ListColumn = ({ title, children }: { title: any, children: any }) => (
  <li>
    <div className="text-sm font-semibold mb-2">{title}</div>
    <ul className="space-y-1">{children}</ul>
  </li>
);

// Reusable ListItem Component
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-xs font- leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Navigation