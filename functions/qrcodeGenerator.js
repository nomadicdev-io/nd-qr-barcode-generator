const qr = require('qrcode');

const qrCodeGenerator = (value)=> {
    return new Promise((resolve, reject) => {
        let data = {
            "customerID" : value
        }

        let stJson = JSON.stringify(data)

        qr.toDataURL(stJson, (error, code)=> {
            if(error) {
                reject(error)
            }else{
                resolve(code)
            }
        })
    })
}

module.exports = qrCodeGenerator;