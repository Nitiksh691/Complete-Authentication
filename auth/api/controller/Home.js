const Home = (req, res) => {
    return res.status(200).json({
        message: "Welcome to home",
        success: true,
        user: req.user // ✅ ADDED: Send user info from JWT
    });
}

export default Home