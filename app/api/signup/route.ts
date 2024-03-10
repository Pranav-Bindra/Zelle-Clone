import connectMongoDB from '@/libs/mongodb';
import { User, UserModel } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { validuser } from '@/schemas/validuser';
import jwt from 'jsonwebtoken';
import {  AccountModels } from '@/models/Bank';

const SECRET = 'secret';


export async function POST(req: NextRequest) {
    const { username, password, firstName, lastName } : User = await req.json();

    const existUser = await UserModel.findOne({
        username: username
    });

    if (existUser){
        return NextResponse.json({
            message: "User already exists"
        },{
            status:409
        })
    }
    
    const result = validuser.safeParse({ username, password, firstName, lastName });

    if (!result.success) {
        return NextResponse.json({
            message: "Invalid Credentials"
        },{
            status:409
        });
    } else {
        await connectMongoDB();

        const User = await UserModel.create({
            username,
            password,
            firstName,
            lastName
        });

        const userId = User._id;

        const Account = await AccountModels.create({
            username,
            userId,
            balance: 1 + Math.random() * 10000
        })

        const token = jwt.sign({userId},SECRET);

        return NextResponse.json({
            message: `User Created Successfully`,
            token: token
        });        
    }
}

export async function GET(req: NextRequest){
    const users = await UserModel.find({})
    return NextResponse.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
        }))
    })
}


