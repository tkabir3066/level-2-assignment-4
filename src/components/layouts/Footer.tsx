import logo from "../../assets/icons8-books-96.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left Section */}
        <div>
          <div className="flex gap-2 items-center text-lg font-semibold">
            {" "}
            <img src={logo} alt="logo" width={40} height={20} /> Minimal Library
            System
          </div>
          <div className="text-sm text-gray-400">
            <p>
              A React and Redux application designed to organize and manage your
              personal library,
            </p>
            <p>
              allowing you to track, add, edit, and remove books from your
              collection
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
