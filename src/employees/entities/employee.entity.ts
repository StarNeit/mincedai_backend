import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column('varchar')
  first_name: string;

  @Column('varchar')
  surname: string;

  @Column('date')
  birth_date: string;

  @Column('varchar')
  email: string;
}
