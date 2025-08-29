'use client'
import Toggle from "./Toggle"
import { useEffect, useState } from "react"
import { HiMenuAlt1, HiOutlineX, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const TopBar = () => {
    const [darkTheme, setdarkTheme] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Home');
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMenuChange = (menu: string) => {
        setActiveMenu(menu);
    }

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.setAttribute('dark-theme','dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.removeAttribute('dark-theme');
            localStorage.setItem('theme', 'light')
        }
    }, [darkTheme])

    return (
        <>
            <div className='hidden custom-container h-full lg:flex justify-between items-center rounded-full bg-white/30 backdrop-blur'>
                <ul className='w-full flex justify-evenly items-center gap-3 '>
                    <li className='menu'>Home</li>
                    <li className='menu'>Skills</li>
                    <li className='menu'>Projects</li>
                    <li className='menu'>Contact</li>
                    <li>
                        <div className={`cursor-pointer w-[54px] h-[32px] bg-white rounded-3xl inline-flex items-center p-1 ${darkTheme ? 'bg-black' : ''}`} onClick={() => setdarkTheme(!darkTheme)}>
                            <span className={`w-[50%] h-full rounded-full grid place-content-center ${darkTheme ? '' : 'bg-[#2f3792] transition-all ease-out duration-200 rotate-180'}`}><HiOutlineSun color={darkTheme ? '' : '#fff'} /></span>
                            <span className={`w-[50%] h-full rounded-full grid place-content-center ${darkTheme ? 'bg-[#2f3792] transition-all ease-out duration-200 rotate-[260deg]' : ''}`}><HiOutlineMoon color={darkTheme ? '#fff' : ''} /></span>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="h-full w-full flex justify-between items-center bg-[#333333] px-4 lg:hidden">
                <span className="relavite z-9" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <HiOutlineX color="#fff" size={32} /> : <HiMenuAlt1 color="#fff" size={32} />}   </span>
                <span>
                    <div className={`cursor-pointer w-[54px] h-[32px] bg-white rounded-3xl inline-flex items-center p-1 ${darkTheme ? 'bg-black' : ''}`} onClick={() => setdarkTheme(!darkTheme)}>
                        <span className={`w-[50%] h-full rounded-full grid place-content-center ${darkTheme ? '' : 'bg-[#2f3792] transition-all ease-out duration-200 rotate-180'}`}><HiOutlineSun color={darkTheme ? '#fff' : ''} /></span>
                        <span className={`w-[50%] h-full rounded-full grid place-content-center ${darkTheme ? 'bg-[#2f3792] transition-all ease-out duration-200 rotate-[260deg]' : ''}`}><HiOutlineMoon color={darkTheme ? '' : '#fff'} /></span>
                    </div>
                </span>
                {
                    mobileMenu && <ul className="fixed h-full overflow-hidden inset-0 flex flex-col justify-start bg-[inherit] items-center gap-5  pt-32">
                        <li className={`mobilemenu ${activeMenu === 'Home' ? 'activemobilemenu' : ''}`} onClick={() => handleMenuChange('Home')}>Home</li>
                        <li className={`mobilemenu ${activeMenu === 'Skills' ? 'activemobilemenu' : ''}`} onClick={() => handleMenuChange('Skills')}>Skills</li>
                        <li className={`mobilemenu ${activeMenu === 'Projects' ? 'activemobilemenu' : ''}`} onClick={() => handleMenuChange('Projects')}>Projects</li>
                        <li className={`mobilemenu ${activeMenu === 'Contact' ? 'activemobilemenu' : ''}`} onClick={() => handleMenuChange('Contact')}>Contact</li>
                    </ul>
                }

            </div>

        </>

    )
}

export default TopBar
