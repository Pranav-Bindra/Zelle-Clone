import connectMongoDB from '@/libs/mongodb';
import { User, UserModel } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    const { username, password} : User
    = await req.json();

    await connectMongoDB();

    const foundUser = await UserModel.findOne({
        username: username,
        password: password,
    });

    if (!foundUser){
        return NextResponse.json({
            message:`User Not ${username}`
        }, {
            status:409,
            statusText:"User doesnt exist"
        })
    }
    else{
        return NextResponse.json({
            message:`User found logging in now`
        })
    }
}



