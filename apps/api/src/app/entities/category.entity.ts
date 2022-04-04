import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Entry } from "./entry.entity";

@Entity("category", { schema: "mydb" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @ManyToMany(() => Entry, (entry) => entry.categories)
  @JoinTable({
    name: "entryHasCategory",
    joinColumns: [{ name: "idCategory", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "idEntry", referencedColumnName: "id" }],
    schema: "mydb",
  })
  entries: Entry[];
}
