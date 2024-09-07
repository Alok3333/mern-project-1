import mongoose, { Document, Schema } from 'mongoose'

interface IEmployee extends Document {
    f_Id: string
    f_Image: string
    f_Name: string
    f_Email: string
    f_Mobile: string
    f_Designation: string
    f_gender: string
    f_Course: string
    f_Createdate: Date
}

const employeeSchema: Schema<IEmployee> = new Schema(
    {
        f_Id: {
            type: String,
            required: [true, 'ID is required'],
            unique: true
        },
        f_Image: {
            type: String
        },
        f_Name: {
            type: String,
            required: [true, 'Name is required']
        },
        f_Email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            validate: {
                validator: function (email: string) {
                    // Basic email validation regex
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                },
                message: (props: { value: string }) => `${props.value} is not a valid email!`
            }
        },
        f_Mobile: {
            type: String,
            required: [true, 'Mobile number is required'],
            unique: true,
            validate: {
                validator: function (mobile: string) {
                    // Basic numeric validation
                    return /^[0-9]+$/.test(mobile)
                },
                message: (props: { value: string }) => `${props.value} is not a valid mobile number!`
            }
        },
        f_Designation: {
            type: String,
            required: [true, 'Designation is required']
        },
        f_gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: [true, 'Gender is required']
        },
        f_Course: {
            type: String
        },
        f_Createdate: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

const Employee = mongoose.model<IEmployee>('Employee', employeeSchema)

export default Employee
