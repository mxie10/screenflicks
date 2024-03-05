import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const companySubMenus = [
    { title: 'About Us', url: '' },
    { title: 'Careers', url: '' },
    { title: 'Contact', url: '' },
];
const supportSubMenus = [
    { title: 'Contact Support', url: '' },
    { title: 'Help Center', url: '' },
    { title: 'Supported Devices', url: '' },
    { title: 'Accessibility', url: '' }
];
const partners = [
    { title: 'Advertise with Us', url: '' },
    { title: 'Partner with Us', url: '' }
];
const legal = [
    { title: 'Privacy Policy', url: '' },
    { title: 'Terms of Use', url: '' }
];

const Footer = () => {

    const FooterMonue = (props:any) => {
        const {subMenus} = props;
        return (
            <div className='flex flex-col gap-5'>
                <div className='font-bold'>COMPANY</div>
                <div className='flex flex-col gap-2'>
                    {subMenus.map((item:any,index:number)=>{
                        return (
                            <div key={index}>{item.title}</div>
                        )
                    })}
                </div>
            </div>
        )
    }

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
                    <FaFacebook size={25} color='black' />
                    <FaTwitter size={25} color='black' />
                    <FaInstagramSquare size={25} color='black' />
                    <FaLinkedin size={25} color='black' />
                </div>
            </div>
            <div 
                className='
                    grid 
                    grid-cols-2 
                    md:grid-cols-4 
                    gap-2
                    mt-7
                '
            >
                <FooterMonue subMenus={companySubMenus}/>
                <FooterMonue subMenus={supportSubMenus}/>
                <FooterMonue subMenus={partners}/>
                <FooterMonue subMenus={legal}/>
            </div>
        </div>
    )
}

export default Footer;
