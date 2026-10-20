---
name: borson-writer
description: Write, draft, edit or review posts for Nicolas Borson's tech blog at borson.fr, in his voice as an engineering manager who reads widely and thinks ahead. Use when proposing post ideas from his tech watch, drafting or rewriting an article, adding diagrams to a post, or checking a draft for LLM-isms and unsourced claims.
---

# borson-writer

Posts for https://borson.fr, Nicolas Borson's personal tech blog. English, published from the
`~/dev/homepage` repo (Astro). The topics come from the tech watch he reads every day, mostly how
coding agents change the way engineering teams work.

## Before writing

1. Read one or two published posts in `~/dev/homepage/src/content/blog/` as voice samples. They
   win over anything below when the two disagree.
2. Read `~/dev/homepage/CLAUDE.md`: frontmatter, the "Diagrams" art direction, build and deploy.
3. Collect the sources. Nico shares links and PDFs in the conversation. His notes and saved sources
   for the AI topic live in `~/dev/ai-changes-everything/` (`sources/`). Read the primary source,
   not the aggregator that pointed to it.

Works from any directory. Outside `~/dev/homepage`, still write the draft into
`~/dev/homepage/src/content/blog/<slug>/index.md` unless Nico asks for it in the chat.

## Posture: an EM who reads and anticipates

Nico is the engineering manager of a squad at Batch, a SaaS company. The posts say "a squad in a
SaaS company" and do not name Batch, colleagues or internal projects.

Nothing non-public goes into a post: names, internal processes, metrics, incidents, customers,
tools, Slack or Notion content, quotes from colleagues. That holds for what you read in
`~/dev/ai-changes-everything/`, in Notion, in Slack or in any repo you were started from. Those notes
orient the thinking. A fact from them is publishable only if Nico says so in the session or a public
source states it; otherwise generalize it ("a team I know", "a recent project") or leave it out.

Batch is at the very beginning of reworking how it builds software with agents. Nico has seen little
on the ground, and as a manager he does not read PR diffs. So:

- Never invent a field observation ("a pattern I see every week", "in my team we..."). The only
  first-hand facts he has stated so far: one front-end reviewer buried under PRs, and a project where
  duplicating an integration pattern across new data sources was fast to write and slow to test.
  Anything new must come from him.
- Say plainly what he has and has not seen ("That is about all I have seen with my own eyes so far",
  "we have not climbed any of this ladder yet"). Being early is the angle of the blog: he reads what
  teams ten times larger went through and asks which parts scale down.
- Frame practices as habits to set up before the problem arrives, never as lessons learned from it.
- Opinions are his and stated as such ("I think", "my instinct was no", "what bothers me"), with
  mixed feelings left visible. Concrete over abstract: every mechanism gets a named case and what it
  costs.

## Anticipation: think ahead, stay narrow

- One post covers one narrow question, 800 to 1,200 words.
- "Anticipation" is the stance: what a team at the start should put in place now, given what larger
  teams already went through. It shows in the argument, not in a ritual ending.
- When the post genuinely leaves a question open, say which one, in a sentence or two. Announce a
  next post only if Nico has one planned. Do not end every post the same way.
- End on the last substantive point. No open-door sign-off like "if you have thoughts, let me know"
  unless Nico writes it himself (the first post ends on such a request, his choice).
- Topics already announced in published posts and not yet written: the harness around the agent
  (shared instructions, rules, context), what a written definition of a good review finding should
  say, prototypes when anyone can build one overnight, team topology when a backend engineer ships
  his own front-end, planning when changing your mind costs nothing, and the learning that used to
  happen when a junior asked a senior. Check the published posts for what was promised since.

## No LLM-isms

Apply the `humanizer` skill in full on every draft, then check these, which Nico has caught before:

- "X, not Y", "it's not A, it's B", "rather than", and the version split over two sentences. This
  includes titles, headings and diagram `accTitle` lines. Keep a contrast only when the reader
  actually holds the wrong belief.
- No em or en dashes. Colons only for a genuine list or definition, never to stage a reveal.
- No one-line paragraph that restates the previous one, no row of fragments, no forced triads.
- Headings in sentence case that name what the section holds ("Keep the classifier away from the
  reviewer"), not teasers.
- No inflated words (crucial, robust, landscape, delve, game-changer) and no absolutes he would not
  sign ("nobody", "everyone") unless a source backs them.
- Bold only for terms being defined (mura, muda, muri) or rule names in a short list.
- Vary sentence length. Short declaratives are his rhythm, but not three in a row.

## Sources and figures

- Link every figure, quote and named claim to its primary source, on first mention.
- Check each number against the source before it goes in: value, unit, what it measures, period.
  Use the source's wording ("code that had been there since the reviewer's first pass", not "code
  that was already there before the PR").
- Flag vendors with a stake in the story ("Faros AI, which sells telemetry and therefore has a stake
  in the story") and say when a figure is fragile.
- Check arXiv IDs, titles and authors: a wrong paper behind the right name already slipped through
  once.
- Relative dates ("this month", "last week") are relative to the post's `publishDate`, not to today.
- People who gave a talk are cited with their name, linked, plus talk title, event and date
  ("Florian Bruniaux ... in his talk "Du code au merge" at Dev With AI in Paris on October 12").
- Long English quotes stay in English and in a blockquote. One quotable line per post at most.

## Art direction for diagrams

Follow the "Diagrams" section of `~/dev/homepage/CLAUDE.md`, which is the reference. In short:

- ```` ```mermaid ```` blocks only, rendered by the site with the Nord palette and the `neo` look.
  No colors, `style`, `classDef` or `%%{init}%%` in posts.
- Pick the type from what the paragraph says: flowchart for a process or who decides, quadrant for a
  2×2, bars for a few figures, pie only when the source names every part.
- `:::hl` (red) for the one or two nodes the paragraph is about, `:::alt` (yellow) for a secondary
  contrast.
- Always `accTitle:` and `accDescr:`. Short labels, about 4 to 5 nodes per row.
- Two or three diagrams per post at most, each next to the paragraph it illustrates. A diagram that
  repeats a table replaces it.
- A chart only plots what the source states. Never derive a complement.

## Workflow

1. Pitch first when the topic is open: angle, two or three primary sources, the door it opens.
2. Draft into `src/content/blog/<slug>/index.md` with `draft: true`. Slug in kebab case, title 60
   characters max, description 200 max.
3. Run the humanizer pass and the checks above, then the source check, then add diagrams.
4. Build from `~/dev/homepage` (see CLAUDE.md), then show the result with `bun run preview`.
5. Give Nico the draft and the list of anything he must decide (a claim to confirm, a name to
   allow). He edits and approves before anything is published.
6. Commit or push only when he asks. Commits use `content: <what>`.

A post dated in the future is still public once `draft: false` is set, and it appears in the RSS
feed. To schedule posts, keep `draft: true` until the date.
