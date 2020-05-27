const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public
module.exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ success: true,data: bootcamps});
    } catch (err) {
        res.status(400).json({success:false});
    }
    
}


// @desc    Get single bootcamps
// @route   Get /api/v1/bootcamps/:id
// @access  Public
module.exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        
        if(!bootcamp){
            return res.status(400).json({ success: false });
         }

        res.status(200).json({ success: true, data: bootcamp })
    } catch (err) {
        res.status(400).json({success:false});
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
        res.status(400).json({ success:false });
    }
    
    // console.log(req.body);
    
}


// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
module.exports.updateBootcamp = async (req, res, next) => {
   
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
    });
    if(!bootcamp){
        return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp});
}

// @desc    Delete bootcamps
// @route   Delete /api/v1/bootcamps/:id
// @access  Private
module.exports.deleteBootcamp = async (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}`});
}