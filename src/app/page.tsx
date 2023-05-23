import Image from 'next/image'
import Segment from '@/components/Segment'

export default function Home (): React.ReactElement {
  return (
    <div>
      <div id='welcome' className='h-screen'>
        <Image
          src='/welcome_banner.png'
          alt='Banner'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'
        />
        <div className='w-4/6 mx-auto my-10'>
          <h1 className='font-bold text-3xl text-deep-blush-300 my-3'>
            👋 Greetings
          </h1>
          <p className='text-justify mb-3'>
            Welcome to my portfolio website. I&apos;m Femi, and I&apos;m
            thrilled to have you here. This website showcases my work and
            achievements in the exciting realm of technology
          </p>
          <p className='text-justify mb-3'>
            Feel free to explore the various sections of my portfolio to get a
            comprehensive view of my abilities. Whether you&apos;re a potential
            client, employer, or simply someone interested in my work, I hope
            you find inspiration and valuable insights.
          </p>
          <p className='text-justify mb-3'>
            If you have any questions, collaboration opportunities, or would
            like to discuss potential projects, please don&apos;t hesitate to
            reach out to me. I&apos;m always excited to connect with like-minded
            individuals and explore new opportunities.
          </p>
          <p className='text-justify mb-3'>
            Best Regards,
            <br />
            Femi Novia Lina
          </p>
        </div>
      </div>
      <Segment id='about-me' title='😊 About Me'>
        <p>About Me content here.</p>
      </Segment>
      <Segment id='my-works' title='💻 My Works'>
        <p>My works content here</p>
      </Segment>
      <Segment id='blog' title='✍️ Blog'>
        <p>Blog content here</p>
      </Segment>
      <Segment id='contact' title='📲 Contact'>
        <p>Contact content here</p>
      </Segment>
    </div>
  )
}
