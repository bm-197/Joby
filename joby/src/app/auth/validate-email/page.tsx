'use client'

import ValidateEmail from "@/app/ui/validate-email";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email") || "";
  
  return (
    <ValidateEmail userEmail={userEmail} />      
  )
}