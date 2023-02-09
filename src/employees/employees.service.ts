import { Injectable } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService extends TypeOrmCrudService<Employee> {
  constructor(@InjectRepository(Employee) repo) {
    super(repo);
  }
}
