/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Pagination.css";

type Props = {
  nPages: number;
  currentPage: number;
  setCurrentPage: (pgNumber: number) => void;
};
const Pagination = ({ nPages, currentPage, setCurrentPage }: Props) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination__container">
      <nav>
        <div className="pagination__text">
          <span>
            Page <b>{currentPage}</b> of <b>{nPages}</b>
          </span>
        </div>

        <ul className="pagination__pages">
          {currentPage === 1 ? (
            <></>
          ) : (
            <>
              <li>
                <a
                  className="pagination__page-link"
                  onClick={nextPage}
                  href="#"
                >
                  «
                </a>
              </li>
              <li>
                <a
                  className="pagination__page-link"
                  onClick={prevPage}
                  href="#"
                >
                  ⟨
                </a>
              </li>
            </>
          )}

          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber}>
              <a
                onClick={() => setCurrentPage(pgNumber)}
                className={`pagination__page-link ${
                  currentPage === pgNumber ? "active" : ""
                }`}
                href="#"
              >
                {pgNumber}
              </a>
            </li>
          ))}
          {currentPage === nPages ? (
            <></>
          ) : (
            <>
              <li>
                <a
                  className="pagination__page-link"
                  onClick={nextPage}
                  href="#"
                >
                  ⟩
                </a>
              </li>
              <li>
                <a
                  className="pagination__page-link"
                  onClick={prevPage}
                  href="#"
                >
                  »
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
