import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn} from "typeorm";
import { Entry } from './entry.entity';
import { Category } from './category.entity';


@Entity()
export class EntryHasCategory{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id:number;

  @Column("int", {name: "entry_id"})
  entryId:number;

  @Column("int", {name: "category_id"})
  categoryId:number;

  @ManyToOne(type=>Entry, entry => entry.categories)
  @JoinColumn({name:"entry_id"})
  entry:Entry|number;


  @ManyToOne(type=>Category, category => category.entries)
  @JoinColumn({name:"category_id"})
  categories:Category|number;

}


