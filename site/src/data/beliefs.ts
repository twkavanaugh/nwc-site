// Statement of faith — /what-we-believe. Developer-owned (not in Pages CMS).
//
// VERBATIM. Every word, reference and punctuation mark is the church's supplied
// text (brand/prototype/WHAT-WE-BELIEVE-SPEC.md §8). Do not edit, normalise
// quotes or "fix" references here — corrections come from the church. Known
// source issues (duplicate "Rom. 8:9", 1 Cor. 15:3-8 under The Holy Spirit) are
// on the state doc's UNVERIFIED list, deliberately left as supplied.
//
// `refs` renders as its own italic block under the paragraphs. `refInline`
// instead appends the reference to the END of the last paragraph — The Trinity
// is punctuated that way in the source ("…and worship (Matt. … 5:3-4).").
// `id` values are stable deep-link anchors.

export interface Belief {
  id: string;
  title: string;
  paragraphs: string[];
  refs: string;
  refInline?: boolean;
}

export const BELIEFS: Belief[] = [
  {
    id: "the-bible",
    title: "The Bible",
    paragraphs: [
      "We believe that the Bible was written by divinely inspired men and is God’s revelation of himself and his will to man. The Bible in its entirety is the Word of God, and as such is wholly true in everything it affirms. The Scriptures are the unique, full and final authority on all matters of faith and practice.",
    ],
    refs: "(2 Tim. 3:16; 2 Pet. 1:20, 21; Ps. 18:30; 119:96)",
  },
  {
    id: "the-trinity",
    title: "The Trinity",
    paragraphs: [
      "We believe that the Godhead exists eternally in three persons – Father, Son and Holy Spirit – and that these three are one God, and are worthy of precisely the same confidence, obedience, and worship",
    ],
    refs: "(Matt. 28:18-19, Mk. 12:29, Jn. 1:14, Acts 5:3-4).",
    refInline: true,
  },
  {
    id: "creation",
    title: "Creation",
    paragraphs: [
      "We believe that God created all things and that by his sovereign power he continues to sustain his creation.",
    ],
    refs: "(Gen. 1:1; Col. 1:17)",
  },
  {
    id: "jesus-christ",
    title: "Jesus Christ",
    paragraphs: [
      "We believe that Jesus Christ in the flesh was fully God and fully man, that he was born of a virgin and that he lived a sinless life, in which he taught and worked mighty works and wonders and signs as recorded in the four gospels, that he was crucified, died as a penalty for our sins and was later raised from the dead bodily on the third day.",
      "Later, he ascended to the Father’s right hand where he is head of the church and intercedes for believers, and from whence He is coming again personally, bodily, and visibly to this earth to consummate His kingdom.",
    ],
    refs: "(Heb. 1:2; 4:15; 1 Cor. 15:3-8; Rom. 8:34; Matt. 16:27)",
  },
  {
    id: "the-holy-spirit",
    title: "The Holy Spirit",
    paragraphs: [
      "We believe that the Holy Spirit is a person, is God and possesses all the divine attributes. He convicts the world of sin. He indwells all believers, and baptizes and seals all believers at the moment of salvation. He uniquely endows each believer with gifts for the building up of the body. He guides believers in understanding and applying the Scriptures and empowers us to lead a life of Christ-like character.",
    ],
    refs: "(Jn. 16:7-15; Rom. 8:9; 1 Cor. 15:3-8; Rom. 8:9; 1 Cor. 12:13; Eph. 4:30; Jn. 16:13, Gal. 5:22-23)",
  },
  {
    id: "sin",
    title: "Sin",
    paragraphs: [
      "We believe that all men have defied God and have chosen to go their own independent way and, thereby, stand condemned by God. We believe that God, by his sovereign choice and his love for mankind, sent Jesus into the world to bring people back into fellowship with God, and that this salvation, with its forgiveness of sin, is a gift, wholly a work of God’s grace, not the result of human works, and that this salvation must be personally appropriated by repentance and faith.",
      "We believe that a true believer is eternally secure, that he cannot lose his salvation, but that sin may interrupt the joy of his fellowship with God and bring the loving discipline of his heavenly Father.",
    ],
    refs: "(Rom. 3:23; 5:8; Eph. 2:8; Mk. 1:15; 1 Jn. 5:12-13; Jn. 10:28; Heb. 12:5-6)",
  },
  {
    id: "the-church",
    title: "The Church",
    paragraphs: [
      "We believe there is one church universal, which is comprised of all who place their faith in the Lord Jesus Christ alone. The Scriptures command believers to gather together to devote themselves to worship, prayer, teaching of the Word, observance of baptism and the Lord’s Supper, fellowship, service to the body, and outreach to the world. Wherever God’s people meet regularly in obedience to these commands, there is the local expression of the church.",
      "Under the watch care of elders and deacons, its members are to work together in love and unity, intent on the one ultimate purpose of glorifying God.",
    ],
    refs: "(Rom. 3:22; Acts 2:42-47; Matt. 28:19; Lk. 22:19; Heb. 10:24-25; Gal. 6:10; Acts 1:8; 1 Tim. 3:1; 1 Peter 5:1-3; 1 Jn. 4:7; Eph. 3:21)",
  },
];

