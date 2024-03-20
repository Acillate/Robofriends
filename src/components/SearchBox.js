import React from "react";

const SearchBox = ({ searchfield, searchchange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--blue bg-lightest-blue"
                type="searchfield"
                placeholder="search robots"
                onChange={searchchange}
            />
        </div>
    );
}

export default SearchBox;