import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  JoinTable
} from "typeorm";
import { Category } from "./category.entity";
import { Municipality } from "./municipality.entity";
import { PrimaryGeneratedColumn } from 'typeorm';
import { EventCategory } from './eventCategory.entity';

@Index("fk_event_municipality1_idx", ["municipalityId"], {})
@Entity("event", { schema: "mydb" })
export class Event {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("tinyint", { name: "price", nullable: true, width: 1 })
  price: boolean | null;

  @Column("varchar", { name: "image", nullable: true, length: 200 })
  image: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 150 })
  link: string | null;

  @Column("varchar", { name: "location", nullable: true, length: 150 })
  location: string | null;

  @Column("int", { name: "municipality_id", nullable: true })
  municipalityId: number | null;

  @ManyToMany(() => EventCategory, (eventCategory) => eventCategory.events)
  @JoinTable({
    name: "event_has_eventCategory",
    joinColumns: [{ name: "event_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "eventCategory_id", referencedColumnName: "id" },
    ],
    schema: "mydb",
  })
  eventCategories: EventCategory[];

  @ManyToOne(() => Municipality, (municipality) => municipality.events, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "municipality_id", referencedColumnName: "id" }])
  municipality: Municipality;
}
