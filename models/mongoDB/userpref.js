var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var Userpref = new Schema({
    
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
                return input.length >= 6;
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
    
    // `title` is required and of type String
    director: [
        {type: String}
    ],
    // `link` is required and of type String
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
        releaseYear : Number
    }],
    
    
});

// This creates our model from the above schema, using mongoose's model method
var Prefs = mongoose.model("Prefs", ArticleSchema);

// Export the Article model
module.exports = Prefs;