const { User } = require("../models/Users")


const UserController = {
    getAll: (req, res) => {

        User.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    getById: (req, res) => {
        let id = req.params.id;

        User.findById(id)
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(400).json({ 'msg': 'Not Found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    login: (req, res) => {
        const { email, password } = req.body;
    
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (user.password === password) {
                        res.json({ message: "You have successfully logged in" });
                    } else {
                        res.json({ message: "Incorrect password" });
                    }
                } else {
                    res.json({ message: "User not found" });
                }
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }
    ,
    add: (req,res) => {
        var user = new User({
            name: req.body.name,
            surname: req.body.surname,
            email:req.body.email,
            password:req.body.password
        })

        user.save();

        res.json(user)
    },
    update: (req, res) => {
        let id = req.params.id;
        let updatedUser = {
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password: req.body.password,
        };
        User.findByIdAndUpdate(id, updatedUser, { new: true })
          .then((UpdatedUser) => {
            if (UpdatedUser) {
              res.json(UpdatedUser);
            } else {
              res.status(400).json({ msg: "Not Found!" });
            }
          })
          .catch((error) => {
            res.status(500).json(error);
          });
      },
    delete: (req, res) => {
        let id = req.params.id

        User.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
   UserController
}