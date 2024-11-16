import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

/**
 * Controller for handling vehicle routes.
 */
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  /**
   * Create a new vehicle.
   * @param createVehicleDto - Data transfer object for creating a vehicle.
   */
  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    try {
      const existingVehiclePlate = this.vehiclesService.findByLicensePlate(createVehicleDto.licensePlate);
      const existingVehicleRenavam = this.vehiclesService.findByRenavam(createVehicleDto.renavam);

      if (existingVehiclePlate) {
        throw new BadRequestException('Placa já cadastrada');
      }

      if (existingVehicleRenavam) {
        throw new BadRequestException('Renavam já cadastrado');
      }

      return this.vehiclesService.create(createVehicleDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  /**
   * Get all vehicles.
   * @returns List of vehicles.
   */
  @Get()
  findAll(): Vehicle[] {
    return this.vehiclesService.findAll();
  }

  /**
   * Get a vehicle by ID.
   * @param id - ID of the vehicle.
   * @returns The vehicle with the specified ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Vehicle {
    return this.vehiclesService.findOne(+id);
  }

  /**
   * Update a vehicle.
   * @param id - ID of the vehicle to update.
   * @param updateVehicleDto - Data transfer object for updating a vehicle.
   * @returns The updated vehicle.
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: Partial<CreateVehicleDto>): Vehicle {
    return this.vehiclesService.update(+id, updateVehicleDto);
  }

  /**
   * Delete a vehicle.
   * @param id - ID of the vehicle to delete.
   */
  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.vehiclesService.remove(+id);
  }

  @Get('proprietario/:id')
  async findByProprietario(@Param('id') id: string): Promise<Vehicle[]> {
    return await this.vehiclesService.findByProprietarioId(+id);
  }
} 