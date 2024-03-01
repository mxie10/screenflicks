import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const companySubMenus = [
    {title:'About Us',url:''},
    {title:'Careers',url:''},
    {title:'Contact',url:''},
];
const supportSubMenus = [
    {title:'Contact Support',url:''},
    {title:'Help Center',url:''},
    {title:'Supported Devices',url:''},
    {title:'Accessibility',url:''}
];
const partners = [
    {title:'Advertise with Us',url:''},
    {title:'Partner with Us',url:''}
];
const legal = [
    {title:'Privacy Policy',url:''},
    {title:'Terms of Use',url:''}
];

const Footer = () => {
  return (
    <div 
        className='
            flex 
            flex-col
            shadow-md
            border-2
            px-10
            pt-7
            pb-16
            bg-neutral-200
            mt-10
        '
    >
        <div className='flex flex-row justify-between'>
            <div className='text-xl font-bold text-cyan-700'>ScreenFlicks</div>
            <div className='flex flex-row gap-2'>
                <FaFacebook size={25} color='black'/>
                <FaTwitter size={25} color='black'/>
                <FaInstagramSquare size={25} color='black'/>
                <FaLinkedin size={25} color='black'/>
            </div>
        </div>
        <div className='flex flex-row gap-10 mt-5 text-black'>
                {/* companySubMenus */}
                <div className='flex flex-col gap-5'>
                    <div className='font-bold'>COMPANY</div>
                    <div className='flex flex-col gap-2'>
                        {companySubMenus.map((item)=>{
                            return (
                                <div>{item.title}</div>
                            )
                        })}
                    </div>
                </div>
                 {/* supportSubMenus */}
                 <div className='flex flex-col gap-5'>
                    <div className='font-bold'>SUPPORT</div>
                    <div className='flex flex-col gap-2'>
                        {supportSubMenus.map((item)=>{
                            return (
                                <div>{item.title}</div>
                            )
                        })}
                    </div>
                </div>
                 {/* partners */}
                 <div className='flex flex-col gap-5'>
                    <div className='font-bold'>PARTNERS</div>
                    <div className='flex flex-col gap-2'>
                        {partners.map((item)=>{
                            return (
                                <div>{item.title}</div>
                            )
                        })}
                    </div>
                </div>
                   {/* legal */}
                   <div className='flex flex-col gap-5'>
                    <div className='font-bold'>LEGAL</div>
                    <div className='flex flex-col gap-2'>
                        {legal.map((item)=>{
                            return (
                                <div className='cursor-pointer'>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer;
