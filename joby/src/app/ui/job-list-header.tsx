'use client'

import { poppins } from '@/app/libs/fonts';


export default function JobListHeader({length}: {length: number | undefined}) {
  return (
    <div className='flex flex-row mb-10 px-4'>
      <div>
        <h1 className={`${poppins.className} text-[20px] md:text-[25px] text-slate-800 font-extrabold`}>Opporutinities</h1>
        <p className='opacity-50 text-[14px] md:text-[16px]'>showing {length} results</p>
      </div>
      <div className='ml-auto pt-8 relative md:static text-[14px] md:text-[17px]'>
        <label htmlFor="sort" className='absolute md:static top-3 left-1 opacity-55 mr-[8px]'>Sort by:</label>
        <select id="sort" name="sort">
          <option value="Most relevant">Most relevant</option>
        </select>
      </div>
    </div>
  )
}