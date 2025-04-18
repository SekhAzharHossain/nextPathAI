import React from 'react'
import { industries } from '@/data/industries'
import {getUserOnboardingStatus} from '@/actions/user'
import { redirect } from 'next/navigation'
import OnboardingForm from './_components/Onboarding-Form'

const onboarding= async()=> {

    //Check if user is already onboarded

    const {isOnboarded}=await getUserOnboardingStatus()

    if(isOnboarded){
        redirect("/dashboard")
    }

  return (
    <OnboardingForm industries={industries}/>
  )
}

export default onboarding;
