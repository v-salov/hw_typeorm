import {MigrationInterface, QueryRunner} from "typeorm";
import {User} from "../models/User";

export class createUsersTable1638276516852 implements MigrationInterface {
    name = 'createUsersTable1638276516852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_226bb9aa7aa8a69991209d58f5\` (\`userName\`)`);
        const user = new User()
        user.userName = 'test'
        user.password = 'test'
        await user.save()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_226bb9aa7aa8a69991209d58f5\``);
    }

}
