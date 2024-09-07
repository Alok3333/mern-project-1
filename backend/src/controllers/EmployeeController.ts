import { Request, Response } from 'express'
import Employee from '../models/Employee'

export const createEmployee = async (req: Request, res: Response): Promise<Response> => {
    const { f_Id, f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body

    try {
        let employee = await Employee.findOne({ f_Email })
        if (employee) {
            return res.status(400).json({ msg: 'Employee with this email already exists' })
        }

        employee = new Employee({
            f_Id,
            f_Image,
            f_Name,
            f_Email,
            f_Mobile,
            f_Designation,
            f_gender,
            f_Course
        })

        await employee.save()
        return res.status(201).json(employee)
    } catch (error: any) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}

export const updateEmployee = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const { f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body

    try {
        const employee = await Employee.findById(id)
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' })
        }

        employee.f_Image = f_Image || employee.f_Image
        employee.f_Name = f_Name || employee.f_Name
        employee.f_Email = f_Email || employee.f_Email
        employee.f_Mobile = f_Mobile || employee.f_Mobile
        employee.f_Designation = f_Designation || employee.f_Designation
        employee.f_gender = f_gender || employee.f_gender
        employee.f_Course = f_Course || employee.f_Course

        await employee.save()
        return res.status(200).json(employee)
    } catch (error: any) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}

export const getEmployees = async (req: Request, res: Response): Promise<Response> => {
    const { search, sort, order } = req.query

    const searchQuery: any = {}
    if (search) {
        searchQuery.$or = [
            { f_Name: { $regex: search, $options: 'i' } },
            { f_Email: { $regex: search, $options: 'i' } },
            { f_Mobile: { $regex: search, $options: 'i' } }
        ]
    }

    const sortQuery: any = {}
    if (sort) {
        const sortOrder = order === 'desc' ? -1 : 1
        sortQuery[sort as string] = sortOrder
    }

    try {
        const employees = await Employee.find(searchQuery).sort(sortQuery)
        return res.status(200).json(employees)
    } catch (error: any) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}
