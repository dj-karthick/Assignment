const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log('Creating user with:', username, password);
    const newUser = await User.create({
        username,
        password
    })
    console.log('Created user:', newUser);
    res.json({
        msg : "User created successfully"
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;

    console.log("username ", username);
    await User.updateOne(
        {username},
        { $push : {purchasedCourses : courseId}}
    )
    res.json({
        msg : "Course purchased"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.body.username;
    const user = await User.findOne({
        username
    });
    console.log(user.purchasedCourses);
    
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        courses
    })
    console.log("You can now see the purchased courses.")
});

module.exports = router