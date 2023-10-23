import react from 'react';

export default navigation = () => {
    return (
        <nav className="w-full h-14 bg-[#FFFFFF] flex justify-between items-center px-[9%] shadow-md shadow-[#DBDADA]  ">
            <div className="flex">
                <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" />
            </div>
            <ul className="md:flex hidden font-semibold">
                <li className="mx-2 cursor-pointer flex flex-col text-[#CDCDCD]">Flights <span className="border-2 border-red-700 "></span></li>
                <li className="mx-2 cursor-pointer flex flex-col text-[#CDCDCD]">Hotels <span className="border-2 border-red-700 "></span></li>
                <li className="mx-2 cursor-pointer flex flex-col text-[#CDCDCD]">Buses <span className="border-2 border-red-700 "></span></li>
            </ul>
            <div className="font-semibold hidden md:block text-[#CDCDCD]">
                <a href="">Signup</a>
            </div>
            <div className="md:hidden text-[#CDCDCD]">
                <a className="text-4xl" href="#">&#8801;</a>
            </div>
        </nav>
    )
}