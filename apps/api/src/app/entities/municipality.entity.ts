import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Region } from "./region.entity";

@Index("fk_Municipality_Region1_idx", ["regionIdRegion"], {})
@Entity("municipality", { schema: "mydb" })
export class Municipality {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("int", { primary: true, name: "Region_idRegion" })
  regionIdRegion: number;

  @ManyToOne(() => Region, (region) => region.municipalities, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "Region_idRegion", referencedColumnName: "id" }])
  regionIdRegion2: Region;
}
