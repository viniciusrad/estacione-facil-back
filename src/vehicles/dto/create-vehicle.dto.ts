import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

/**
 * DTO for creating a vehicle.
 */
export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  readonly licensePlate: string;

  @IsString()
  @IsNotEmpty()
  readonly renavam: string;

  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @IsNumber()
  @IsNotEmpty()
  readonly year: number;
} 