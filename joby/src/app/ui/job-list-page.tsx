'use client'

import JobList from "@/app/ui/job-list"
import JobListHeader from "@/app/ui/job-list-header"
import { useState } from "react"

export default function JobListPage() {
  const [length, setLength] = useState(0)

  return (
    <>
      <div className='px-4'>
        <div className="m-auto max-w-3xl mt-10">
          <JobListHeader length={length} />
          <JobList setLength={setLength}/>
        </div>
      </div>
    </>
  )
}