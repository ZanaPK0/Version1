import Navbar from "../Navbar/Navbar";


//Tailwind använder utility styling
// Så med classnamn läggs styling in.
// https://nerdcave.com/tailwind-cheat-sheet

// Header className = className="w-11/12 flex flex-row justify-center content-evenly">



function Header () {
    return (
        <header className=" h-20 w-12/12 flex flex-col justify-around items-center bg-yellow-600">
            <h1 className="font-bold text-2xl"> Header Component </h1>
            <Navbar/>
        </header>

    );
}

export default Header;