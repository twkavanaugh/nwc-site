// remark-youtube — transform a paragraph that is SOLELY a bare YouTube URL into a
// lazy, privacy-mode (youtube-nocookie) 16:9 embed. URLs inside a sentence, or
// written as a markdown link, are left untouched — only a standalone bare-URL
// paragraph is converted.
//
// SANCTIONED THIRD-PARTY EMBED EXCEPTION — see the note in astro.config.mjs.
// Plain .mjs (no TS) so the config imports it cleanly. No external deps: we walk
// the top-level mdast children rather than pull in unist-util-visit.

// Accepts youtube.com/watch?v=<id> and youtu.be/<id> (11-char id), optional
// trailing query/hash (e.g. &t=30s). Anchored — the whole string must be the URL.
const YT_RE =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})|youtu\.be\/([A-Za-z0-9_-]{11}))(?:[?&#][^\s]*)?$/;

function extractId(text) {
  const m = String(text).trim().match(YT_RE);
  return m ? m[1] || m[2] : null;
}

// If a paragraph's sole meaningful child is a bare URL (a text node, or a GFM
// autolink `link` node), return that URL string; otherwise null.
function soleUrl(node) {
  if (!node || node.type !== "paragraph" || !Array.isArray(node.children)) return null;
  const kids = node.children.filter(
    (c) => !(c.type === "text" && !String(c.value).trim()),
  );
  if (kids.length !== 1) return null;
  const only = kids[0];
  if (only.type === "text") return only.value;
  if (only.type === "link") return only.url; // autolink literal (GFM)
  return null;
}

export default function remarkYoutube() {
  return (tree) => {
    const children = tree.children;
    if (!Array.isArray(children)) return;
    for (let i = 0; i < children.length; i++) {
      const url = soleUrl(children[i]);
      if (!url) continue;
      const id = extractId(url);
      if (!id) continue;
      // Replace the paragraph with a raw-HTML node (passes through to output).
      children[i] = {
        type: "html",
        value:
          '<div class="yt-embed">' +
          `<iframe src="https://www.youtube-nocookie.com/embed/${id}" ` +
          'title="Video" loading="lazy" allowfullscreen ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">' +
          "</iframe></div>",
      };
    }
  };
}
