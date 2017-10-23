// import 'reflect-metadata';
import Base from './Base';
import {
	Column,
	Entity
} from 'typeorm';

@Entity()
export default class User extends Base {
	@Column() username: string;
	@Column() token: string;
	@Column({
		type : 'enum',
		enum : ['enable', 'disable'],
		nullable : true,
		default : 'enable'
	})
	status: string;
}