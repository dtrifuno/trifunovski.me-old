export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};













export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns all children nodes filtered by type ProjectsYaml */
  childrenProjectsYaml?: Maybe<Array<Maybe<ProjectsYaml>>>;
  /** Returns the first child node of type ProjectsYaml or null if there are no children of given type on this node */
  childProjectsYaml?: Maybe<ProjectsYaml>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata: SiteSiteMetadata;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title: Scalars['String'];
  description: Scalars['String'];
  titleTemplate: Scalars['String'];
  siteUrl: Scalars['String'];
  image: Scalars['String'];
  authorName: Scalars['String'];
  twitterUsername: Scalars['String'];
  siteLanguage: Scalars['String'];
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  context?: Maybe<SitePageContext>;
};

export type SitePageContext = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  numPages?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Array<Maybe<SitePageContextBibliography>>>;
};

export type SitePageContextBibliography = {
  citationKey?: Maybe<Scalars['String']>;
  entryType?: Maybe<Scalars['String']>;
  entryTags?: Maybe<SitePageContextBibliographyEntryTags>;
};

export type SitePageContextBibliographyEntryTags = {
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  booktitle?: Maybe<Scalars['String']>;
  howpublished?: Maybe<Scalars['String']>;
  journal?: Maybe<Scalars['String']>;
  fjournal?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
};

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout = 
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  date: Scalars['Date'];
  last_updated?: Maybe<Scalars['Date']>;
  subtitle?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  bibliography?: Maybe<File>;
  draft: Scalars['Boolean'];
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MdxFrontmatterLast_UpdatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type HeadingsMdx = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter: MdxFrontmatter;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents: TableOfContents;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  fields?: Maybe<MdxFields>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};

export type MdxFields = {
  slug?: Maybe<Scalars['String']>;
};

export type TableOfContents = {
  items: Array<TocItem>;
};

export type TocItem = {
  url: Scalars['String'];
  title: Scalars['String'];
  items: Array<TocItem>;
};

