import { Entry } from './entry.entity';
import { MainCategory } from './mainCategory.entity';
import { EntryHasCategory } from './entryHasCategory.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";
import { Event } from "./event.entity";

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

  //Has Category
  @OneToMany(() => EntryHasCategory, (pair) => pair.categoryId)
  entries: Entry[];
}

