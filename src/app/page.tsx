import Image from 'next/image'
import Calculator from './components/calculator'

export default function Home() {
  
  return (
    <div className='flex justify-center items-center h-screen '>
      
      <div className='outline-dotted outline-red-500 px-10 py-10'>
      
      <Calculator/></div>
    </div>
  )
}
