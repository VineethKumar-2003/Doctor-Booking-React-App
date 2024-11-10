import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (err) {
        console.error('Update Error:', err);
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);

        if (!deletedDoctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        console.error('Delete Error:', err);
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).select("-password");

        if (!doctor) {
            return res.status(404).json({ success: false, message: "No Doctor found" });
        }

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctor,
        });
    } catch (err) {
        console.error('Get Single Doctor Error:', err);
        res.status(500).json({ success: false, message: "Failed to retrieve doctor" });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved', 
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: 'i' } },
                ],
            }).select("-password");
        } else {
            doctors = await Doctor.find({ isApproved: "approved" }).select("-password");
        }

        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        });
    } catch (err) {
        console.error('Get All Doctors Error:', err);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve doctors",
        });
    }
};