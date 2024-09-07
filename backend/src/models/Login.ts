import mongoose, { Document, Schema } from 'mongoose'

export interface ILogin extends Document {
    f_sno: number
    f_userName: string
    f_Pwd: string
}

const loginSchema: Schema<ILogin> = new Schema(
    {
        f_sno: {
            type: Number,
            required: [true, 'Serial number is required'],
            unique: true
        },
        f_userName: {
            type: String,
            required: [true, 'Username is required'],
            unique: true
        },
        f_Pwd: {
            type: String,
            required: [true, 'Password is required']
        }
    },
    {
        timestamps: true
    }
)

const Login = mongoose.model<ILogin>('Login', loginSchema)

export default Login
