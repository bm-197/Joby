'use client'

import JobCard from '@/app/ui/job-card';
import { useGetOpportunitiesQuery } from '@/app/libs/api';
import Spinner from '@/app/ui/spinner';
import Error from '@/app/ui/error';
import { useEffect } from 'react';

export default function JobList({ setLength }: { setLength: any }) {
  const { data, error, isLoading } = useGetOpportunitiesQuery()
  useEffect(() => {
    if (!isLoading) {
      setLength(data?.data.length);
    }
  }, [isLoading])

  return !error ? !isLoading ? (
    <div className='px-4'>
      <div className="m-auto max-w-3xl mt-10">
        {data?.data.map((job: any) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  ) : (
    <Spinner />
  ) : (
    <Error error={error} />
  )
}