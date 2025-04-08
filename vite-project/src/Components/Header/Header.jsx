import Navbar from "../Navbar/Navbar";


//Tailwind använder utility styling
// Så med classnamn läggs styling in.
// https://nerdcave.com/tailwind-cheat-sheet

// Header className = className="w-11/12 flex flex-row justify-center content-evenly">



function Header ({ pageOneName }) {
    return (
        <header className=" h-20 w-12/12 flex flex-col justify-around items-center bg-yellow-500">
            <h1 className="font-bold text-3xl text-blue-600" > Weather Information </h1>
            <Navbar/>
        </header>

    );
}

export default Header;