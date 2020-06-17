import React from "react";

export default function Search() {
  return (
    <form
      class="form-inline d-flex justify-content-center md-form form-sm"
      id="search-form"
    >
      <input
        class="form-control form-control-sm mr-3 w-75"
        type="text"
        placeholder="Where to?"
        aria-label="Search"
        id="search_bar"
      />
      <button type="submit" id="search_icon">
        <i class="fas fa-search" />
      </button>
    </form>
  );
}
