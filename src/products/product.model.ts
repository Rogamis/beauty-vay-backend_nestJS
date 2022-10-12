import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";

interface ProductsCreationAttrs {
    title: string;
    content: string;
    image: string;
}

@Table({ tableName: "products" })
export class Product extends Model<Product, ProductsCreationAttrs> {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;
}