import { Controller } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Crud } from '@nestjsx/crud/lib/decorators';
import { Employee } from './entities/employee.entity';

@Crud({
  model: {
    type: Employee,
  },
})
@Controller('employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}
}
