import { Schema, Types, model, models } from "mongoose"

export type Registration = {
    email: string,
    phone_number: string,
    team_name: string
    group_size: number,
    project_topic: string,
    category: Types.ObjectId,
    privacy_policy_accepted: boolean
}

const registrationSchema = new Schema<Registration>({
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    team_name: {
        type: String,
        required: true,
    },
    group_size: {
        type: Number,
        required: true
    },
    project_topic: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true
    },
    privacy_policy_accepted: {
        type: Boolean,
        required: true,
    }
})


const Registration = models.Registration || model<Registration>('Registration', registrationSchema);

export default Registration