import { Column, Entity, ManyToMany } from "typeorm";
import {Entry} from "./entry.entity";

@Entity("tag", { schema: "mydb" })
export class Tag {
  @Column("varchar", { primary: true, name: "name", length: 50 })
  name: string;

  @ManyToMany(() => Entry, (entry) => entry.tags, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  entries: Entry[];
}
