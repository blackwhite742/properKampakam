import { Category } from './category.entity';
import { Municipality } from './municipality.entity';
import { Tag } from './tag.entity';
import { Image } from './image.entity';
import { OneToMany } from 'typeorm';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable
} from "typeorm";

@Index("fk_entry_municipality1_idx", ["municipalityId"], {})
@Entity("entry", { schema: "mydb" })
export class Entry {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", { name: "location", nullable: true, length: 150 })
  location: string | null;

  @Column("tinyint", { name: "price", nullable: true, width: 1 })
  price: boolean | null;

  @Column("tinyint", { name: "accessibility", nullable: true, width: 1 })
  accessibility: boolean | null;

  @Column("varchar", { name: "season", nullable: true, length: 45 })
  season: string | null;

  @Column("tinyint", { name: "accomodation", nullable: true })
  accomodation: boolean | null;

  @Column("varchar", { name: "description", nullable: true, length: 500 })
  description: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 200 })
  image: string | null;

  @Column("int", { name: "municipality_id", nullable: true })
  municipalityId: number | null;

  @ManyToOne(() => Municipality, (municipality) => municipality.entries, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "municipality_id", referencedColumnName: "id" }])
  municipality: Municipality;

  @ManyToMany(() => Tag, (tag) => tag.entries, {cascade:true})
  @JoinTable({
    name: "entry_has_tag",
    joinColumns: [{ name: "entry_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "tag_name", referencedColumnName: "name" }],
    schema: "mydb",
  })
  tags: Tag[];


  @OneToMany(() => Image, (image) => image.entry)
  images: Image[];
}

export interface EntryDbInterface extends Entry{
  categories: Category[]|number[];
}
