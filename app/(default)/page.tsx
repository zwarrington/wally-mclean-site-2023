export const metadata = {
  title: 'Twenty Plus Six Web Development',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Blocks from '@/components/blocks'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Blocks />
    </>
  )
}
