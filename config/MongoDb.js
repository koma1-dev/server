import mongoose from 'mongoose'

const connectDatatbase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("connect database...!")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDatatbase;