import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
export declare class VehiclesService {
    private vehicles;
    create(createVehicleDto: CreateVehicleDto): Vehicle;
    findAll(): Vehicle[];
    findOne(id: number): Vehicle;
    findByLicensePlate(licensePlate: string): Vehicle | undefined;
    findByRenavam(renavam: string): Vehicle | undefined;
    update(id: number, updateVehicleDto: Partial<Vehicle>): Vehicle;
    remove(id: number): void;
}
