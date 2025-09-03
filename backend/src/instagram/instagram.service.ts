import { Injectable, NotFoundException } from '@nestjs/common';
import { TrackProfileDto } from './dto/track-profile.dto';

// Mock data - in a real application, this would be replaced with a database
let trackedProfiles = [
  {
    id: 1,
    userId: 1,
    username: 'example_user',
    profileId: '123456789',
    displayName: 'Example User',
    bio: 'This is an example bio',
    followersCount: 15000,
    followingCount: 500,
    postsCount: 120,
    isVerified: false,
    profilePictureUrl: 'https://example.com/profile.jpg',
    isPrivate: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

@Injectable()
export class InstagramService {
  async trackProfile(trackProfileDto: TrackProfileDto, userId: number) {
    // In a real application, this would make an API call to Instagram
    // For now, we'll create a mock profile
    const newProfile = {
      id: trackedProfiles.length + 1,
      userId,
      ...trackProfileDto,
      displayName: trackProfileDto.username,
      bio: 'Sample bio',
      followersCount: Math.floor(Math.random() * 50000) + 1000,
      followingCount: Math.floor(Math.random() * 2000) + 100,
      postsCount: Math.floor(Math.random() * 500) + 10,
      isVerified: Math.random() > 0.7,
      profilePictureUrl: 'https://via.placeholder.com/150',
      isPrivate: Math.random() > 0.8,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    trackedProfiles.push(newProfile);
    return {
      message: 'Profile tracking started successfully',
      profile: newProfile,
    };
  }

  async getTrackedProfiles(userId: number) {
    const userProfiles = trackedProfiles.filter(profile => profile.userId === userId);
    return {
      profiles: userProfiles,
      count: userProfiles.length,
    };
  }

  async getProfileAnalytics(profileId: string, userId: number) {
    const profile = trackedProfiles.find(
      p => p.profileId === profileId && p.userId === userId
    );

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    // Mock analytics data
    return {
      profileId,
      analytics: {
        followersGrowth: {
          daily: Math.floor(Math.random() * 100) - 50,
          weekly: Math.floor(Math.random() * 500) - 250,
          monthly: Math.floor(Math.random() * 2000) - 1000,
        },
        engagementRate: (Math.random() * 10).toFixed(2),
        averageLikes: Math.floor(Math.random() * 1000) + 100,
        averageComments: Math.floor(Math.random() * 100) + 10,
        bestPostingTimes: ['9:00 AM', '1:00 PM', '6:00 PM'],
        topHashtags: ['#instagood', '#photooftheday', '#love', '#fashion', '#art'],
        audienceDemographics: {
          ageGroups: {
            '13-17': Math.floor(Math.random() * 20),
            '18-24': Math.floor(Math.random() * 40) + 20,
            '25-34': Math.floor(Math.random() * 30) + 15,
            '35-44': Math.floor(Math.random() * 20) + 5,
            '45+': Math.floor(Math.random() * 15),
          },
          gender: {
            male: Math.floor(Math.random() * 60) + 20,
            female: Math.floor(Math.random() * 60) + 20,
            other: Math.floor(Math.random() * 10),
          },
        },
      },
      lastUpdated: new Date(),
    };
  }

  async getProfileInsights(profileId: string, userId: number) {
    const profile = trackedProfiles.find(
      p => p.profileId === profileId && p.userId === userId
    );

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    // Mock insights data
    return {
      profileId,
      insights: {
        recentActivity: [
          {
            type: 'post',
            timestamp: new Date(Date.now() - Math.random() * 86400000),
            description: 'Posted a new photo',
          },
          {
            type: 'story',
            timestamp: new Date(Date.now() - Math.random() * 86400000),
            description: 'Added to story',
          },
          {
            type: 'follow',
            timestamp: new Date(Date.now() - Math.random() * 86400000),
            description: 'Started following someone',
          },
        ],
        engagementTrends: {
          last7Days: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
          last30Days: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
        },
        competitorComparison: {
          averageEngagement: (Math.random() * 5).toFixed(2),
          yourEngagement: (Math.random() * 5).toFixed(2),
          ranking: Math.floor(Math.random() * 100) + 1,
        },
        recommendations: [
          'Post more content during peak hours (9 AM, 1 PM, 6 PM)',
          'Use more relevant hashtags to increase reach',
          'Engage with your audience more frequently',
          'Consider posting more video content',
        ],
      },
      lastUpdated: new Date(),
    };
  }
}
