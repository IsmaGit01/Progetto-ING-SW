const {default:mongoose}=require("mongoose")

const postSchema = new mongoose.Schema ({
    postText:{
        type:String,
        require:true
    },
    postCategory: {
        type: String,
        required: true,
        enum: ['movies', 'tv_series', 'games', 'music']
    },
    postTitle:{
        type:String,
        require:true
    },
    postRating:{
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    createdAt:String,
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,ref:'user',
        require:true
    },
    imageUrl:String
})

module.exports = mongoose.model('post',postSchema)