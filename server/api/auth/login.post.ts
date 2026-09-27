import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const phone = body.phone;

  const {
    secretKey
  } = useRuntimeConfig();

  const users = await $fetch(`http://localhost:3001/users`);
  const doesUserExists = users.find(u=>u.phone === phone);
  if(doesUserExists){
    return {
      token:jwt.sign(doesUserExists,secretKey)
    }
  }else{
    const newUser = {
      phone
    };
    const res = await $fetch(`http://localhost:3001/users`,{
      method:'POST',
      body:newUser
    })
    return {
      token:jwt.sign(res,secretKey)
    }
  }

})
