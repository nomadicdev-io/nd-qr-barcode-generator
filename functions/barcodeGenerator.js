const bwipjs = require('bwip-js');

const barcodeGenerator = (text, callback)=> {
    return new Promise((resolve, reject) => {
        bwipjs.toBuffer({
            bcid: 'code128',
            text: text,
            scale: 3,
            height: 10,
            includetext: true,
            textxalign: 'center'
        }, function(error, buffer) {
            if(error) {
                reject(error)
            } else {
                let gifBase64 = `data:image/gif;base64,${buffer.toString('base64')}`
                resolve(gifBase64)
            }
        })
    })
}

module.exports = barcodeGenerator;