/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "@11ty/eleventy" {
  export type UserConfig = {
    pluginExecution: boolean;
    quietModeLocked: boolean;
    uniqueId: number;
    // events: EventEmitter;
    // benchmarkManager: BenchmarkManager;
    // benchmarks: {
    //     config: Benchmark,
    //     aggregate: Benchmark,
    // };
    events: any;
    benchmarkManager: any;
    benchmarks: {
      config: any;
      aggregate: any;
    };
    directoryAssignments: Record<string, string>;
    collections: Record<string, any>;
    precompiledCollections: Record<string, any>;
    templateFormats: string | undefined;
    templateFormatsAdded: string[];
    universal: {
      filters: Record<string, Function>;
      shortcodes: Record<string, Function>;
      pairedShortcodes: Record<string, Function>;
    };
    liquid: {
      options: Record<string, any>;
      tags: Record<string, Function>;
      filters: Record<string, Function>;
      shortcodes: Record<string, Function>;
      pairedShortcodes: Record<string, Function>;
    };
    nunjucks: {
      environmentOptions: Record<string, any>;
      precompiledTemplates: Record<string, any>;
      filters: Record<string, Function>;
      asyncFilters: Record<string, Function>;
      tags: Record<string, Function>;
      globals: Record<string, any>;
      shortcodes: Record<string, Function>;
      pairedShortcodes: Record<string, Function>;
      asyncShortcodes: Record<string, Function>;
      asyncPairedShortcodes: Record<string, Function>;
    };
    javascript: {
      functions: Record<string, Function>;
      filters: Record<string, Function>;
      shortcodes: Record<string, Function>;
      pairedShortcodes: Record<string, Function>;
    };
    markdownHighlighter: Function | null;
    libraryOverrides: Record<string, any>;
    passthroughCopies: Record<string, any>;
    layoutAliases: Record<string, string>;
    layoutResolution: boolean;
    linters: Record<string, Function>;
    transforms: Record<string, Function>;
    preprocessors: Record<string, { filter: string[]; callback: Function }>;
    activeNamespace: string;
    // DateTime: typeof DateTime;
    DateTime: any;
    dynamicPermalinks: boolean;
    useGitIgnore: boolean;
    ignores: Set<string>;
    watchIgnores: Set<string>;
    dataDeepMerge: boolean;
    extensionMap: Set<any>;
    extensionConflictMap: Record<string, boolean>;
    watchJavaScriptDependencies: boolean;
    additionalWatchTargets: string[];
    serverOptions: Record<string, any>;
    globalData: Record<string, any>;
    chokidarConfig: Record<string, any>;
    watchThrottleWaitTime: number;
    dataExtensions: Map<
      string,
      { extension: string; parser: Function; options: any }
    >;
    quietMode: boolean;
    plugins: any[];
    useTemplateCache: boolean;
    dataFilterSelectors: Set<string>;
    libraryAmendments: Record<string, Function[]>;
    serverPassthroughCopyBehavior: string;
    urlTransforms: Function[];
    dataFileSuffixesOverride: string[] | boolean;
    dataFileDirBaseNameOverride: string | boolean;
    frontMatterParsingOptions: {
      engines: {
        yaml: Function;
        javascript: Function;
        jsLegacy: Function;
        node: Function;
      };
    };
    virtualTemplates: Record<
      string,
      { inputPath: string; data: any; content: string }
    >;
    freezeReservedData: boolean;
    customDateParsingCallbacks: Set<Function>;

    reset(): void;
    versionCheck(compatibleRange?: string): void;
    on(eventName: string, callback: Function): void;
    emit(eventName: string, ...args: any[]): void;
    getFilter(name: string): Function;
    getFilters(options?: { type?: string }): Record<string, Function>;
    getShortcode(name: string): Function;
    getShortcodes(options?: { type?: string }): Record<string, Function>;
    getPairedShortcode(name: string): Function;
    getPairedShortcodes(options?: { type?: string }): Record<string, Function>;
    addMarkdownHighlighter(highlightFn: Function): void;
    addLiquidFilter(name: string, callback: Function): void;
    addNunjucksAsyncFilter(name: string, callback: Function): void;
    addNunjucksFilter(
      name: string,
      callback: Function,
      isAsync?: boolean,
    ): void;
    addJavaScriptFilter(name: string, callback: Function): void;
    addFilter(name: string, callback: Function): void;
    addAsyncFilter(name: string, callback: Function): void;
    addShortcode(name: string, callback: Function): void;
    addAsyncShortcode(name: string, callback: Function): void;
    addNunjucksAsyncShortcode(name: string, callback: Function): void;
    addNunjucksShortcode(
      name: string,
      callback: Function,
      isAsync?: boolean,
    ): void;
    addLiquidShortcode(name: string, callback: Function): void;
    addPairedShortcode(name: string, callback: Function): void;
    addPairedAsyncShortcode(name: string, callback: Function): void;
    addPairedNunjucksAsyncShortcode(name: string, callback: Function): void;
    addPairedNunjucksShortcode(
      name: string,
      callback: Function,
      isAsync?: boolean,
    ): void;
    addPairedLiquidShortcode(name: string, callback: Function): void;
    addJavaScriptShortcode(name: string, callback: Function): void;
    addPairedJavaScriptShortcode(name: string, callback: Function): void;
    addJavaScriptFunction(name: string, callback: Function): void;
    addLiquidTag(name: string, tagFn: Function): void;
    addNunjucksTag(name: string, tagFn: Function): void;
    addPlugin(plugin: any, options?: Record<string, any>): Promise<void>;
    resolvePlugin(name: string): Promise<any>;
    hasPlugin(plugin: any): boolean;
    addPassthroughCopy(
      fileOrDir: string | Record<string, string>,
      copyOptions?: Record<string, any>,
    ): any;
    setTemplateFormats(templateFormats: string): void;
    addTemplateFormats(templateFormats: string): void;
    setLibrary(engineName: string, libraryInstance: any): void;
    amendLibrary(engineName: string, callback: Function): void;
    setLiquidOptions(options: Record<string, any>): void;
    setNunjucksEnvironmentOptions(options: Record<string, any>): void;
    setNunjucksPrecompiledTemplates(templates: Record<string, any>): void;
    setDynamicPermalinks(enabled: boolean): void;
    setUseGitIgnore(enabled: boolean): void;
    setDataDeepMerge(deepMerge: boolean): void;
    isDataDeepMergeModified(): boolean;
    addWatchTarget(additionalWatchTargets: string): void;
    setWatchJavaScriptDependencies(watchEnabled: boolean): void;
    setServerOptions(options?: Record<string, any>, override?: boolean): void;
    setBrowserSyncConfig(): void;
    setChokidarConfig(options?: Record<string, any>): void;
    setWatchThrottleWaitTime(time?: number): void;
    setFrontMatterParsingOptions(options?: Record<string, any>): void;
    setQuietMode(quietMode: boolean): void;
    addExtension(
      fileExtension: string | string[],
      options?: Record<string, any>,
    ): void;
    addDataExtension(
      extensionList: string,
      parser: Function | { parser: Function },
    ): void;
    setUseTemplateCache(bypass: boolean): void;
    setPrecompiledCollections(collections: Record<string, any>): void;
    setServerPassthroughCopyBehavior(behavior: string): void;
    addUrlTransform(callback: Function): void;
    setDataFileSuffixes(suffixArray: string[]): void;
    setDataFileBaseName(baseName: string): void;
    addTemplate(virtualInputPath: string, content: string, data: any): void;
    isVirtualTemplate(virtualInputPath: string): boolean;
    setInputDirectory(dir: string): void;
    setOutputDirectory(dir: string): void;
    setDataDirectory(dir: string): void;
    setIncludesDirectory(dir: string): void;
    setLayoutsDirectory(dir: string): void;
    setFreezeReservedData(bool: boolean): void;
    addDateParsing(callback: Function): void;
    addGlobalData(name: string, data: any): UserConfig;
    addNunjucksGlobal(name: string, globalType: any): void;
    addTransform(name: string, callback: Function): void;
    addPreprocessor(
      name: string,
      fileExtensions: string[],
      callback: Function,
    ): void;
    addLinter(name: string, callback: Function): void;
    addLayoutAlias(from: string, to: string): void;
    setLayoutResolution(resolution: boolean): void;
    enableLayoutResolution(): void;
    getCollections(): Record<string, Function>;
    addCollection(name: string, callback: Function): void;
    augmentFunctionContext(fn: Function, options: any): Function;
    getMergingConfigObject(): Record<string, any>;
  };
}
