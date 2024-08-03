"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = (item) => {
    const pathname = usePathname()
  return (
    <Link href={item.path} className=''>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink