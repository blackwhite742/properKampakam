import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from './event.entity';

@Entity("eventCategory", { schema: "mydb" })
export class EventCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @ManyToMany(() => Event, (event) => event.eventCategories)
  events: Event[];
}
