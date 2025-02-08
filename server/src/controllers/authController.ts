import User from "../models/User";
/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */

export const login = async (req: any, res: any) => {
  try {
    const { name, photo } = req.body; // Expecting name and photo

    // Check if name and photo are provided
    if (!name || !photo) {
      return res.status(400).json({ message: "Name and photo are required" }); // 400 Bad Request
    }

    // Find user by name and photo
    const loginUser = await User.findOne({ name, photo }).populate("role");

    // User not found
    if (!loginUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      user: loginUser,
      message: "User Login Successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
