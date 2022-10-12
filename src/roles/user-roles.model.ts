import { Model, Table, Column, DataType, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { Role } from "./role.model";


@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER})
  roleId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER})
  userId: string;
}