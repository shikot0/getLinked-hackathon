import { Schema, model, models } from "mongoose"

export type Category = {
    name: string
}

const categorySchema = new Schema<Category>({
    name: {
        type: String,
        required: true
    }
})

const Categories = models.Categories || model<Category>('Categories', categorySchema);

export default Categories;