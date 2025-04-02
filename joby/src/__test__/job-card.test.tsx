import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import JobCard from '@/app/ui/job-card';
import { Opportunity } from '@/app/libs/api';

const mockJob: Opportunity = {
  id: 'job1',
  title: 'Software Engineer',
  description: 'A great opportunity to work on exciting projects.',
  responsibilities: 'Develop, test, and maintain code.',
  requirements: '3+ years of experience in software development.',
  idealCandidate: 'Passionate about coding and eager to learn.',
  categories: ['Tech', 'Engineering'],
  opType: 'inPerson',
  startDate: '2025-01-01',
  endDate: '2025-12-31',
  deadline: '2025-01-15',
  location: ['New York'],
  requiredSkills: ['JavaScript', 'React'],
  whenAndWhere: 'Onsite in New York',
  orgID: 'org1',
  datePosted: '2024-12-01',
  status: 'open',
  applicantsCount: 0,
  viewsCount: 0,
  orgName: 'Test Company',
  logoUrl: '',
  isBookmarked: false,
  isRolling: false,
  questions: null,
  perksAndBenefits: null,
  createdAt: '2024-12-01T00:00:00Z',
  updatedAt: '2024-12-01T00:00:00Z',
  orgPrimaryPhone: '1234567890',
  orgEmail: 'info@testcompany.com',
  average_rating: 0,
  total_reviews: 0,
};

const userToken = 'mocked-token';

describe('JobCard Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders job posting card correctly', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<JobCard job={mockJob} userToken={userToken} />);

    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Test Company/)).toBeInTheDocument();
    expect(screen.getByText(/New York/)).toBeInTheDocument();
    expect(
      screen.getByText(/A great opportunity to work on exciting projects\./)
    ).toBeInTheDocument();

    expect(screen.getByText(/Tech/)).toBeInTheDocument();

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  it('toggles bookmark on click', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<JobCard job={mockJob} userToken={userToken} />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const bookmarkIcon = screen.getByAltText('Bookmark icon');
    expect(bookmarkIcon).toBeInTheDocument();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    fireEvent.click(bookmarkIcon.parentElement!);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });

    expect(bookmarkIcon).toHaveAttribute('src', '/bookmarkon-icon.svg');
  });
});
