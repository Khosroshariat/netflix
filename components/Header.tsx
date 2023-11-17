
import useAuth from '@/hooks/useAuth'
import {SearchIcon, BellIcon} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const {logout} = useAuth()

  useEffect(() => {
    const handlescroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handlescroll)

    return () => {
      window.removeEventListener('scroll', handlescroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#c77777]'}`}>
        <div className="flex item-center space-x-2 md:space-x-10">
            <img
            src="https://rb.gy/ulxxee"
            className="cursor-pointer object-contain"
            width={150}
            height={150}
            alt="" />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink" >Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
            </ul>
        </div>
        <div className='flex items-center space-x-4 text-sm font-light'>
         <SearchIcon className='hidden h-6 w-6 sm:inline' />
         <p className='hidden lg:inline'>Kids</p>
         <BellIcon className= 'h-6 w-6' />
            <Image
            onClick={logout} 
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
            width={30}
            height={30}
             />
        </div>
    </header>
  )
}

export default Header