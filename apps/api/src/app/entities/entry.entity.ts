
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:"location"})
  location: string;

  @Column({name:"price"})
  price: boolean;

  @Column({ name:"accessibility",default: true })
  accesibility: string;

  @Column({name:"accomodation"})
  accomodation: boolean;

  @Column({name:"season"})
  season: string;

  @Column({name:"description"})
  description: string;

  @Column({name:"image"})
  image: string;
}
