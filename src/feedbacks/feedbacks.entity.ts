import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedbacks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    description: string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted record with ID ' + this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated record with ID ' + this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed record with ID ' + this.id);
    }
}
