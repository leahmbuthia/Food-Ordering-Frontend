import { useMutation } from "react-query";

const API_BASE_URL =import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest={
    auth0Id:string;
    email:string;

};
// custome hook to createUser

export const useCreateMyUser=()=>{
    // createMy userRequest function
    const createMyUserRequest = async (user: CreateUserRequest)=>{
        // send post method
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body:JSON.stringify(user),
        });
        // handle response
        if(!response.ok){
            throw new Error("Failed to create user");
        }
    };


// usemutation Hook
    const {mutateAsync:createUser,isLoading,isError,isSuccess}=useMutation(createMyUserRequest);
    // return the mutation function and state indicators
    return{
        createUser,isLoading,isError,isSuccess,
    };
};