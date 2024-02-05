const Login = () => {
    return (
        <div className = "grid gap-4 m-[100px] justify-center place-content-center place-items-center bg-teal rounded-2xl mx-[470px] object-fill font-montserrat">
        {/* background: padding: border: color: font: */}
            <div className = "pt-10 rounded-2x1">
                <input className = "bg-white rounded-2xl text-center" type = "email"></input>
            </div>
            <div className = "">
                <input className = "bg-white rounded-2xl text-center" type = "password"></input>  
            </div>
            <div className = "my-10 px-12 py-4 bg-white text-teal font-semibold rounded-xl">
                <button>Login</button>  
            </div>
            <div className = "grid text-teal font-semibold justify-self-end place-items-end bg-white p-[10px] rounded-2xl">
                <p>Sign Up</p>  
            </div>
            <div className = "grid text-teal font-semibold justify-self-end pb-10 place-items-end hover:text-white outline-white">
                <p className = "bg-white p-[10px] rounded-2xl hover:bg-teal ">Forgot Password</p>    
            </div>
        </div>
    );
}

export default Login;