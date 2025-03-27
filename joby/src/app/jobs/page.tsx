import { jobs } from '@/app/libs/jobs';
import JobCard from '@/app/ui/job-card';
import { poppins } from '@/app/ui/fonts';


export default function Page() {
  return (
    <div className=''>
      <div className="m-auto max-w-3xl mt-10">
        <div className='flex flex-row mb-10'>
          <div>
            <h1 className={`${poppins.className} text-[25px] text-slate-800 font-extrabold`}>Opporutinities</h1>
            <p className='opacity-50 text-[16px]'>showing 73 results</p>
          </div>
          <div className='ml-auto pt-6'>
            <label htmlFor="sort" className='opacity-55 mr-[8px]'>Sort by:</label>
            <select id="sort" name="sort">
              <option value="Most relevant">Most relevant</option>
            </select>
          </div>
        </div>
        {jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  )
}