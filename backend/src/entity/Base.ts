import { BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import * as _ from 'lodash';

export default class extends BaseEntity {
	constructor(){
		super();
	}

	@PrimaryGeneratedColumn() id: number;

	@CreateDateColumn({
		name : 'create_at'
	})
	public createAt: Date;

	@UpdateDateColumn({
		name : 'update_at'
	})
	public updateAt: Date;

	public getTableName(): string{
		return Object.getPrototypeOf(this).constructor.name;
	}

	public set(data: object): void {
		_.each(data, (v, k)=>{
			this[k] = v;
		});
	}
}