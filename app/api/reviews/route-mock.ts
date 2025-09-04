import { NextRequest, NextResponse } from 'next/server'

// Mock reviews data (in-memory storage for testing)
let mockReviews = [
  {
    _id: '1',
    name: 'Alex Johnson',
    rating: 5,
    review: 'This tool is absolutely amazing! I can track my Instagram analytics in real-time and the insights are incredibly detailed. Highly recommended!',
    createdAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    name: 'Sarah Wilson',
    rating: 5,
    review: 'The best Instagram analytics tool I\'ve ever used. The interface is clean and the data is always accurate. Love it!',
    createdAt: new Date('2024-01-16')
  },
  {
    _id: '3',
    name: 'Mike Chen',
    rating: 4,
    review: 'Great tool for understanding my audience better. The follower tracking feature is particularly useful for my business.',
    createdAt: new Date('2024-01-17')
  }
]

export async function POST(request: NextRequest) {
  try {
    const { name, rating, review } = await request.json()

    // Validate required fields
    if (!name || !rating || !review) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    // Add new review to mock data
    const newReview = {
      _id: Date.now().toString(),
      name,
      rating: parseInt(rating),
      review,
      createdAt: new Date()
    }

    mockReviews.unshift(newReview) // Add to beginning

    return NextResponse.json(
      { message: 'Review submitted successfully' },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error submitting review:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json({ reviews: mockReviews }, { status: 200 })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
