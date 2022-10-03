
const data = {
    title: 'Alan'
}
exports.getAllUser = (req, res)=> {
    res
    .status(200)
    .json({
        status: 'success',
        data: data
    })
}

exports.getUser = (req, res)=> {
    res
    .status(200)
    .json({
        status: 'success',
        data: data
    })
}

exports.addUser = (req, res)=> {
    data.push(req.body)
    res
    .status(200)
    .json({
        status: 'success',
    })
}

exports.updateUser = (req, res)=> {
    // data.push(req.body)
    res
    .status(200)
    .json({
        status: 'success',
    })
}