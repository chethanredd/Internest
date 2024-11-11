import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        Lastname:  {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath:{
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        occpation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {timestamps: true}
);

const User = mongoose.model("User", Userschema);
export default User;
