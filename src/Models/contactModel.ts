import { Schema, models, model } from "mongoose"

export type Contact = {
    email: string,
    phone_number: string,
    first_name: string,
    message: string
}

const contactSchema = new Schema<Contact>({
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }, 
    first_name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})


const Contacts = models.Contacts || model<Contact>('Contacts', contactSchema)

export default Contacts;