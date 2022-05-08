import { useState } from "react";
import { Search } from "../../domain/filter";

export function useFilter() {
  const [searchField, setSearchField] = useState<Search>({ name: "" });
  const updateField = (e: { target: HTMLInputElement }) => {
    const id = e.target.id;
    const value = e.target.value;

    setSearchField({ ...searchField, [id]: value });
  };
  return { searchField, updateField };
}
