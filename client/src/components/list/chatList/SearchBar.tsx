import React from "react";

interface SearchBarProps {
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
    return (
        <div className={`flex items-center gap-5 ${className}`}>
            <div className="p-2 gap-2 flex-1 bg-dark-grey-transperent flex items-center rounded-xl">
                <img className="size-6" src="/search.png" alt="search" />
                <input
                    style={{ backgroundColor: "transparent" }}
                    className="flex-1 border-none outline-none text-white placeholder-white"
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="bg-dark-grey-transperent p-2 rounded-xl hover:cursor-pointer">
                <img className="size-6" src="/plus.png" alt="plus" />
            </div>
        </div>
    );
};

export default SearchBar;
