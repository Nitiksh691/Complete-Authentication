import  express  from "express";
import  Home  from "../controller/Home.js";
import ProtectedRoute from "../middleware/ProtectedRoutes.js";
const router = express.Router();
router.get("/",ProtectedRoute,Home);
export default router;
