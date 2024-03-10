import { AccountModels } from '@/models/Bank';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
    const user = await req.json();
    console.log(user)

    const account = await AccountModels.findOne({
        username: user.username
    });

    return NextResponse.json({
        balance: account.balance
    })
};