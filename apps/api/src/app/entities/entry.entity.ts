import { Category } from './category.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Municipality } from './municipality.entity';

@Index("fk_entry_municipality1_idx", ["municipalityId"], {})
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

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 100 })
  image: string | null;

  @Column("int", { name: "municipality_id", nullable: true })
  municipalityId: number | null;

  @ManyToOne(() => Municipality, (municipality) => municipality.entries, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "municipality_id", referencedColumnName: "id" }])
  municipality: Municipality;

  @ManyToMany(() => Category, (category) => category.entries)
  categories: Category[];
}

