import React from 'react'
import { getResume } from '@/actions/resume'
import ResumeBuilder from './_components/ResumeBuilder'

const ResumePage = async () => {

    const resume = await getResume()

  return (
    <div className=' container mx-auto p-12 bg-background/100'>
        <ResumeBuilder initialContent={resume?.content}/>
    </div>
  )
}

export default ResumePage