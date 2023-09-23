import Categories from "@/Models/Categories";
import connectMongo from "@/utils/connectMongo";

// export async function GET(req: Request) {
//     try {
//         await connectMongo();

//         const categories = await Categories.find();

//         // if(categories) {
//         //     return new Response(JSON.stringify({categories, succeeded: true}), {
//         //         status: 200
//         //     })
//         // }else {
//         //     return new Response(JSON.stringify({msg: 'There has been an error please try again later', succeeded: false}), {
//         //         status: 400
//         //     })
//         // }

//         return new Response(JSON.stringify({categories, succeeded: true}), {
//             status: 200
//         })
//     } catch(err) {
//         console.log(err)
//     }
// }

export async function GET(req: Request) {
    try {
        await connectMongo();

        const categories = await Categories.find();

        return new Response(JSON.stringify({categories, succeeded: true}), {
            status: 200
        })
    }catch(err) {
        console.log(err)
    }
}