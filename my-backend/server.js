const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getRecipeFromChefClaude, getRecipeFromMistral } = require("./recipeService");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to access backend
app.use(bodyParser.json()); // Parse JSON requests

// Define an API endpoint to get a recipe
app.post("/getRecipeFromChefClaude", async (req, res) => {
    try {
        const { ingredients } = req.body;
        const recipe = await getRecipeFromChefClaude(ingredients);
        res.send(recipe);
    } catch (error) {
        res.status(500).send("Error fetching recipe");
    }
});

// Start the backend server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
