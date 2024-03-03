import  {NextResponse} from "next/server";

export default async function GET(request: Request) {



    return NextResponse.json({
        hello: 'world'
    })
}
