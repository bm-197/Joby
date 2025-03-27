'use client'

import { useSearchParams } from "next/navigation";
import { jobs } from '@/app/libs/jobs';
import clsx from 'clsx';
import Image from "next/image";
import { poppins } from "@/app/ui/fonts";

export default function Page() {
  const params = useSearchParams();

  const Id = params.get('id');
  const jobId = Id ? parseInt(Id, 10) : null;

  const job = jobs.filter(job => job.id === jobId)
  const clickedJob = job ? job[0] : null

  const about = [
    { 'id': 1, 'icon': '/postedon-icon.svg', 'label': 'Posted On', 'content': clickedJob?.about.posted_on },
    { 'id': 2, 'icon': '/deadline-icon.svg', 'label': 'Deadline', 'content': clickedJob?.about.deadline },
    { 'id': 3, 'icon': '/location-icon.svg', 'label': 'Location', 'content': clickedJob?.about.location },
    { 'id': 4, 'icon': '/startdate-icon.svg', 'label': 'Start Date', 'content': clickedJob?.about.start_date },
    { 'id': 5, 'icon': '/enddate-icon.svg', 'label': 'End Date', 'content': clickedJob?.about.end_date },
  ]

  return clickedJob ? (
    <div className="py-15">
      <div className="flex gap-12 max-w-265 m-auto px-5">
        <div className="flex flex-col gap-10 max-w-185">
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Description</h1>
            <p className="text-sm opacity-80">{clickedJob?.description}</p>
          </div>
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Responsibilities</h1>
            <div className="pl-1">
              {clickedJob?.responsibilities.map((item, idx) => {
                return (
                  <div className="text-sm opacity-80 flex gap-2 mb-2 items-center" key={idx}>
                    <Image className="w-5 h-5" src="/list-icon.svg" alt="List icon" width={0} height={0} />
                    <div>{item}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Ideal Candidate We Want</h1>
            <div>
              <ul className="pl-7">
                {clickedJob?.ideal_candidate.traits.map((item, idx) => {
                  return (
                    <li className='text-sm opacity-80 list-disc' key={idx}>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>When & Where</h1>
            <div className="flex gap-3">
              <div className="border-1 border-slate-300 rounded-3xl min-w-12 min-h-12 w-12 h-12 flex">
                <Image className="m-auto w-7 h-7" src="/location-icon.svg" alt="List icon" width={0} height={0} />
              </div>
              <div className="self-center text-sm opacity-80">
                {clickedJob?.when_where}
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-70 px-1">
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>About</h1>
            <div>
              <ul className="flex gap-5 flex-col">
                {about.map((item) => {
                  return (
                    <li key={item.id} className="flex gap-3">
                      <div className="border-1 border-slate-300 rounded-3xl min-w-12 min-h-12 w-12 h-12 flex">
                        <Image className="m-auto w-7 h-7" src={item.icon} alt="List icon" width={0} height={0} />
                      </div>
                      <div className="self-center">
                        <p className="text-slate-600">{item.label}</p>
                        <p className="text-slate-600 font-bold">{item.content}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="border-t border-b border-slate-300 pb-5 pt-2 mt-5">
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Categories</h1>
            <div className="flex gap-3">
              {clickedJob?.about.categories.map((item, idx) => {
                return (
                  <div key={item.id} className={clsx(
                    ' rounded-2xl text-center min-w-15 px-2.5 py-1 text-sm',
                    {
                      'bg-orange-50 text-orange-400': idx % 2 === 0,
                      'bg-teal-50 text-teal-600': idx % 2 !== 0,
                    }
                  )}>
                    {item.val}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Required Skills</h1>
            <div className="flex flex-wrap gap-5">
              {clickedJob?.about.required_skills.map((item, idx) => {
                return (
                  <div key={idx} className="text-indigo-600 text-[15px] min-w-13 max-w-50 bg-gray-50 rounded-2xl py-1 px-2">
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="ml-[45%] mt-[20%] text-4xl font-bold">
      No Job with id {jobId}
    </div>
  )
}