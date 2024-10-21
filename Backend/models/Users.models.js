import mongoose from "mongoose";

import bcrypt from "bcryptjs";  // for encryption of passwords

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        // required: true,
        required: [true, "Please Enter Your Name"]
    },
    email:{
        type: 'string',
        required: [true, "Please Enter Your Email"],
        unique: true,
        lowercase: true,
        trime: true
    },
    password:{
        type: String,
        required: [true, "Please Enter Your Password"],
        minlength: [8, "Password should be greater than 8 characters"]
    },
    cartItems:[
        {
            quantity:{
                type: Number,
                default: 1
            },
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        }
    ],
    role:{
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer'
    }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

//pre-save hook to hash password before saving to database
UserSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(error){
        next(error);
    }
})

//credential validation
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

export default User;