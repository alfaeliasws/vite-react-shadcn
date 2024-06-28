import React from 'react'
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu-right"
import { NavbarStructure } from '../../structures/NavbarStructures'
import { c } from '../../helpers/styleHelper'

function Navbar({className}) {
    return (
        <NavigationMenu className={c( "mt-3 text-inst tracking-wider" , className)}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="tracking-wider bg-transparent">About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-white text-inst">
                                {NavbarStructure.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="tracking-wider bg-transaparent">Account Center</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-inst">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                    >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        Al-Consultant
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Building proper websites for your business, providing your connectivity to the world. Partner with us for your great business solutions.
                                    </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                                <ListItem href="/register" title="Sign Up">
                                   Sign up to see and use our ongoing satelite projects.
                                </ListItem>
                                <ListItem href="/login" title="Sign In">
                                    Sign in to your account and enjoy our services.
                                </ListItem>
                                <ListItem href="/offers" title="Offers">
                                    See our projects and be happy to join them. Soon, there are free web apps to use as well.
                                </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar