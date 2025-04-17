import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
const HeroSection = () => {
  return (
    <section className=' w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl'>YOUR PERSONAL AI HELPER<br/>
                FOR YOUR PROFESSIONAL SUCCESS
                </h1>
                <p className=' mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Achieve your professional goals with AI-enhanced career guidance, resume building, and interview preparation.
                </p>
            </div>
            <div>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
                {/* <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        
                    </Button>
                </Link> */}
            </div>
        </div>
    </section>
  )
}

export default HeroSection