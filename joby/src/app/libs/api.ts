import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any;
  perksAndBenefits: any;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

interface OpportunityResponse {
  success: boolean;
  message: string;
  data: Opportunity;
}

interface OpportunitiesResponse {
  success: boolean;
  message: string;
  data: Opportunity[];
}

export const akillApi = createApi({
  reducerPath: 'akillApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com/' }),
  endpoints: (build) => ({
    getOpportunities: build.query<OpportunitiesResponse, void>({
      query: () => '/opportunities/search',
    }),
    getOpportunitieById: build.query<OpportunityResponse, string>({
      query: (id) => `/opportunities/${id}`,
    })
  }),
})

export const { useGetOpportunitieByIdQuery, useGetOpportunitiesQuery } = akillApi