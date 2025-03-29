import { Opportunity } from "@/app/libs/api";
import Image from "next/image"
import clsx from 'clsx';
import Link from "next/link";

type JobCardProps = {
  job: Opportunity;
}
export default function JobCard({ job }: JobCardProps) {


  return (
    <Link href={`/jobs/job?id=${job.id}`} className="flex flex-col gap-2 border-[1px] border-slate-300 rounded-3xl mb-5 px-7 py-3 cursor-pointer hover:shadow-md transition duration-700">
      <div className="flex flex-row items-center gap-5">
        <Image
          src={job.logoUrl !== "" ? job.logoUrl : '/placeholder.png'}
          alt={job.description}
          width={60}
          height={60}
          className="pt-2"
        />
        <div className="text-lg">
          <h1 className="font-[600] text-[15px] md:text-lg text-slate-800">{job.title}</h1>
          <p className="text-sm opacity-50">{job.orgName} <span className="">	&#8226;</span> {job.location.map((item, idx) => (<span key={idx}>{item}, </span>))}</p>
        </div>
      </div>
      <div className="max-w-155 flex flex-col gap-3 md:pl-20">
        <div className='text-sm opacity-80'>{job.description}</div>
        <div className='text-sm flex flex-row gap-2'>
          <div className={`bg-teal-50 text-teal-400 font-600 rounded-2xl min-w-23 flex items-center content-center`}>
            <p className="m-auto text-[12px] md:text-sm">{job.opType === 'inPerson' ? "In Person" : "Virtual"}</p>
          </div>
          <div className="flex gap-3 border-l-1 border-l-slate-300 pl-2">
            {job.categories.map((item, idx) => {
              return (
                <div key={idx} className={clsx(
                  'border-2 rounded-2xl text-[12px] md:text-sm text-center md:min-w-15 px-2 py-1',
                  {
                    'border-amber-400 text-amber-400': idx % 2 === 0,
                    'border-indigo-600 text-indigo-600': idx % 2 !== 0,
                  }
                )}>
                  {item.split(" ")[0]}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}