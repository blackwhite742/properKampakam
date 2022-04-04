import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("entry", { schema: "mydb" })
export class Entry {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("tinyint", { name: "price" })
  price: number;

  @Column("tinyint", { name: "accomodation" })
  accomodation: number;

  @Column("varchar", { name: "location", length: 255 })
  location: string;

  @Column("varchar", {
    name: "accessibility",
    length: 255,
    default: () => "'1'",
  })
  accessibility: string;

  @Column("varchar", { name: "season", length: 255 })
  season: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @ManyToMany(() => Category, (category) => category.entries)
  categories: Category[];
}
