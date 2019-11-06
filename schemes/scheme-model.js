const db = require('../data/db-config')

function find() {
     return db('schemes')
}

function findById(id) {
    return db
    .select('*')
    .from('schemes')
    .where({id})
}

function add(user) {
    console.log(user)
    return db('schemes').insert(user)
}

function update(changes, id) {
    return db('schemes').where({id}).update(changes)
}

function remove(id) {
    return db('schemes').where({id}).del()
}

module.exports = {
    find,
    findById, 
    add, 
    update, 
    remove
  }