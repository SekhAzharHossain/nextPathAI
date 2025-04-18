"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {onboardingSchema} from "@/app/lib/schema"
import { useRouter } from 'next/navigation'
import { industries } from '@/data/industries'
import { Label } from '@/components/ui/label'
import { updateUser } from '@/actions/user'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import useFetch from '@/hooks/use-fetch'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'


const OnboardingForm = () => {

  const [selectedIndustry,setSelectedIndustry]=useState(null)
  const router=useRouter()

  const {register,handleSubmit,formState:{errors},setValue,watch} = useForm({
    resolver: zodResolver(onboardingSchema),
  })

  const {
    loading:updateLoading,
    fn:updateUserFn,
    data:updateResult
  }=useFetch(updateUser)

  const onSubmit=async (values)=>{

    try {
      const formattedIndustry = `${values.industry}-${values.subIndustry.toLowerCase().replace(/ /g,"-")}`
      await updateUserFn({
        ...values,
        industry:formattedIndustry,
      })
    } catch (error) {
      console.log("Onboarding error",error)
    }

  }

  useEffect(()=>{
    if(updateResult?.success && !updateLoading){
      toast.success("Profile completed successfully!")
      router.push("/dashboard")
      router.refresh()
    }
  },[updateLoading,updateResult])

  const watchIndustry = watch("industry")

  return (
    <div className=' flex items-center justify-center bg-background pb-10'>
        <Card className="w-full max-w-lg mt-10 mx-2">
          <CardHeader>
            <CardTitle className=" text-4xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Select your industry to get personalized career insights and
              recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className=' space-y-6' onSubmit={handleSubmit(onSubmit)}>

              {/* industry */}

              <div className=' space-y-2'>
                <Label htmlFor="industry">Industry</Label>
                <Select
                  onValueChange={(value)=>{
                    setValue("industry",value);
                    setSelectedIndustry(
                      industries.find((ind)=>ind.id ===value)
                    )
                    setValue("subIndustry","")
                  }}
                >
                  <SelectTrigger id="industry" className="w-full">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry)=>{
                      return <SelectItem value={industry.id} key={industry.id}>{industry.name}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className='text-sm text-red-500'>
                    {errors.industry.message}
                  </p>
                )}
              </div>

              {/* subindustry */}

              { watchIndustry && (<div className=' space-y-2'>
                <Label htmlFor="subIndustry">Specialization</Label>
                <Select
                  onValueChange={(value)=>{
                    setValue("subIndustry",value);
                  }}
                >
                  <SelectTrigger id="subIndustry" className="w-full">
                    <SelectValue placeholder="Select an Subindustry" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedIndustry?.subIndustries.map((industry)=>{
                      return <SelectItem value={industry} key={industry}>{industry}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className='text-sm text-red-500'>
                    {errors.industry.message}
                  </p>
                )}
              </div>)}


              {/* years of experience */}

              <div className=' space-y-2'>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="Enter years of experience"
                  {...register("experience")}
                />
                {errors.experience && (
                  <p className='text-sm text-red-500'>
                    {errors.experience.message}
                  </p>
                )}
              </div>

              {/* Skills */}

              <div className=' space-y-2'>
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  
                  placeholder="eg. Python, JavaScript, AWS, Devops"
                  {...register("skills")}
                />
                <p className=' text-sm text-muted-foreground'>
                  Separate multiple skills with commas
                </p>
                {errors.skills && (
                  <p className='text-sm text-red-500'>
                    {errors.skills.message}
                  </p>
                )}
              </div>

              {/* Bio */}

              <div className=' space-y-2'>
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  
                  placeholder="Enter your professional background"
                  {...register("bio")}
                  className="h-32"
                />
                {errors.bio && (
                  <p className='text-sm text-red-500'>
                    {errors.bio.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}

              <Button type="submit" className="w-full" disabled={updateLoading}>
                {updateLoading?(
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                    Saving...
                  </>
                ):("Complete Profile")}
              </Button>
            
            </form>
          </CardContent>
        </Card>

    </div>
  )
}

export default OnboardingForm