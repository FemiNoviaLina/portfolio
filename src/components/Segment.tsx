interface SegmentType {
  id: string
  title: string
  children: React.ReactNode
}

export default function Segment ({
  id,
  title,
  children
}: SegmentType): React.ReactElement {
  return (
    <div id={id} className='w-4/6 mx-auto my-10 pt-20 h-screen'>
      <h1 className='font-bold text-3xl text-deep-blush-300 my-3'>{title}</h1>
      {children}
    </div>
  )
}
