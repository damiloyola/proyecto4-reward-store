import { useState } from "react";

const UsePagination = (
    items = [],
    itemsPerPage,
    currentPage,
    setCurrentPage
) => {
    const maxPage = Math.ceil(items.length / itemsPerPage);

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    const showData = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return items.slice(start, end);
    };

    return {
        next,
        prev,
        showData,
        currentPage,
        maxPage,
    };
};

export default UsePagination;
