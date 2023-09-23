import Contacts from "@/Models/Contacts";
import connectMongo from "@/utils/connectMongo";

export async function POST(req: Request) {
    try {
        const {email, phone_number, first_name, message} = await req.json();

        if(!email || !phone_number || !first_name || !message) {
            return new Response(JSON.stringify({msg: 'Incomplete information', succeeded: false}), {
                status: 400,
                statusText: 'Incomplete information'
            })
        }

        await connectMongo()

        const contact = await Contacts.create({email, phone_number, first_name, message})

        if(!contact) {
            return new Response(JSON.stringify({msg: 'Sorry there has been an error please try again later', succeeded: false}), {
                status: 403
            })
        }  

        return new Response(JSON.stringify({id: contact._id, first_name: contact.first_name, email: contact.email, message: contact.message }), {
            status: 201
        })

    }catch(err) {
        console.log(err);
    }
}