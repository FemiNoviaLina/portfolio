import Image from 'next/image'

export default function ProjectCard (): React.ReactElement {
  return (
    <div className='mx-auto my-10'>
      <div className='h-1 bg-deep-blush-300'></div>
      <div className='h-[32rem] bg-slate-50 shadow-md p-5'>
        <Image
          src='/welcome_banner.png'
          alt='project'
          width={0}
          height={0}
          className='w-full h-auto'
        ></Image>
        <h2 className='font-bold my-2'>Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          laoreet porttitor quam vitae sollicitudin. Suspendisse potenti.
          Praesent posuere a odio sit amet elementum. Phasellus ac orci quis est
          sagittis sagittis nec quis risus.
        </p>
      </div>
    </div>
  )
}
