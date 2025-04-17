import React from 'react'
import { howItWorks } from '@/data/howitswork'
import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function HowItsWorkSection() {
  return (
    <div>
        <section className=" w-full py-12 md:py-24 lg:py-32 bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className=' text-center max-w-3xl mx-auto mb-12'>
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">How It Works</h2>
                    <p className='text-muted-foreground'>
                        Four simple steps to accelerate your career growth
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {howItWorks.map((item,index)=>{
                      return(
                        <div key={index} className=' flex flex-col items-center text-center space-y-4'>
                            <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
                                {item.icon}
                            </div>
                            <h3 className='font-semibold text-xl'>{item.title}</h3>
                            <p className='text-muted-foreground'>{item.description}</p>
                        </div>
                      )
                    })}
                </div>
            </div>
        </section>

    </div>
  )
}
