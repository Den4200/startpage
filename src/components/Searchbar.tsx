import { FormEvent, useCallback, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import axios from "axios";
import { DuplicateIcon, SearchIcon } from "@heroicons/react/outline";
import clsxm from "@/utils/clsxm";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedResult, setSelectedResult] = useState("");

  const searchInput = useCallback((element: HTMLInputElement) => {
    if (element) {
      element.focus();
    }
  }, []);

  useEffect(() => {
    const updateResults = async () => {
      const res = await axios.get("/api/search/", { params: { q: query } });
      setResults(res.data.results);
    };

    if (query.length > 0) {
      updateResults();
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (selectedResult.length > 0) {
      search(selectedResult);
    }
  }, [selectedResult]);

  const search = (q: string) => {
    if (q.length > 0) {
      if (q.match(/http(?:s)?:\/\/.+/)) {
        window.location.href = q;
      } else {
        window.location.href = `https://www.google.com/search?q=${q}`;
      }
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    search(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <Combobox onChange={setSelectedResult} value={selectedResult}>
        <div className="relative text-theme-white">
          <Combobox.Input
            className="w-full rounded-lg border-2 border-theme-lightgray bg-theme-darkalt px-4 py-1 text-lg leading-loose shadow-lg outline-none"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="search.."
            type="search"
            ref={searchInput}
          />

          <SearchIcon
            className="absolute top-3 right-3 h-6 w-6 cursor-pointer"
            onClick={() => search(query)}
          />

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {query.length > 0 ? (
              <Combobox.Options className="absolute mt-2 w-full overflow-auto rounded-lg border-2 border-theme-lightgray py-1">
                {results.length > 0 ? (
                  <Combobox.Option value={query}>
                    {({ active }) => (
                      <li
                        className={clsxm(
                          "px-3 leading-loose",
                          active ? "bg-theme-darkalt" : "bg-theme-dark"
                        )}
                      >
                        <DuplicateIcon className="inline-block h-4 w-4" />{" "}
                        {query}
                      </li>
                    )}
                  </Combobox.Option>
                ) : (
                  <div className="select-none bg-theme-dark p-2 text-center text-theme-lightgray">
                    No results found.
                  </div>
                )}

                {results.map((result) => (
                  <Combobox.Option key={result} value={result}>
                    {({ active }) => (
                      <li
                        className={clsxm(
                          "px-3 leading-loose",
                          active ? "bg-theme-darkalt" : "bg-theme-dark"
                        )}
                      >
                        <SearchIcon className="inline-block h-4 w-4" /> {result}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            ) : null}
          </Transition>
        </div>
      </Combobox>
    </form>
  );
};

export default Searchbar;
