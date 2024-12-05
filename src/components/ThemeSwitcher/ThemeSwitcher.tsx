// app/components/ThemeSwitcher.tsx
"use client";
import { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, Button } from "@nextui-org/react";
import { Icon } from "./Icon";
import Link from "next/link";
import { menuitens } from "./menuItens";
import {useTheme} from "next-themes";
import { Key, useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  

  return (  
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="rounded-full !p-2 !min-w-0 !w-fit !h-fit">
          <Icon/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu items={menuitens} onAction={(key:Key) => setTheme(key as string)}>
        {(item) => (
          <DropdownItem key={item.key}>
            <Link href="#">{item.label}</Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
};
