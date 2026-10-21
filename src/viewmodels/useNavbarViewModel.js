// Controls mobile navigation and exposes product navigation data.
import{useState}from'react';import{menuItems,product}from'../models/product'
export default function useNavbarViewModel(){const[isOpen,setIsOpen]=useState(false);return{isOpen,menuItems,product,toggleMenu:()=>setIsOpen(v=>!v),closeMenu:()=>setIsOpen(false)}}
