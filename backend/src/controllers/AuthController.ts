import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Login from '../models/Login'
import { JWT_SECRET } from '../config'

export const login = async (req: Request, res: Response) => {
    const { f_userName, f_Pwd } = req.body
    // console.log(req.body, 'login data here');

    try {
        
        const user: any = await Login.findOne({ f_userName })
        // console.log(user.f_Pwd, 'user')
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Username' })
        }
        
        const isMatch = user.f_Pwd === f_Pwd
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' })
        }

        const payload = {
            user: {
                id: user.id,
                username: user.f_userName
            }
        }

        jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (error: any) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

export const loggedInUser = async (req: Request, res: Response) => {
    console.log(req.headers);
    let token = ''
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    const userDetails = jwt.decode(token)
    res.json({userDetails})
}