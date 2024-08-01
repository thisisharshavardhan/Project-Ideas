import { asyncHandler } from "../utils/asyncHandler";

const getCategories = asyncHandler(async (req, res) => {
    const categories = [
        { id: 1, name: "Computer Science & Engineering" },
        { id: 2, name: "Electronics & Communication Engineering" },
        { id: 3, name: "Electrical & Electronics Engineering" },
        { id: 4, name: "Mechanical Engineering" },
        { id: 5, name: "Civil Engineering" },
    ];
    res.json({ categories });
})
export default getCategories ;