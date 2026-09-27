import jwt from 'jsonwebtoken';

export const getUserData = (event:any)=>{
  const {
      secretKey
    } = useRuntimeConfig()
  
    const authToken = getHeader(event,'Authorization');
    
    if(!authToken)
      throw createError({statusCode:401,statusText:'لطفا ابتدا وارد حساب شوید'});
  
    const token = authToken.split(' ')[1];
    
    try{
      const decoded = jwt.verify(token,secretKey);

      return {
        id:decoded.id,
        phone:decoded.phone
      }

    }catch(err){
      throw createError({statusCode:401,statusText:'توکن معتبر نیست، دوباره وارد شوید'});
    }

    return null;
}