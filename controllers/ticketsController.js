const db = require("../models");

// Defining methods for the mechanicsController
module.exports = {
    findAll: function (req, res) {
        db.Ticket
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Ticket
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Ticket
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Ticket
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Ticket
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findTasksByticketId: function (req, res) {
        db.Ticket
        .findAll({ 
            include: [{
                model:db.Task,
            }],
            where: { '$Ticket.id$': req.params.id} 
        })
        .then(dbTicketTasks => res.json(dbTicketTasks))
        .catch(err => res.status(422).json(err));
    },
    findCommentsByticketId: function (req, res) {
        db.Ticket
        .findAll({ 
            include: [{
                model:db.Comment,
            }],
            where: { '$Ticket.id$': req.params.id} 
        })
        .then(dbTicketComments => res.json(dbTicketComments))
        .catch(err => res.status(422).json(err));
    }
};
