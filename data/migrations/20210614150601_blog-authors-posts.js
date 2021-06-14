
exports.up = function(knex) {
  return knex.schema
    .createTable('authors', tbl => {
      tbl.increments();
      tbl.string('name', 256)
        .unique()
        .notNullable();
    })
    .createTable('posts', tbl => {
      tbl.increments();
      tbl.string('title', 256).unique().notNullable();
      tbl.text('body', 1024*16).notNullable();
      tbl.integer('author_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('authors')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('authors');
};
