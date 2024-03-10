import { AccountModels } from '@/models/Bank';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
    const { amount, from, to} = await req.json();

    const account = await AccountModels.findOne({
        username: from
    });

    if (account.balance < amount) {
        return NextResponse.json({
            message: "Insufficient Balance"
        })
    }

    const toAccount = await AccountModels.findOne({
        username: to
    })

    if (!toAccount) {
        return NextResponse.json({
            message: "Invalid Account"
        })
    }

    await AccountModels.updateOne({
        username: from
    }, {
        $inc: {
            balance: -amount
        }
    })

    await AccountModels.updateOne({
        username: to
    }, {
        $inc: {
            balance: amount
        }
    })

    return NextResponse.json({
        message: "Transfer Successful"
    })



}