// Supporting documents. Every URL is still on legacy hosting (old WordPress,
// Rackspace, Mailchimp) — they all break or rot at the domain cutover. Re-hosting
// them as Resources entries is the queued next gate (state doc ★ WHAT WE BELIEVE).
// `href: undefined` renders the row inert ("Available soon") — honest placeholder.
export interface BeliefDoc {
  title: string;
  kind: "Page" | "Sermons" | "PDF";
  href?: string;
}

export const DOC_GROUPS: { label: string; docs: BeliefDoc[] }[] = [
  {
    label: "Faith & Practice",
    docs: [
      // Live today; dies at cutover → becomes the Baptism resources post (queued).
      { title: "Our Perspective on Baptism", kind: "Page", href: "https://northwake.com/baptism/" },
      // Supplied URL (northwake.com/sermons/category/baptism/) already 404s
      // (checked 2026-10-10) → inert until the church gives a working URL.
      { title: "Listen: The Ordinance of Baptism", kind: "Sermons" },
      {
        title: "The Roles of Men and Women at North Wake",
        kind: "PDF",
        href: "https://northwake.com/wp-content/uploads/2025/09/Mens-Womens-Roles-in-Ministry_NWC-Paper.pdf",
      },
      {
        title: "Our Perspective on Marriage, Divorce, and Remarriage",
        kind: "PDF",
        href: "https://northwake.com/wp-content/uploads/2023/10/NW-Marriage-Divorce-and-Remarriage-Statement-Aug-2023.pdf",
      },
    ],
  },
  {
    label: "Church Life & Governance",
    docs: [
      {
        title: "Our Policy on Redemptive Church Discipline",
        kind: "PDF",
        href: "http://07a34c3432a906af7092-3b1148b80a7150d2b27189f35d5ff9dc.r28.cf2.rackcdn.com/uploaded/d/0e1195057_discipline-policy.pdf",
      },
      {
        title: "The Constitution and Bylaws of North Wake Church",
        kind: "PDF",
        href: "https://northwake.com/wp-content/uploads/2024/01/NW-Constitution-and-Bylaws-01-2-24.pdf",
      },
    ],
  },
];

export const DOMESTIC_ABUSE_DOC: BeliefDoc = {
  title: "Read our Statement on Domestic Abuse",
  kind: "PDF",
  href: "https://mcusercontent.com/7d495f89f8a10ee02758a05be/files/6db7c240-0a93-4136-80e4-2550cc2c6af6/North_Wake_Statement_on_Domestic_Abuse_FINAL.pdf",
};

// Migrated from northwake.com/apoc-2/ (2026-10-10) — internal page now.
export const APOC_URL = "/resources/apoc";
