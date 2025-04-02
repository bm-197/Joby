'use client'

import { useSession } from "next-auth/react";
import JobCard from "@/app/ui/job-card";
import { useGetOpportunitiesQuery } from "@/app/libs/api";
import Spinner from "@/app/ui/spinner";
import Error from "@/app/ui/error";
import { useEffect } from "react";

export default function JobList({ setLength }: { setLength: (length: number) => void }) {
  const { data: session } = useSession();
  const { data, error, isLoading } = useGetOpportunitiesQuery();

  const userToken = session?.accessToken || "";

  useEffect(() => {
    if (!isLoading && data?.data) {
      setLength(data.data.length);
    }

  }, [isLoading, data, setLength, userToken]);

  if (error) return <Error error={error} />;
  if (isLoading) return <Spinner />;

  return (
    <div className="px-4">
      <div className="m-auto max-w-3xl mt-10">
        {data?.data.map((job: any) => (
          <JobCard key={job.id} job={job} userToken={userToken} />
        ))}
      </div>
    </div>
  );
}
