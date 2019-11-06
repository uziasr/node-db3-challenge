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

function findSteps(id){

    return db('schemes as sc')
    .join('steps as st', 'sc.id', 'st.scheme_id')
    .where("sc.id",'=', id )
    .select('st.id', 'st.step_number', 'st.instructions', 'st.scheme_id')
}

function addStep(body, id){
return db('steps')
.insert({...body, scheme_id: id})
.where({id})
}

module.exports = {
    find,
    findById, 
    add, 
    update, 
    remove,
    findSteps,
    addStep
  }