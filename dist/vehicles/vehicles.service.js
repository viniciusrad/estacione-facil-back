"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const vehicles_mock_1 = require("./mock/vehicles.mock");
let VehiclesService = class VehiclesService {
    constructor() {
        this.vehicles = [...vehicles_mock_1.mockVehicles];
    }
    create(createVehicleDto) {
        const vehicle = Object.assign(Object.assign({ id: Math.max(...this.vehicles.map(v => v.id)) + 1 }, createVehicleDto), { createdAt: new Date(), updatedAt: new Date() });
        this.vehicles.push(vehicle);
        return vehicle;
    }
    findAll() {
        return this.vehicles;
    }
    findOne(id) {
        const vehicle = this.vehicles.find(vehicle => vehicle.id === id);
        if (!vehicle) {
            throw new common_1.NotFoundException(`Veículo com ID ${id} não encontrado`);
        }
        return vehicle;
    }
    findByLicensePlate(licensePlate) {
        return this.vehicles.find(vehicle => vehicle.licensePlate === licensePlate);
    }
    findByRenavam(renavam) {
        return this.vehicles.find(vehicle => vehicle.renavam === renavam);
    }
    update(id, updateVehicleDto) {
        const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.id === id);
        if (vehicleIndex === -1) {
            throw new common_1.NotFoundException(`Veículo com ID ${id} não encontrado`);
        }
        const updatedVehicle = Object.assign(Object.assign(Object.assign({}, this.vehicles[vehicleIndex]), updateVehicleDto), { updatedAt: new Date() });
        this.vehicles[vehicleIndex] = updatedVehicle;
        return updatedVehicle;
    }
    remove(id) {
        const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.id === id);
        if (vehicleIndex === -1) {
            throw new common_1.NotFoundException(`Veículo com ID ${id} não encontrado`);
        }
        this.vehicles.splice(vehicleIndex, 1);
    }
};
VehiclesService = __decorate([
    (0, common_1.Injectable)()
], VehiclesService);
exports.VehiclesService = VehiclesService;
//# sourceMappingURL=vehicles.service.js.map