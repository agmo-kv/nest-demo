import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Friends {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

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
