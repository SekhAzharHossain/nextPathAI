import React, { Suspense } from 'react'
import {RiseLoader} from 'react-spinners'

const layout = ({children}) => {
  return (
    <div className='px-5'>
        <Suspense fallback={<RiseLoader className='mt-4 bg-background/100' width={"100%"} color="gray"/>}>{children}</Suspense>
    </div>
  )
}

export default layout