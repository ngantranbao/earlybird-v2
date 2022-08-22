import React from 'react';
declare enum PaginationTypes {
    Input = "Input",
    FullPage = "FullPage",
    Single = "Single"
}
interface Props {
    /**
     * Total items of the list.
     */
    total: number;
    /**
     * Amount of items each page.
     */
    limit: number;
    /**
     * Current page for chosing offset.
     */
    currentPage: number;
    /**
     * Handle event for changing page.
     */
    onChangePage: (page: number) => void;
    /**
     * A flag for showing Last and First button.
     */
    hasLastFirst?: boolean;
    /**
     * Select a type of displaying styles for pagination
     */
    type?: PaginationTypes;
}
export declare const Pagination: React.FC<Props> & {
    type: typeof PaginationTypes;
};
export {};
