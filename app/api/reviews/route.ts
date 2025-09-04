import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://vasudevsharma:code4life%402007@cluster0.mo8nveo.mongodb.net/instalker-reviews?retryWrites=true&w=majority&appName=Cluster0'

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

    // Validate review length (80 characters max)
    if (review.length > 80) {
      return NextResponse.json(
        { error: 'Review must be 80 characters or less' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI)
    await client.connect()

    const db = client.db('instalker-reviews')
    const reviewsCollection = db.collection('reviews')

    // Insert new review
    const reviewData = {
      name,
      rating: parseInt(rating),
      review,
      createdAt: new Date(),
      isApproved: true // Auto-approve for now
    }

    await reviewsCollection.insertOne(reviewData)
    await client.close()

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
    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI)
    await client.connect()

    const db = client.db('instalker-reviews')
    const reviewsCollection = db.collection('reviews')

    // Get approved reviews
    const reviews = await reviewsCollection
      .find({ isApproved: true })
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray()

    await client.close()

    return NextResponse.json({ reviews }, { status: 200 })

  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
