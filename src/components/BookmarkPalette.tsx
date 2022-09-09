import clsxm from "@/utils/clsxm";
import { Combobox, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  CollectionIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

type BookmarkLink = {
  name: string;
  url: string;
};

type Bookmark = {
  name: string;
  links: BookmarkLink[];
};

type BookmarkPaletteProps = {
  bookmarks: Bookmark[];
};

const BookmarkPalette = ({ bookmarks }: BookmarkPaletteProps) => {
  const [open, setOpen] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState<BookmarkLink>();
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Bookmark[]>(bookmarks);

  const router = useRouter();

  useHotkeys("ctrl+k", () => setOpen(true), { enableOnTags: ["INPUT"] });
  useHotkeys("esc", () => setOpen(false), { enableOnTags: ["INPUT"] });

  useEffect(() => {
    const ignore = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", ignore);

    return () => {
      window.removeEventListener("keydown", ignore);
    };
  }, []);

  useEffect(() => {
    setResults(
      bookmarks
        .map((bookmark) =>
          bookmark.name.startsWith(input)
            ? bookmark
            : bookmark.links.filter((link) => link.name.startsWith(input))
                .length > 0
            ? {
                name: bookmark.name,
                links: bookmark.links.filter((link) =>
                  link.name.startsWith(input)
                ),
              }
            : null
        )
        .filter((bookmark) => bookmark !== null) as Bookmark[]
    );
  }, [bookmarks, input]);

  useEffect(() => {
    if (selectedBookmark !== undefined) {
      router.push(selectedBookmark.url);
    }
  }, [router, selectedBookmark]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (selectedBookmark !== undefined) {
      router.push(selectedBookmark.url);
    }
  };

  return (
    <Transition
      show={open}
      className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-around bg-black/50"
      enter="transition duration-300 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <form onSubmit={onSubmit} className="w-96 min-w-[1/3]">
        <Combobox onChange={setSelectedBookmark} value={selectedBookmark}>
          <div className="relative text-theme-white">
            <Combobox.Input
              className="w-full rounded-lg border-2 border-theme-lightgray bg-theme-darkalt px-4 py-1 text-lg leading-loose shadow-lg outline-none"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              placeholder="enter bookmark.."
              type="text"
              autoFocus
            />

            <ChevronRightIcon className="absolute top-3 right-3 h-6 w-6 cursor-pointer" />

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {input.length > 0 ? (
                <Combobox.Options className="absolute mt-2 max-h-96 w-full overflow-y-auto rounded-lg border-2 border-theme-lightgray py-1">
                  {results.length === 0 ? (
                    <div className="select-none bg-theme-dark p-2 text-center text-theme-lightgray">
                      No bookmarks found.
                    </div>
                  ) : null}

                  {results.map((result) => (
                    <div key={result.name}>
                      <li className="bg-theme-dark px-3 leading-loose">
                        <CollectionIcon className="inline-block h-4 w-4" />{" "}
                        {result.name}
                      </li>
                      {result.links.map((link) => (
                        <Combobox.Option
                          key={`${result.name}-${link.name}`}
                          value={link}
                        >
                          {({ active }) => (
                            <li
                              className={clsxm(
                                "pl-7 pr-3 leading-loose",
                                active ? "bg-theme-darkalt" : "bg-theme-dark"
                              )}
                            >
                              <a href={link.url}>
                                <BookmarkIcon className="inline-block h-4 w-4" />{" "}
                                {link.name}
                              </a>
                            </li>
                          )}
                        </Combobox.Option>
                      ))}
                    </div>
                  ))}
                </Combobox.Options>
              ) : null}
            </Transition>
          </div>
        </Combobox>
      </form>
      <div />
    </Transition>
  );
};

export default BookmarkPalette;
