import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export default class addAvatarFieldToUsers1587485544988
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'users',
			new TableColumn({
				name: 'avatar',
				type: 'varchar',
				isNullable: true,
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('users', 'avatar');
	}
}
