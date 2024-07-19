import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { APIerror } from '../utils/APIerror.js';
import { APIresponse } from '../utils/APIresponse.js';

const isPasswordCorrect = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
}