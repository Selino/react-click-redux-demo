const router = require("express").Router()
let currentcount = require("../models/currentcount.model")

router.route("/").get((req, res) => {
  currentcount
    .find()
    .then(currentcounts => res.json(currentcounts))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
  const count = Number(req.body.count)
  const date = Date.parse(req.body.date)

  const newcurrentcount = new currentcount({
    count,
    date
  })

  newcurrentcount
    .save()
    .then(() => res.json("currentcount added!"))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").get((req, res) => {
  currentcount
    .findById(req.params.id)
    .then(currentcount => res.json(currentcount))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/update/:id").post((req, res) => {
  currentcount
    .findById(req.params.id)
    .then(currentcount => {
      currentcount.counter = req.body.counter
      currentcount.date = Date.parse(req.body.date)

      currentcount
        .save()
        .then(() => res.json("currentcount updated to " + currentcount.counter))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router
