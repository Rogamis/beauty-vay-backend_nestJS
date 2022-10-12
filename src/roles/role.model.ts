import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface ChangeNewRole {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, ChangeNewRole> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: "ADMIN", description: "You are ADMIN!" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: "Administration", description: "Admin change all rooles" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
  
}