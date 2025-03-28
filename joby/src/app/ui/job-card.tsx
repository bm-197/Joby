import { Job } from "@/app/libs/jobs";
import Image from "next/image"
import clsx from 'clsx';
import Link from "next/link";

type JobCardProps = {
  job: Job;
}
export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/job?id=${job.id}`} className="flex gap-5 border-[1px] border-slate-300 rounded-3xl mb-5 px-7 py-3 cursor-pointer">
      <div className="w-10">
        <Image
          src={job.image}
          alt={job.description}
          width={60}
          height={60}
          className="pt-2"
        />
      </div>
      <div className="max-w-155 flex flex-col gap-3">
        <div className="text-lg">
          <span className="font-[600] text-slate-800">{job.title}</span>
          <p className="text-sm opacity-50">{job.company} <span className="">	&#8226;</span> {job.about.location}</p>
        </div>
        <div className='text-sm opacity-80'>{job.description}</div>
        <div className='text-sm flex flex-row gap-2'>
          <div className={`bg-teal-50 text-teal-400 font-600 rounded-2xl min-w-23 flex items-center content-center`}>
            <p className="m-auto">In Person</p>
          </div>
          <div className="flex gap-3 border-l-1 border-l-slate-300 pl-2">
            {job.about.categories.map((item, idx) => {
              return (
                <div key={item.id} className={clsx(
                  'border-2 rounded-2xl text-center min-w-15 px-2 py-1',
                  {
                    'border-amber-400 text-amber-400': idx % 2 === 0,
                    'border-indigo-600 text-indigo-600': idx % 2 !== 0,
                  }
                )}>
                  {item.val}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}