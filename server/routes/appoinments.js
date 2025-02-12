const router = require("express").Router();
let Appoinment = require("../models/appoinment");

// http://Localhost:8070/student/add
router.route("/enter").post((req, res) => { // Arrow function

    const name = req.body.name; // Get front-end value as a request through body
    const special = req.body.special;
    const states = req.body.states;
    const details = req.body.details;

    const newAppoinment = new Appoinment({
        name,
        special,
        states,
        details
    });

    newAppoinment.save()
        .then(() => {   // Pass values to database (Create)
            res.json("Appoinment Added");
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/show").get((req, res) => {
    Appoinment.find().then((appoinments) => {  //Get all users details(Read)
        res.json(appoinments)
    }).catch((err) => {
        console.log(err)
    });
});

router.route("/delete/:id").delete(async (req, res) => {   //(Delete)
    let userid = req.params.id;

    await Appoinment.findByIdAndDelete(userid)
    .then(() => {
        res.status(200).send({states: "Doctor deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({states: "Error with delete Doctor", error: err.message});
    });
});

router.route("/get/:id").get(async (req, res) => {       //Read specific student details
    let userId = req.params.id;
    await Appoinment.findById(userId)
    .then((user) => {   //findOne(email)
        res.status(200).send({states: "Doctor fetched", user: user});
    })
    .catch((err) => {
        console.log(err.message);
        res.status(500).send({states: "error with get Doctor", error: err.message});
    });
});

module.exports = router;