export type ProjectsYaml = Node & {
  title: Scalars['String'];
  description: Scalars['String'];
  tags: Array<Scalars['String']>;
  demo_url?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  thumbnail: File;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  postCssPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPostCssPlugins>>>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPlugins = {
  future?: Maybe<SitePluginPluginOptionsPostCssPluginsFuture>;
  purge?: Maybe<Array<Maybe<Scalars['String']>>>;
  darkMode?: Maybe<Scalars['Boolean']>;
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsTheme>;
};

export type SitePluginPluginOptionsPostCssPluginsFuture = {
  purgeLayersByDefault?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPostCssPluginsTheme = {
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColors>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColors = {
  white?: Maybe<Scalars['String']>;
  gray?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsGray>;
  primary?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsPrimary>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsGray = {
  _50?: Maybe<Scalars['String']>;
  _100?: Maybe<Scalars['String']>;
  _200?: Maybe<Scalars['String']>;
  _300?: Maybe<Scalars['String']>;
  _400?: Maybe<Scalars['String']>;
  _500?: Maybe<Scalars['String']>;
  _600?: Maybe<Scalars['String']>;
  _700?: Maybe<Scalars['String']>;
  _800?: Maybe<Scalars['String']>;
  _900?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsPrimary = {
  _50?: Maybe<Scalars['String']>;
  _100?: Maybe<Scalars['String']>;
  _200?: Maybe<Scalars['String']>;
  _300?: Maybe<Scalars['String']>;
  _400?: Maybe<Scalars['String']>;
  _500?: Maybe<Scalars['String']>;
  _600?: Maybe<Scalars['String']>;
  _700?: Maybe<Scalars['String']>;
  _800?: Maybe<Scalars['String']>;
  _900?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  default?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  projectsYaml?: Maybe<ProjectsYaml>;
  allProjectsYaml: ProjectsYamlConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenProjectsYaml?: Maybe<ProjectsYamlFilterListInput>;
  childProjectsYaml?: Maybe<ProjectsYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<TableOfContentsFilterInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProjectsYamlArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  demo_url?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  priority?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllProjectsYamlArgs = {
  filter?: Maybe<ProjectsYamlFilterInput>;
  sort?: Maybe<ProjectsYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<TableOfContentsFilterInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  last_updated?: Maybe<DateQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  bibliography?: Maybe<FileFilterInput>;
  draft?: Maybe<BooleanQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenProjectsYaml?: Maybe<ProjectsYamlFilterListInput>;
  childProjectsYaml?: Maybe<ProjectsYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ProjectsYamlFilterListInput = {
  elemMatch?: Maybe<ProjectsYamlFilterInput>;
};

export type ProjectsYamlFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  demo_url?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  priority?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type TableOfContentsFilterInput = {
  items?: Maybe<TocItemFilterListInput>;
};

export type TocItemFilterListInput = {
  elemMatch?: Maybe<TocItemFilterInput>;
};

export type TocItemFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<TocItemFilterListInput>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___last_updated'
  | 'childrenMdx___frontmatter___subtitle'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___bibliography___sourceInstanceName'
  | 'childrenMdx___frontmatter___bibliography___absolutePath'
  | 'childrenMdx___frontmatter___bibliography___relativePath'
  | 'childrenMdx___frontmatter___bibliography___extension'
  | 'childrenMdx___frontmatter___bibliography___size'
  | 'childrenMdx___frontmatter___bibliography___prettySize'
  | 'childrenMdx___frontmatter___bibliography___modifiedTime'
  | 'childrenMdx___frontmatter___bibliography___accessTime'
  | 'childrenMdx___frontmatter___bibliography___changeTime'
  | 'childrenMdx___frontmatter___bibliography___birthTime'
  | 'childrenMdx___frontmatter___bibliography___root'
  | 'childrenMdx___frontmatter___bibliography___dir'
  | 'childrenMdx___frontmatter___bibliography___base'
  | 'childrenMdx___frontmatter___bibliography___ext'
  | 'childrenMdx___frontmatter___bibliography___name'
  | 'childrenMdx___frontmatter___bibliography___relativeDirectory'
  | 'childrenMdx___frontmatter___bibliography___dev'
  | 'childrenMdx___frontmatter___bibliography___mode'
  | 'childrenMdx___frontmatter___bibliography___nlink'
  | 'childrenMdx___frontmatter___bibliography___uid'
  | 'childrenMdx___frontmatter___bibliography___gid'
  | 'childrenMdx___frontmatter___bibliography___rdev'
  | 'childrenMdx___frontmatter___bibliography___ino'
  | 'childrenMdx___frontmatter___bibliography___atimeMs'
  | 'childrenMdx___frontmatter___bibliography___mtimeMs'
  | 'childrenMdx___frontmatter___bibliography___ctimeMs'
  | 'childrenMdx___frontmatter___bibliography___atime'
  | 'childrenMdx___frontmatter___bibliography___mtime'
  | 'childrenMdx___frontmatter___bibliography___ctime'
  | 'childrenMdx___frontmatter___bibliography___birthtime'
  | 'childrenMdx___frontmatter___bibliography___birthtimeMs'
  | 'childrenMdx___frontmatter___bibliography___blksize'
  | 'childrenMdx___frontmatter___bibliography___blocks'
  | 'childrenMdx___frontmatter___bibliography___publicURL'
  | 'childrenMdx___frontmatter___bibliography___childrenImageSharp'
  | 'childrenMdx___frontmatter___bibliography___childrenMdx'
  | 'childrenMdx___frontmatter___bibliography___childrenProjectsYaml'
  | 'childrenMdx___frontmatter___bibliography___id'
  | 'childrenMdx___frontmatter___bibliography___children'
  | 'childrenMdx___frontmatter___draft'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents___items'
  | 'childrenMdx___tableOfContents___items___url'
  | 'childrenMdx___tableOfContents___items___title'
  | 'childrenMdx___tableOfContents___items___items'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___last_updated'
  | 'childMdx___frontmatter___subtitle'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___bibliography___sourceInstanceName'
  | 'childMdx___frontmatter___bibliography___absolutePath'
  | 'childMdx___frontmatter___bibliography___relativePath'
  | 'childMdx___frontmatter___bibliography___extension'
  | 'childMdx___frontmatter___bibliography___size'
  | 'childMdx___frontmatter___bibliography___prettySize'
  | 'childMdx___frontmatter___bibliography___modifiedTime'
  | 'childMdx___frontmatter___bibliography___accessTime'
  | 'childMdx___frontmatter___bibliography___changeTime'
  | 'childMdx___frontmatter___bibliography___birthTime'
  | 'childMdx___frontmatter___bibliography___root'
  | 'childMdx___frontmatter___bibliography___dir'
  | 'childMdx___frontmatter___bibliography___base'
  | 'childMdx___frontmatter___bibliography___ext'
  | 'childMdx___frontmatter___bibliography___name'
  | 'childMdx___frontmatter___bibliography___relativeDirectory'
  | 'childMdx___frontmatter___bibliography___dev'
  | 'childMdx___frontmatter___bibliography___mode'
  | 'childMdx___frontmatter___bibliography___nlink'
  | 'childMdx___frontmatter___bibliography___uid'
  | 'childMdx___frontmatter___bibliography___gid'
  | 'childMdx___frontmatter___bibliography___rdev'
  | 'childMdx___frontmatter___bibliography___ino'
  | 'childMdx___frontmatter___bibliography___atimeMs'
  | 'childMdx___frontmatter___bibliography___mtimeMs'
  | 'childMdx___frontmatter___bibliography___ctimeMs'
  | 'childMdx___frontmatter___bibliography___atime'
  | 'childMdx___frontmatter___bibliography___mtime'
  | 'childMdx___frontmatter___bibliography___ctime'
  | 'childMdx___frontmatter___bibliography___birthtime'
  | 'childMdx___frontmatter___bibliography___birthtimeMs'
  | 'childMdx___frontmatter___bibliography___blksize'
  | 'childMdx___frontmatter___bibliography___blocks'
  | 'childMdx___frontmatter___bibliography___publicURL'
  | 'childMdx___frontmatter___bibliography___childrenImageSharp'
  | 'childMdx___frontmatter___bibliography___childrenMdx'
  | 'childMdx___frontmatter___bibliography___childrenProjectsYaml'
  | 'childMdx___frontmatter___bibliography___id'
  | 'childMdx___frontmatter___bibliography___children'
  | 'childMdx___frontmatter___draft'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents___items'
  | 'childMdx___tableOfContents___items___url'
  | 'childMdx___tableOfContents___items___title'
  | 'childMdx___tableOfContents___items___items'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___fields___slug'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childrenProjectsYaml'
  | 'childrenProjectsYaml___title'
  | 'childrenProjectsYaml___description'
  | 'childrenProjectsYaml___tags'
  | 'childrenProjectsYaml___demo_url'
  | 'childrenProjectsYaml___github_url'
  | 'childrenProjectsYaml___priority'
  | 'childrenProjectsYaml___thumbnail___sourceInstanceName'
  | 'childrenProjectsYaml___thumbnail___absolutePath'
  | 'childrenProjectsYaml___thumbnail___relativePath'
  | 'childrenProjectsYaml___thumbnail___extension'
  | 'childrenProjectsYaml___thumbnail___size'
  | 'childrenProjectsYaml___thumbnail___prettySize'
  | 'childrenProjectsYaml___thumbnail___modifiedTime'
  | 'childrenProjectsYaml___thumbnail___accessTime'
  | 'childrenProjectsYaml___thumbnail___changeTime'
  | 'childrenProjectsYaml___thumbnail___birthTime'
  | 'childrenProjectsYaml___thumbnail___root'
  | 'childrenProjectsYaml___thumbnail___dir'
  | 'childrenProjectsYaml___thumbnail___base'
  | 'childrenProjectsYaml___thumbnail___ext'
  | 'childrenProjectsYaml___thumbnail___name'
  | 'childrenProjectsYaml___thumbnail___relativeDirectory'
  | 'childrenProjectsYaml___thumbnail___dev'
  | 'childrenProjectsYaml___thumbnail___mode'
  | 'childrenProjectsYaml___thumbnail___nlink'
  | 'childrenProjectsYaml___thumbnail___uid'
  | 'childrenProjectsYaml___thumbnail___gid'
  | 'childrenProjectsYaml___thumbnail___rdev'
  | 'childrenProjectsYaml___thumbnail___ino'
  | 'childrenProjectsYaml___thumbnail___atimeMs'
  | 'childrenProjectsYaml___thumbnail___mtimeMs'
  | 'childrenProjectsYaml___thumbnail___ctimeMs'
  | 'childrenProjectsYaml___thumbnail___atime'
  | 'childrenProjectsYaml___thumbnail___mtime'
  | 'childrenProjectsYaml___thumbnail___ctime'
  | 'childrenProjectsYaml___thumbnail___birthtime'
  | 'childrenProjectsYaml___thumbnail___birthtimeMs'
  | 'childrenProjectsYaml___thumbnail___blksize'
  | 'childrenProjectsYaml___thumbnail___blocks'
  | 'childrenProjectsYaml___thumbnail___publicURL'
  | 'childrenProjectsYaml___thumbnail___childrenImageSharp'
  | 'childrenProjectsYaml___thumbnail___childrenImageSharp___gatsbyImageData'
  | 'childrenProjectsYaml___thumbnail___childrenImageSharp___id'
  | 'childrenProjectsYaml___thumbnail___childrenImageSharp___children'
  | 'childrenProjectsYaml___thumbnail___childImageSharp___gatsbyImageData'
  | 'childrenProjectsYaml___thumbnail___childImageSharp___id'
  | 'childrenProjectsYaml___thumbnail___childImageSharp___children'
  | 'childrenProjectsYaml___thumbnail___childrenMdx'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___rawBody'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___fileAbsolutePath'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___slug'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___body'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___excerpt'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___headings'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___html'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___mdxAST'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___timeToRead'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___id'
  | 'childrenProjectsYaml___thumbnail___childrenMdx___children'
  | 'childrenProjectsYaml___thumbnail___childMdx___rawBody'
  | 'childrenProjectsYaml___thumbnail___childMdx___fileAbsolutePath'
  | 'childrenProjectsYaml___thumbnail___childMdx___slug'
  | 'childrenProjectsYaml___thumbnail___childMdx___body'
  | 'childrenProjectsYaml___thumbnail___childMdx___excerpt'
  | 'childrenProjectsYaml___thumbnail___childMdx___headings'
  | 'childrenProjectsYaml___thumbnail___childMdx___html'
  | 'childrenProjectsYaml___thumbnail___childMdx___mdxAST'
  | 'childrenProjectsYaml___thumbnail___childMdx___timeToRead'
  | 'childrenProjectsYaml___thumbnail___childMdx___id'
  | 'childrenProjectsYaml___thumbnail___childMdx___children'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___title'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___description'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___tags'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___demo_url'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___github_url'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___priority'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___id'
  | 'childrenProjectsYaml___thumbnail___childrenProjectsYaml___children'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___title'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___description'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___tags'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___demo_url'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___github_url'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___priority'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___id'
  | 'childrenProjectsYaml___thumbnail___childProjectsYaml___children'
  | 'childrenProjectsYaml___thumbnail___id'
  | 'childrenProjectsYaml___thumbnail___parent___id'
  | 'childrenProjectsYaml___thumbnail___parent___children'
  | 'childrenProjectsYaml___thumbnail___children'
  | 'childrenProjectsYaml___thumbnail___children___id'
  | 'childrenProjectsYaml___thumbnail___children___children'
  | 'childrenProjectsYaml___thumbnail___internal___content'
  | 'childrenProjectsYaml___thumbnail___internal___contentDigest'
  | 'childrenProjectsYaml___thumbnail___internal___description'
  | 'childrenProjectsYaml___thumbnail___internal___fieldOwners'
  | 'childrenProjectsYaml___thumbnail___internal___ignoreType'
  | 'childrenProjectsYaml___thumbnail___internal___mediaType'
  | 'childrenProjectsYaml___thumbnail___internal___owner'
  | 'childrenProjectsYaml___thumbnail___internal___type'
  | 'childrenProjectsYaml___id'
  | 'childrenProjectsYaml___parent___id'
  | 'childrenProjectsYaml___parent___parent___id'
  | 'childrenProjectsYaml___parent___parent___children'
  | 'childrenProjectsYaml___parent___children'
  | 'childrenProjectsYaml___parent___children___id'
  | 'childrenProjectsYaml___parent___children___children'
  | 'childrenProjectsYaml___parent___internal___content'
  | 'childrenProjectsYaml___parent___internal___contentDigest'
  | 'childrenProjectsYaml___parent___internal___description'
  | 'childrenProjectsYaml___parent___internal___fieldOwners'
  | 'childrenProjectsYaml___parent___internal___ignoreType'
  | 'childrenProjectsYaml___parent___internal___mediaType'
  | 'childrenProjectsYaml___parent___internal___owner'
  | 'childrenProjectsYaml___parent___internal___type'
  | 'childrenProjectsYaml___children'
  | 'childrenProjectsYaml___children___id'
  | 'childrenProjectsYaml___children___parent___id'
  | 'childrenProjectsYaml___children___parent___children'
  | 'childrenProjectsYaml___children___children'
  | 'childrenProjectsYaml___children___children___id'
  | 'childrenProjectsYaml___children___children___children'
  | 'childrenProjectsYaml___children___internal___content'
  | 'childrenProjectsYaml___children___internal___contentDigest'
  | 'childrenProjectsYaml___children___internal___description'
  | 'childrenProjectsYaml___children___internal___fieldOwners'
  | 'childrenProjectsYaml___children___internal___ignoreType'
  | 'childrenProjectsYaml___children___internal___mediaType'
  | 'childrenProjectsYaml___children___internal___owner'
  | 'childrenProjectsYaml___children___internal___type'
  | 'childrenProjectsYaml___internal___content'
  | 'childrenProjectsYaml___internal___contentDigest'
  | 'childrenProjectsYaml___internal___description'
  | 'childrenProjectsYaml___internal___fieldOwners'
  | 'childrenProjectsYaml___internal___ignoreType'
  | 'childrenProjectsYaml___internal___mediaType'
  | 'childrenProjectsYaml___internal___owner'
  | 'childrenProjectsYaml___internal___type'
  | 'childProjectsYaml___title'
  | 'childProjectsYaml___description'
  | 'childProjectsYaml___tags'
  | 'childProjectsYaml___demo_url'
  | 'childProjectsYaml___github_url'
  | 'childProjectsYaml___priority'
  | 'childProjectsYaml___thumbnail___sourceInstanceName'
  | 'childProjectsYaml___thumbnail___absolutePath'
  | 'childProjectsYaml___thumbnail___relativePath'
  | 'childProjectsYaml___thumbnail___extension'
  | 'childProjectsYaml___thumbnail___size'
  | 'childProjectsYaml___thumbnail___prettySize'
  | 'childProjectsYaml___thumbnail___modifiedTime'
  | 'childProjectsYaml___thumbnail___accessTime'
  | 'childProjectsYaml___thumbnail___changeTime'
  | 'childProjectsYaml___thumbnail___birthTime'
  | 'childProjectsYaml___thumbnail___root'
  | 'childProjectsYaml___thumbnail___dir'
  | 'childProjectsYaml___thumbnail___base'
  | 'childProjectsYaml___thumbnail___ext'
  | 'childProjectsYaml___thumbnail___name'
  | 'childProjectsYaml___thumbnail___relativeDirectory'
  | 'childProjectsYaml___thumbnail___dev'
  | 'childProjectsYaml___thumbnail___mode'
  | 'childProjectsYaml___thumbnail___nlink'
  | 'childProjectsYaml___thumbnail___uid'
  | 'childProjectsYaml___thumbnail___gid'
  | 'childProjectsYaml___thumbnail___rdev'
  | 'childProjectsYaml___thumbnail___ino'
  | 'childProjectsYaml___thumbnail___atimeMs'
  | 'childProjectsYaml___thumbnail___mtimeMs'
  | 'childProjectsYaml___thumbnail___ctimeMs'
  | 'childProjectsYaml___thumbnail___atime'
  | 'childProjectsYaml___thumbnail___mtime'
  | 'childProjectsYaml___thumbnail___ctime'
  | 'childProjectsYaml___thumbnail___birthtime'
  | 'childProjectsYaml___thumbnail___birthtimeMs'
  | 'childProjectsYaml___thumbnail___blksize'
  | 'childProjectsYaml___thumbnail___blocks'
  | 'childProjectsYaml___thumbnail___publicURL'
  | 'childProjectsYaml___thumbnail___childrenImageSharp'
  | 'childProjectsYaml___thumbnail___childrenImageSharp___gatsbyImageData'
  | 'childProjectsYaml___thumbnail___childrenImageSharp___id'
  | 'childProjectsYaml___thumbnail___childrenImageSharp___children'
  | 'childProjectsYaml___thumbnail___childImageSharp___gatsbyImageData'
  | 'childProjectsYaml___thumbnail___childImageSharp___id'
  | 'childProjectsYaml___thumbnail___childImageSharp___children'
  | 'childProjectsYaml___thumbnail___childrenMdx'
  | 'childProjectsYaml___thumbnail___childrenMdx___rawBody'
  | 'childProjectsYaml___thumbnail___childrenMdx___fileAbsolutePath'
  | 'childProjectsYaml___thumbnail___childrenMdx___slug'
  | 'childProjectsYaml___thumbnail___childrenMdx___body'
  | 'childProjectsYaml___thumbnail___childrenMdx___excerpt'
  | 'childProjectsYaml___thumbnail___childrenMdx___headings'
  | 'childProjectsYaml___thumbnail___childrenMdx___html'
  | 'childProjectsYaml___thumbnail___childrenMdx___mdxAST'
  | 'childProjectsYaml___thumbnail___childrenMdx___timeToRead'
  | 'childProjectsYaml___thumbnail___childrenMdx___id'
  | 'childProjectsYaml___thumbnail___childrenMdx___children'
  | 'childProjectsYaml___thumbnail___childMdx___rawBody'
  | 'childProjectsYaml___thumbnail___childMdx___fileAbsolutePath'
  | 'childProjectsYaml___thumbnail___childMdx___slug'
  | 'childProjectsYaml___thumbnail___childMdx___body'
  | 'childProjectsYaml___thumbnail___childMdx___excerpt'
  | 'childProjectsYaml___thumbnail___childMdx___headings'
  | 'childProjectsYaml___thumbnail___childMdx___html'
  | 'childProjectsYaml___thumbnail___childMdx___mdxAST'
  | 'childProjectsYaml___thumbnail___childMdx___timeToRead'
  | 'childProjectsYaml___thumbnail___childMdx___id'
  | 'childProjectsYaml___thumbnail___childMdx___children'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___title'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___description'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___tags'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___demo_url'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___github_url'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___priority'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___id'
  | 'childProjectsYaml___thumbnail___childrenProjectsYaml___children'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___title'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___description'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___tags'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___demo_url'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___github_url'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___priority'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___id'
  | 'childProjectsYaml___thumbnail___childProjectsYaml___children'
  | 'childProjectsYaml___thumbnail___id'
  | 'childProjectsYaml___thumbnail___parent___id'
  | 'childProjectsYaml___thumbnail___parent___children'
  | 'childProjectsYaml___thumbnail___children'
  | 'childProjectsYaml___thumbnail___children___id'
  | 'childProjectsYaml___thumbnail___children___children'
  | 'childProjectsYaml___thumbnail___internal___content'
  | 'childProjectsYaml___thumbnail___internal___contentDigest'
  | 'childProjectsYaml___thumbnail___internal___description'
  | 'childProjectsYaml___thumbnail___internal___fieldOwners'
  | 'childProjectsYaml___thumbnail___internal___ignoreType'
  | 'childProjectsYaml___thumbnail___internal___mediaType'
  | 'childProjectsYaml___thumbnail___internal___owner'
  | 'childProjectsYaml___thumbnail___internal___type'
  | 'childProjectsYaml___id'
  | 'childProjectsYaml___parent___id'
  | 'childProjectsYaml___parent___parent___id'
  | 'childProjectsYaml___parent___parent___children'
  | 'childProjectsYaml___parent___children'
  | 'childProjectsYaml___parent___children___id'
  | 'childProjectsYaml___parent___children___children'
  | 'childProjectsYaml___parent___internal___content'
  | 'childProjectsYaml___parent___internal___contentDigest'
  | 'childProjectsYaml___parent___internal___description'
  | 'childProjectsYaml___parent___internal___fieldOwners'
  | 'childProjectsYaml___parent___internal___ignoreType'
  | 'childProjectsYaml___parent___internal___mediaType'
  | 'childProjectsYaml___parent___internal___owner'
  | 'childProjectsYaml___parent___internal___type'
  | 'childProjectsYaml___children'
  | 'childProjectsYaml___children___id'
  | 'childProjectsYaml___children___parent___id'
  | 'childProjectsYaml___children___parent___children'
  | 'childProjectsYaml___children___children'
  | 'childProjectsYaml___children___children___id'
  | 'childProjectsYaml___children___children___children'
  | 'childProjectsYaml___children___internal___content'
  | 'childProjectsYaml___children___internal___contentDigest'
  | 'childProjectsYaml___children___internal___description'
  | 'childProjectsYaml___children___internal___fieldOwners'
  | 'childProjectsYaml___children___internal___ignoreType'
  | 'childProjectsYaml___children___internal___mediaType'
  | 'childProjectsYaml___children___internal___owner'
  | 'childProjectsYaml___children___internal___type'
  | 'childProjectsYaml___internal___content'
  | 'childProjectsYaml___internal___contentDigest'
  | 'childProjectsYaml___internal___description'
  | 'childProjectsYaml___internal___fieldOwners'
  | 'childProjectsYaml___internal___ignoreType'
  | 'childProjectsYaml___internal___mediaType'
  | 'childProjectsYaml___internal___owner'
  | 'childProjectsYaml___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  titleTemplate?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  authorName?: Maybe<StringQueryOperatorInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___titleTemplate'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___image'
  | 'siteMetadata___authorName'
  | 'siteMetadata___twitterUsername'
  | 'siteMetadata___siteLanguage'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  limit?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  numPages?: Maybe<IntQueryOperatorInput>;
  currentPage?: Maybe<IntQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  bibliography?: Maybe<SitePageContextBibliographyFilterListInput>;
};

export type SitePageContextBibliographyFilterListInput = {
  elemMatch?: Maybe<SitePageContextBibliographyFilterInput>;
};

export type SitePageContextBibliographyFilterInput = {
  citationKey?: Maybe<StringQueryOperatorInput>;
  entryType?: Maybe<StringQueryOperatorInput>;
  entryTags?: Maybe<SitePageContextBibliographyEntryTagsFilterInput>;
};

export type SitePageContextBibliographyEntryTagsFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
  note?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  booktitle?: Maybe<StringQueryOperatorInput>;
  howpublished?: Maybe<StringQueryOperatorInput>;
  journal?: Maybe<StringQueryOperatorInput>;
  fjournal?: Maybe<StringQueryOperatorInput>;
  volume?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  postCssPlugins?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterInput = {
  future?: Maybe<SitePluginPluginOptionsPostCssPluginsFutureFilterInput>;
  purge?: Maybe<StringQueryOperatorInput>;
  darkMode?: Maybe<BooleanQueryOperatorInput>;
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFutureFilterInput = {
  purgeLayersByDefault?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeFilterInput = {
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsFilterInput = {
  white?: Maybe<StringQueryOperatorInput>;
  gray?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsGrayFilterInput>;
  primary?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsPrimaryFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsGrayFilterInput = {
  _50?: Maybe<StringQueryOperatorInput>;
  _100?: Maybe<StringQueryOperatorInput>;
  _200?: Maybe<StringQueryOperatorInput>;
  _300?: Maybe<StringQueryOperatorInput>;
  _400?: Maybe<StringQueryOperatorInput>;
  _500?: Maybe<StringQueryOperatorInput>;
  _600?: Maybe<StringQueryOperatorInput>;
  _700?: Maybe<StringQueryOperatorInput>;
  _800?: Maybe<StringQueryOperatorInput>;
  _900?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsPrimaryFilterInput = {
  _50?: Maybe<StringQueryOperatorInput>;
  _100?: Maybe<StringQueryOperatorInput>;
  _200?: Maybe<StringQueryOperatorInput>;
  _300?: Maybe<StringQueryOperatorInput>;
  _400?: Maybe<StringQueryOperatorInput>;
  _500?: Maybe<StringQueryOperatorInput>;
  _600?: Maybe<StringQueryOperatorInput>;
  _700?: Maybe<StringQueryOperatorInput>;
  _800?: Maybe<StringQueryOperatorInput>;
  _900?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'context___limit'
  | 'context___skip'
  | 'context___numPages'
  | 'context___currentPage'
  | 'context___tag'
  | 'context___id'
  | 'context___bibliography'
  | 'context___bibliography___citationKey'
  | 'context___bibliography___entryType'
  | 'context___bibliography___entryTags___author'
  | 'context___bibliography___entryTags___title'
  | 'context___bibliography___entryTags___url'
  | 'context___bibliography___entryTags___year'
  | 'context___bibliography___entryTags___note'
  | 'context___bibliography___entryTags___series'
  | 'context___bibliography___entryTags___publisher'
  | 'context___bibliography___entryTags___pages'
  | 'context___bibliography___entryTags___booktitle'
  | 'context___bibliography___entryTags___howpublished'
  | 'context___bibliography___entryTags___journal'
  | 'context___bibliography___entryTags___fjournal'
  | 'context___bibliography___entryTags___volume'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___postCssPlugins'
  | 'pluginCreator___pluginOptions___postCssPlugins___purge'
  | 'pluginCreator___pluginOptions___postCssPlugins___darkMode'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___markdownCaptions'
  | 'pluginCreator___pluginOptions___sizeByPixelDensity'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___quality'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___tracedSVG'
  | 'pluginCreator___pluginOptions___loading'
  | 'pluginCreator___pluginOptions___disableBgImageOnAlpha'
  | 'pluginCreator___pluginOptions___disableBgImage'
  | 'pluginCreator___pluginOptions___defaultLayouts___default'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___lessBabel'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___root'
  | 'pluginCreator___pluginOptions___exclude'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum = 
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___date'
  | 'frontmatter___last_updated'
  | 'frontmatter___subtitle'
  | 'frontmatter___tags'
  | 'frontmatter___bibliography___sourceInstanceName'
  | 'frontmatter___bibliography___absolutePath'
  | 'frontmatter___bibliography___relativePath'
  | 'frontmatter___bibliography___extension'
  | 'frontmatter___bibliography___size'
  | 'frontmatter___bibliography___prettySize'
  | 'frontmatter___bibliography___modifiedTime'
  | 'frontmatter___bibliography___accessTime'
  | 'frontmatter___bibliography___changeTime'
  | 'frontmatter___bibliography___birthTime'
  | 'frontmatter___bibliography___root'
  | 'frontmatter___bibliography___dir'
  | 'frontmatter___bibliography___base'
  | 'frontmatter___bibliography___ext'
  | 'frontmatter___bibliography___name'
  | 'frontmatter___bibliography___relativeDirectory'
  | 'frontmatter___bibliography___dev'
  | 'frontmatter___bibliography___mode'
  | 'frontmatter___bibliography___nlink'
  | 'frontmatter___bibliography___uid'
  | 'frontmatter___bibliography___gid'
  | 'frontmatter___bibliography___rdev'
  | 'frontmatter___bibliography___ino'
  | 'frontmatter___bibliography___atimeMs'
  | 'frontmatter___bibliography___mtimeMs'
  | 'frontmatter___bibliography___ctimeMs'
  | 'frontmatter___bibliography___atime'
  | 'frontmatter___bibliography___mtime'
  | 'frontmatter___bibliography___ctime'
  | 'frontmatter___bibliography___birthtime'
  | 'frontmatter___bibliography___birthtimeMs'
  | 'frontmatter___bibliography___blksize'
  | 'frontmatter___bibliography___blocks'
  | 'frontmatter___bibliography___publicURL'
  | 'frontmatter___bibliography___childrenImageSharp'
  | 'frontmatter___bibliography___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___bibliography___childrenImageSharp___id'
  | 'frontmatter___bibliography___childrenImageSharp___children'
  | 'frontmatter___bibliography___childImageSharp___gatsbyImageData'
  | 'frontmatter___bibliography___childImageSharp___id'
  | 'frontmatter___bibliography___childImageSharp___children'
  | 'frontmatter___bibliography___childrenMdx'
  | 'frontmatter___bibliography___childrenMdx___rawBody'
  | 'frontmatter___bibliography___childrenMdx___fileAbsolutePath'
  | 'frontmatter___bibliography___childrenMdx___slug'
  | 'frontmatter___bibliography___childrenMdx___body'
  | 'frontmatter___bibliography___childrenMdx___excerpt'
  | 'frontmatter___bibliography___childrenMdx___headings'
  | 'frontmatter___bibliography___childrenMdx___html'
  | 'frontmatter___bibliography___childrenMdx___mdxAST'
  | 'frontmatter___bibliography___childrenMdx___timeToRead'
  | 'frontmatter___bibliography___childrenMdx___id'
  | 'frontmatter___bibliography___childrenMdx___children'
  | 'frontmatter___bibliography___childMdx___rawBody'
  | 'frontmatter___bibliography___childMdx___fileAbsolutePath'
  | 'frontmatter___bibliography___childMdx___slug'
  | 'frontmatter___bibliography___childMdx___body'
  | 'frontmatter___bibliography___childMdx___excerpt'
  | 'frontmatter___bibliography___childMdx___headings'
  | 'frontmatter___bibliography___childMdx___html'
  | 'frontmatter___bibliography___childMdx___mdxAST'
  | 'frontmatter___bibliography___childMdx___timeToRead'
  | 'frontmatter___bibliography___childMdx___id'
  | 'frontmatter___bibliography___childMdx___children'
  | 'frontmatter___bibliography___childrenProjectsYaml'
  | 'frontmatter___bibliography___childrenProjectsYaml___title'
  | 'frontmatter___bibliography___childrenProjectsYaml___description'
  | 'frontmatter___bibliography___childrenProjectsYaml___tags'
  | 'frontmatter___bibliography___childrenProjectsYaml___demo_url'
  | 'frontmatter___bibliography___childrenProjectsYaml___github_url'
  | 'frontmatter___bibliography___childrenProjectsYaml___priority'
  | 'frontmatter___bibliography___childrenProjectsYaml___id'
  | 'frontmatter___bibliography___childrenProjectsYaml___children'
  | 'frontmatter___bibliography___childProjectsYaml___title'
  | 'frontmatter___bibliography___childProjectsYaml___description'
  | 'frontmatter___bibliography___childProjectsYaml___tags'
  | 'frontmatter___bibliography___childProjectsYaml___demo_url'
  | 'frontmatter___bibliography___childProjectsYaml___github_url'
  | 'frontmatter___bibliography___childProjectsYaml___priority'
  | 'frontmatter___bibliography___childProjectsYaml___id'
  | 'frontmatter___bibliography___childProjectsYaml___children'
  | 'frontmatter___bibliography___id'
  | 'frontmatter___bibliography___parent___id'
  | 'frontmatter___bibliography___parent___children'
  | 'frontmatter___bibliography___children'
  | 'frontmatter___bibliography___children___id'
  | 'frontmatter___bibliography___children___children'
  | 'frontmatter___bibliography___internal___content'
  | 'frontmatter___bibliography___internal___contentDigest'
  | 'frontmatter___bibliography___internal___description'
  | 'frontmatter___bibliography___internal___fieldOwners'
  | 'frontmatter___bibliography___internal___ignoreType'
  | 'frontmatter___bibliography___internal___mediaType'
  | 'frontmatter___bibliography___internal___owner'
  | 'frontmatter___bibliography___internal___type'
  | 'frontmatter___draft'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents___items'
  | 'tableOfContents___items___url'
  | 'tableOfContents___items___title'
  | 'tableOfContents___items___items'
  | 'tableOfContents___items___items___url'
  | 'tableOfContents___items___items___title'
  | 'tableOfContents___items___items___items'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'fields___slug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ProjectsYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsYamlEdge>;
  nodes: Array<ProjectsYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ProjectsYamlGroupConnection>;
};


export type ProjectsYamlConnectionDistinctArgs = {
  field: ProjectsYamlFieldsEnum;
};


export type ProjectsYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectsYamlFieldsEnum;
};

export type ProjectsYamlEdge = {
  next?: Maybe<ProjectsYaml>;
  node: ProjectsYaml;
  previous?: Maybe<ProjectsYaml>;
};

export type ProjectsYamlFieldsEnum = 
  | 'title'
  | 'description'
  | 'tags'
  | 'demo_url'
  | 'github_url'
  | 'priority'
  | 'thumbnail___sourceInstanceName'
  | 'thumbnail___absolutePath'
  | 'thumbnail___relativePath'
  | 'thumbnail___extension'
  | 'thumbnail___size'
  | 'thumbnail___prettySize'
  | 'thumbnail___modifiedTime'
  | 'thumbnail___accessTime'
  | 'thumbnail___changeTime'
  | 'thumbnail___birthTime'
  | 'thumbnail___root'
  | 'thumbnail___dir'
  | 'thumbnail___base'
  | 'thumbnail___ext'
  | 'thumbnail___name'
  | 'thumbnail___relativeDirectory'
  | 'thumbnail___dev'
  | 'thumbnail___mode'
  | 'thumbnail___nlink'
  | 'thumbnail___uid'
  | 'thumbnail___gid'
  | 'thumbnail___rdev'
  | 'thumbnail___ino'
  | 'thumbnail___atimeMs'
  | 'thumbnail___mtimeMs'
  | 'thumbnail___ctimeMs'
  | 'thumbnail___atime'
  | 'thumbnail___mtime'
  | 'thumbnail___ctime'
  | 'thumbnail___birthtime'
  | 'thumbnail___birthtimeMs'
  | 'thumbnail___blksize'
  | 'thumbnail___blocks'
  | 'thumbnail___publicURL'
  | 'thumbnail___childrenImageSharp'
  | 'thumbnail___childrenImageSharp___fixed___base64'
  | 'thumbnail___childrenImageSharp___fixed___tracedSVG'
  | 'thumbnail___childrenImageSharp___fixed___aspectRatio'
  | 'thumbnail___childrenImageSharp___fixed___width'
  | 'thumbnail___childrenImageSharp___fixed___height'
  | 'thumbnail___childrenImageSharp___fixed___src'
  | 'thumbnail___childrenImageSharp___fixed___srcSet'
  | 'thumbnail___childrenImageSharp___fixed___srcWebp'
  | 'thumbnail___childrenImageSharp___fixed___srcSetWebp'
  | 'thumbnail___childrenImageSharp___fixed___originalName'
  | 'thumbnail___childrenImageSharp___fluid___base64'
  | 'thumbnail___childrenImageSharp___fluid___tracedSVG'
  | 'thumbnail___childrenImageSharp___fluid___aspectRatio'
  | 'thumbnail___childrenImageSharp___fluid___src'
  | 'thumbnail___childrenImageSharp___fluid___srcSet'
  | 'thumbnail___childrenImageSharp___fluid___srcWebp'
  | 'thumbnail___childrenImageSharp___fluid___srcSetWebp'
  | 'thumbnail___childrenImageSharp___fluid___sizes'
  | 'thumbnail___childrenImageSharp___fluid___originalImg'
  | 'thumbnail___childrenImageSharp___fluid___originalName'
  | 'thumbnail___childrenImageSharp___fluid___presentationWidth'
  | 'thumbnail___childrenImageSharp___fluid___presentationHeight'
  | 'thumbnail___childrenImageSharp___gatsbyImageData'
  | 'thumbnail___childrenImageSharp___original___width'
  | 'thumbnail___childrenImageSharp___original___height'
  | 'thumbnail___childrenImageSharp___original___src'
  | 'thumbnail___childrenImageSharp___resize___src'
  | 'thumbnail___childrenImageSharp___resize___tracedSVG'
  | 'thumbnail___childrenImageSharp___resize___width'
  | 'thumbnail___childrenImageSharp___resize___height'
  | 'thumbnail___childrenImageSharp___resize___aspectRatio'
  | 'thumbnail___childrenImageSharp___resize___originalName'
  | 'thumbnail___childrenImageSharp___id'
  | 'thumbnail___childrenImageSharp___parent___id'
  | 'thumbnail___childrenImageSharp___parent___children'
  | 'thumbnail___childrenImageSharp___children'
  | 'thumbnail___childrenImageSharp___children___id'
  | 'thumbnail___childrenImageSharp___children___children'
  | 'thumbnail___childrenImageSharp___internal___content'
  | 'thumbnail___childrenImageSharp___internal___contentDigest'
  | 'thumbnail___childrenImageSharp___internal___description'
  | 'thumbnail___childrenImageSharp___internal___fieldOwners'
  | 'thumbnail___childrenImageSharp___internal___ignoreType'
  | 'thumbnail___childrenImageSharp___internal___mediaType'
  | 'thumbnail___childrenImageSharp___internal___owner'
  | 'thumbnail___childrenImageSharp___internal___type'
  | 'thumbnail___childImageSharp___fixed___base64'
  | 'thumbnail___childImageSharp___fixed___tracedSVG'
  | 'thumbnail___childImageSharp___fixed___aspectRatio'
  | 'thumbnail___childImageSharp___fixed___width'
  | 'thumbnail___childImageSharp___fixed___height'
  | 'thumbnail___childImageSharp___fixed___src'
  | 'thumbnail___childImageSharp___fixed___srcSet'
  | 'thumbnail___childImageSharp___fixed___srcWebp'
  | 'thumbnail___childImageSharp___fixed___srcSetWebp'
  | 'thumbnail___childImageSharp___fixed___originalName'
  | 'thumbnail___childImageSharp___fluid___base64'
  | 'thumbnail___childImageSharp___fluid___tracedSVG'
  | 'thumbnail___childImageSharp___fluid___aspectRatio'
  | 'thumbnail___childImageSharp___fluid___src'
  | 'thumbnail___childImageSharp___fluid___srcSet'
  | 'thumbnail___childImageSharp___fluid___srcWebp'
  | 'thumbnail___childImageSharp___fluid___srcSetWebp'
  | 'thumbnail___childImageSharp___fluid___sizes'
  | 'thumbnail___childImageSharp___fluid___originalImg'
  | 'thumbnail___childImageSharp___fluid___originalName'
  | 'thumbnail___childImageSharp___fluid___presentationWidth'
  | 'thumbnail___childImageSharp___fluid___presentationHeight'
  | 'thumbnail___childImageSharp___gatsbyImageData'
  | 'thumbnail___childImageSharp___original___width'
  | 'thumbnail___childImageSharp___original___height'
  | 'thumbnail___childImageSharp___original___src'
  | 'thumbnail___childImageSharp___resize___src'
  | 'thumbnail___childImageSharp___resize___tracedSVG'
  | 'thumbnail___childImageSharp___resize___width'
  | 'thumbnail___childImageSharp___resize___height'
  | 'thumbnail___childImageSharp___resize___aspectRatio'
  | 'thumbnail___childImageSharp___resize___originalName'
  | 'thumbnail___childImageSharp___id'
  | 'thumbnail___childImageSharp___parent___id'
  | 'thumbnail___childImageSharp___parent___children'
  | 'thumbnail___childImageSharp___children'
  | 'thumbnail___childImageSharp___children___id'
  | 'thumbnail___childImageSharp___children___children'
  | 'thumbnail___childImageSharp___internal___content'
  | 'thumbnail___childImageSharp___internal___contentDigest'
  | 'thumbnail___childImageSharp___internal___description'
  | 'thumbnail___childImageSharp___internal___fieldOwners'
  | 'thumbnail___childImageSharp___internal___ignoreType'
  | 'thumbnail___childImageSharp___internal___mediaType'
  | 'thumbnail___childImageSharp___internal___owner'
  | 'thumbnail___childImageSharp___internal___type'
  | 'thumbnail___childrenMdx'
  | 'thumbnail___childrenMdx___rawBody'
  | 'thumbnail___childrenMdx___fileAbsolutePath'
  | 'thumbnail___childrenMdx___frontmatter___title'
  | 'thumbnail___childrenMdx___frontmatter___date'
  | 'thumbnail___childrenMdx___frontmatter___last_updated'
  | 'thumbnail___childrenMdx___frontmatter___subtitle'
  | 'thumbnail___childrenMdx___frontmatter___tags'
  | 'thumbnail___childrenMdx___frontmatter___draft'
  | 'thumbnail___childrenMdx___slug'
  | 'thumbnail___childrenMdx___body'
  | 'thumbnail___childrenMdx___excerpt'
  | 'thumbnail___childrenMdx___headings'
  | 'thumbnail___childrenMdx___headings___value'
  | 'thumbnail___childrenMdx___headings___depth'
  | 'thumbnail___childrenMdx___html'
  | 'thumbnail___childrenMdx___mdxAST'
  | 'thumbnail___childrenMdx___tableOfContents___items'
  | 'thumbnail___childrenMdx___timeToRead'
  | 'thumbnail___childrenMdx___wordCount___paragraphs'
  | 'thumbnail___childrenMdx___wordCount___sentences'
  | 'thumbnail___childrenMdx___wordCount___words'
  | 'thumbnail___childrenMdx___fields___slug'
  | 'thumbnail___childrenMdx___id'
  | 'thumbnail___childrenMdx___parent___id'
  | 'thumbnail___childrenMdx___parent___children'
  | 'thumbnail___childrenMdx___children'
  | 'thumbnail___childrenMdx___children___id'
  | 'thumbnail___childrenMdx___children___children'
  | 'thumbnail___childrenMdx___internal___content'
  | 'thumbnail___childrenMdx___internal___contentDigest'
  | 'thumbnail___childrenMdx___internal___description'
  | 'thumbnail___childrenMdx___internal___fieldOwners'
  | 'thumbnail___childrenMdx___internal___ignoreType'
  | 'thumbnail___childrenMdx___internal___mediaType'
  | 'thumbnail___childrenMdx___internal___owner'
  | 'thumbnail___childrenMdx___internal___type'
  | 'thumbnail___childMdx___rawBody'
  | 'thumbnail___childMdx___fileAbsolutePath'
  | 'thumbnail___childMdx___frontmatter___title'
  | 'thumbnail___childMdx___frontmatter___date'
  | 'thumbnail___childMdx___frontmatter___last_updated'
  | 'thumbnail___childMdx___frontmatter___subtitle'
  | 'thumbnail___childMdx___frontmatter___tags'
  | 'thumbnail___childMdx___frontmatter___draft'
  | 'thumbnail___childMdx___slug'
  | 'thumbnail___childMdx___body'
  | 'thumbnail___childMdx___excerpt'
  | 'thumbnail___childMdx___headings'
  | 'thumbnail___childMdx___headings___value'
  | 'thumbnail___childMdx___headings___depth'
  | 'thumbnail___childMdx___html'
  | 'thumbnail___childMdx___mdxAST'
  | 'thumbnail___childMdx___tableOfContents___items'
  | 'thumbnail___childMdx___timeToRead'
  | 'thumbnail___childMdx___wordCount___paragraphs'
  | 'thumbnail___childMdx___wordCount___sentences'
  | 'thumbnail___childMdx___wordCount___words'
  | 'thumbnail___childMdx___fields___slug'
  | 'thumbnail___childMdx___id'
  | 'thumbnail___childMdx___parent___id'
  | 'thumbnail___childMdx___parent___children'
  | 'thumbnail___childMdx___children'
  | 'thumbnail___childMdx___children___id'
  | 'thumbnail___childMdx___children___children'
  | 'thumbnail___childMdx___internal___content'
  | 'thumbnail___childMdx___internal___contentDigest'
  | 'thumbnail___childMdx___internal___description'
  | 'thumbnail___childMdx___internal___fieldOwners'
  | 'thumbnail___childMdx___internal___ignoreType'
  | 'thumbnail___childMdx___internal___mediaType'
  | 'thumbnail___childMdx___internal___owner'
  | 'thumbnail___childMdx___internal___type'
  | 'thumbnail___childrenProjectsYaml'
  | 'thumbnail___childrenProjectsYaml___title'
  | 'thumbnail___childrenProjectsYaml___description'
  | 'thumbnail___childrenProjectsYaml___tags'
  | 'thumbnail___childrenProjectsYaml___demo_url'
  | 'thumbnail___childrenProjectsYaml___github_url'
  | 'thumbnail___childrenProjectsYaml___priority'
  | 'thumbnail___childrenProjectsYaml___thumbnail___sourceInstanceName'
  | 'thumbnail___childrenProjectsYaml___thumbnail___absolutePath'
  | 'thumbnail___childrenProjectsYaml___thumbnail___relativePath'
  | 'thumbnail___childrenProjectsYaml___thumbnail___extension'
  | 'thumbnail___childrenProjectsYaml___thumbnail___size'
  | 'thumbnail___childrenProjectsYaml___thumbnail___prettySize'
  | 'thumbnail___childrenProjectsYaml___thumbnail___modifiedTime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___accessTime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___changeTime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___birthTime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___root'
  | 'thumbnail___childrenProjectsYaml___thumbnail___dir'
  | 'thumbnail___childrenProjectsYaml___thumbnail___base'
  | 'thumbnail___childrenProjectsYaml___thumbnail___ext'
  | 'thumbnail___childrenProjectsYaml___thumbnail___name'
  | 'thumbnail___childrenProjectsYaml___thumbnail___relativeDirectory'
  | 'thumbnail___childrenProjectsYaml___thumbnail___dev'
  | 'thumbnail___childrenProjectsYaml___thumbnail___mode'
  | 'thumbnail___childrenProjectsYaml___thumbnail___nlink'
  | 'thumbnail___childrenProjectsYaml___thumbnail___uid'
  | 'thumbnail___childrenProjectsYaml___thumbnail___gid'
  | 'thumbnail___childrenProjectsYaml___thumbnail___rdev'
  | 'thumbnail___childrenProjectsYaml___thumbnail___ino'
  | 'thumbnail___childrenProjectsYaml___thumbnail___atimeMs'
  | 'thumbnail___childrenProjectsYaml___thumbnail___mtimeMs'
  | 'thumbnail___childrenProjectsYaml___thumbnail___ctimeMs'
  | 'thumbnail___childrenProjectsYaml___thumbnail___atime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___mtime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___ctime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___birthtime'
  | 'thumbnail___childrenProjectsYaml___thumbnail___birthtimeMs'
  | 'thumbnail___childrenProjectsYaml___thumbnail___blksize'
  | 'thumbnail___childrenProjectsYaml___thumbnail___blocks'
  | 'thumbnail___childrenProjectsYaml___thumbnail___publicURL'
  | 'thumbnail___childrenProjectsYaml___thumbnail___childrenImageSharp'
  | 'thumbnail___childrenProjectsYaml___thumbnail___childrenMdx'
  | 'thumbnail___childrenProjectsYaml___thumbnail___childrenProjectsYaml'
  | 'thumbnail___childrenProjectsYaml___thumbnail___id'
  | 'thumbnail___childrenProjectsYaml___thumbnail___children'
  | 'thumbnail___childrenProjectsYaml___id'
  | 'thumbnail___childrenProjectsYaml___parent___id'
  | 'thumbnail___childrenProjectsYaml___parent___children'
  | 'thumbnail___childrenProjectsYaml___children'
  | 'thumbnail___childrenProjectsYaml___children___id'
  | 'thumbnail___childrenProjectsYaml___children___children'
  | 'thumbnail___childrenProjectsYaml___internal___content'
  | 'thumbnail___childrenProjectsYaml___internal___contentDigest'
  | 'thumbnail___childrenProjectsYaml___internal___description'
  | 'thumbnail___childrenProjectsYaml___internal___fieldOwners'
  | 'thumbnail___childrenProjectsYaml___internal___ignoreType'
  | 'thumbnail___childrenProjectsYaml___internal___mediaType'
  | 'thumbnail___childrenProjectsYaml___internal___owner'
  | 'thumbnail___childrenProjectsYaml___internal___type'
  | 'thumbnail___childProjectsYaml___title'
  | 'thumbnail___childProjectsYaml___description'
  | 'thumbnail___childProjectsYaml___tags'
  | 'thumbnail___childProjectsYaml___demo_url'
  | 'thumbnail___childProjectsYaml___github_url'
  | 'thumbnail___childProjectsYaml___priority'
  | 'thumbnail___childProjectsYaml___thumbnail___sourceInstanceName'
  | 'thumbnail___childProjectsYaml___thumbnail___absolutePath'
  | 'thumbnail___childProjectsYaml___thumbnail___relativePath'
  | 'thumbnail___childProjectsYaml___thumbnail___extension'
  | 'thumbnail___childProjectsYaml___thumbnail___size'
  | 'thumbnail___childProjectsYaml___thumbnail___prettySize'
  | 'thumbnail___childProjectsYaml___thumbnail___modifiedTime'
  | 'thumbnail___childProjectsYaml___thumbnail___accessTime'
  | 'thumbnail___childProjectsYaml___thumbnail___changeTime'
  | 'thumbnail___childProjectsYaml___thumbnail___birthTime'
  | 'thumbnail___childProjectsYaml___thumbnail___root'
  | 'thumbnail___childProjectsYaml___thumbnail___dir'
  | 'thumbnail___childProjectsYaml___thumbnail___base'
  | 'thumbnail___childProjectsYaml___thumbnail___ext'
  | 'thumbnail___childProjectsYaml___thumbnail___name'
  | 'thumbnail___childProjectsYaml___thumbnail___relativeDirectory'
  | 'thumbnail___childProjectsYaml___thumbnail___dev'
  | 'thumbnail___childProjectsYaml___thumbnail___mode'
  | 'thumbnail___childProjectsYaml___thumbnail___nlink'
  | 'thumbnail___childProjectsYaml___thumbnail___uid'
  | 'thumbnail___childProjectsYaml___thumbnail___gid'
  | 'thumbnail___childProjectsYaml___thumbnail___rdev'
  | 'thumbnail___childProjectsYaml___thumbnail___ino'
  | 'thumbnail___childProjectsYaml___thumbnail___atimeMs'
  | 'thumbnail___childProjectsYaml___thumbnail___mtimeMs'
  | 'thumbnail___childProjectsYaml___thumbnail___ctimeMs'
  | 'thumbnail___childProjectsYaml___thumbnail___atime'
  | 'thumbnail___childProjectsYaml___thumbnail___mtime'
  | 'thumbnail___childProjectsYaml___thumbnail___ctime'
  | 'thumbnail___childProjectsYaml___thumbnail___birthtime'
  | 'thumbnail___childProjectsYaml___thumbnail___birthtimeMs'
  | 'thumbnail___childProjectsYaml___thumbnail___blksize'
  | 'thumbnail___childProjectsYaml___thumbnail___blocks'
  | 'thumbnail___childProjectsYaml___thumbnail___publicURL'
  | 'thumbnail___childProjectsYaml___thumbnail___childrenImageSharp'
  | 'thumbnail___childProjectsYaml___thumbnail___childrenMdx'
  | 'thumbnail___childProjectsYaml___thumbnail___childrenProjectsYaml'
  | 'thumbnail___childProjectsYaml___thumbnail___id'
  | 'thumbnail___childProjectsYaml___thumbnail___children'
  | 'thumbnail___childProjectsYaml___id'
  | 'thumbnail___childProjectsYaml___parent___id'
  | 'thumbnail___childProjectsYaml___parent___children'
  | 'thumbnail___childProjectsYaml___children'
  | 'thumbnail___childProjectsYaml___children___id'
  | 'thumbnail___childProjectsYaml___children___children'
  | 'thumbnail___childProjectsYaml___internal___content'
  | 'thumbnail___childProjectsYaml___internal___contentDigest'
  | 'thumbnail___childProjectsYaml___internal___description'
  | 'thumbnail___childProjectsYaml___internal___fieldOwners'
  | 'thumbnail___childProjectsYaml___internal___ignoreType'
  | 'thumbnail___childProjectsYaml___internal___mediaType'
  | 'thumbnail___childProjectsYaml___internal___owner'
  | 'thumbnail___childProjectsYaml___internal___type'
  | 'thumbnail___id'
  | 'thumbnail___parent___id'
  | 'thumbnail___parent___parent___id'
  | 'thumbnail___parent___parent___children'
  | 'thumbnail___parent___children'
  | 'thumbnail___parent___children___id'
  | 'thumbnail___parent___children___children'
  | 'thumbnail___parent___internal___content'
  | 'thumbnail___parent___internal___contentDigest'
  | 'thumbnail___parent___internal___description'
  | 'thumbnail___parent___internal___fieldOwners'
  | 'thumbnail___parent___internal___ignoreType'
  | 'thumbnail___parent___internal___mediaType'
  | 'thumbnail___parent___internal___owner'
  | 'thumbnail___parent___internal___type'
  | 'thumbnail___children'
  | 'thumbnail___children___id'
  | 'thumbnail___children___parent___id'
  | 'thumbnail___children___parent___children'
  | 'thumbnail___children___children'
  | 'thumbnail___children___children___id'
  | 'thumbnail___children___children___children'
  | 'thumbnail___children___internal___content'
  | 'thumbnail___children___internal___contentDigest'
  | 'thumbnail___children___internal___description'
  | 'thumbnail___children___internal___fieldOwners'
  | 'thumbnail___children___internal___ignoreType'
  | 'thumbnail___children___internal___mediaType'
  | 'thumbnail___children___internal___owner'
  | 'thumbnail___children___internal___type'
  | 'thumbnail___internal___content'
  | 'thumbnail___internal___contentDigest'
  | 'thumbnail___internal___description'
  | 'thumbnail___internal___fieldOwners'
  | 'thumbnail___internal___ignoreType'
  | 'thumbnail___internal___mediaType'
  | 'thumbnail___internal___owner'
  | 'thumbnail___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ProjectsYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsYamlEdge>;
  nodes: Array<ProjectsYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ProjectsYamlSortInput = {
  fields?: Maybe<Array<Maybe<ProjectsYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___postCssPlugins'
  | 'pluginOptions___postCssPlugins___future___purgeLayersByDefault'
  | 'pluginOptions___postCssPlugins___purge'
  | 'pluginOptions___postCssPlugins___darkMode'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___quality'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___defaultLayouts___default'
  | 'pluginOptions___extensions'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___exclude'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = { allProjectsYaml: { nodes: Array<(
      Pick<ProjectsYaml, 'id' | 'title' | 'description' | 'tags' | 'demo_url' | 'github_url'>
      & { thumbnail: { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> } }
    )> } };

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetadataQuery = { site?: Maybe<{ siteMetadata: Pick<SiteSiteMetadata, 'description' | 'image' | 'siteLanguage' | 'title' | 'titleTemplate' | 'authorName' | 'twitterUsername' | 'siteUrl'> }> };

export type BlogPostQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type BlogPostQuery = { mdx?: Maybe<(
    Pick<Mdx, 'id' | 'body'>
    & { tableOfContents: { items: Array<(
        Pick<TocItem, 'title' | 'url'>
        & { items: Array<Pick<TocItem, 'title' | 'url'>> }
      )> }, frontmatter: Pick<MdxFrontmatter, 'title' | 'subtitle' | 'date' | 'tags' | 'last_updated'> }
  )> };

export type BlogListRecentQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type BlogListRecentQuery = { allMdx: { nodes: Array<(
      Pick<Mdx, 'id'>
      & { frontmatter: Pick<MdxFrontmatter, 'title' | 'subtitle' | 'tags' | 'date' | 'last_updated'>, fields?: Maybe<Pick<MdxFields, 'slug'>> }
    )> } };

export type BlogListForTagQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
}>;


export type BlogListForTagQuery = { allMdx: { nodes: Array<(
      Pick<Mdx, 'id'>
      & { frontmatter: Pick<MdxFrontmatter, 'title' | 'subtitle' | 'tags' | 'date' | 'last_updated'>, fields?: Maybe<Pick<MdxFields, 'slug'>> }
    )> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
