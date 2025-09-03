import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TrackProfileDto {
  @ApiProperty({ example: 'johndoe', description: 'Instagram username to track' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '123456789', description: 'Instagram profile ID' })
  @IsString()
  @IsNotEmpty()
  profileId: string;
}
