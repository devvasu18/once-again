import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { InstagramService } from './instagram.service';
import { TrackProfileDto } from './dto/track-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Instagram')
@Controller('instagram')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Post('track')
  @ApiOperation({ summary: 'Track an Instagram profile' })
  @ApiResponse({ status: 201, description: 'Profile tracking started' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async trackProfile(@Body() trackProfileDto: TrackProfileDto, @Request() req) {
    return this.instagramService.trackProfile(trackProfileDto, req.user.id);
  }

  @Get('profiles')
  @ApiOperation({ summary: 'Get tracked profiles' })
  @ApiResponse({ status: 200, description: 'Tracked profiles retrieved' })
  async getTrackedProfiles(@Request() req) {
    return this.instagramService.getTrackedProfiles(req.user.id);
  }

  @Get('analytics/:profileId')
  @ApiOperation({ summary: 'Get profile analytics' })
  @ApiResponse({ status: 200, description: 'Analytics retrieved' })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  async getProfileAnalytics(@Request() req, @Body('profileId') profileId: string) {
    return this.instagramService.getProfileAnalytics(profileId, req.user.id);
  }

  @Get('insights/:profileId')
  @ApiOperation({ summary: 'Get profile insights' })
  @ApiResponse({ status: 200, description: 'Insights retrieved' })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  async getProfileInsights(@Request() req, @Body('profileId') profileId: string) {
    return this.instagramService.getProfileInsights(profileId, req.user.id);
  }
}
