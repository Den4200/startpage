const BOOKMARKS = [
  {
    name: "daily",
    links: [
      {
        name: "gmail",
        url: "https://mail.google.com/",
      },
      {
        name: "office",
        url: "https://www.office.com/",
      },
      {
        name: "notion",
        url: "https://www.notion.so/",
      },
    ],
  },
  {
    name: "school",
    links: [
      {
        name: "mypurdue",
        url: "https://mypurdue.purdue.edu/",
      },
      {
        name: "brightspace",
        url: "https://purdue.brightspace.com/",
      },
    ],
  },
  {
    name: "dev",
    links: [
      {
        name: "github",
        url: "https://github.com/",
      },
      {
        name: "cloudflare",
        url: "https://dash.cloudflare.com/",
      },
      {
        name: "tcpshield",
        url: "https://panel.tcpshield.com/",
      },
    ],
  },
  {
    name: "fun",
    links: [
      {
        name: "aniplix",
        url: "https://aniplix.xyz/",
      },
      {
        name: "youtube",
        url: "https://youtube.com/",
      },
      {
        name: "netflix",
        url: "https://www.netflix.com/",
      },
    ],
  },
];

const Bookmarks = () => (
  <div className="grid grid-cols-2 gap-y-4 text-center text-theme-white sm:flex sm:justify-around sm:text-left">
    {BOOKMARKS.map((section) => (
      <div key={section.name}>
        <h2 className="mb-1 font-semibold text-theme-beige">{section.name}</h2>

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
    ))}
  </div>
);

export default Bookmarks;
