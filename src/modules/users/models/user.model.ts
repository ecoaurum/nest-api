// import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

// @Table
// export class User extends Model {
//     @Column
//     firstName: string;

//     @Column
//     username: string;

//     @Column
//     email: string;

//     @Column
//     password: string;

// }

//!===================================================

import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class User extends Model<User> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;
}
