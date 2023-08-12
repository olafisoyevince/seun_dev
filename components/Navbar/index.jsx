import React from "react";
import { Sun1 } from "iconsax-react";

const Navbar = () => {
  return (
    <section className="px-16 py-8">
      <div className=" p-5 flex justify-between items-center bg-white rounded-full">
        <h1 className="text-md">seun_dev</h1>

        <ul className=" flex items-center gap-14">
          <li>About</li>

          <li>Works</li>

          <li>Contact</li>
        </ul>

        <button>
          <div className=" flex items-center gap-2">
            <Sun1 size="20" />
            Light
          </div>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
