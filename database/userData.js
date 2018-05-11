var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 1;
            },
            "Password should be longer."
        ]
    },
    
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    
    name: {
        type: String,
        trim: true,
        required: "Not required"
    },
    
    director: [
        {type: String}
    ],
    actor: [
        {type: String}
    ],
    
    critics_rating: {
        type: Boolean,
        required: false 
    },
    
    peers_rating: {
        type: Boolean,
        required: false 
    },
    
    awards: {
        type: Boolean,
        default: false
    },
    
    box_office_success: {
        type: Boolean,
        required: false 
    },
    
    release_date: { 
        type: String,
        required: false
    },
    
    watch_list: [{
        title : {type: String, required: true},
        releaseYear : Number,
        required: false
    }],
    
    
});

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
