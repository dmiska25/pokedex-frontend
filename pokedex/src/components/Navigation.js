/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from "@emotion/react";
import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/right_arrow.png";
import buildUrl from "build-url";

const Navigation = ({ meta, queryString, offset, onClick }) => {
  const params = new URLSearchParams(queryString);
  const searchString = params.get("name");
  const { current_page: currentPage, last_page: lastPage } = meta;
  const nextPage = currentPage + offset;
  const inBounds = () => nextPage > 0 && nextPage <= lastPage;
  const link = buildUrl({
    queryParams: {
      name: searchString,
      page: nextPage,
    },
  });

  return (
    <div className="navigation-link" css={css`width: 100%;`}>
      {inBounds() && (
          <input
            className="navigation-button"
            alt="navigation button"
            type="image"
            src={offset > 0 ? rightArrow : leftArrow}
            onClick={() => onClick(link)}
            css={css`
              width: 15%;
              height: auto;
            `}
          />
      )}
    </div>
  );
};

export default Navigation;
