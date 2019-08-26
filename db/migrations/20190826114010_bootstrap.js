exports.up = function(knex) {
    return knex.schema.createTable('rooms', tbl => {
        tbl.integer('room_id')
            .primary()
            .unsigned()
            .notNullable()
            .unique();

        tbl.string('title')
            .notNullable();

        tbl.string('description')
            .notNullable();

        tbl.integer('coordinate_x')
            .notNullable();

        tbl.integer('coordinate_y')
            .notNullable();

        tbl.integer('elevation')
            .notNullable();

        tbl.string('terrain')
            .notNullable();

        tbl.boolean('exit_n')
            .notNullable();

        tbl.integer('room_n')
            .references('room_id')
            .inTable('rooms')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');

        tbl.boolean('exit_s')
            .notNullable();

        tbl.integer('room_s')
            .references('room_id')
            .inTable('rooms')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');

        tbl.boolean('exit_e')
            .notNullable();

        tbl.integer('room_e')
            .references('room_id')
            .inTable('rooms')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');

        tbl.boolean('exit_w')
            .notNullable();
        
        tbl.integer('room_w')
            .references('room_id')
            .inTable('rooms')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');

        tbl.timestamp('created_at')
            .defaultTo(knex.fn.now());

        // Additional properties not added:
        // players: [ 'player101', 'player123' ],
        // items: [ 'tiny treasure' ],
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('rooms')
};