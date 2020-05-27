const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public
module.exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'});
}


// @desc    Get single bootcamps
// @route   Get /api/v1/bootcamps/:id
// @access  Public
module.exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamps ${req.params.id}`});
}


// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @access  Private
module.exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
    
        res.status(201).json({
            success:true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({ success:false });
    }
    
    // console.log(req.body);
    
}


// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
module.exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamps ${req.params.id}`});
}

// @desc    Delete bootcamps
// @route   Delete /api/v1/bootcamps/:id
// @access  Private
module.exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}`});
}