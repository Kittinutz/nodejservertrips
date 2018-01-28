const models = require('../model/Providers')

exports.findAll = async() => {
    return await models.User.findAll()
}

exports.find = async(id) => {
    return await models.User.findById(id)
}

exports.create = async(user) => {
    return await models.User.create(user)
}

exports.update = async(id, user) => {
    return await models.User.update(user, {
        where: {
            id
        }
    })
}

exports.delete = async(id) => {
    return await models.User.destroy({
        where: {
            id
        }
    })
}