import jwt from "jsonwebtoken";
// import AuthenticatorError from '@apollo/server-express'

export const authCheck = ()=>{
    const authHeader = context.req.headers.authorization
    if(authHeader){
        const token = authHeader.split('Bearer ')[1]
        if(token){
            try {
                const user = jwt.verfiy(token, process.env.ADMIN)
                return user
            } catch (error) {
                throw new Error('Invalid or Expired token')
            }
        }
        throw new Error("Authentication token should be \ 'Bearer [token]")
    }
    throw new Error("Authentication header should be provided")
}