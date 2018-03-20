exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('restaurant', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.integer('hours').notNullable();
      table.decimal('price').notNullable();
      table.string('style').notNullable();
      table.integer('phone').notNullable();
    }),
    knex.schema.createTable('imgs', function(table) {
      table.increments('id').primary();
      table.string('url').notNullable();
      table.string('imgType');
      table.integer('restaurant_id').notNullable();
    }) 
  ]); 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('imgs').dropTable('restaurant')
  ]);
};