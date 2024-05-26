import { useState } from "react";
/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from "@emotion/react"

const Search = ({queryString, onClick}) => {
    const getSearchParam = () => {
        const params = new URLSearchParams(queryString);
        return params.get("name") || "";
    };

    const [searchParam, setSearchParam] = useState(getSearchParam());

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onClick(`?name=${searchParam}`)
        }
    };

    return (
        <div className="search" css={css`width: 100%;`}>
            <input 
                className="search-bar"
                type="text"
                value={searchParam}
                placeholder="Search Pokédex..."
                onChange={e => setSearchParam(e.target.value)}
                onKeyUp={handleKeyDown}
                css={css`
                    width: 100%;
                    min-height: 2rem;
                    font-size: 3.5vw;
                    box-shadow: 0 .5rem 1.5rem rgba(15, 84, 187, 0.699);
                `}
            />
        </div>
    );
}

export default Search;