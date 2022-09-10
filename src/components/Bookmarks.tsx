type BookMarksProps = {
  bookmarks: {
    name: string;
    hidden: boolean;
    links: {
      name: string;
      url: string;
    }[];
  }[];
};

const Bookmarks = ({ bookmarks }: BookMarksProps) => (
  <div className="grid grid-cols-2 gap-y-4 text-center text-theme-white sm:flex sm:justify-around sm:text-left">
    {bookmarks.map((section) =>
      section.hidden ? null : (
        <div key={section.name}>
          <h2 className="mb-1 font-semibold text-theme-beige">
            {section.name}
          </h2>

          <ul className="leading-relaxed">
            {section.links.map((link) => (
              <li key={link.name}>
                <a className="transition-all hover:font-bold" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
    )}
  </div>
);

export default Bookmarks;
