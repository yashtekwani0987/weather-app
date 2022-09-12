import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (<>
    <div className='mt-48 md:w-3/4 w-full flex h-8 justify-center'>
          <img className=""  src={loading} alt="loading" />
      </div>
    </>
  )
}

export default Spinner