const knex = require('knex');
const config = require('../knexfile');
const db = knex(config[process.env.NODE_ENV]);

module.exports = {
    db,
    addRoom,
    updateRoom,
    getRoom,
    getGraph
}

async function addRoom(roomData) {
    const trx = await db.transaction();
    try {
        // Make sure room doesn't exist
        let room = await trx('rooms')
            .where({
                room_id: roomData.room_id
            })
            .returning('*')
            .first();

        // If room doesn't exist in db
        if (room === undefined) {
            // Insert it
            room = await trx('rooms')
                .insert({
                    roomData
                })
                .returning('*');
            room = room[0];
            trx.commit();
            return room;
        } else {
            throw new Error("Room already exists")
        }
    } catch (e) {
        trx.rollback();
        return new Error(e)
    }
}

async function updateRoom(roomData) {
    const trx = await db.transaction();
    try {
        // Make sure room exists
        let room = await trx('rooms')
            .where({
                room_id: roomData.room_id
            })
            .returning('*')
            .first();

        // If room exists in db
        if (room !== undefined) {
            // Update it
            room = await trx('rooms')
                .where({
                    room_id: roomData.id
                })
                .update({
                    roomData
                })
                .returning('*');
            room = room[0];
            trx.commit();
            return room;
        } else {
            throw new Error("Room does not exist");
        }
    } catch (e) {
        trx.rollback();
        return new Error(e)
    }
}

async function getRoom(roomId) {
    try {
        // Make sure room exists
        let room = await db('rooms')
            .where({
                room_id: roomId
            })
            .returning('*')
            .first();

        // If room exists in db then return it
        if (room !== undefined) {
            return room;
        } else {
            throw new Error("Room does not exist");
        }

    } catch (e) {
        return new Error(e)
    }
}

async function getGraph() {
    try {
        const rooms = await db('rooms')
            .returning('*');
        return rooms;
    } catch (e) {
        return new Error(e)
    }
}