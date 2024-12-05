"use client";

import React, { ReactNode } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import AcmeLogo from "@/../public/img/LogoEmpresa.png";
import Image from "next/image";

export function NavBar() {
    const icons: { [key: string]: ReactNode } = {
        chevron: "",
        scale: <Image src="/img/imageNavBar1.png" alt="Bolo Piscininha" width={24} height={24} className="dark:invert"/>,
        lock: "",
        activity: <Image src="/img/imageNavBar2.png" alt="Bolo Gelado" width={24} height={24} className="dark:invert"/>,
        flash: <Image src="/img/imageNavBar3.png" alt="Bolo Aniversário" width={24} height={24} className="dark:invert"/>,
        server: <Image src="/img/imageNavBar4.png" alt="Cup Cakes" width={24} height={24} className="dark:invert"/>,
        user: "",
    };

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Bolos piscininha", href: "/bolos/piscininha" },
        { name: "Bolos gelados", href: "/bolos/gelados" },
        { name: "Bolos de aniversário", href: "/bolos/aniversario" },
        { name: "Cup cake", href: "/bolos/cupcakes" },
        { name: "Sobre nós", href: "/contato" },
        { name: "Como encomendar", href: "/como-encomendar" }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src={AcmeLogo.src} alt="Logo da Empresa" width={50} height={50} />
                    <p className="font-bold text-inherit">Caseirinhos da Lê</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="solid"
                            >
                                Bolos
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Menu de Bolos"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="piscininha"
                            description="Deliciosos bolos piscininha feitos com muito carinho"
                            startContent={icons.scale}
                            href="/bolos/piscininha"
                        >
                            Bolos piscininha
                        </DropdownItem>
                        <DropdownItem
                            key="gelados"
                            description="Bolos gelados perfeitos para refrescar seu dia"
                            startContent={icons.activity}
                            href="/bolos/gelados"
                        >
                            Bolos gelado
                        </DropdownItem>
                        <DropdownItem
                            key="aniversario"
                            description="Bolos especiais para tornar sua festa ainda mais especial"
                            startContent={icons.flash}
                            href="/bolos/aniversario"
                        >
                            Bolos de aniversário
                        </DropdownItem>
                        <DropdownItem
                            key="cupcakes"
                            description="Deliciosos cupcakes para todas as ocasiões"
                            startContent={icons.server}
                            href="/bolos/cupcakes"
                        >
                            Cup cakes
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link href="/contato" aria-current="page" className="text-[#000] dark:text-white">
                        Sobre Nós
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-[#000] dark:text-white" href="/como-encomendar">
                        Como encomendar
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
