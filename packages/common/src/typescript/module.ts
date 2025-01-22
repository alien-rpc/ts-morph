import ts from "typescript";

export function injectTypeScriptModule(ts: any) {
  // Enums
  DiagnosticCategory = ts.DiagnosticCategory;
  EmitHint = ts.EmitHint;
  LanguageVariant = ts.LanguageVariant;
  ModuleKind = ts.ModuleKind;
  ModuleResolutionKind = ts.ModuleResolutionKind;
  NewLineKind = ts.NewLineKind;
  NodeFlags = ts.NodeFlags;
  ObjectFlags = ts.ObjectFlags;
  ScriptKind = ts.ScriptKind;
  ScriptTarget = ts.ScriptTarget;
  SymbolFlags = ts.SymbolFlags;
  SyntaxKind = ts.SyntaxKind;
  TypeFlags = ts.TypeFlags;
  TypeFormatFlags = ts.TypeFormatFlags;

  // Functions
  createLanguageService = ts.createLanguageService;
  createLanguageServiceSourceFile = ts.createLanguageServiceSourceFile;
  createProgram = ts.createProgram;
  createSourceFile = ts.createSourceFile;
  escapeLeadingUnderscores = ts.escapeLeadingUnderscores;
  formatDiagnosticsWithColorAndContext = ts.formatDiagnosticsWithColorAndContext;
  getDefaultLibFileName = ts.getDefaultLibFileName;
  getPreEmitDiagnostics = ts.getPreEmitDiagnostics;
  parseConfigFileTextToJson = ts.parseConfigFileTextToJson;
  parseJsonConfigFileContent = ts.parseJsonConfigFileContent;
  resolveModuleName = ts.resolveModuleName;
  resolveTypeReferenceDirective = ts.resolveTypeReferenceDirective;

  // Namespaces
  ScriptSnapshot = ts.ScriptSnapshot;
  server = ts.server;
  sys = ts.sys;

  // Private APIs
  matchFiles = ts.matchFiles;
  getFileMatcherPatterns = ts.getFileMatcherPatterns;
  getEmitModuleResolutionKind = ts.getEmitModuleResolutionKind;
}

// Types //

export type {
  CompilerHost,
  CompilerOptions,
  CreateSourceFileOptions,
  Diagnostic,
  DocumentRegistry,
  DocumentRegistryBucketKey,
  EditorSettings,
  IScriptSnapshot,
  LanguageServiceHost,
  ModuleResolutionHost,
  ParseConfigHost,
  ParsedCommandLine,
  Path,
  ResolvedModule,
  SourceFile,
} from "typescript";

export type ModuleKind = ts.ModuleKind;
export type ModuleResolutionKind = ts.ModuleResolutionKind;
export type ScriptKind = ts.ScriptKind;
export type ScriptTarget = ts.ScriptTarget;
export type SyntaxKind = ts.SyntaxKind;

// Enums //

export let DiagnosticCategory: typeof ts.DiagnosticCategory;
export let EmitHint: typeof ts.EmitHint;
export let LanguageVariant: typeof ts.LanguageVariant;
export let ModuleKind: typeof ts.ModuleKind;
export let ModuleResolutionKind: typeof ts.ModuleResolutionKind;
export let NewLineKind: typeof ts.NewLineKind;
export let NodeFlags: typeof ts.NodeFlags;
export let ObjectFlags: typeof ts.ObjectFlags;
export let ScriptKind: typeof ts.ScriptKind;
export let ScriptTarget: typeof ts.ScriptTarget;
export let SymbolFlags: typeof ts.SymbolFlags;
export let SyntaxKind: typeof ts.SyntaxKind;
export let TypeFlags: typeof ts.TypeFlags;
export let TypeFormatFlags: typeof ts.TypeFormatFlags;

// Functions //

export let createLanguageService: typeof ts.createLanguageService;
export let createLanguageServiceSourceFile: typeof ts.createLanguageServiceSourceFile;
export let createProgram: typeof ts.createProgram;
export let createSourceFile: typeof ts.createSourceFile;
export let escapeLeadingUnderscores: typeof ts.escapeLeadingUnderscores;
export let formatDiagnosticsWithColorAndContext: typeof ts.formatDiagnosticsWithColorAndContext;
export let getDefaultLibFileName: typeof ts.getDefaultLibFileName;
export let getPreEmitDiagnostics: typeof ts.getPreEmitDiagnostics;
export let parseConfigFileTextToJson: typeof ts.parseConfigFileTextToJson;
export let parseJsonConfigFileContent: typeof ts.parseJsonConfigFileContent;
export let resolveModuleName: typeof ts.resolveModuleName;
export let resolveTypeReferenceDirective: typeof ts.resolveTypeReferenceDirective;

// Namespaces //

export let ScriptSnapshot: typeof ts.ScriptSnapshot;
export let server: typeof ts.server;
export let sys: typeof ts.sys;

// Private APIs //

export let matchFiles: (
  this: any,
  path: string,
  extensions: ReadonlyArray<string>,
  excludes: ReadonlyArray<string>,
  includes: ReadonlyArray<string>,
  useCaseSensitiveFileNames: boolean,
  currentDirectory: string,
  depth: number | undefined,
  getEntries: (path: string) => FileSystemEntries,
  realpath: (path: string) => string,
  directoryExists: (path: string) => boolean,
) => string[];

export let getFileMatcherPatterns: (
  this: any,
  path: string,
  excludes: ReadonlyArray<string>,
  includes: ReadonlyArray<string>,
  useCaseSensitiveFileNames: boolean,
  currentDirectory: string,
) => FileMatcherPatterns;

export let getEmitModuleResolutionKind: (this: any, compilerOptions: ts.CompilerOptions) => ModuleResolutionKind;

export interface FileMatcherPatterns {
  /** One pattern for each "include" spec. */
  includeFilePatterns: ReadonlyArray<string>;
  /** One pattern matching one of any of the "include" specs. */
  includeFilePattern: string;
  includeDirectoryPattern: string;
  excludePattern: string;
  basePaths: ReadonlyArray<string>;
}


export interface FileSystemEntries {
  readonly files: ReadonlyArray<string>;
  readonly directories: ReadonlyArray<string>;
}
