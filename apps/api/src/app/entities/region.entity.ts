import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Municipality } from "./municipality.entity";

@Entity("region", { schema: "mydb" })
export class Region {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @OneToMany(() => Municipality, (municipality) => municipality.regionIdRegion2)
  municipalities: Municipality[];
}
