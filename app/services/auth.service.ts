export const Login = (phone:string)=>{
    return $fetch('/api/auth/login',{
        method:'POST',
        body:{
            phone
        }
    })
}