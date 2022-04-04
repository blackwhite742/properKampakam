import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Region } from "./Region";

@Index("fk_municipality_region1_idx", ["regionId"], {})
@Entity("municipality", { schema: "mydb" })
export class Municipality {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("int", { primary: true, name: "region_id" })
  regionId: number;

  @ManyToOne(() => Region, (region) => region.municipalities, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "id" }])
  region: Region;
}
