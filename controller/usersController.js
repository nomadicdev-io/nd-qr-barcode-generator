const Users = require('../models/usersModels');
const barcodeGenerator = require('../functions/barcodeGenerator'); 
const qrCodeGenerator = require('../functions/qrcodeGenerator'); 

exports.getAllUser = async (req, res)=> {

    try {
        const users = await Users.find()

        res
        .status(200)
        .json({
            status: 'success',
            results: users.length,
            data: users
        })
    } catch(error) {
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
    }
    
}

exports.getUser = async (req, res)=> {

    try {

        const user = await Users.findById(req.params.id);

        res
        .status(200)
        .json({
            status: 'success',
            data: user
        })

    } catch(error) {
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
    }

   
}

exports.addUser = async (req, res)=> {

    let reqData = req.body;
    let reqId;
    let code;

    try {
        
        const newUser = await Users.create(reqData).then((response)=> {
            
            reqId = response._id.toString();
            return reqId

        }).then((resData)=> {

            console.log(resData)

            const updateContent = async ()=> {
                const t = await qrCodeGenerator(resData).then((e)=> {
                    Users.findByIdAndUpdate(reqId, {
                        accesscode: e
                    }).then((ures)=> {
                        console.log(e)
                    }).catch((error)=> {
                        console.log(error)
                    })
                })
            }

            updateContent();

        })
       

        res
        .status(201)
        .json({
            status: 'Created',
            data: reqData
        })
    } catch(error){
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
    }
    
   
}

exports.updateUser = async (req, res)=> {
    try {

         const updateduser = await Users.findByIdAndUpdate(req.params.id, req.body, {
            new: true
         })

        res
        .status(200)
        .json({
            status: 'success',
            data: updateduser
        })
    } catch(error) {
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
    }
}

exports.deleteUser = async (req, res)=> {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id)
        res
        .status(200)
        .json({
            status: 'Deleted Successfully',
        })
    }catch(error) {
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
    }
} 

exports.modifyAll = async (req, res)=> {

    console.log(req.body)

   try {
        const modifyUser = await Users.updateMany( {isValid}, {$set: {isValid: true}}, function(err, result) {
        
        })

        res
        .status(200)
        .json({
            status: 'success',
        })
    }catch(error) {
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
   }

    // try {

    

    //     res
    //     .status(200)
    //     .json({
    //         status: 'success',
    //     })

    
}


exports.generateQr = async (req, res)=> {
    try {
        
        const users = await Users.find().then(data=> {
           
            let array = data;

            array.forEach((el, id)=> {

                const updateContent = async ()=> {
                    const t = await qrCodeGenerator(el.id).then((e)=> {
                        Users.findByIdAndUpdate(el.id, {
                            qrcode: e
                        }).then((ures)=> {
                            console.log(e)
                        }).catch((error)=> {
                            console.log(error)
                        })
                    })
                }
    
                updateContent();
            })

        })

        res
        .status(200)
        .json({
            status: 'success',
            results: users.length,
            data: users
        })

    } catch(error){
        res
        .status(400)
        .json({
            status: 'failed',
            message: error
        })
    }
}