
exports.up = function(knex) {
    return knex.schema.createTable('network', function (table){
        table.increments()

        table.string('name').notNullable()
        table.string('phoneNumber').notNullable()
        table.string('email').notNullable()
        table.string('linkedIn').notNullable()
        table.string('facebook').notNullable()

        table.string('user_id').notNullable()

        table.foreign('user_id').references('id').inTable('users')
       
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('network')
  
};
