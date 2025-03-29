'use client'

import { useSearchParams } from "next/navigation";
import clsx from 'clsx';
import Image from "next/image";
import { poppins } from "@/app/libs/fonts";
import { useGetOpportunitieByIdQuery } from "@/app/libs/api";
import Error from "@/app/ui/error";
import Spinner from "./spinner";

export default function JobDetail() {
  const params = useSearchParams();

  const Id = params.get('id');
  if (!Id) {
    return (
      <div className="py-[15%]">
        <div className="mx-auto max-w-[400px] text-center">
          <h2 className="mb-2 font-bold leading-none text-[50px]">
            No Job Id Provided
          </h2>
        </div>
      </div>
    );
  }
  const { data, error, isLoading } = useGetOpportunitieByIdQuery(Id);


  const about = [
    { 'id': 1, 'icon': '/postedon-icon.svg', 'label': 'Posted On', 'content': new Date(data?.data.datePosted || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
    { 'id': 2, 'icon': '/deadline-icon.svg', 'label': 'Deadline', 'content': new Date(data?.data.deadline || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
    { 'id': 3, 'icon': '/location-icon.svg', 'label': 'Location', 'content': data?.data.location },
    { 'id': 4, 'icon': '/startdate-icon.svg', 'label': 'Start Date', 'content': new Date(data?.data.startDate || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
    { 'id': 5, 'icon': '/enddate-icon.svg', 'label': 'End Date', 'content': new Date(data?.data.endDate || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
  ]

  return !error ? !isLoading && data ? (
    <div className="py-15">
      <div className="flex gap-5 md:gap-12 max-w-265 m-auto px-5 flex-col md:flex-row">
        <div className="flex flex-col gap-5 md:gap-10 max-w-185">
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Description</h1>
            <p className="text-[15px] opacity-80">{data?.data.description}</p>
          </div>
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Responsibilities</h1>
            <div className="pl-1">
              {data?.data.responsibilities.split('\n').map((item, idx) => {
                return (
                  <div className="text-[15px] opacity-80 flex gap-2 mb-2 items-center" key={idx}>
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
                {data?.data.idealCandidate.split('\n').map((item, idx) => {
                  return (
                    <li className='text-[15px] opacity-80 list-disc' key={idx}>
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
              <div className="self-center text-[15px] opacity-80">
                {data?.data.whenAndWhere}
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-70 px-1">
          <div>
            <h1 className={`${poppins.className}  text-[20px]/[2.5] text-slate-800 font-bold`}>About</h1>
            <div>
              <ul className="flex gap-5 flex-col">
                {about.map((item) => {
                  return (
                    <li key={item.id} className="flex gap-3">
                      <div className="border-1 border-slate-300 rounded-3xl min-w-12 min-h-12 w-12 h-12 flex">
                        <Image className="m-auto w-7 h-7" src={item.icon} alt="List icon" width={0} height={0} />
                      </div>
                      <div className="self-center">
                        <p className="text-slate-600 text-[17px]">{item.label}</p>
                        <p className="text-slate-600 font-bold text-[15px] md:text-[17px]">{item.content}</p>
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
              {data?.data.categories.map((item, idx) => {
                return (
                  <div key={idx} className={clsx(
                    ' rounded-2xl text-center min-w-15 px-2.5 py-1 text-sm',
                    {
                      'bg-orange-50 text-orange-400': idx % 2 === 0,
                      'bg-teal-50 text-teal-600': idx % 2 !== 0,
                    }
                  )}>
                    {item.split(" ")[0] + " " + "...  "}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h1 className={`${poppins.className} text-[20px]/[2.5] text-slate-800 font-bold`}>Required Skills</h1>
            <div className="flex flex-wrap gap-5">
              {data?.data.requiredSkills.map((item, idx) => {
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
    <Spinner/>
  ) : (
    <Error error={error} />
  )
}