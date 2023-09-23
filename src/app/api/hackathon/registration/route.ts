import Registrations from "@/Models/registrationModel";
import connectMongo from "@/utils/connectMongo";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, phone_number, team_name, group_size, project_topic, category} = body;
        if(!email || !phone_number || !team_name || !group_size || !project_topic || !category) {
            return new Response(JSON.stringify({msg: 'The form is incomplete', succeeded: false}), {
                status: 400,
                statusText: 'Incomplete information'
            });
        }

        await connectMongo();
        const registration = await Registrations.create({...body});

        if(!registration) {
            return new Response(JSON.stringify({msg: 'There has been an error please try again later', succeeded: false}), {
                status: 400
            })
        }

        return new Response(JSON.stringify({registration}), {
            status: 201
        })
    }catch(err) {
        console.log(err);
        return new Response(JSON.stringify({msg: 'error', succeeded: false}), {
            status: 400
        })
    }
}                             