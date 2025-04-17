import React from 'react'
import { faqs } from '@/data/faqs'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  

export default function Faqs() {
  return (
    <div>
        <section className=" w-full py-12 md:py-24 lg:py-32 bg-background/100">
            <div className="container mx-auto px-4 md:px-6">
                <div className=' text-center max-w-3xl mx-auto mb-12'>
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
                </div>
                <div className="">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq,index)=>{
                            return(
                                <AccordionItem value={index} key={`item-${index}`}>
                                    <AccordionTrigger>
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    </div>
  )
}
