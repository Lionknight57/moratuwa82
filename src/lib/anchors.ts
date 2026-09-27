// Anchor ids for page sections, so /<page>/#<id> jumps straight there.
//
// Derived from the section's own title rather than its index, so a link keeps
// working when sections are added or reordered above it. Shared by the album
// pages and the members list — both hand their section titles to anchorIds()
// and get back ids lined up with the sections they came from.

export const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/, '');

/**
 * Map section titles to unique anchor ids, position for position. Untitled
 * sections get `undefined` and stay out of any jump list. Two sections that
 * slugify the same are disambiguated with a numeric suffix, so an id always
 * points at exactly one section.
 */
export function anchorIds(titles: (string | undefined)[]): (string | undefined)[] {
  const used = new Map<string, number>();
  return titles.map((title) => {
    if (!title) return undefined;
    const base = slugify(title) || 'section';
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  });
}
