import BigCards from "@/components/BigCards/BigCards";
import SmallCard from "@/components/SmallCard/SmallCard";
import { BIG_CARDS, SMALL_CARDS } from "@/lib/utils";
import { FaAngleDown, FaBell, FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function Home() {
  return (
    <div className="dashboard py-4 px-8 flex flex-col gap-4 w-full">
      {/* navbar */}
      <nav className="flex items-center justify-between">
        {/* search */}
        <div className="search relative">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-slate-400 pl-4 pr-10 rounded-md h-10"
          />
          <button className="flex items-center justify-center absolute top-0 right-0 h-10 w-10">
            <FaSearch className="text-slate-500" />
          </button>
        </div>

        {/* other options */}
        <div className="profile-nav flex gap-4">
          <button className="profile-button text-slate-500 text-xl">
            <FaBell />
          </button>
          <button className="profile-button text-slate-500 text-xl">
            <MdMessage />
          </button>

          {/* profile */}
          <div className="profile flex items-center gap-2 cursor-pointer">
            <img
              src="https://github.com/shadcn.png"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <h4 className="text-lg md:block hidden">John Doe</h4>
            <FaAngleDown />
          </div>
        </div>
      </nav>

      {/* main dashboard */}
      <div className="main flex flex-col gap-6 mt-6">
        {/* page header */}
        <div className="page-header flex items-center justify-between">
          <h1 className="text-2xl">Dashboard</h1>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* col1 */}
          <div className="flex flex-col gap-4">
            {/* small cards */}
            <div className="flex gap-4">
              {SMALL_CARDS.map((card, index) => (
                <SmallCard key={index} card={card} />
              ))}
            </div>

            {/* big cards */}
            <div className="flex gap-4">
              {BIG_CARDS.map((card, index) => (
                <BigCards key={index} card={card} />
              ))}
            </div>

            {/* anouncement  */}
          </div>

          {/* cols2 */}
          <div className="flex flex-col gap-4">
            {/* recent activity */}

            {/* upcoming schedule */}
          </div>
        </div>
      </div>
    </div>
  );
}
