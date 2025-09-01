export type User = {
  firstName: string;
  lastName: string;
  /** Preferred public-facing name */
  displayName: string;
  /** Handle/username used in links or mentions */
  username: string;
  /** e.g. "male", "female", "non-binary" */
  bio: string;
  /** Short phrases rotated in UI (e.g., homepage flip effect) */
  flipSentences: string[];
  /** General location for display */
  email: string;
  /** Personal/homepage URL */
  /** Primary/current role shown on profile */
  jobTitle: string;
  /** Work history entries */
  jobs: {
    title: string;
    company: string;
    website: string;
  }[];
  /** Rich about section; supports Markdown */
  about: string;
  /** Public URL to avatar image */
  avatar: string;
  /** Open Graph image URL for social sharing */
  ogImage: string;
  dateCreated: string;
};
