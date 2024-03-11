import { AccountModels } from '@/models/Bank';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
    const user = await req.json();
    console.log(user);

    const account = await AccountModels.findOne({
        username: user.username
    });

    // Check if account is found
    if (!account) {
        return NextResponse.json({
            error: "Account not found",
            balance: null
        }, {
            status: 404 // Consider using an appropriate HTTP status code
        });
    }

    return NextResponse.json({
        balance: account.balance
    });
};
