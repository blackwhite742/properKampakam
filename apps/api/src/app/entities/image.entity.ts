import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Entry} from './entry.entity';

@Index("fk_image_entry1_idx", ["entryId"], {})
@Entity("image", { schema: "mydb" })
export class Image {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "src", length: 200 })
  src: string;

  @Column("int", { name: "entry_id" })
  entryId: number;

  @ManyToOne(() => Entry, (entry) => entry.images, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "entry_id", referencedColumnName: "id" }])
  entry: Entry;
}
