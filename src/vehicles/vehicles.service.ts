import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { mockVehicles } from './mock/vehicles.mock';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Service for managing vehicles.
 */
@Injectable()
export class VehiclesService {

  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  private vehicles: Vehicle[] = [...mockVehicles];

  /**
   * Add a new vehicle.
   * @param createVehicleDto - Data transfer object for creating a vehicle.
   */
  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create({
      ...createVehicleDto,
      createdAt: new Date(),
      updatedAt: new Date(),
      proprietario: createVehicleDto.proprietario,
    });
    return await this.vehicleRepository.save(vehicle);
  }

  /**
   * Get all vehicles.
   * @returns List of vehicles.
   */
  findAll(): Vehicle[] {
    return this.vehicles;
  }

  /**
   * Get a vehicle by ID.
   * @param id - ID of the vehicle.
   * @returns The vehicle with the specified ID.
   */
  findOne(id: number): Vehicle {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === id);
    if (!vehicle) {
      throw new NotFoundException(`Veículo com ID ${id} não encontrado`);
    }
    return vehicle;
  }

  /**
   * Get a vehicle by license plate.
   * @param licensePlate - License plate of the vehicle.
   * @returns The vehicle with the specified license plate, or undefined if no vehicle matches the license plate.
   */
  findByLicensePlate(licensePlate: string): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.licensePlate === licensePlate);
  }

  /**
   * Get a vehicle by renavam.
   * @param renavam - Renavam of the vehicle.
   * @returns The vehicle with the specified renavam, or undefined if no vehicle matches the renavam.
   */
  findByRenavam(renavam: string): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.renavam === renavam);
  }

  /**
   * Update a vehicle.
   * @param id - ID of the vehicle to update.
   * @param updateVehicleDto - Data transfer object for updating a vehicle.
   * @returns The updated vehicle.
   */
  update(id: number, updateVehicleDto: Partial<Vehicle>): Vehicle {
    const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.id === id);
    if (vehicleIndex === -1) {
      throw new NotFoundException(`Veículo com ID ${id} não encontrado`);
    }

    const updatedVehicle = {
      ...this.vehicles[vehicleIndex],
      ...updateVehicleDto,
      updatedAt: new Date(),
    };

    this.vehicles[vehicleIndex] = updatedVehicle;
    return updatedVehicle;
  }

  /**
   * Remove a vehicle.
   * @param id - ID of the vehicle to remove.
   */
  remove(id: number): void {
    const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.id === id);
    if (vehicleIndex === -1) {
      throw new NotFoundException(`Veículo com ID ${id} não encontrado`);
    }
    this.vehicles.splice(vehicleIndex, 1);
  }
}