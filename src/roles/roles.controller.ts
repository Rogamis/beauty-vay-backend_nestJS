import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { CreateRoleDto } from 'src/users/dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get()
  getAll() {
    return this.roleService.getAllUserRole();
  }

  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.roleService.remove(id);
  }
}
