import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity("entry", { schema: "mydb" })
export class Entry {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "location", nullable: true, length: 45 })
  location: string | null;

  @Column("tinyint", { name: "price", nullable: true, width: 1 })
  price: boolean | null;

  @Column("varchar", { name: "accessibility", nullable: true, length: 45 })
  accessibility: string | null;

  @Column("varchar", { name: "season", nullable: true, length: 45 })
  season: string | null;

  @Column("tinyint", { name: "accomodation", nullable: true })
  accomodation: number | null;

  @Column("int", { primary: true, name: "Region_idRegion" })
  regionIdRegion: number;

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 100 })
  image: string | null;

  @ManyToMany(() => Category, (category) => category.entries)
  categories: Category[];
}
