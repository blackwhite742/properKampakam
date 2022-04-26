import { Entry } from './entry.entity';
import { MainCategory } from './mainCategory.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn,JoinTable } from 'typeorm';

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
  @JoinTable({
    name: "entry_has_category",
    joinColumns: [{ name: "category_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "entry_id", referencedColumnName: "id" }],
    schema: "mydb",
  })
  entries: Entry[];
}
