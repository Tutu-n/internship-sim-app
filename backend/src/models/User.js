import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, //removes whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, //ensures email is stored in lowercase
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'mentor', 'admin'], //restricts role to these values
    default: "student",
  }
},
{
  timestamps: true, //automatically adds createdAt and updatedAt fields, used for tracking user creation and modification times
});  

//PRE-SAVE HOOK TO SAVE EMAIL AUTOMATICALY WHEN NEW USER IS CREATED. DONE BY MONGOOSE MIDDLEWARE
userSchema.pre('save', async function(next) {

    //only hash if password is modified or new
  if(!this.isModified('password')) {
    return next();
  }
  const saltRounds = 10;
  this.password = await bcrypt.hashSync(this.password, saltRounds);
    next();
});

const User = mongoose.model('User', userSchema);

export default User;