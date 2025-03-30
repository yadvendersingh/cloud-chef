import {body, validationResult} from "express-validator";
import {NextFunction} from "express";


const handleValidationErrors = async (req : Request, res : Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            return res.status(400).json({errors: errors.array()});
        });
    } else {
        next();
    }
}
export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name is required and should be a string"),
    body("addressLine1").isString().notEmpty().withMessage("Address line 1 is required and should be a string"),
    body("city").isString().notEmpty().withMessage("City is required and should be a string"),
    body("country").isString().notEmpty().withMessage("Country is required and should be a string"),
    handleValidationErrors,
]