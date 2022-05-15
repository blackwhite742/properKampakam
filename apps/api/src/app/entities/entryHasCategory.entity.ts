import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn} from "typeorm";
import { Entry } from './entry.entity';
import { Category } from './category.entity';


@Entity("entry_has_category", { schema: "mydb" })
export class EntryHasCategory{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id:number;

  @Column("int", {name: "entry_id"})
  entryId:number;

  @Column("int", {name: "category_id"})
  categoryId:number;

}


