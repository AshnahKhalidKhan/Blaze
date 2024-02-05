const Home = () => {
    return(
        <div className = "text-3xl font-bold underline">
            <h1 className="text-teal">GAME GAME!</h1>
            <div className = "drop-shadow-2xl hover:drop-shadow-xl">
                <input className = "bg-gradient-to-r from-teal via-white to-teal hover:from-pink-500 hover:to-yellow-500" type = "text" placeholder = "Give me a name!"></input>
            </div>
            <div className = "drop-shadow-2xl hover:drop-shadow-xl">
                <input type = "text" placeholder = "Give me a place!"></input>
            </div>
            <div className = "drop-shadow-2xl hover:drop-shadow-xl">
               <input type = "text" placeholder = "Give me an animal!"></input>
            </div>
            <div className = "drop-shadow-2xl hover:drop-shadow-xl">
                <input type = "text" placeholder = "Give me a thing!"></input>
            </div> 
        </div>
    )
}

export default Home