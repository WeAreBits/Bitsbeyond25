import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { IoMenu, IoClose } from "react-icons/io5";
import TopContacts from './TopContacts';
import CTAButtons from './CTAButtons';
function MobileNav() {
  return (
<Drawer direction='right'>
  <DrawerTrigger className='ml-3 block lg:hidden'><IoMenu className='w-9 h-9 cursor-pointer'/></DrawerTrigger>
  <DrawerContent className='bg-white max-sm:min-w-full border-none m-0'>
    <DrawerHeader className='grid grid-cols-6 items-center bg-blue shadow'>
      <DrawerClose asChild>
        <IoClose className='w-9 h-9 cursor-pointer text-white'/>
      </DrawerClose> 
      <div className='col-span-5'>
        <CTAButtons/>
      </div>
    </DrawerHeader>
    <DrawerFooter className='shadow bg-white border-t-2 border-blue'>
    <TopContacts/>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default MobileNav