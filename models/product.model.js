        // Product Schema
//declaration of constraint in the APP through creating of Schema
const mongoose=require ('mongoose')
        const ProductSchema = mongoose.Schema({
            productName : {type:String,required:true},
            productPrice : {type:Number ,required:true},
            productQuantity  : {type:Number,required:true},
            productImage : {type:String , required:true},
            productDate : {type:String, default:Date.now() }
        })
        //  Then gives the constraint we just created a Model and what that will do is to assign name to the collections---- ProductModel and generally speaking a model is a representation of a product so that anytime need to create a product no need to call on productName,price,image and other attrbute by just give it model and just call on the assign model  which will be store in a name we use to assign here using ProductModel and mongoose.model takes in two parameters (name to call the attribute collection ofthe product and the scheme to use for the collection  )
        const ProductModel = mongoose.model("product_collections",ProductSchema);

        module.exports = ProductModel