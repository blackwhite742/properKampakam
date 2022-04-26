import { Region } from './region.entity';
import { OneToMany } from 'typeorm';
import { Entry } from './entry.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("fk_municipality_region1_idx", ["regionId"], {})
@Entity("municipality", { schema: "mydb" })
export class Municipality {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("int", { primary: true, name: "region_id" })
  regionId: number;

  @OneToMany(() => Entry, (entry) => entry.municipality)
  entries: Entry[];

  @ManyToOne(() => Region, (region) => region.municipalities, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "id" }])
  region: Region;
}
