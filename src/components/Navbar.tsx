import Image from 'next/image'

export default function Navbar (): React.ReactElement {
  return (
    <nav className='bg-white px-2 z-10 sticky top-0'>
      <div className='flex flex-wrap items-center justify-between p-4'>
        <a href='#' className='flex items-center'>
          <Image
            src='/porto-icon.svg'
            className='h-8 mr-3'
            alt='Logo'
            width={50}
            height={50}
          />
        </a>
        <ul className='flex gap-8'>
          <li className='hover:text-deep-blush-300'>
            <a href='#welcome'>Welcome</a>
          </li>
          <li className='hover:text-deep-blush-300'>
            <a href='#about-me'>About Me</a>
          </li>
          <li className='hover:text-deep-blush-300'>
            <a href='#my-works'>My Works</a>
          </li>
          <li className='hover:text-deep-blush-300'>
            <a href='#blog'>Blog</a>
          </li>
          <li className='hover:text-deep-blush-300'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
