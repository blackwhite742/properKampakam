import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from './category.entity';

@Entity("mainCategory", { schema: "mydb" })
export class MainCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @ManyToMany(() => Category, (category) => category.mainCategories)
  categories: Category[];
}
