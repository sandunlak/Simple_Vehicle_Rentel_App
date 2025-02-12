const router = require("express").Router();
let Form = require("../models/form");

router.route("/add").post((req, res) => {
    const { name, mobile, address, email, carname, days } = req.body;

    Form.findOne({ days: days })
        .then(existingForm => {
            if (existingForm) {
                return res.status(400).json({ error: "Date already booked" });
            }

            const newForm = new Form({
                name,
                mobile,
                address,
                email,
                carname,
                days
            });

            newForm.save()
                .then(() => {
                    res.json("Your Details Added");
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
});

router.route("/showtouser").get((req, res) => {
    Form.find().then((forms) => {  //Get all users details(Read)
        res.json(forms)
    }).catch((err) => {
        console.log(err)
    });
});

router.route("/delete/:id").delete(async (req, res) => {   //(Delete)
    let userid = req.params.id;

    await Form.findByIdAndDelete(userid)
    .then(() => {
        res.status(200).send({states: "Your Details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({states: "Error with delete details", error: err.message});
    });
});

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;

    const { name, mobile, address, email, carname, days } = req.body;

    const updateForm = {
        name,
        mobile,
        address,
        email,
        carname,
        days
    };

    await Form.findByIdAndUpdate(userId, updateForm)
    .then(() => {
        res.status(200).send({states: "Details updated"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({states: "Error with updating details", error: err.message});
    });
});

module.exports = router;
