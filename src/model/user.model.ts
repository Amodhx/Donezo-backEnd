import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        user_email: { type: String, required: true, unique: true },
        password: String,
    }
)
const UserSchema = mongoose.model('user',userSchema);
export default UserSchema;