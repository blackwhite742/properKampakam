import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MainCategory } from "./mainCategory.entity";
import { Entry } from "./entry.entity";

@Entity("category", { schema: "mydb" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @ManyToMany(() => MainCategory, (mainCategory) => mainCategory.categories)
  @JoinTable({
    name: "category_has_mainCategory",
    joinColumns: [{ name: "category_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "mainCategory_id", referencedColumnName: "id" },
    ],
    schema: "mydb",
  })
  mainCategories: MainCategory[];

  @ManyToMany(() => Entry, (entry) => entry.categories)
  entries: Entry[];

  @ManyToMany(() => Entry, (entry) => entry.categories2)
  @JoinTable({
    name: "entry_has_category",
    joinColumns: [{ name: "category_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "entry_id", referencedColumnName: "id" }],
    schema: "mydb",
  })
  entries2: Entry[];
}
