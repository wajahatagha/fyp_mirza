import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyPharmacy() {
  
//   useEffect(() => {
    
  
    
//   }, [])
  
  
  const navigate = useNavigate();
  
  
  
  
    return (
    <div className=''>
        <div className='flex justify-center p-8 bg-white font-bold text-3xl'>
            <p>My Pharmacy</p>
            </div>
       <button onClick={()=>navigate('/addMed')} className='m-8 p-3 bg-red-500 text-white rounded-2xl'>
        Add Medicine
        </button>  
    </div>
  )
}
