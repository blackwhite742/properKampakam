import { Column, Entity, OneToMany } from "typeorm";
import { Municipality } from "./Municipality";

@Entity("region", { schema: "mydb" })
export class Region {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @OneToMany(() => Municipality, (municipality) => municipality.region)
  municipalities: Municipality[];
}
