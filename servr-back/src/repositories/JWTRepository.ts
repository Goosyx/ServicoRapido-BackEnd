import { IJWTPayload, IJWTRepository } from "../interfaces/IJWTRepository";
import { sign, verify } from "jsonwebtoken" 
import config from "../config/config";

export class JWTRepository implements IJWTRepository {
    generate(payload: IJWTPayload): string {
        return sign(payload, config.jwt.secret, { expiresIn: '9999 days' })
    }  

    verify(key: string): IJWTPayload {
        return verify(key, config.jwt.secret) as IJWTPayload;
    }
}