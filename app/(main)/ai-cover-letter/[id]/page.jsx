import React from 'react'

const CoverLetterPage = async({params}) => {
    const ID= await params.id
  return (
    <div>CoverLetterPage:{ID}</div>
  )
}

export default CoverLetterPage