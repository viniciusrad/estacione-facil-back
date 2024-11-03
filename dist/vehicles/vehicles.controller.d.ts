import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(createVehicleDto: CreateVehicleDto): Promise<Vehicle>;
    findAll(): Vehicle[];
    findOne(id: string): Vehicle;
    update(id: string, updateVehicleDto: Partial<CreateVehicleDto>): Vehicle;
    remove(id: string): void;
}
