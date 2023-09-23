import Categories from "@/Models/Categories";
import connectMongo from "@/utils/connectMongo";

export async function GET(req: Request) {
    try {
        await connectMongo();

        const categories = await Categories.find();

        return new Response(JSON.stringify({categories, succeeded: true}), {
            status: 200
        })
    } catch(err) {
        console.log(err)
    }
}