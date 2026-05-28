import React from 'react'
import type { Metadata } from 'next'
import UnderConstruction from '@/components/under_construction';

export const metadata: Metadata = {
  title: 'How Awaj ET Works',
  description: 'How Awaj ET works under the hood to maximize results in digital marketing and sales',
}


const How_it_works = () => {
  return (
    <UnderConstruction title={'How it works'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default How_it_works