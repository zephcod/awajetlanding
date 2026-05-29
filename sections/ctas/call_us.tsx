import { Icons } from '@/components/UI/icons'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Content from "@/public/casestudy/hand_call_us.png"

const CallUs = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-10'></div>
        <div className='text-muted-foreground items-center text-center flex flex-col-reverse md:flex-row mx-auto max-w-4xl py-4'>
            <div className='md:px-8 sm:px-4'>
                <div className='flex flex-row text-muted-foreground items-center justify-center text-center gap-2 w-full p-4 m-auto'>
                    <Link href="tel:0903569999" className='cursor-pointer'>
                        <Icons.phone className='h-8 w-8 '/>
                    </Link>
                    <h3 className='text-2xl lg:text-3xl font-bold leading-[1.15]'>Call us now | 
                    <span className='text-primary'>{' '}አሁኑኑ ይደውሉልን {" "}</span></h3>
                </div>
                <p className='px-4'>Your next customer is searching for you right now. Stop guessing and start growing.
                Let our marketing experts make sure they find your business first</p>
                <p className='md:px-8 sm:px-2 mt-2'>ደምበኞች እርሶን እየፈለጉ ነው ፣ በባለሙያዎች ድጋፍ ቀዳሚ ይሁኑ!</p>
                <div className='flex flex-row items-center justify-center gap-8 mt-4'>
                    <Link 
                        href="tel:0903569999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className=' font-semibold hover:underline'>
                        <div className='flex flex-row items-center justify-center gap-1 text-primary'>
                            <Icons.phone className='h-4 w-4'/>
                            <p>0903569999</p>
                        </div>
                    </Link>
                    <Link 
                        href="https://wa.me/251903569999?text=Hello%20Awaj%20ET%2C%20I%20would%20like%20to%20book%20a%20consultation."
                        target="_blank"
                        rel="noopener noreferrer"
                        className=' font-semibold hover:underline'>
                        <div className='flex flex-row items-center justify-center gap-1'>
                            <Icons.message className='h-4 w-4'/>
                            <p>WhatsApp</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className=''>
                <Image src={Content} width={300} height={300} alt='Awaj ET Downloads Icon'/>
            </div>
        </div>
    </div>
  )
}

export default CallUs