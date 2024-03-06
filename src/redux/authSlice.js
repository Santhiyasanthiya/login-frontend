// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import { API_URL } from "../Constants/Url";



// const initialState = {
//     msg:"",
//     user:"",
//     token:"",
//     loading:false,
//     error:""
// }

// // Signup User 
// export const signupUser = createAsyncThunk('signupuser',async(body)=>{
   
//     const res = await fetch(`${API_URL}/signin`,{
//         method:"POST",
//         headers:{
//               'Content-Type':"application/json",             
//         },
//         body:JSON.stringify(body)
//     })
//     return await res.json();
   
// })

// export const signInUser = createAsyncThunk('signinuser',async(body)=>{
   
//     const res = await fetch(`${API_URL}/login`,{
//         method:"POST",
//         headers:{
//               'Content-Type':"application/json",             
//         },
//         body:JSON.stringify(body)
//     })
//     return await res.json();
// })


// const authSlice = createSlice({
//     name:"user",
//     initialState,
//     reducers:{
//        addToken: (state,action)=>{
//         state.token = localStorage.getItem("token")
//        } ,
//        logout: (state,action)=>{
//         state.token=null;
//    localStorage.clear();

//        } ,   addToken: (state,action)=>{
//         state.token = localStorage.getItem("token")
//        } 
//     },
//     extraReducer:{
// //*****login */

//         [signInUser.pending]:(state,action)=>{
//             state.loading= true
//         },
//         [signInUser.fulfilled]:(state,{payload:{error,msg,token,user}})=>{
//            state.loading = false;
//     if (error) {
//         state.error=error;
        
//     } else {
//         state.msg = msg;
//         state.token = token;
//         state.user = user;

//         localStorage.setItem("msg",msg)
//         localStorage.setItem("user",JSON.stringify(user))
//         localStorage.setItem("token",token)
//     }
//         },
//         [signInUser.rejected]:(state,action)=>{
//             state.loading= true;
//         },

//         //*******************************Signup****************88 */
//         [signupUser.pending]:(state,action)=>{
//             state.loading= true
//         },
//         [signupUser.fulfilled]:(state,{payload:{error,msg}})=>{
//            state.loading = false;
//            if (error) {
//             state.error =error
//            } else{
//             state.msg = msg
//            }
//         },
//         [signupUser.rejected]:(state,action)=>{
//             state.loading= true;
//         }

//     }
// })
// export const {addToken,addUser,logout} = authSlice.actions;
// export default authSlice.reducer;


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../Constants/Url";

const initialState = {
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:""
}

// Signup User 
export const signupUser = createAsyncThunk('signupuser',async(body)=>{
   
    const res = await fetch(`${API_URL}/signin`,{
        method:"POST",
        headers:{
              'Content-Type':"application/json",             
        },
        body:JSON.stringify(body)
    })
    return await res.json();
   
})

export const signInUser = createAsyncThunk('signinuser',async(body)=>{
   
    const res = await fetch(`${API_URL}/login`,{
        method:"POST",
        headers:{
              'Content-Type':"application/json",             
        },
        body:JSON.stringify(body)
    })
    return await res.json();
})


const authSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
       addToken: (state,action)=>{
        state.token = localStorage.getItem("token")
       } ,
       logout: (state,action)=>{
        state.token=null;
   localStorage.clear();

       } ,   addToken: (state,action)=>{
        state.token = localStorage.getItem("token")
       } 
    },
    extraReducer: builder => {
//***login */
builder
        .addCase(signInUser.pending, (state,action) => {
            state.loading = true;
        })

        .addCase(signInUser.fulfilled, (state,{payload:{error,msg,token,user}}) => {
            state.loading = false;
            if (error) {
                state.error=error;
                
            } else {
                state.msg = msg;
                state.token = token;
                state.user = user;
        
                localStorage.setItem("msg",msg)
                localStorage.setItem("user",JSON.stringify(user))
                localStorage.setItem("token",token)
            }
        })

        .addCase(signInUser.rejected, (state,action) => {
            state.loading = true;
        })
        
       
        //***Signup****88 */

        .addCase(signupUser.pending, (state,action) => {
            state.loading = true;
        })

        .addCase(signupUser.fulfilled, (state,{payload:{error,msg}}) => {
            state.loading = false;
            if (error) {
             state.error =error
            } else{
             state.msg = msg
            }
        })

        .addCase(signupUser.rejected, (state,action) => {
            state.loading = true;
        })
       

    }
})
export const {addToken,addUser,logout} = authSlice.actions;
export default authSlice.reducer;
