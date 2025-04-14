import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className=" h-20 w-12/12 flex flex-col justify-around items-center bg-yellow-500">
      <h1 className="font-bold text-3xl text-blue-600">Weather Information</h1>
      <Navbar />
    </header>
  );
}

export default Header;
