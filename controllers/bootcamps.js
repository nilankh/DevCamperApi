const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public
module.exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ success: true,count: bootcamps.length ,data: bootcamps});
    } catch (err) {
        next(err);
    }
    
}


// @desc    Get single bootcamps
// @route   Get /api/v1/bootcamps/:id
// @access  Public
module.exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        
        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id }`, 404));
         }

        res.status(200).json({ success: true, data: bootcamp })
    } catch (err) {
        // res.status(400).json({success:false});
        next(err);
    }
};


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
        next(err);
    }
    
    // console.log(req.body);
    
}


// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
module.exports.updateBootcamp = async (req, res, next) => {
   try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id }`, 404));
    }
    res.status(200).json({ success: true, data: bootcamp});
   } catch (err) {
    next(err);
   }
    
}

// @desc    Delete bootcamps
// @route   Delete /api/v1/bootcamps/:id
// @access  Private
module.exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
            
        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id }`, 404)
                );
        }
        res.status(200).json({ success: true, data: {}});
       } catch (err) {
        next(err);
       }
        
    }