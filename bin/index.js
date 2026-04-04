#!/usr/bin/env node
"use strict";
const require$$2 = require("node:path");
const require$$3 = require("node:fs");
const require$$0$1 = require("node:events");
const require$$1 = require("node:child_process");
const require$$4 = require("node:process");
const require$$0$2 = require("readline");
const require$$2$1 = require("events");
const fs$4 = require("fs/promises");
const require$$0$3 = require("os");
const require$$0$4 = require("path");
const require$$0$5 = require("util");
const require$$0$6 = require("stream");
const require$$0$7 = require("fs");
const promises = require("node:fs/promises");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const require$$0 = [
  "_http_agent",
  "_http_client",
  "_http_common",
  "_http_incoming",
  "_http_outgoing",
  "_http_server",
  "_stream_duplex",
  "_stream_passthrough",
  "_stream_readable",
  "_stream_transform",
  "_stream_wrap",
  "_stream_writable",
  "_tls_common",
  "_tls_wrap",
  "assert",
  "assert/strict",
  "async_hooks",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "diagnostics_channel",
  "dns",
  "dns/promises",
  "domain",
  "events",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "inspector",
  "inspector/promises",
  "module",
  "net",
  "os",
  "path",
  "path/posix",
  "path/win32",
  "perf_hooks",
  "process",
  "punycode",
  "querystring",
  "readline",
  "readline/promises",
  "repl",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "sys",
  "timers",
  "timers/promises",
  "tls",
  "trace_events",
  "tty",
  "url",
  "util",
  "util/types",
  "v8",
  "vm",
  "wasi",
  "worker_threads",
  "zlib",
  "node:sea",
  "node:sqlite",
  "node:test",
  "node:test/reporters"
];
var lib$1;
var hasRequiredLib$1;
function requireLib$1() {
  if (hasRequiredLib$1) return lib$1;
  hasRequiredLib$1 = 1;
  const builtins = require$$0;
  var scopedPackagePattern = new RegExp("^(?:@([^/]+?)[/])?([^/]+?)$");
  var exclusionList = [
    "node_modules",
    "favicon.ico"
  ];
  function validate(name) {
    var warnings = [];
    var errors = [];
    if (name === null) {
      errors.push("name cannot be null");
      return done(warnings, errors);
    }
    if (name === void 0) {
      errors.push("name cannot be undefined");
      return done(warnings, errors);
    }
    if (typeof name !== "string") {
      errors.push("name must be a string");
      return done(warnings, errors);
    }
    if (!name.length) {
      errors.push("name length must be greater than zero");
    }
    if (name.startsWith(".")) {
      errors.push("name cannot start with a period");
    }
    if (name.startsWith("-")) {
      errors.push("name cannot start with a hyphen");
    }
    if (name.match(/^_/)) {
      errors.push("name cannot start with an underscore");
    }
    if (name.trim() !== name) {
      errors.push("name cannot contain leading or trailing spaces");
    }
    exclusionList.forEach(function(excludedName) {
      if (name.toLowerCase() === excludedName) {
        errors.push(excludedName + " is not a valid package name");
      }
    });
    if (builtins.includes(name.toLowerCase())) {
      warnings.push(name + " is a core module name");
    }
    if (name.length > 214) {
      warnings.push("name can no longer contain more than 214 characters");
    }
    if (name.toLowerCase() !== name) {
      warnings.push("name can no longer contain capital letters");
    }
    if (/[~'!()*]/.test(name.split("/").slice(-1)[0])) {
      warnings.push(`name can no longer contain special characters ("~'!()*")`);
    }
    if (encodeURIComponent(name) !== name) {
      var nameMatch = name.match(scopedPackagePattern);
      if (nameMatch) {
        var user = nameMatch[1];
        var pkg = nameMatch[2];
        if (pkg.startsWith(".")) {
          errors.push("name cannot start with a period");
        }
        if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
          return done(warnings, errors);
        }
      }
      errors.push("name can only contain URL-friendly characters");
    }
    return done(warnings, errors);
  }
  var done = function(warnings, errors) {
    var result = {
      validForNewPackages: errors.length === 0 && warnings.length === 0,
      validForOldPackages: errors.length === 0,
      warnings,
      errors
    };
    if (!result.warnings.length) {
      delete result.warnings;
    }
    if (!result.errors.length) {
      delete result.errors;
    }
    return result;
  };
  lib$1 = validate;
  return lib$1;
}
var libExports = requireLib$1();
const validateProjectName = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
function validateNpmName(name) {
  const nameValidation = validateProjectName(name);
  if (nameValidation.validForNewPackages) {
    return { valid: true };
  }
  return {
    valid: false,
    problems: [
      ...nameValidation.errors ?? [],
      ...nameValidation.warnings ?? []
    ]
  };
}
var picocolors_browser = { exports: {} };
var hasRequiredPicocolors_browser;
function requirePicocolors_browser() {
  if (hasRequiredPicocolors_browser) return picocolors_browser.exports;
  hasRequiredPicocolors_browser = 1;
  var x = String;
  var create = function() {
    return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x, blackBright: x, redBright: x, greenBright: x, yellowBright: x, blueBright: x, magentaBright: x, cyanBright: x, whiteBright: x, bgBlackBright: x, bgRedBright: x, bgGreenBright: x, bgYellowBright: x, bgBlueBright: x, bgMagentaBright: x, bgCyanBright: x, bgWhiteBright: x };
  };
  picocolors_browser.exports = create();
  picocolors_browser.exports.createColors = create;
  return picocolors_browser.exports;
}
var picocolors_browserExports = /* @__PURE__ */ requirePicocolors_browser();
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return value === void 0;
}
function isString(value) {
  return typeof value === "string";
}
const basic$1 = {
  OPTION_SOME: "some",
  OPTION_NONE: "none"
};
const optionUtility = (function() {
  const { OPTION_SOME, OPTION_NONE } = basic$1;
  const createSome = (value) => {
    return Object.freeze({
      kind: OPTION_SOME,
      isSome: true,
      isNone: false,
      value
    });
  };
  const createNone = () => {
    return Object.freeze({
      kind: OPTION_NONE,
      isSome: false,
      isNone: true
    });
  };
  const optionConversion = (value) => {
    if (isNull(value) || isUndefined(value)) {
      return createNone();
    }
    return createSome(value);
  };
  return Object.freeze({
    createSome,
    createNone,
    optionConversion
  });
})();
var commander$1 = {};
var argument = {};
var error$1 = {};
var hasRequiredError$1;
function requireError$1() {
  if (hasRequiredError$1) return error$1;
  hasRequiredError$1 = 1;
  class CommanderError2 extends Error {
    /**
     * Constructs the CommanderError class
     * @param {number} exitCode suggested exit code which could be used with process.exit
     * @param {string} code an id string representing the error
     * @param {string} message human-readable description of the error
     */
    constructor(exitCode, code, message) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.code = code;
      this.exitCode = exitCode;
      this.nestedError = void 0;
    }
  }
  class InvalidArgumentError2 extends CommanderError2 {
    /**
     * Constructs the InvalidArgumentError class
     * @param {string} [message] explanation of why argument is invalid
     */
    constructor(message) {
      super(1, "commander.invalidArgument", message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
    }
  }
  error$1.CommanderError = CommanderError2;
  error$1.InvalidArgumentError = InvalidArgumentError2;
  return error$1;
}
var hasRequiredArgument;
function requireArgument() {
  if (hasRequiredArgument) return argument;
  hasRequiredArgument = 1;
  const { InvalidArgumentError: InvalidArgumentError2 } = requireError$1();
  class Argument2 {
    /**
     * Initialize a new command argument with the given name and description.
     * The default is that the argument is required, and you can explicitly
     * indicate this with <> around the name. Put [] around the name for an optional argument.
     *
     * @param {string} name
     * @param {string} [description]
     */
    constructor(name, description) {
      this.description = description || "";
      this.variadic = false;
      this.parseArg = void 0;
      this.defaultValue = void 0;
      this.defaultValueDescription = void 0;
      this.argChoices = void 0;
      switch (name[0]) {
        case "<":
          this.required = true;
          this._name = name.slice(1, -1);
          break;
        case "[":
          this.required = false;
          this._name = name.slice(1, -1);
          break;
        default:
          this.required = true;
          this._name = name;
          break;
      }
      if (this._name.endsWith("...")) {
        this.variadic = true;
        this._name = this._name.slice(0, -3);
      }
    }
    /**
     * Return argument name.
     *
     * @return {string}
     */
    name() {
      return this._name;
    }
    /**
     * @package
     */
    _collectValue(value, previous) {
      if (previous === this.defaultValue || !Array.isArray(previous)) {
        return [value];
      }
      previous.push(value);
      return previous;
    }
    /**
     * Set the default value, and optionally supply the description to be displayed in the help.
     *
     * @param {*} value
     * @param {string} [description]
     * @return {Argument}
     */
    default(value, description) {
      this.defaultValue = value;
      this.defaultValueDescription = description;
      return this;
    }
    /**
     * Set the custom handler for processing CLI command arguments into argument values.
     *
     * @param {Function} [fn]
     * @return {Argument}
     */
    argParser(fn) {
      this.parseArg = fn;
      return this;
    }
    /**
     * Only allow argument value to be one of choices.
     *
     * @param {string[]} values
     * @return {Argument}
     */
    choices(values) {
      this.argChoices = values.slice();
      this.parseArg = (arg, previous) => {
        if (!this.argChoices.includes(arg)) {
          throw new InvalidArgumentError2(
            `Allowed choices are ${this.argChoices.join(", ")}.`
          );
        }
        if (this.variadic) {
          return this._collectValue(arg, previous);
        }
        return arg;
      };
      return this;
    }
    /**
     * Make argument required.
     *
     * @returns {Argument}
     */
    argRequired() {
      this.required = true;
      return this;
    }
    /**
     * Make argument optional.
     *
     * @returns {Argument}
     */
    argOptional() {
      this.required = false;
      return this;
    }
  }
  function humanReadableArgName(arg) {
    const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
    return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
  }
  argument.Argument = Argument2;
  argument.humanReadableArgName = humanReadableArgName;
  return argument;
}
var command = {};
var help = {};
var hasRequiredHelp;
function requireHelp() {
  if (hasRequiredHelp) return help;
  hasRequiredHelp = 1;
  const { humanReadableArgName } = requireArgument();
  class Help2 {
    constructor() {
      this.helpWidth = void 0;
      this.minWidthToWrap = 40;
      this.sortSubcommands = false;
      this.sortOptions = false;
      this.showGlobalOptions = false;
    }
    /**
     * prepareContext is called by Commander after applying overrides from `Command.configureHelp()`
     * and just before calling `formatHelp()`.
     *
     * Commander just uses the helpWidth and the rest is provided for optional use by more complex subclasses.
     *
     * @param {{ error?: boolean, helpWidth?: number, outputHasColors?: boolean }} contextOptions
     */
    prepareContext(contextOptions) {
      this.helpWidth = this.helpWidth ?? contextOptions.helpWidth ?? 80;
    }
    /**
     * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
     *
     * @param {Command} cmd
     * @returns {Command[]}
     */
    visibleCommands(cmd) {
      const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
      const helpCommand = cmd._getHelpCommand();
      if (helpCommand && !helpCommand._hidden) {
        visibleCommands.push(helpCommand);
      }
      if (this.sortSubcommands) {
        visibleCommands.sort((a, b) => {
          return a.name().localeCompare(b.name());
        });
      }
      return visibleCommands;
    }
    /**
     * Compare options for sort.
     *
     * @param {Option} a
     * @param {Option} b
     * @returns {number}
     */
    compareOptions(a, b) {
      const getSortKey = (option2) => {
        return option2.short ? option2.short.replace(/^-/, "") : option2.long.replace(/^--/, "");
      };
      return getSortKey(a).localeCompare(getSortKey(b));
    }
    /**
     * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
     *
     * @param {Command} cmd
     * @returns {Option[]}
     */
    visibleOptions(cmd) {
      const visibleOptions = cmd.options.filter((option2) => !option2.hidden);
      const helpOption = cmd._getHelpOption();
      if (helpOption && !helpOption.hidden) {
        const removeShort = helpOption.short && cmd._findOption(helpOption.short);
        const removeLong = helpOption.long && cmd._findOption(helpOption.long);
        if (!removeShort && !removeLong) {
          visibleOptions.push(helpOption);
        } else if (helpOption.long && !removeLong) {
          visibleOptions.push(
            cmd.createOption(helpOption.long, helpOption.description)
          );
        } else if (helpOption.short && !removeShort) {
          visibleOptions.push(
            cmd.createOption(helpOption.short, helpOption.description)
          );
        }
      }
      if (this.sortOptions) {
        visibleOptions.sort(this.compareOptions);
      }
      return visibleOptions;
    }
    /**
     * Get an array of the visible global options. (Not including help.)
     *
     * @param {Command} cmd
     * @returns {Option[]}
     */
    visibleGlobalOptions(cmd) {
      if (!this.showGlobalOptions) return [];
      const globalOptions = [];
      for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
        const visibleOptions = ancestorCmd.options.filter(
          (option2) => !option2.hidden
        );
        globalOptions.push(...visibleOptions);
      }
      if (this.sortOptions) {
        globalOptions.sort(this.compareOptions);
      }
      return globalOptions;
    }
    /**
     * Get an array of the arguments if any have a description.
     *
     * @param {Command} cmd
     * @returns {Argument[]}
     */
    visibleArguments(cmd) {
      if (cmd._argsDescription) {
        cmd.registeredArguments.forEach((argument2) => {
          argument2.description = argument2.description || cmd._argsDescription[argument2.name()] || "";
        });
      }
      if (cmd.registeredArguments.find((argument2) => argument2.description)) {
        return cmd.registeredArguments;
      }
      return [];
    }
    /**
     * Get the command term to show in the list of subcommands.
     *
     * @param {Command} cmd
     * @returns {string}
     */
    subcommandTerm(cmd) {
      const args = cmd.registeredArguments.map((arg) => humanReadableArgName(arg)).join(" ");
      return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + // simplistic check for non-help option
      (args ? " " + args : "");
    }
    /**
     * Get the option term to show in the list of options.
     *
     * @param {Option} option
     * @returns {string}
     */
    optionTerm(option2) {
      return option2.flags;
    }
    /**
     * Get the argument term to show in the list of arguments.
     *
     * @param {Argument} argument
     * @returns {string}
     */
    argumentTerm(argument2) {
      return argument2.name();
    }
    /**
     * Get the longest command term length.
     *
     * @param {Command} cmd
     * @param {Help} helper
     * @returns {number}
     */
    longestSubcommandTermLength(cmd, helper) {
      return helper.visibleCommands(cmd).reduce((max, command2) => {
        return Math.max(
          max,
          this.displayWidth(
            helper.styleSubcommandTerm(helper.subcommandTerm(command2))
          )
        );
      }, 0);
    }
    /**
     * Get the longest option term length.
     *
     * @param {Command} cmd
     * @param {Help} helper
     * @returns {number}
     */
    longestOptionTermLength(cmd, helper) {
      return helper.visibleOptions(cmd).reduce((max, option2) => {
        return Math.max(
          max,
          this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option2)))
        );
      }, 0);
    }
    /**
     * Get the longest global option term length.
     *
     * @param {Command} cmd
     * @param {Help} helper
     * @returns {number}
     */
    longestGlobalOptionTermLength(cmd, helper) {
      return helper.visibleGlobalOptions(cmd).reduce((max, option2) => {
        return Math.max(
          max,
          this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option2)))
        );
      }, 0);
    }
    /**
     * Get the longest argument term length.
     *
     * @param {Command} cmd
     * @param {Help} helper
     * @returns {number}
     */
    longestArgumentTermLength(cmd, helper) {
      return helper.visibleArguments(cmd).reduce((max, argument2) => {
        return Math.max(
          max,
          this.displayWidth(
            helper.styleArgumentTerm(helper.argumentTerm(argument2))
          )
        );
      }, 0);
    }
    /**
     * Get the command usage to be displayed at the top of the built-in help.
     *
     * @param {Command} cmd
     * @returns {string}
     */
    commandUsage(cmd) {
      let cmdName = cmd._name;
      if (cmd._aliases[0]) {
        cmdName = cmdName + "|" + cmd._aliases[0];
      }
      let ancestorCmdNames = "";
      for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
        ancestorCmdNames = ancestorCmd.name() + " " + ancestorCmdNames;
      }
      return ancestorCmdNames + cmdName + " " + cmd.usage();
    }
    /**
     * Get the description for the command.
     *
     * @param {Command} cmd
     * @returns {string}
     */
    commandDescription(cmd) {
      return cmd.description();
    }
    /**
     * Get the subcommand summary to show in the list of subcommands.
     * (Fallback to description for backwards compatibility.)
     *
     * @param {Command} cmd
     * @returns {string}
     */
    subcommandDescription(cmd) {
      return cmd.summary() || cmd.description();
    }
    /**
     * Get the option description to show in the list of options.
     *
     * @param {Option} option
     * @return {string}
     */
    optionDescription(option2) {
      const extraInfo = [];
      if (option2.argChoices) {
        extraInfo.push(
          // use stringify to match the display of the default value
          `choices: ${option2.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
        );
      }
      if (option2.defaultValue !== void 0) {
        const showDefault = option2.required || option2.optional || option2.isBoolean() && typeof option2.defaultValue === "boolean";
        if (showDefault) {
          extraInfo.push(
            `default: ${option2.defaultValueDescription || JSON.stringify(option2.defaultValue)}`
          );
        }
      }
      if (option2.presetArg !== void 0 && option2.optional) {
        extraInfo.push(`preset: ${JSON.stringify(option2.presetArg)}`);
      }
      if (option2.envVar !== void 0) {
        extraInfo.push(`env: ${option2.envVar}`);
      }
      if (extraInfo.length > 0) {
        const extraDescription = `(${extraInfo.join(", ")})`;
        if (option2.description) {
          return `${option2.description} ${extraDescription}`;
        }
        return extraDescription;
      }
      return option2.description;
    }
    /**
     * Get the argument description to show in the list of arguments.
     *
     * @param {Argument} argument
     * @return {string}
     */
    argumentDescription(argument2) {
      const extraInfo = [];
      if (argument2.argChoices) {
        extraInfo.push(
          // use stringify to match the display of the default value
          `choices: ${argument2.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
        );
      }
      if (argument2.defaultValue !== void 0) {
        extraInfo.push(
          `default: ${argument2.defaultValueDescription || JSON.stringify(argument2.defaultValue)}`
        );
      }
      if (extraInfo.length > 0) {
        const extraDescription = `(${extraInfo.join(", ")})`;
        if (argument2.description) {
          return `${argument2.description} ${extraDescription}`;
        }
        return extraDescription;
      }
      return argument2.description;
    }
    /**
     * Format a list of items, given a heading and an array of formatted items.
     *
     * @param {string} heading
     * @param {string[]} items
     * @param {Help} helper
     * @returns string[]
     */
    formatItemList(heading, items, helper) {
      if (items.length === 0) return [];
      return [helper.styleTitle(heading), ...items, ""];
    }
    /**
     * Group items by their help group heading.
     *
     * @param {Command[] | Option[]} unsortedItems
     * @param {Command[] | Option[]} visibleItems
     * @param {Function} getGroup
     * @returns {Map<string, Command[] | Option[]>}
     */
    groupItems(unsortedItems, visibleItems, getGroup) {
      const result = /* @__PURE__ */ new Map();
      unsortedItems.forEach((item) => {
        const group = getGroup(item);
        if (!result.has(group)) result.set(group, []);
      });
      visibleItems.forEach((item) => {
        const group = getGroup(item);
        if (!result.has(group)) {
          result.set(group, []);
        }
        result.get(group).push(item);
      });
      return result;
    }
    /**
     * Generate the built-in help text.
     *
     * @param {Command} cmd
     * @param {Help} helper
     * @returns {string}
     */
    formatHelp(cmd, helper) {
      const termWidth = helper.padWidth(cmd, helper);
      const helpWidth = helper.helpWidth ?? 80;
      function callFormatItem(term, description) {
        return helper.formatItem(term, termWidth, description, helper);
      }
      let output = [
        `${helper.styleTitle("Usage:")} ${helper.styleUsage(helper.commandUsage(cmd))}`,
        ""
      ];
      const commandDescription = helper.commandDescription(cmd);
      if (commandDescription.length > 0) {
        output = output.concat([
          helper.boxWrap(
            helper.styleCommandDescription(commandDescription),
            helpWidth
          ),
          ""
        ]);
      }
      const argumentList = helper.visibleArguments(cmd).map((argument2) => {
        return callFormatItem(
          helper.styleArgumentTerm(helper.argumentTerm(argument2)),
          helper.styleArgumentDescription(helper.argumentDescription(argument2))
        );
      });
      output = output.concat(
        this.formatItemList("Arguments:", argumentList, helper)
      );
      const optionGroups = this.groupItems(
        cmd.options,
        helper.visibleOptions(cmd),
        (option2) => option2.helpGroupHeading ?? "Options:"
      );
      optionGroups.forEach((options, group) => {
        const optionList = options.map((option2) => {
          return callFormatItem(
            helper.styleOptionTerm(helper.optionTerm(option2)),
            helper.styleOptionDescription(helper.optionDescription(option2))
          );
        });
        output = output.concat(this.formatItemList(group, optionList, helper));
      });
      if (helper.showGlobalOptions) {
        const globalOptionList = helper.visibleGlobalOptions(cmd).map((option2) => {
          return callFormatItem(
            helper.styleOptionTerm(helper.optionTerm(option2)),
            helper.styleOptionDescription(helper.optionDescription(option2))
          );
        });
        output = output.concat(
          this.formatItemList("Global Options:", globalOptionList, helper)
        );
      }
      const commandGroups = this.groupItems(
        cmd.commands,
        helper.visibleCommands(cmd),
        (sub) => sub.helpGroup() || "Commands:"
      );
      commandGroups.forEach((commands, group) => {
        const commandList = commands.map((sub) => {
          return callFormatItem(
            helper.styleSubcommandTerm(helper.subcommandTerm(sub)),
            helper.styleSubcommandDescription(helper.subcommandDescription(sub))
          );
        });
        output = output.concat(this.formatItemList(group, commandList, helper));
      });
      return output.join("\n");
    }
    /**
     * Return display width of string, ignoring ANSI escape sequences. Used in padding and wrapping calculations.
     *
     * @param {string} str
     * @returns {number}
     */
    displayWidth(str) {
      return stripColor(str).length;
    }
    /**
     * Style the title for displaying in the help. Called with 'Usage:', 'Options:', etc.
     *
     * @param {string} str
     * @returns {string}
     */
    styleTitle(str) {
      return str;
    }
    styleUsage(str) {
      return str.split(" ").map((word) => {
        if (word === "[options]") return this.styleOptionText(word);
        if (word === "[command]") return this.styleSubcommandText(word);
        if (word[0] === "[" || word[0] === "<")
          return this.styleArgumentText(word);
        return this.styleCommandText(word);
      }).join(" ");
    }
    styleCommandDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleOptionDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleSubcommandDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleArgumentDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleDescriptionText(str) {
      return str;
    }
    styleOptionTerm(str) {
      return this.styleOptionText(str);
    }
    styleSubcommandTerm(str) {
      return str.split(" ").map((word) => {
        if (word === "[options]") return this.styleOptionText(word);
        if (word[0] === "[" || word[0] === "<")
          return this.styleArgumentText(word);
        return this.styleSubcommandText(word);
      }).join(" ");
    }
    styleArgumentTerm(str) {
      return this.styleArgumentText(str);
    }
    styleOptionText(str) {
      return str;
    }
    styleArgumentText(str) {
      return str;
    }
    styleSubcommandText(str) {
      return str;
    }
    styleCommandText(str) {
      return str;
    }
    /**
     * Calculate the pad width from the maximum term length.
     *
     * @param {Command} cmd
     * @param {Help} helper
     * @returns {number}
     */
    padWidth(cmd, helper) {
      return Math.max(
        helper.longestOptionTermLength(cmd, helper),
        helper.longestGlobalOptionTermLength(cmd, helper),
        helper.longestSubcommandTermLength(cmd, helper),
        helper.longestArgumentTermLength(cmd, helper)
      );
    }
    /**
     * Detect manually wrapped and indented strings by checking for line break followed by whitespace.
     *
     * @param {string} str
     * @returns {boolean}
     */
    preformatted(str) {
      return /\n[^\S\r\n]/.test(str);
    }
    /**
     * Format the "item", which consists of a term and description. Pad the term and wrap the description, indenting the following lines.
     *
     * So "TTT", 5, "DDD DDDD DD DDD" might be formatted for this.helpWidth=17 like so:
     *   TTT  DDD DDDD
     *        DD DDD
     *
     * @param {string} term
     * @param {number} termWidth
     * @param {string} description
     * @param {Help} helper
     * @returns {string}
     */
    formatItem(term, termWidth, description, helper) {
      const itemIndent = 2;
      const itemIndentStr = " ".repeat(itemIndent);
      if (!description) return itemIndentStr + term;
      const paddedTerm = term.padEnd(
        termWidth + term.length - helper.displayWidth(term)
      );
      const spacerWidth = 2;
      const helpWidth = this.helpWidth ?? 80;
      const remainingWidth = helpWidth - termWidth - spacerWidth - itemIndent;
      let formattedDescription;
      if (remainingWidth < this.minWidthToWrap || helper.preformatted(description)) {
        formattedDescription = description;
      } else {
        const wrappedDescription = helper.boxWrap(description, remainingWidth);
        formattedDescription = wrappedDescription.replace(
          /\n/g,
          "\n" + " ".repeat(termWidth + spacerWidth)
        );
      }
      return itemIndentStr + paddedTerm + " ".repeat(spacerWidth) + formattedDescription.replace(/\n/g, `
${itemIndentStr}`);
    }
    /**
     * Wrap a string at whitespace, preserving existing line breaks.
     * Wrapping is skipped if the width is less than `minWidthToWrap`.
     *
     * @param {string} str
     * @param {number} width
     * @returns {string}
     */
    boxWrap(str, width) {
      if (width < this.minWidthToWrap) return str;
      const rawLines = str.split(/\r\n|\n/);
      const chunkPattern = /[\s]*[^\s]+/g;
      const wrappedLines = [];
      rawLines.forEach((line) => {
        const chunks = line.match(chunkPattern);
        if (chunks === null) {
          wrappedLines.push("");
          return;
        }
        let sumChunks = [chunks.shift()];
        let sumWidth = this.displayWidth(sumChunks[0]);
        chunks.forEach((chunk) => {
          const visibleWidth = this.displayWidth(chunk);
          if (sumWidth + visibleWidth <= width) {
            sumChunks.push(chunk);
            sumWidth += visibleWidth;
            return;
          }
          wrappedLines.push(sumChunks.join(""));
          const nextChunk = chunk.trimStart();
          sumChunks = [nextChunk];
          sumWidth = this.displayWidth(nextChunk);
        });
        wrappedLines.push(sumChunks.join(""));
      });
      return wrappedLines.join("\n");
    }
  }
  function stripColor(str) {
    const sgrPattern = /\x1b\[\d*(;\d*)*m/g;
    return str.replace(sgrPattern, "");
  }
  help.Help = Help2;
  help.stripColor = stripColor;
  return help;
}
var option = {};
var hasRequiredOption;
function requireOption() {
  if (hasRequiredOption) return option;
  hasRequiredOption = 1;
  const { InvalidArgumentError: InvalidArgumentError2 } = requireError$1();
  class Option2 {
    /**
     * Initialize a new `Option` with the given `flags` and `description`.
     *
     * @param {string} flags
     * @param {string} [description]
     */
    constructor(flags, description) {
      this.flags = flags;
      this.description = description || "";
      this.required = flags.includes("<");
      this.optional = flags.includes("[");
      this.variadic = /\w\.\.\.[>\]]$/.test(flags);
      this.mandatory = false;
      const optionFlags = splitOptionFlags(flags);
      this.short = optionFlags.shortFlag;
      this.long = optionFlags.longFlag;
      this.negate = false;
      if (this.long) {
        this.negate = this.long.startsWith("--no-");
      }
      this.defaultValue = void 0;
      this.defaultValueDescription = void 0;
      this.presetArg = void 0;
      this.envVar = void 0;
      this.parseArg = void 0;
      this.hidden = false;
      this.argChoices = void 0;
      this.conflictsWith = [];
      this.implied = void 0;
      this.helpGroupHeading = void 0;
    }
    /**
     * Set the default value, and optionally supply the description to be displayed in the help.
     *
     * @param {*} value
     * @param {string} [description]
     * @return {Option}
     */
    default(value, description) {
      this.defaultValue = value;
      this.defaultValueDescription = description;
      return this;
    }
    /**
     * Preset to use when option used without option-argument, especially optional but also boolean and negated.
     * The custom processing (parseArg) is called.
     *
     * @example
     * new Option('--color').default('GREYSCALE').preset('RGB');
     * new Option('--donate [amount]').preset('20').argParser(parseFloat);
     *
     * @param {*} arg
     * @return {Option}
     */
    preset(arg) {
      this.presetArg = arg;
      return this;
    }
    /**
     * Add option name(s) that conflict with this option.
     * An error will be displayed if conflicting options are found during parsing.
     *
     * @example
     * new Option('--rgb').conflicts('cmyk');
     * new Option('--js').conflicts(['ts', 'jsx']);
     *
     * @param {(string | string[])} names
     * @return {Option}
     */
    conflicts(names) {
      this.conflictsWith = this.conflictsWith.concat(names);
      return this;
    }
    /**
     * Specify implied option values for when this option is set and the implied options are not.
     *
     * The custom processing (parseArg) is not called on the implied values.
     *
     * @example
     * program
     *   .addOption(new Option('--log', 'write logging information to file'))
     *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
     *
     * @param {object} impliedOptionValues
     * @return {Option}
     */
    implies(impliedOptionValues) {
      let newImplied = impliedOptionValues;
      if (typeof impliedOptionValues === "string") {
        newImplied = { [impliedOptionValues]: true };
      }
      this.implied = Object.assign(this.implied || {}, newImplied);
      return this;
    }
    /**
     * Set environment variable to check for option value.
     *
     * An environment variable is only used if when processed the current option value is
     * undefined, or the source of the current value is 'default' or 'config' or 'env'.
     *
     * @param {string} name
     * @return {Option}
     */
    env(name) {
      this.envVar = name;
      return this;
    }
    /**
     * Set the custom handler for processing CLI option arguments into option values.
     *
     * @param {Function} [fn]
     * @return {Option}
     */
    argParser(fn) {
      this.parseArg = fn;
      return this;
    }
    /**
     * Whether the option is mandatory and must have a value after parsing.
     *
     * @param {boolean} [mandatory=true]
     * @return {Option}
     */
    makeOptionMandatory(mandatory = true) {
      this.mandatory = !!mandatory;
      return this;
    }
    /**
     * Hide option in help.
     *
     * @param {boolean} [hide=true]
     * @return {Option}
     */
    hideHelp(hide = true) {
      this.hidden = !!hide;
      return this;
    }
    /**
     * @package
     */
    _collectValue(value, previous) {
      if (previous === this.defaultValue || !Array.isArray(previous)) {
        return [value];
      }
      previous.push(value);
      return previous;
    }
    /**
     * Only allow option value to be one of choices.
     *
     * @param {string[]} values
     * @return {Option}
     */
    choices(values) {
      this.argChoices = values.slice();
      this.parseArg = (arg, previous) => {
        if (!this.argChoices.includes(arg)) {
          throw new InvalidArgumentError2(
            `Allowed choices are ${this.argChoices.join(", ")}.`
          );
        }
        if (this.variadic) {
          return this._collectValue(arg, previous);
        }
        return arg;
      };
      return this;
    }
    /**
     * Return option name.
     *
     * @return {string}
     */
    name() {
      if (this.long) {
        return this.long.replace(/^--/, "");
      }
      return this.short.replace(/^-/, "");
    }
    /**
     * Return option name, in a camelcase format that can be used
     * as an object attribute key.
     *
     * @return {string}
     */
    attributeName() {
      if (this.negate) {
        return camelcase(this.name().replace(/^no-/, ""));
      }
      return camelcase(this.name());
    }
    /**
     * Set the help group heading.
     *
     * @param {string} heading
     * @return {Option}
     */
    helpGroup(heading) {
      this.helpGroupHeading = heading;
      return this;
    }
    /**
     * Check if `arg` matches the short or long flag.
     *
     * @param {string} arg
     * @return {boolean}
     * @package
     */
    is(arg) {
      return this.short === arg || this.long === arg;
    }
    /**
     * Return whether a boolean option.
     *
     * Options are one of boolean, negated, required argument, or optional argument.
     *
     * @return {boolean}
     * @package
     */
    isBoolean() {
      return !this.required && !this.optional && !this.negate;
    }
  }
  class DualOptions {
    /**
     * @param {Option[]} options
     */
    constructor(options) {
      this.positiveOptions = /* @__PURE__ */ new Map();
      this.negativeOptions = /* @__PURE__ */ new Map();
      this.dualOptions = /* @__PURE__ */ new Set();
      options.forEach((option2) => {
        if (option2.negate) {
          this.negativeOptions.set(option2.attributeName(), option2);
        } else {
          this.positiveOptions.set(option2.attributeName(), option2);
        }
      });
      this.negativeOptions.forEach((value, key) => {
        if (this.positiveOptions.has(key)) {
          this.dualOptions.add(key);
        }
      });
    }
    /**
     * Did the value come from the option, and not from possible matching dual option?
     *
     * @param {*} value
     * @param {Option} option
     * @returns {boolean}
     */
    valueFromOption(value, option2) {
      const optionKey = option2.attributeName();
      if (!this.dualOptions.has(optionKey)) return true;
      const preset = this.negativeOptions.get(optionKey).presetArg;
      const negativeValue = preset !== void 0 ? preset : false;
      return option2.negate === (negativeValue === value);
    }
  }
  function camelcase(str) {
    return str.split("-").reduce((str2, word) => {
      return str2 + word[0].toUpperCase() + word.slice(1);
    });
  }
  function splitOptionFlags(flags) {
    let shortFlag;
    let longFlag;
    const shortFlagExp = /^-[^-]$/;
    const longFlagExp = /^--[^-]/;
    const flagParts = flags.split(/[ |,]+/).concat("guard");
    if (shortFlagExp.test(flagParts[0])) shortFlag = flagParts.shift();
    if (longFlagExp.test(flagParts[0])) longFlag = flagParts.shift();
    if (!shortFlag && shortFlagExp.test(flagParts[0]))
      shortFlag = flagParts.shift();
    if (!shortFlag && longFlagExp.test(flagParts[0])) {
      shortFlag = longFlag;
      longFlag = flagParts.shift();
    }
    if (flagParts[0].startsWith("-")) {
      const unsupportedFlag = flagParts[0];
      const baseError = `option creation failed due to '${unsupportedFlag}' in option flags '${flags}'`;
      if (/^-[^-][^-]/.test(unsupportedFlag))
        throw new Error(
          `${baseError}
- a short flag is a single dash and a single character
  - either use a single dash and a single character (for a short flag)
  - or use a double dash for a long option (and can have two, like '--ws, --workspace')`
        );
      if (shortFlagExp.test(unsupportedFlag))
        throw new Error(`${baseError}
- too many short flags`);
      if (longFlagExp.test(unsupportedFlag))
        throw new Error(`${baseError}
- too many long flags`);
      throw new Error(`${baseError}
- unrecognised flag format`);
    }
    if (shortFlag === void 0 && longFlag === void 0)
      throw new Error(
        `option creation failed due to no flags found in '${flags}'.`
      );
    return { shortFlag, longFlag };
  }
  option.Option = Option2;
  option.DualOptions = DualOptions;
  return option;
}
var suggestSimilar = {};
var hasRequiredSuggestSimilar;
function requireSuggestSimilar() {
  if (hasRequiredSuggestSimilar) return suggestSimilar;
  hasRequiredSuggestSimilar = 1;
  const maxDistance = 3;
  function editDistance(a, b) {
    if (Math.abs(a.length - b.length) > maxDistance)
      return Math.max(a.length, b.length);
    const d = [];
    for (let i = 0; i <= a.length; i++) {
      d[i] = [i];
    }
    for (let j = 0; j <= b.length; j++) {
      d[0][j] = j;
    }
    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        let cost = 1;
        if (a[i - 1] === b[j - 1]) {
          cost = 0;
        } else {
          cost = 1;
        }
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          // deletion
          d[i][j - 1] + 1,
          // insertion
          d[i - 1][j - 1] + cost
          // substitution
        );
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        }
      }
    }
    return d[a.length][b.length];
  }
  function suggestSimilar$1(word, candidates) {
    if (!candidates || candidates.length === 0) return "";
    candidates = Array.from(new Set(candidates));
    const searchingOptions = word.startsWith("--");
    if (searchingOptions) {
      word = word.slice(2);
      candidates = candidates.map((candidate) => candidate.slice(2));
    }
    let similar = [];
    let bestDistance = maxDistance;
    const minSimilarity = 0.4;
    candidates.forEach((candidate) => {
      if (candidate.length <= 1) return;
      const distance = editDistance(word, candidate);
      const length = Math.max(word.length, candidate.length);
      const similarity = (length - distance) / length;
      if (similarity > minSimilarity) {
        if (distance < bestDistance) {
          bestDistance = distance;
          similar = [candidate];
        } else if (distance === bestDistance) {
          similar.push(candidate);
        }
      }
    });
    similar.sort((a, b) => a.localeCompare(b));
    if (searchingOptions) {
      similar = similar.map((candidate) => `--${candidate}`);
    }
    if (similar.length > 1) {
      return `
(Did you mean one of ${similar.join(", ")}?)`;
    }
    if (similar.length === 1) {
      return `
(Did you mean ${similar[0]}?)`;
    }
    return "";
  }
  suggestSimilar.suggestSimilar = suggestSimilar$1;
  return suggestSimilar;
}
var hasRequiredCommand;
function requireCommand() {
  if (hasRequiredCommand) return command;
  hasRequiredCommand = 1;
  const EventEmitter = require$$0$1.EventEmitter;
  const childProcess = require$$1;
  const path2 = require$$2;
  const fs2 = require$$3;
  const process2 = require$$4;
  const { Argument: Argument2, humanReadableArgName } = requireArgument();
  const { CommanderError: CommanderError2 } = requireError$1();
  const { Help: Help2, stripColor } = requireHelp();
  const { Option: Option2, DualOptions } = requireOption();
  const { suggestSimilar: suggestSimilar2 } = requireSuggestSimilar();
  class Command2 extends EventEmitter {
    /**
     * Initialize a new `Command`.
     *
     * @param {string} [name]
     */
    constructor(name) {
      super();
      this.commands = [];
      this.options = [];
      this.parent = null;
      this._allowUnknownOption = false;
      this._allowExcessArguments = false;
      this.registeredArguments = [];
      this._args = this.registeredArguments;
      this.args = [];
      this.rawArgs = [];
      this.processedArgs = [];
      this._scriptPath = null;
      this._name = name || "";
      this._optionValues = {};
      this._optionValueSources = {};
      this._storeOptionsAsProperties = false;
      this._actionHandler = null;
      this._executableHandler = false;
      this._executableFile = null;
      this._executableDir = null;
      this._defaultCommandName = null;
      this._exitCallback = null;
      this._aliases = [];
      this._combineFlagAndOptionalValue = true;
      this._description = "";
      this._summary = "";
      this._argsDescription = void 0;
      this._enablePositionalOptions = false;
      this._passThroughOptions = false;
      this._lifeCycleHooks = {};
      this._showHelpAfterError = false;
      this._showSuggestionAfterError = true;
      this._savedState = null;
      this._outputConfiguration = {
        writeOut: (str) => process2.stdout.write(str),
        writeErr: (str) => process2.stderr.write(str),
        outputError: (str, write) => write(str),
        getOutHelpWidth: () => process2.stdout.isTTY ? process2.stdout.columns : void 0,
        getErrHelpWidth: () => process2.stderr.isTTY ? process2.stderr.columns : void 0,
        getOutHasColors: () => useColor() ?? (process2.stdout.isTTY && process2.stdout.hasColors?.()),
        getErrHasColors: () => useColor() ?? (process2.stderr.isTTY && process2.stderr.hasColors?.()),
        stripColor: (str) => stripColor(str)
      };
      this._hidden = false;
      this._helpOption = void 0;
      this._addImplicitHelpCommand = void 0;
      this._helpCommand = void 0;
      this._helpConfiguration = {};
      this._helpGroupHeading = void 0;
      this._defaultCommandGroup = void 0;
      this._defaultOptionGroup = void 0;
    }
    /**
     * Copy settings that are useful to have in common across root command and subcommands.
     *
     * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
     *
     * @param {Command} sourceCommand
     * @return {Command} `this` command for chaining
     */
    copyInheritedSettings(sourceCommand) {
      this._outputConfiguration = sourceCommand._outputConfiguration;
      this._helpOption = sourceCommand._helpOption;
      this._helpCommand = sourceCommand._helpCommand;
      this._helpConfiguration = sourceCommand._helpConfiguration;
      this._exitCallback = sourceCommand._exitCallback;
      this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
      this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
      this._allowExcessArguments = sourceCommand._allowExcessArguments;
      this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
      this._showHelpAfterError = sourceCommand._showHelpAfterError;
      this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
      return this;
    }
    /**
     * @returns {Command[]}
     * @private
     */
    _getCommandAndAncestors() {
      const result = [];
      for (let command2 = this; command2; command2 = command2.parent) {
        result.push(command2);
      }
      return result;
    }
    /**
     * Define a command.
     *
     * There are two styles of command: pay attention to where to put the description.
     *
     * @example
     * // Command implemented using action handler (description is supplied separately to `.command`)
     * program
     *   .command('clone <source> [destination]')
     *   .description('clone a repository into a newly created directory')
     *   .action((source, destination) => {
     *     console.log('clone command called');
     *   });
     *
     * // Command implemented using separate executable file (description is second parameter to `.command`)
     * program
     *   .command('start <service>', 'start named service')
     *   .command('stop [service]', 'stop named service, or all if no name supplied');
     *
     * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
     * @param {(object | string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
     * @param {object} [execOpts] - configuration options (for executable)
     * @return {Command} returns new command for action handler, or `this` for executable command
     */
    command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
      let desc = actionOptsOrExecDesc;
      let opts = execOpts;
      if (typeof desc === "object" && desc !== null) {
        opts = desc;
        desc = null;
      }
      opts = opts || {};
      const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
      const cmd = this.createCommand(name);
      if (desc) {
        cmd.description(desc);
        cmd._executableHandler = true;
      }
      if (opts.isDefault) this._defaultCommandName = cmd._name;
      cmd._hidden = !!(opts.noHelp || opts.hidden);
      cmd._executableFile = opts.executableFile || null;
      if (args) cmd.arguments(args);
      this._registerCommand(cmd);
      cmd.parent = this;
      cmd.copyInheritedSettings(this);
      if (desc) return this;
      return cmd;
    }
    /**
     * Factory routine to create a new unattached command.
     *
     * See .command() for creating an attached subcommand, which uses this routine to
     * create the command. You can override createCommand to customise subcommands.
     *
     * @param {string} [name]
     * @return {Command} new command
     */
    createCommand(name) {
      return new Command2(name);
    }
    /**
     * You can customise the help with a subclass of Help by overriding createHelp,
     * or by overriding Help properties using configureHelp().
     *
     * @return {Help}
     */
    createHelp() {
      return Object.assign(new Help2(), this.configureHelp());
    }
    /**
     * You can customise the help by overriding Help properties using configureHelp(),
     * or with a subclass of Help by overriding createHelp().
     *
     * @param {object} [configuration] - configuration options
     * @return {(Command | object)} `this` command for chaining, or stored configuration
     */
    configureHelp(configuration) {
      if (configuration === void 0) return this._helpConfiguration;
      this._helpConfiguration = configuration;
      return this;
    }
    /**
     * The default output goes to stdout and stderr. You can customise this for special
     * applications. You can also customise the display of errors by overriding outputError.
     *
     * The configuration properties are all functions:
     *
     *     // change how output being written, defaults to stdout and stderr
     *     writeOut(str)
     *     writeErr(str)
     *     // change how output being written for errors, defaults to writeErr
     *     outputError(str, write) // used for displaying errors and not used for displaying help
     *     // specify width for wrapping help
     *     getOutHelpWidth()
     *     getErrHelpWidth()
     *     // color support, currently only used with Help
     *     getOutHasColors()
     *     getErrHasColors()
     *     stripColor() // used to remove ANSI escape codes if output does not have colors
     *
     * @param {object} [configuration] - configuration options
     * @return {(Command | object)} `this` command for chaining, or stored configuration
     */
    configureOutput(configuration) {
      if (configuration === void 0) return this._outputConfiguration;
      this._outputConfiguration = {
        ...this._outputConfiguration,
        ...configuration
      };
      return this;
    }
    /**
     * Display the help or a custom message after an error occurs.
     *
     * @param {(boolean|string)} [displayHelp]
     * @return {Command} `this` command for chaining
     */
    showHelpAfterError(displayHelp = true) {
      if (typeof displayHelp !== "string") displayHelp = !!displayHelp;
      this._showHelpAfterError = displayHelp;
      return this;
    }
    /**
     * Display suggestion of similar commands for unknown commands, or options for unknown options.
     *
     * @param {boolean} [displaySuggestion]
     * @return {Command} `this` command for chaining
     */
    showSuggestionAfterError(displaySuggestion = true) {
      this._showSuggestionAfterError = !!displaySuggestion;
      return this;
    }
    /**
     * Add a prepared subcommand.
     *
     * See .command() for creating an attached subcommand which inherits settings from its parent.
     *
     * @param {Command} cmd - new subcommand
     * @param {object} [opts] - configuration options
     * @return {Command} `this` command for chaining
     */
    addCommand(cmd, opts) {
      if (!cmd._name) {
        throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
      }
      opts = opts || {};
      if (opts.isDefault) this._defaultCommandName = cmd._name;
      if (opts.noHelp || opts.hidden) cmd._hidden = true;
      this._registerCommand(cmd);
      cmd.parent = this;
      cmd._checkForBrokenPassThrough();
      return this;
    }
    /**
     * Factory routine to create a new unattached argument.
     *
     * See .argument() for creating an attached argument, which uses this routine to
     * create the argument. You can override createArgument to return a custom argument.
     *
     * @param {string} name
     * @param {string} [description]
     * @return {Argument} new argument
     */
    createArgument(name, description) {
      return new Argument2(name, description);
    }
    /**
     * Define argument syntax for command.
     *
     * The default is that the argument is required, and you can explicitly
     * indicate this with <> around the name. Put [] around the name for an optional argument.
     *
     * @example
     * program.argument('<input-file>');
     * program.argument('[output-file]');
     *
     * @param {string} name
     * @param {string} [description]
     * @param {(Function|*)} [parseArg] - custom argument processing function or default value
     * @param {*} [defaultValue]
     * @return {Command} `this` command for chaining
     */
    argument(name, description, parseArg, defaultValue) {
      const argument2 = this.createArgument(name, description);
      if (typeof parseArg === "function") {
        argument2.default(defaultValue).argParser(parseArg);
      } else {
        argument2.default(parseArg);
      }
      this.addArgument(argument2);
      return this;
    }
    /**
     * Define argument syntax for command, adding multiple at once (without descriptions).
     *
     * See also .argument().
     *
     * @example
     * program.arguments('<cmd> [env]');
     *
     * @param {string} names
     * @return {Command} `this` command for chaining
     */
    arguments(names) {
      names.trim().split(/ +/).forEach((detail) => {
        this.argument(detail);
      });
      return this;
    }
    /**
     * Define argument syntax for command, adding a prepared argument.
     *
     * @param {Argument} argument
     * @return {Command} `this` command for chaining
     */
    addArgument(argument2) {
      const previousArgument = this.registeredArguments.slice(-1)[0];
      if (previousArgument?.variadic) {
        throw new Error(
          `only the last argument can be variadic '${previousArgument.name()}'`
        );
      }
      if (argument2.required && argument2.defaultValue !== void 0 && argument2.parseArg === void 0) {
        throw new Error(
          `a default value for a required argument is never used: '${argument2.name()}'`
        );
      }
      this.registeredArguments.push(argument2);
      return this;
    }
    /**
     * Customise or override default help command. By default a help command is automatically added if your command has subcommands.
     *
     * @example
     *    program.helpCommand('help [cmd]');
     *    program.helpCommand('help [cmd]', 'show help');
     *    program.helpCommand(false); // suppress default help command
     *    program.helpCommand(true); // add help command even if no subcommands
     *
     * @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
     * @param {string} [description] - custom description
     * @return {Command} `this` command for chaining
     */
    helpCommand(enableOrNameAndArgs, description) {
      if (typeof enableOrNameAndArgs === "boolean") {
        this._addImplicitHelpCommand = enableOrNameAndArgs;
        if (enableOrNameAndArgs && this._defaultCommandGroup) {
          this._initCommandGroup(this._getHelpCommand());
        }
        return this;
      }
      const nameAndArgs = enableOrNameAndArgs ?? "help [command]";
      const [, helpName, helpArgs] = nameAndArgs.match(/([^ ]+) *(.*)/);
      const helpDescription = description ?? "display help for command";
      const helpCommand = this.createCommand(helpName);
      helpCommand.helpOption(false);
      if (helpArgs) helpCommand.arguments(helpArgs);
      if (helpDescription) helpCommand.description(helpDescription);
      this._addImplicitHelpCommand = true;
      this._helpCommand = helpCommand;
      if (enableOrNameAndArgs || description) this._initCommandGroup(helpCommand);
      return this;
    }
    /**
     * Add prepared custom help command.
     *
     * @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
     * @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
     * @return {Command} `this` command for chaining
     */
    addHelpCommand(helpCommand, deprecatedDescription) {
      if (typeof helpCommand !== "object") {
        this.helpCommand(helpCommand, deprecatedDescription);
        return this;
      }
      this._addImplicitHelpCommand = true;
      this._helpCommand = helpCommand;
      this._initCommandGroup(helpCommand);
      return this;
    }
    /**
     * Lazy create help command.
     *
     * @return {(Command|null)}
     * @package
     */
    _getHelpCommand() {
      const hasImplicitHelpCommand = this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"));
      if (hasImplicitHelpCommand) {
        if (this._helpCommand === void 0) {
          this.helpCommand(void 0, void 0);
        }
        return this._helpCommand;
      }
      return null;
    }
    /**
     * Add hook for life cycle event.
     *
     * @param {string} event
     * @param {Function} listener
     * @return {Command} `this` command for chaining
     */
    hook(event, listener) {
      const allowedValues = ["preSubcommand", "preAction", "postAction"];
      if (!allowedValues.includes(event)) {
        throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
      }
      if (this._lifeCycleHooks[event]) {
        this._lifeCycleHooks[event].push(listener);
      } else {
        this._lifeCycleHooks[event] = [listener];
      }
      return this;
    }
    /**
     * Register callback to use as replacement for calling process.exit.
     *
     * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
     * @return {Command} `this` command for chaining
     */
    exitOverride(fn) {
      if (fn) {
        this._exitCallback = fn;
      } else {
        this._exitCallback = (err) => {
          if (err.code !== "commander.executeSubCommandAsync") {
            throw err;
          }
        };
      }
      return this;
    }
    /**
     * Call process.exit, and _exitCallback if defined.
     *
     * @param {number} exitCode exit code for using with process.exit
     * @param {string} code an id string representing the error
     * @param {string} message human-readable description of the error
     * @return never
     * @private
     */
    _exit(exitCode, code, message) {
      if (this._exitCallback) {
        this._exitCallback(new CommanderError2(exitCode, code, message));
      }
      process2.exit(exitCode);
    }
    /**
     * Register callback `fn` for the command.
     *
     * @example
     * program
     *   .command('serve')
     *   .description('start service')
     *   .action(function() {
     *      // do work here
     *   });
     *
     * @param {Function} fn
     * @return {Command} `this` command for chaining
     */
    action(fn) {
      const listener = (args) => {
        const expectedArgsCount = this.registeredArguments.length;
        const actionArgs = args.slice(0, expectedArgsCount);
        if (this._storeOptionsAsProperties) {
          actionArgs[expectedArgsCount] = this;
        } else {
          actionArgs[expectedArgsCount] = this.opts();
        }
        actionArgs.push(this);
        return fn.apply(this, actionArgs);
      };
      this._actionHandler = listener;
      return this;
    }
    /**
     * Factory routine to create a new unattached option.
     *
     * See .option() for creating an attached option, which uses this routine to
     * create the option. You can override createOption to return a custom option.
     *
     * @param {string} flags
     * @param {string} [description]
     * @return {Option} new option
     */
    createOption(flags, description) {
      return new Option2(flags, description);
    }
    /**
     * Wrap parseArgs to catch 'commander.invalidArgument'.
     *
     * @param {(Option | Argument)} target
     * @param {string} value
     * @param {*} previous
     * @param {string} invalidArgumentMessage
     * @private
     */
    _callParseArg(target, value, previous, invalidArgumentMessage) {
      try {
        return target.parseArg(value, previous);
      } catch (err) {
        if (err.code === "commander.invalidArgument") {
          const message = `${invalidArgumentMessage} ${err.message}`;
          this.error(message, { exitCode: err.exitCode, code: err.code });
        }
        throw err;
      }
    }
    /**
     * Check for option flag conflicts.
     * Register option if no conflicts found, or throw on conflict.
     *
     * @param {Option} option
     * @private
     */
    _registerOption(option2) {
      const matchingOption = option2.short && this._findOption(option2.short) || option2.long && this._findOption(option2.long);
      if (matchingOption) {
        const matchingFlag = option2.long && this._findOption(option2.long) ? option2.long : option2.short;
        throw new Error(`Cannot add option '${option2.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
      }
      this._initOptionGroup(option2);
      this.options.push(option2);
    }
    /**
     * Check for command name and alias conflicts with existing commands.
     * Register command if no conflicts found, or throw on conflict.
     *
     * @param {Command} command
     * @private
     */
    _registerCommand(command2) {
      const knownBy = (cmd) => {
        return [cmd.name()].concat(cmd.aliases());
      };
      const alreadyUsed = knownBy(command2).find(
        (name) => this._findCommand(name)
      );
      if (alreadyUsed) {
        const existingCmd = knownBy(this._findCommand(alreadyUsed)).join("|");
        const newCmd = knownBy(command2).join("|");
        throw new Error(
          `cannot add command '${newCmd}' as already have command '${existingCmd}'`
        );
      }
      this._initCommandGroup(command2);
      this.commands.push(command2);
    }
    /**
     * Add an option.
     *
     * @param {Option} option
     * @return {Command} `this` command for chaining
     */
    addOption(option2) {
      this._registerOption(option2);
      const oname = option2.name();
      const name = option2.attributeName();
      if (option2.negate) {
        const positiveLongFlag = option2.long.replace(/^--no-/, "--");
        if (!this._findOption(positiveLongFlag)) {
          this.setOptionValueWithSource(
            name,
            option2.defaultValue === void 0 ? true : option2.defaultValue,
            "default"
          );
        }
      } else if (option2.defaultValue !== void 0) {
        this.setOptionValueWithSource(name, option2.defaultValue, "default");
      }
      const handleOptionValue = (val, invalidValueMessage, valueSource) => {
        if (val == null && option2.presetArg !== void 0) {
          val = option2.presetArg;
        }
        const oldValue = this.getOptionValue(name);
        if (val !== null && option2.parseArg) {
          val = this._callParseArg(option2, val, oldValue, invalidValueMessage);
        } else if (val !== null && option2.variadic) {
          val = option2._collectValue(val, oldValue);
        }
        if (val == null) {
          if (option2.negate) {
            val = false;
          } else if (option2.isBoolean() || option2.optional) {
            val = true;
          } else {
            val = "";
          }
        }
        this.setOptionValueWithSource(name, val, valueSource);
      };
      this.on("option:" + oname, (val) => {
        const invalidValueMessage = `error: option '${option2.flags}' argument '${val}' is invalid.`;
        handleOptionValue(val, invalidValueMessage, "cli");
      });
      if (option2.envVar) {
        this.on("optionEnv:" + oname, (val) => {
          const invalidValueMessage = `error: option '${option2.flags}' value '${val}' from env '${option2.envVar}' is invalid.`;
          handleOptionValue(val, invalidValueMessage, "env");
        });
      }
      return this;
    }
    /**
     * Internal implementation shared by .option() and .requiredOption()
     *
     * @return {Command} `this` command for chaining
     * @private
     */
    _optionEx(config, flags, description, fn, defaultValue) {
      if (typeof flags === "object" && flags instanceof Option2) {
        throw new Error(
          "To add an Option object use addOption() instead of option() or requiredOption()"
        );
      }
      const option2 = this.createOption(flags, description);
      option2.makeOptionMandatory(!!config.mandatory);
      if (typeof fn === "function") {
        option2.default(defaultValue).argParser(fn);
      } else if (fn instanceof RegExp) {
        const regex = fn;
        fn = (val, def) => {
          const m = regex.exec(val);
          return m ? m[0] : def;
        };
        option2.default(defaultValue).argParser(fn);
      } else {
        option2.default(fn);
      }
      return this.addOption(option2);
    }
    /**
     * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
     *
     * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
     * option-argument is indicated by `<>` and an optional option-argument by `[]`.
     *
     * See the README for more details, and see also addOption() and requiredOption().
     *
     * @example
     * program
     *     .option('-p, --pepper', 'add pepper')
     *     .option('--pt, --pizza-type <TYPE>', 'type of pizza') // required option-argument
     *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
     *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
     *
     * @param {string} flags
     * @param {string} [description]
     * @param {(Function|*)} [parseArg] - custom option processing function or default value
     * @param {*} [defaultValue]
     * @return {Command} `this` command for chaining
     */
    option(flags, description, parseArg, defaultValue) {
      return this._optionEx({}, flags, description, parseArg, defaultValue);
    }
    /**
     * Add a required option which must have a value after parsing. This usually means
     * the option must be specified on the command line. (Otherwise the same as .option().)
     *
     * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
     *
     * @param {string} flags
     * @param {string} [description]
     * @param {(Function|*)} [parseArg] - custom option processing function or default value
     * @param {*} [defaultValue]
     * @return {Command} `this` command for chaining
     */
    requiredOption(flags, description, parseArg, defaultValue) {
      return this._optionEx(
        { mandatory: true },
        flags,
        description,
        parseArg,
        defaultValue
      );
    }
    /**
     * Alter parsing of short flags with optional values.
     *
     * @example
     * // for `.option('-f,--flag [value]'):
     * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
     * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
     *
     * @param {boolean} [combine] - if `true` or omitted, an optional value can be specified directly after the flag.
     * @return {Command} `this` command for chaining
     */
    combineFlagAndOptionalValue(combine = true) {
      this._combineFlagAndOptionalValue = !!combine;
      return this;
    }
    /**
     * Allow unknown options on the command line.
     *
     * @param {boolean} [allowUnknown] - if `true` or omitted, no error will be thrown for unknown options.
     * @return {Command} `this` command for chaining
     */
    allowUnknownOption(allowUnknown = true) {
      this._allowUnknownOption = !!allowUnknown;
      return this;
    }
    /**
     * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
     *
     * @param {boolean} [allowExcess] - if `true` or omitted, no error will be thrown for excess arguments.
     * @return {Command} `this` command for chaining
     */
    allowExcessArguments(allowExcess = true) {
      this._allowExcessArguments = !!allowExcess;
      return this;
    }
    /**
     * Enable positional options. Positional means global options are specified before subcommands which lets
     * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
     * The default behaviour is non-positional and global options may appear anywhere on the command line.
     *
     * @param {boolean} [positional]
     * @return {Command} `this` command for chaining
     */
    enablePositionalOptions(positional = true) {
      this._enablePositionalOptions = !!positional;
      return this;
    }
    /**
     * Pass through options that come after command-arguments rather than treat them as command-options,
     * so actual command-options come before command-arguments. Turning this on for a subcommand requires
     * positional options to have been enabled on the program (parent commands).
     * The default behaviour is non-positional and options may appear before or after command-arguments.
     *
     * @param {boolean} [passThrough] for unknown options.
     * @return {Command} `this` command for chaining
     */
    passThroughOptions(passThrough = true) {
      this._passThroughOptions = !!passThrough;
      this._checkForBrokenPassThrough();
      return this;
    }
    /**
     * @private
     */
    _checkForBrokenPassThrough() {
      if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) {
        throw new Error(
          `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`
        );
      }
    }
    /**
     * Whether to store option values as properties on command object,
     * or store separately (specify false). In both cases the option values can be accessed using .opts().
     *
     * @param {boolean} [storeAsProperties=true]
     * @return {Command} `this` command for chaining
     */
    storeOptionsAsProperties(storeAsProperties = true) {
      if (this.options.length) {
        throw new Error("call .storeOptionsAsProperties() before adding options");
      }
      if (Object.keys(this._optionValues).length) {
        throw new Error(
          "call .storeOptionsAsProperties() before setting option values"
        );
      }
      this._storeOptionsAsProperties = !!storeAsProperties;
      return this;
    }
    /**
     * Retrieve option value.
     *
     * @param {string} key
     * @return {object} value
     */
    getOptionValue(key) {
      if (this._storeOptionsAsProperties) {
        return this[key];
      }
      return this._optionValues[key];
    }
    /**
     * Store option value.
     *
     * @param {string} key
     * @param {object} value
     * @return {Command} `this` command for chaining
     */
    setOptionValue(key, value) {
      return this.setOptionValueWithSource(key, value, void 0);
    }
    /**
     * Store option value and where the value came from.
     *
     * @param {string} key
     * @param {object} value
     * @param {string} source - expected values are default/config/env/cli/implied
     * @return {Command} `this` command for chaining
     */
    setOptionValueWithSource(key, value, source) {
      if (this._storeOptionsAsProperties) {
        this[key] = value;
      } else {
        this._optionValues[key] = value;
      }
      this._optionValueSources[key] = source;
      return this;
    }
    /**
     * Get source of option value.
     * Expected values are default | config | env | cli | implied
     *
     * @param {string} key
     * @return {string}
     */
    getOptionValueSource(key) {
      return this._optionValueSources[key];
    }
    /**
     * Get source of option value. See also .optsWithGlobals().
     * Expected values are default | config | env | cli | implied
     *
     * @param {string} key
     * @return {string}
     */
    getOptionValueSourceWithGlobals(key) {
      let source;
      this._getCommandAndAncestors().forEach((cmd) => {
        if (cmd.getOptionValueSource(key) !== void 0) {
          source = cmd.getOptionValueSource(key);
        }
      });
      return source;
    }
    /**
     * Get user arguments from implied or explicit arguments.
     * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
     *
     * @private
     */
    _prepareUserArgs(argv, parseOptions) {
      if (argv !== void 0 && !Array.isArray(argv)) {
        throw new Error("first parameter to parse must be array or undefined");
      }
      parseOptions = parseOptions || {};
      if (argv === void 0 && parseOptions.from === void 0) {
        if (process2.versions?.electron) {
          parseOptions.from = "electron";
        }
        const execArgv = process2.execArgv ?? [];
        if (execArgv.includes("-e") || execArgv.includes("--eval") || execArgv.includes("-p") || execArgv.includes("--print")) {
          parseOptions.from = "eval";
        }
      }
      if (argv === void 0) {
        argv = process2.argv;
      }
      this.rawArgs = argv.slice();
      let userArgs;
      switch (parseOptions.from) {
        case void 0:
        case "node":
          this._scriptPath = argv[1];
          userArgs = argv.slice(2);
          break;
        case "electron":
          if (process2.defaultApp) {
            this._scriptPath = argv[1];
            userArgs = argv.slice(2);
          } else {
            userArgs = argv.slice(1);
          }
          break;
        case "user":
          userArgs = argv.slice(0);
          break;
        case "eval":
          userArgs = argv.slice(1);
          break;
        default:
          throw new Error(
            `unexpected parse option { from: '${parseOptions.from}' }`
          );
      }
      if (!this._name && this._scriptPath)
        this.nameFromFilename(this._scriptPath);
      this._name = this._name || "program";
      return userArgs;
    }
    /**
     * Parse `argv`, setting options and invoking commands when defined.
     *
     * Use parseAsync instead of parse if any of your action handlers are async.
     *
     * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
     *
     * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
     * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
     * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
     * - `'user'`: just user arguments
     *
     * @example
     * program.parse(); // parse process.argv and auto-detect electron and special node flags
     * program.parse(process.argv); // assume argv[0] is app and argv[1] is script
     * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
     *
     * @param {string[]} [argv] - optional, defaults to process.argv
     * @param {object} [parseOptions] - optionally specify style of options with from: node/user/electron
     * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
     * @return {Command} `this` command for chaining
     */
    parse(argv, parseOptions) {
      this._prepareForParse();
      const userArgs = this._prepareUserArgs(argv, parseOptions);
      this._parseCommand([], userArgs);
      return this;
    }
    /**
     * Parse `argv`, setting options and invoking commands when defined.
     *
     * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
     *
     * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
     * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
     * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
     * - `'user'`: just user arguments
     *
     * @example
     * await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
     * await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
     * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
     *
     * @param {string[]} [argv]
     * @param {object} [parseOptions]
     * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
     * @return {Promise}
     */
    async parseAsync(argv, parseOptions) {
      this._prepareForParse();
      const userArgs = this._prepareUserArgs(argv, parseOptions);
      await this._parseCommand([], userArgs);
      return this;
    }
    _prepareForParse() {
      if (this._savedState === null) {
        this.saveStateBeforeParse();
      } else {
        this.restoreStateBeforeParse();
      }
    }
    /**
     * Called the first time parse is called to save state and allow a restore before subsequent calls to parse.
     * Not usually called directly, but available for subclasses to save their custom state.
     *
     * This is called in a lazy way. Only commands used in parsing chain will have state saved.
     */
    saveStateBeforeParse() {
      this._savedState = {
        // name is stable if supplied by author, but may be unspecified for root command and deduced during parsing
        _name: this._name,
        // option values before parse have default values (including false for negated options)
        // shallow clones
        _optionValues: { ...this._optionValues },
        _optionValueSources: { ...this._optionValueSources }
      };
    }
    /**
     * Restore state before parse for calls after the first.
     * Not usually called directly, but available for subclasses to save their custom state.
     *
     * This is called in a lazy way. Only commands used in parsing chain will have state restored.
     */
    restoreStateBeforeParse() {
      if (this._storeOptionsAsProperties)
        throw new Error(`Can not call parse again when storeOptionsAsProperties is true.
- either make a new Command for each call to parse, or stop storing options as properties`);
      this._name = this._savedState._name;
      this._scriptPath = null;
      this.rawArgs = [];
      this._optionValues = { ...this._savedState._optionValues };
      this._optionValueSources = { ...this._savedState._optionValueSources };
      this.args = [];
      this.processedArgs = [];
    }
    /**
     * Throw if expected executable is missing. Add lots of help for author.
     *
     * @param {string} executableFile
     * @param {string} executableDir
     * @param {string} subcommandName
     */
    _checkForMissingExecutable(executableFile, executableDir, subcommandName) {
      if (fs2.existsSync(executableFile)) return;
      const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
      const executableMissing = `'${executableFile}' does not exist
 - if '${subcommandName}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
      throw new Error(executableMissing);
    }
    /**
     * Execute a sub-command executable.
     *
     * @private
     */
    _executeSubCommand(subcommand, args) {
      args = args.slice();
      let launchWithNode = false;
      const sourceExt = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
      function findFile(baseDir, baseName) {
        const localBin = path2.resolve(baseDir, baseName);
        if (fs2.existsSync(localBin)) return localBin;
        if (sourceExt.includes(path2.extname(baseName))) return void 0;
        const foundExt = sourceExt.find(
          (ext) => fs2.existsSync(`${localBin}${ext}`)
        );
        if (foundExt) return `${localBin}${foundExt}`;
        return void 0;
      }
      this._checkForMissingMandatoryOptions();
      this._checkForConflictingOptions();
      let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
      let executableDir = this._executableDir || "";
      if (this._scriptPath) {
        let resolvedScriptPath;
        try {
          resolvedScriptPath = fs2.realpathSync(this._scriptPath);
        } catch {
          resolvedScriptPath = this._scriptPath;
        }
        executableDir = path2.resolve(
          path2.dirname(resolvedScriptPath),
          executableDir
        );
      }
      if (executableDir) {
        let localFile = findFile(executableDir, executableFile);
        if (!localFile && !subcommand._executableFile && this._scriptPath) {
          const legacyName = path2.basename(
            this._scriptPath,
            path2.extname(this._scriptPath)
          );
          if (legacyName !== this._name) {
            localFile = findFile(
              executableDir,
              `${legacyName}-${subcommand._name}`
            );
          }
        }
        executableFile = localFile || executableFile;
      }
      launchWithNode = sourceExt.includes(path2.extname(executableFile));
      let proc;
      if (process2.platform !== "win32") {
        if (launchWithNode) {
          args.unshift(executableFile);
          args = incrementNodeInspectorPort(process2.execArgv).concat(args);
          proc = childProcess.spawn(process2.argv[0], args, { stdio: "inherit" });
        } else {
          proc = childProcess.spawn(executableFile, args, { stdio: "inherit" });
        }
      } else {
        this._checkForMissingExecutable(
          executableFile,
          executableDir,
          subcommand._name
        );
        args.unshift(executableFile);
        args = incrementNodeInspectorPort(process2.execArgv).concat(args);
        proc = childProcess.spawn(process2.execPath, args, { stdio: "inherit" });
      }
      if (!proc.killed) {
        const signals = ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"];
        signals.forEach((signal) => {
          process2.on(signal, () => {
            if (proc.killed === false && proc.exitCode === null) {
              proc.kill(signal);
            }
          });
        });
      }
      const exitCallback = this._exitCallback;
      proc.on("close", (code) => {
        code = code ?? 1;
        if (!exitCallback) {
          process2.exit(code);
        } else {
          exitCallback(
            new CommanderError2(
              code,
              "commander.executeSubCommandAsync",
              "(close)"
            )
          );
        }
      });
      proc.on("error", (err) => {
        if (err.code === "ENOENT") {
          this._checkForMissingExecutable(
            executableFile,
            executableDir,
            subcommand._name
          );
        } else if (err.code === "EACCES") {
          throw new Error(`'${executableFile}' not executable`);
        }
        if (!exitCallback) {
          process2.exit(1);
        } else {
          const wrappedError = new CommanderError2(
            1,
            "commander.executeSubCommandAsync",
            "(error)"
          );
          wrappedError.nestedError = err;
          exitCallback(wrappedError);
        }
      });
      this.runningCommand = proc;
    }
    /**
     * @private
     */
    _dispatchSubcommand(commandName, operands, unknown) {
      const subCommand = this._findCommand(commandName);
      if (!subCommand) this.help({ error: true });
      subCommand._prepareForParse();
      let promiseChain;
      promiseChain = this._chainOrCallSubCommandHook(
        promiseChain,
        subCommand,
        "preSubcommand"
      );
      promiseChain = this._chainOrCall(promiseChain, () => {
        if (subCommand._executableHandler) {
          this._executeSubCommand(subCommand, operands.concat(unknown));
        } else {
          return subCommand._parseCommand(operands, unknown);
        }
      });
      return promiseChain;
    }
    /**
     * Invoke help directly if possible, or dispatch if necessary.
     * e.g. help foo
     *
     * @private
     */
    _dispatchHelpCommand(subcommandName) {
      if (!subcommandName) {
        this.help();
      }
      const subCommand = this._findCommand(subcommandName);
      if (subCommand && !subCommand._executableHandler) {
        subCommand.help();
      }
      return this._dispatchSubcommand(
        subcommandName,
        [],
        [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"]
      );
    }
    /**
     * Check this.args against expected this.registeredArguments.
     *
     * @private
     */
    _checkNumberOfArguments() {
      this.registeredArguments.forEach((arg, i) => {
        if (arg.required && this.args[i] == null) {
          this.missingArgument(arg.name());
        }
      });
      if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) {
        return;
      }
      if (this.args.length > this.registeredArguments.length) {
        this._excessArguments(this.args);
      }
    }
    /**
     * Process this.args using this.registeredArguments and save as this.processedArgs!
     *
     * @private
     */
    _processArguments() {
      const myParseArg = (argument2, value, previous) => {
        let parsedValue = value;
        if (value !== null && argument2.parseArg) {
          const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument2.name()}'.`;
          parsedValue = this._callParseArg(
            argument2,
            value,
            previous,
            invalidValueMessage
          );
        }
        return parsedValue;
      };
      this._checkNumberOfArguments();
      const processedArgs = [];
      this.registeredArguments.forEach((declaredArg, index) => {
        let value = declaredArg.defaultValue;
        if (declaredArg.variadic) {
          if (index < this.args.length) {
            value = this.args.slice(index);
            if (declaredArg.parseArg) {
              value = value.reduce((processed, v) => {
                return myParseArg(declaredArg, v, processed);
              }, declaredArg.defaultValue);
            }
          } else if (value === void 0) {
            value = [];
          }
        } else if (index < this.args.length) {
          value = this.args[index];
          if (declaredArg.parseArg) {
            value = myParseArg(declaredArg, value, declaredArg.defaultValue);
          }
        }
        processedArgs[index] = value;
      });
      this.processedArgs = processedArgs;
    }
    /**
     * Once we have a promise we chain, but call synchronously until then.
     *
     * @param {(Promise|undefined)} promise
     * @param {Function} fn
     * @return {(Promise|undefined)}
     * @private
     */
    _chainOrCall(promise, fn) {
      if (promise?.then && typeof promise.then === "function") {
        return promise.then(() => fn());
      }
      return fn();
    }
    /**
     *
     * @param {(Promise|undefined)} promise
     * @param {string} event
     * @return {(Promise|undefined)}
     * @private
     */
    _chainOrCallHooks(promise, event) {
      let result = promise;
      const hooks = [];
      this._getCommandAndAncestors().reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
        hookedCommand._lifeCycleHooks[event].forEach((callback) => {
          hooks.push({ hookedCommand, callback });
        });
      });
      if (event === "postAction") {
        hooks.reverse();
      }
      hooks.forEach((hookDetail) => {
        result = this._chainOrCall(result, () => {
          return hookDetail.callback(hookDetail.hookedCommand, this);
        });
      });
      return result;
    }
    /**
     *
     * @param {(Promise|undefined)} promise
     * @param {Command} subCommand
     * @param {string} event
     * @return {(Promise|undefined)}
     * @private
     */
    _chainOrCallSubCommandHook(promise, subCommand, event) {
      let result = promise;
      if (this._lifeCycleHooks[event] !== void 0) {
        this._lifeCycleHooks[event].forEach((hook) => {
          result = this._chainOrCall(result, () => {
            return hook(this, subCommand);
          });
        });
      }
      return result;
    }
    /**
     * Process arguments in context of this command.
     * Returns action result, in case it is a promise.
     *
     * @private
     */
    _parseCommand(operands, unknown) {
      const parsed = this.parseOptions(unknown);
      this._parseOptionsEnv();
      this._parseOptionsImplied();
      operands = operands.concat(parsed.operands);
      unknown = parsed.unknown;
      this.args = operands.concat(unknown);
      if (operands && this._findCommand(operands[0])) {
        return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
      }
      if (this._getHelpCommand() && operands[0] === this._getHelpCommand().name()) {
        return this._dispatchHelpCommand(operands[1]);
      }
      if (this._defaultCommandName) {
        this._outputHelpIfRequested(unknown);
        return this._dispatchSubcommand(
          this._defaultCommandName,
          operands,
          unknown
        );
      }
      if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
        this.help({ error: true });
      }
      this._outputHelpIfRequested(parsed.unknown);
      this._checkForMissingMandatoryOptions();
      this._checkForConflictingOptions();
      const checkForUnknownOptions = () => {
        if (parsed.unknown.length > 0) {
          this.unknownOption(parsed.unknown[0]);
        }
      };
      const commandEvent = `command:${this.name()}`;
      if (this._actionHandler) {
        checkForUnknownOptions();
        this._processArguments();
        let promiseChain;
        promiseChain = this._chainOrCallHooks(promiseChain, "preAction");
        promiseChain = this._chainOrCall(
          promiseChain,
          () => this._actionHandler(this.processedArgs)
        );
        if (this.parent) {
          promiseChain = this._chainOrCall(promiseChain, () => {
            this.parent.emit(commandEvent, operands, unknown);
          });
        }
        promiseChain = this._chainOrCallHooks(promiseChain, "postAction");
        return promiseChain;
      }
      if (this.parent?.listenerCount(commandEvent)) {
        checkForUnknownOptions();
        this._processArguments();
        this.parent.emit(commandEvent, operands, unknown);
      } else if (operands.length) {
        if (this._findCommand("*")) {
          return this._dispatchSubcommand("*", operands, unknown);
        }
        if (this.listenerCount("command:*")) {
          this.emit("command:*", operands, unknown);
        } else if (this.commands.length) {
          this.unknownCommand();
        } else {
          checkForUnknownOptions();
          this._processArguments();
        }
      } else if (this.commands.length) {
        checkForUnknownOptions();
        this.help({ error: true });
      } else {
        checkForUnknownOptions();
        this._processArguments();
      }
    }
    /**
     * Find matching command.
     *
     * @private
     * @return {Command | undefined}
     */
    _findCommand(name) {
      if (!name) return void 0;
      return this.commands.find(
        (cmd) => cmd._name === name || cmd._aliases.includes(name)
      );
    }
    /**
     * Return an option matching `arg` if any.
     *
     * @param {string} arg
     * @return {Option}
     * @package
     */
    _findOption(arg) {
      return this.options.find((option2) => option2.is(arg));
    }
    /**
     * Display an error message if a mandatory option does not have a value.
     * Called after checking for help flags in leaf subcommand.
     *
     * @private
     */
    _checkForMissingMandatoryOptions() {
      this._getCommandAndAncestors().forEach((cmd) => {
        cmd.options.forEach((anOption) => {
          if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) {
            cmd.missingMandatoryOptionValue(anOption);
          }
        });
      });
    }
    /**
     * Display an error message if conflicting options are used together in this.
     *
     * @private
     */
    _checkForConflictingLocalOptions() {
      const definedNonDefaultOptions = this.options.filter((option2) => {
        const optionKey = option2.attributeName();
        if (this.getOptionValue(optionKey) === void 0) {
          return false;
        }
        return this.getOptionValueSource(optionKey) !== "default";
      });
      const optionsWithConflicting = definedNonDefaultOptions.filter(
        (option2) => option2.conflictsWith.length > 0
      );
      optionsWithConflicting.forEach((option2) => {
        const conflictingAndDefined = definedNonDefaultOptions.find(
          (defined) => option2.conflictsWith.includes(defined.attributeName())
        );
        if (conflictingAndDefined) {
          this._conflictingOption(option2, conflictingAndDefined);
        }
      });
    }
    /**
     * Display an error message if conflicting options are used together.
     * Called after checking for help flags in leaf subcommand.
     *
     * @private
     */
    _checkForConflictingOptions() {
      this._getCommandAndAncestors().forEach((cmd) => {
        cmd._checkForConflictingLocalOptions();
      });
    }
    /**
     * Parse options from `argv` removing known options,
     * and return argv split into operands and unknown arguments.
     *
     * Side effects: modifies command by storing options. Does not reset state if called again.
     *
     * Examples:
     *
     *     argv => operands, unknown
     *     --known kkk op => [op], []
     *     op --known kkk => [op], []
     *     sub --unknown uuu op => [sub], [--unknown uuu op]
     *     sub -- --unknown uuu op => [sub --unknown uuu op], []
     *
     * @param {string[]} args
     * @return {{operands: string[], unknown: string[]}}
     */
    parseOptions(args) {
      const operands = [];
      const unknown = [];
      let dest = operands;
      function maybeOption(arg) {
        return arg.length > 1 && arg[0] === "-";
      }
      const negativeNumberArg = (arg) => {
        if (!/^-(\d+|\d*\.\d+)(e[+-]?\d+)?$/.test(arg)) return false;
        return !this._getCommandAndAncestors().some(
          (cmd) => cmd.options.map((opt) => opt.short).some((short) => /^-\d$/.test(short))
        );
      };
      let activeVariadicOption = null;
      let activeGroup = null;
      let i = 0;
      while (i < args.length || activeGroup) {
        const arg = activeGroup ?? args[i++];
        activeGroup = null;
        if (arg === "--") {
          if (dest === unknown) dest.push(arg);
          dest.push(...args.slice(i));
          break;
        }
        if (activeVariadicOption && (!maybeOption(arg) || negativeNumberArg(arg))) {
          this.emit(`option:${activeVariadicOption.name()}`, arg);
          continue;
        }
        activeVariadicOption = null;
        if (maybeOption(arg)) {
          const option2 = this._findOption(arg);
          if (option2) {
            if (option2.required) {
              const value = args[i++];
              if (value === void 0) this.optionMissingArgument(option2);
              this.emit(`option:${option2.name()}`, value);
            } else if (option2.optional) {
              let value = null;
              if (i < args.length && (!maybeOption(args[i]) || negativeNumberArg(args[i]))) {
                value = args[i++];
              }
              this.emit(`option:${option2.name()}`, value);
            } else {
              this.emit(`option:${option2.name()}`);
            }
            activeVariadicOption = option2.variadic ? option2 : null;
            continue;
          }
        }
        if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
          const option2 = this._findOption(`-${arg[1]}`);
          if (option2) {
            if (option2.required || option2.optional && this._combineFlagAndOptionalValue) {
              this.emit(`option:${option2.name()}`, arg.slice(2));
            } else {
              this.emit(`option:${option2.name()}`);
              activeGroup = `-${arg.slice(2)}`;
            }
            continue;
          }
        }
        if (/^--[^=]+=/.test(arg)) {
          const index = arg.indexOf("=");
          const option2 = this._findOption(arg.slice(0, index));
          if (option2 && (option2.required || option2.optional)) {
            this.emit(`option:${option2.name()}`, arg.slice(index + 1));
            continue;
          }
        }
        if (dest === operands && maybeOption(arg) && !(this.commands.length === 0 && negativeNumberArg(arg))) {
          dest = unknown;
        }
        if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
          if (this._findCommand(arg)) {
            operands.push(arg);
            unknown.push(...args.slice(i));
            break;
          } else if (this._getHelpCommand() && arg === this._getHelpCommand().name()) {
            operands.push(arg, ...args.slice(i));
            break;
          } else if (this._defaultCommandName) {
            unknown.push(arg, ...args.slice(i));
            break;
          }
        }
        if (this._passThroughOptions) {
          dest.push(arg, ...args.slice(i));
          break;
        }
        dest.push(arg);
      }
      return { operands, unknown };
    }
    /**
     * Return an object containing local option values as key-value pairs.
     *
     * @return {object}
     */
    opts() {
      if (this._storeOptionsAsProperties) {
        const result = {};
        const len = this.options.length;
        for (let i = 0; i < len; i++) {
          const key = this.options[i].attributeName();
          result[key] = key === this._versionOptionName ? this._version : this[key];
        }
        return result;
      }
      return this._optionValues;
    }
    /**
     * Return an object containing merged local and global option values as key-value pairs.
     *
     * @return {object}
     */
    optsWithGlobals() {
      return this._getCommandAndAncestors().reduce(
        (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
        {}
      );
    }
    /**
     * Display error message and exit (or call exitOverride).
     *
     * @param {string} message
     * @param {object} [errorOptions]
     * @param {string} [errorOptions.code] - an id string representing the error
     * @param {number} [errorOptions.exitCode] - used with process.exit
     */
    error(message, errorOptions) {
      this._outputConfiguration.outputError(
        `${message}
`,
        this._outputConfiguration.writeErr
      );
      if (typeof this._showHelpAfterError === "string") {
        this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
      } else if (this._showHelpAfterError) {
        this._outputConfiguration.writeErr("\n");
        this.outputHelp({ error: true });
      }
      const config = errorOptions || {};
      const exitCode = config.exitCode || 1;
      const code = config.code || "commander.error";
      this._exit(exitCode, code, message);
    }
    /**
     * Apply any option related environment variables, if option does
     * not have a value from cli or client code.
     *
     * @private
     */
    _parseOptionsEnv() {
      this.options.forEach((option2) => {
        if (option2.envVar && option2.envVar in process2.env) {
          const optionKey = option2.attributeName();
          if (this.getOptionValue(optionKey) === void 0 || ["default", "config", "env"].includes(
            this.getOptionValueSource(optionKey)
          )) {
            if (option2.required || option2.optional) {
              this.emit(`optionEnv:${option2.name()}`, process2.env[option2.envVar]);
            } else {
              this.emit(`optionEnv:${option2.name()}`);
            }
          }
        }
      });
    }
    /**
     * Apply any implied option values, if option is undefined or default value.
     *
     * @private
     */
    _parseOptionsImplied() {
      const dualHelper = new DualOptions(this.options);
      const hasCustomOptionValue = (optionKey) => {
        return this.getOptionValue(optionKey) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
      };
      this.options.filter(
        (option2) => option2.implied !== void 0 && hasCustomOptionValue(option2.attributeName()) && dualHelper.valueFromOption(
          this.getOptionValue(option2.attributeName()),
          option2
        )
      ).forEach((option2) => {
        Object.keys(option2.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
          this.setOptionValueWithSource(
            impliedKey,
            option2.implied[impliedKey],
            "implied"
          );
        });
      });
    }
    /**
     * Argument `name` is missing.
     *
     * @param {string} name
     * @private
     */
    missingArgument(name) {
      const message = `error: missing required argument '${name}'`;
      this.error(message, { code: "commander.missingArgument" });
    }
    /**
     * `Option` is missing an argument.
     *
     * @param {Option} option
     * @private
     */
    optionMissingArgument(option2) {
      const message = `error: option '${option2.flags}' argument missing`;
      this.error(message, { code: "commander.optionMissingArgument" });
    }
    /**
     * `Option` does not have a value, and is a mandatory option.
     *
     * @param {Option} option
     * @private
     */
    missingMandatoryOptionValue(option2) {
      const message = `error: required option '${option2.flags}' not specified`;
      this.error(message, { code: "commander.missingMandatoryOptionValue" });
    }
    /**
     * `Option` conflicts with another option.
     *
     * @param {Option} option
     * @param {Option} conflictingOption
     * @private
     */
    _conflictingOption(option2, conflictingOption) {
      const findBestOptionFromValue = (option3) => {
        const optionKey = option3.attributeName();
        const optionValue = this.getOptionValue(optionKey);
        const negativeOption = this.options.find(
          (target) => target.negate && optionKey === target.attributeName()
        );
        const positiveOption = this.options.find(
          (target) => !target.negate && optionKey === target.attributeName()
        );
        if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) {
          return negativeOption;
        }
        return positiveOption || option3;
      };
      const getErrorMessage = (option3) => {
        const bestOption = findBestOptionFromValue(option3);
        const optionKey = bestOption.attributeName();
        const source = this.getOptionValueSource(optionKey);
        if (source === "env") {
          return `environment variable '${bestOption.envVar}'`;
        }
        return `option '${bestOption.flags}'`;
      };
      const message = `error: ${getErrorMessage(option2)} cannot be used with ${getErrorMessage(conflictingOption)}`;
      this.error(message, { code: "commander.conflictingOption" });
    }
    /**
     * Unknown option `flag`.
     *
     * @param {string} flag
     * @private
     */
    unknownOption(flag) {
      if (this._allowUnknownOption) return;
      let suggestion = "";
      if (flag.startsWith("--") && this._showSuggestionAfterError) {
        let candidateFlags = [];
        let command2 = this;
        do {
          const moreFlags = command2.createHelp().visibleOptions(command2).filter((option2) => option2.long).map((option2) => option2.long);
          candidateFlags = candidateFlags.concat(moreFlags);
          command2 = command2.parent;
        } while (command2 && !command2._enablePositionalOptions);
        suggestion = suggestSimilar2(flag, candidateFlags);
      }
      const message = `error: unknown option '${flag}'${suggestion}`;
      this.error(message, { code: "commander.unknownOption" });
    }
    /**
     * Excess arguments, more than expected.
     *
     * @param {string[]} receivedArgs
     * @private
     */
    _excessArguments(receivedArgs) {
      if (this._allowExcessArguments) return;
      const expected = this.registeredArguments.length;
      const s = expected === 1 ? "" : "s";
      const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
      const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
      this.error(message, { code: "commander.excessArguments" });
    }
    /**
     * Unknown command.
     *
     * @private
     */
    unknownCommand() {
      const unknownName = this.args[0];
      let suggestion = "";
      if (this._showSuggestionAfterError) {
        const candidateNames = [];
        this.createHelp().visibleCommands(this).forEach((command2) => {
          candidateNames.push(command2.name());
          if (command2.alias()) candidateNames.push(command2.alias());
        });
        suggestion = suggestSimilar2(unknownName, candidateNames);
      }
      const message = `error: unknown command '${unknownName}'${suggestion}`;
      this.error(message, { code: "commander.unknownCommand" });
    }
    /**
     * Get or set the program version.
     *
     * This method auto-registers the "-V, --version" option which will print the version number.
     *
     * You can optionally supply the flags and description to override the defaults.
     *
     * @param {string} [str]
     * @param {string} [flags]
     * @param {string} [description]
     * @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
     */
    version(str, flags, description) {
      if (str === void 0) return this._version;
      this._version = str;
      flags = flags || "-V, --version";
      description = description || "output the version number";
      const versionOption = this.createOption(flags, description);
      this._versionOptionName = versionOption.attributeName();
      this._registerOption(versionOption);
      this.on("option:" + versionOption.name(), () => {
        this._outputConfiguration.writeOut(`${str}
`);
        this._exit(0, "commander.version", str);
      });
      return this;
    }
    /**
     * Set the description.
     *
     * @param {string} [str]
     * @param {object} [argsDescription]
     * @return {(string|Command)}
     */
    description(str, argsDescription) {
      if (str === void 0 && argsDescription === void 0)
        return this._description;
      this._description = str;
      if (argsDescription) {
        this._argsDescription = argsDescription;
      }
      return this;
    }
    /**
     * Set the summary. Used when listed as subcommand of parent.
     *
     * @param {string} [str]
     * @return {(string|Command)}
     */
    summary(str) {
      if (str === void 0) return this._summary;
      this._summary = str;
      return this;
    }
    /**
     * Set an alias for the command.
     *
     * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
     *
     * @param {string} [alias]
     * @return {(string|Command)}
     */
    alias(alias) {
      if (alias === void 0) return this._aliases[0];
      let command2 = this;
      if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
        command2 = this.commands[this.commands.length - 1];
      }
      if (alias === command2._name)
        throw new Error("Command alias can't be the same as its name");
      const matchingCommand = this.parent?._findCommand(alias);
      if (matchingCommand) {
        const existingCmd = [matchingCommand.name()].concat(matchingCommand.aliases()).join("|");
        throw new Error(
          `cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`
        );
      }
      command2._aliases.push(alias);
      return this;
    }
    /**
     * Set aliases for the command.
     *
     * Only the first alias is shown in the auto-generated help.
     *
     * @param {string[]} [aliases]
     * @return {(string[]|Command)}
     */
    aliases(aliases) {
      if (aliases === void 0) return this._aliases;
      aliases.forEach((alias) => this.alias(alias));
      return this;
    }
    /**
     * Set / get the command usage `str`.
     *
     * @param {string} [str]
     * @return {(string|Command)}
     */
    usage(str) {
      if (str === void 0) {
        if (this._usage) return this._usage;
        const args = this.registeredArguments.map((arg) => {
          return humanReadableArgName(arg);
        });
        return [].concat(
          this.options.length || this._helpOption !== null ? "[options]" : [],
          this.commands.length ? "[command]" : [],
          this.registeredArguments.length ? args : []
        ).join(" ");
      }
      this._usage = str;
      return this;
    }
    /**
     * Get or set the name of the command.
     *
     * @param {string} [str]
     * @return {(string|Command)}
     */
    name(str) {
      if (str === void 0) return this._name;
      this._name = str;
      return this;
    }
    /**
     * Set/get the help group heading for this subcommand in parent command's help.
     *
     * @param {string} [heading]
     * @return {Command | string}
     */
    helpGroup(heading) {
      if (heading === void 0) return this._helpGroupHeading ?? "";
      this._helpGroupHeading = heading;
      return this;
    }
    /**
     * Set/get the default help group heading for subcommands added to this command.
     * (This does not override a group set directly on the subcommand using .helpGroup().)
     *
     * @example
     * program.commandsGroup('Development Commands:);
     * program.command('watch')...
     * program.command('lint')...
     * ...
     *
     * @param {string} [heading]
     * @returns {Command | string}
     */
    commandsGroup(heading) {
      if (heading === void 0) return this._defaultCommandGroup ?? "";
      this._defaultCommandGroup = heading;
      return this;
    }
    /**
     * Set/get the default help group heading for options added to this command.
     * (This does not override a group set directly on the option using .helpGroup().)
     *
     * @example
     * program
     *   .optionsGroup('Development Options:')
     *   .option('-d, --debug', 'output extra debugging')
     *   .option('-p, --profile', 'output profiling information')
     *
     * @param {string} [heading]
     * @returns {Command | string}
     */
    optionsGroup(heading) {
      if (heading === void 0) return this._defaultOptionGroup ?? "";
      this._defaultOptionGroup = heading;
      return this;
    }
    /**
     * @param {Option} option
     * @private
     */
    _initOptionGroup(option2) {
      if (this._defaultOptionGroup && !option2.helpGroupHeading)
        option2.helpGroup(this._defaultOptionGroup);
    }
    /**
     * @param {Command} cmd
     * @private
     */
    _initCommandGroup(cmd) {
      if (this._defaultCommandGroup && !cmd.helpGroup())
        cmd.helpGroup(this._defaultCommandGroup);
    }
    /**
     * Set the name of the command from script filename, such as process.argv[1],
     * or require.main.filename, or __filename.
     *
     * (Used internally and public although not documented in README.)
     *
     * @example
     * program.nameFromFilename(require.main.filename);
     *
     * @param {string} filename
     * @return {Command}
     */
    nameFromFilename(filename) {
      this._name = path2.basename(filename, path2.extname(filename));
      return this;
    }
    /**
     * Get or set the directory for searching for executable subcommands of this command.
     *
     * @example
     * program.executableDir(__dirname);
     * // or
     * program.executableDir('subcommands');
     *
     * @param {string} [path]
     * @return {(string|null|Command)}
     */
    executableDir(path3) {
      if (path3 === void 0) return this._executableDir;
      this._executableDir = path3;
      return this;
    }
    /**
     * Return program help documentation.
     *
     * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
     * @return {string}
     */
    helpInformation(contextOptions) {
      const helper = this.createHelp();
      const context = this._getOutputContext(contextOptions);
      helper.prepareContext({
        error: context.error,
        helpWidth: context.helpWidth,
        outputHasColors: context.hasColors
      });
      const text2 = helper.formatHelp(this, helper);
      if (context.hasColors) return text2;
      return this._outputConfiguration.stripColor(text2);
    }
    /**
     * @typedef HelpContext
     * @type {object}
     * @property {boolean} error
     * @property {number} helpWidth
     * @property {boolean} hasColors
     * @property {function} write - includes stripColor if needed
     *
     * @returns {HelpContext}
     * @private
     */
    _getOutputContext(contextOptions) {
      contextOptions = contextOptions || {};
      const error2 = !!contextOptions.error;
      let baseWrite;
      let hasColors;
      let helpWidth;
      if (error2) {
        baseWrite = (str) => this._outputConfiguration.writeErr(str);
        hasColors = this._outputConfiguration.getErrHasColors();
        helpWidth = this._outputConfiguration.getErrHelpWidth();
      } else {
        baseWrite = (str) => this._outputConfiguration.writeOut(str);
        hasColors = this._outputConfiguration.getOutHasColors();
        helpWidth = this._outputConfiguration.getOutHelpWidth();
      }
      const write = (str) => {
        if (!hasColors) str = this._outputConfiguration.stripColor(str);
        return baseWrite(str);
      };
      return { error: error2, write, hasColors, helpWidth };
    }
    /**
     * Output help information for this command.
     *
     * Outputs built-in help, and custom text added using `.addHelpText()`.
     *
     * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
     */
    outputHelp(contextOptions) {
      let deprecatedCallback;
      if (typeof contextOptions === "function") {
        deprecatedCallback = contextOptions;
        contextOptions = void 0;
      }
      const outputContext = this._getOutputContext(contextOptions);
      const eventContext = {
        error: outputContext.error,
        write: outputContext.write,
        command: this
      };
      this._getCommandAndAncestors().reverse().forEach((command2) => command2.emit("beforeAllHelp", eventContext));
      this.emit("beforeHelp", eventContext);
      let helpInformation = this.helpInformation({ error: outputContext.error });
      if (deprecatedCallback) {
        helpInformation = deprecatedCallback(helpInformation);
        if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
          throw new Error("outputHelp callback must return a string or a Buffer");
        }
      }
      outputContext.write(helpInformation);
      if (this._getHelpOption()?.long) {
        this.emit(this._getHelpOption().long);
      }
      this.emit("afterHelp", eventContext);
      this._getCommandAndAncestors().forEach(
        (command2) => command2.emit("afterAllHelp", eventContext)
      );
    }
    /**
     * You can pass in flags and a description to customise the built-in help option.
     * Pass in false to disable the built-in help option.
     *
     * @example
     * program.helpOption('-?, --help' 'show help'); // customise
     * program.helpOption(false); // disable
     *
     * @param {(string | boolean)} flags
     * @param {string} [description]
     * @return {Command} `this` command for chaining
     */
    helpOption(flags, description) {
      if (typeof flags === "boolean") {
        if (flags) {
          if (this._helpOption === null) this._helpOption = void 0;
          if (this._defaultOptionGroup) {
            this._initOptionGroup(this._getHelpOption());
          }
        } else {
          this._helpOption = null;
        }
        return this;
      }
      this._helpOption = this.createOption(
        flags ?? "-h, --help",
        description ?? "display help for command"
      );
      if (flags || description) this._initOptionGroup(this._helpOption);
      return this;
    }
    /**
     * Lazy create help option.
     * Returns null if has been disabled with .helpOption(false).
     *
     * @returns {(Option | null)} the help option
     * @package
     */
    _getHelpOption() {
      if (this._helpOption === void 0) {
        this.helpOption(void 0, void 0);
      }
      return this._helpOption;
    }
    /**
     * Supply your own option to use for the built-in help option.
     * This is an alternative to using helpOption() to customise the flags and description etc.
     *
     * @param {Option} option
     * @return {Command} `this` command for chaining
     */
    addHelpOption(option2) {
      this._helpOption = option2;
      this._initOptionGroup(option2);
      return this;
    }
    /**
     * Output help information and exit.
     *
     * Outputs built-in help, and custom text added using `.addHelpText()`.
     *
     * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
     */
    help(contextOptions) {
      this.outputHelp(contextOptions);
      let exitCode = Number(process2.exitCode ?? 0);
      if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
        exitCode = 1;
      }
      this._exit(exitCode, "commander.help", "(outputHelp)");
    }
    /**
     * // Do a little typing to coordinate emit and listener for the help text events.
     * @typedef HelpTextEventContext
     * @type {object}
     * @property {boolean} error
     * @property {Command} command
     * @property {function} write
     */
    /**
     * Add additional text to be displayed with the built-in help.
     *
     * Position is 'before' or 'after' to affect just this command,
     * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
     *
     * @param {string} position - before or after built-in help
     * @param {(string | Function)} text - string to add, or a function returning a string
     * @return {Command} `this` command for chaining
     */
    addHelpText(position, text2) {
      const allowedValues = ["beforeAll", "before", "after", "afterAll"];
      if (!allowedValues.includes(position)) {
        throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
      }
      const helpEvent = `${position}Help`;
      this.on(helpEvent, (context) => {
        let helpStr;
        if (typeof text2 === "function") {
          helpStr = text2({ error: context.error, command: context.command });
        } else {
          helpStr = text2;
        }
        if (helpStr) {
          context.write(`${helpStr}
`);
        }
      });
      return this;
    }
    /**
     * Output help information if help flags specified
     *
     * @param {Array} args - array of options to search for help flags
     * @private
     */
    _outputHelpIfRequested(args) {
      const helpOption = this._getHelpOption();
      const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
      if (helpRequested) {
        this.outputHelp();
        this._exit(0, "commander.helpDisplayed", "(outputHelp)");
      }
    }
  }
  function incrementNodeInspectorPort(args) {
    return args.map((arg) => {
      if (!arg.startsWith("--inspect")) {
        return arg;
      }
      let debugOption;
      let debugHost = "127.0.0.1";
      let debugPort = "9229";
      let match;
      if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
        debugOption = match[1];
      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
        debugOption = match[1];
        if (/^\d+$/.test(match[3])) {
          debugPort = match[3];
        } else {
          debugHost = match[3];
        }
      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
        debugOption = match[1];
        debugHost = match[3];
        debugPort = match[4];
      }
      if (debugOption && debugPort !== "0") {
        return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
      }
      return arg;
    });
  }
  function useColor() {
    if (process2.env.NO_COLOR || process2.env.FORCE_COLOR === "0" || process2.env.FORCE_COLOR === "false")
      return false;
    if (process2.env.FORCE_COLOR || process2.env.CLICOLOR_FORCE !== void 0)
      return true;
    return void 0;
  }
  command.Command = Command2;
  command.useColor = useColor;
  return command;
}
var hasRequiredCommander;
function requireCommander() {
  if (hasRequiredCommander) return commander$1;
  hasRequiredCommander = 1;
  const { Argument: Argument2 } = requireArgument();
  const { Command: Command2 } = requireCommand();
  const { CommanderError: CommanderError2, InvalidArgumentError: InvalidArgumentError2 } = requireError$1();
  const { Help: Help2 } = requireHelp();
  const { Option: Option2 } = requireOption();
  commander$1.program = new Command2();
  commander$1.createCommand = (name) => new Command2(name);
  commander$1.createOption = (flags, description) => new Option2(flags, description);
  commander$1.createArgument = (name, description) => new Argument2(name, description);
  commander$1.Command = Command2;
  commander$1.Option = Option2;
  commander$1.Argument = Argument2;
  commander$1.Help = Help2;
  commander$1.CommanderError = CommanderError2;
  commander$1.InvalidArgumentError = InvalidArgumentError2;
  commander$1.InvalidOptionArgumentError = InvalidArgumentError2;
  return commander$1;
}
var commanderExports = requireCommander();
const commander = /* @__PURE__ */ getDefaultExportFromCjs(commanderExports);
const {
  program,
  createCommand,
  createArgument,
  createOption,
  CommanderError,
  InvalidArgumentError,
  InvalidOptionArgumentError,
  // deprecated old name
  Command,
  Argument,
  Option,
  Help
} = commander;
const commanderCore = (function() {
  const { optionConversion } = optionUtility;
  const program2 = new Command("create-react-template").version("0.1.0", "-v, --version", "output the current version").argument("[directory]").usage("[directory] [options]").helpOption("-h, --help", "display help for command").allowUnknownOption().option("-n, --name <name>", "specify the project name").option("-t, --tech-stack <techStack>", "specify the tech stack(react)").option(
    "--rf, --react-framework <reactFramework>",
    "framework to use (tanstack-router | next/app | next/pages)"
  ).option(
    "--vf, --vue-framework <vueFramework>",
    "vue framework to use (vue-router | nuxt)"
  ).option(
    "-c,--css <css>",
    "select css framework (tailwind | vanilla-extract | scoped-css)"
  ).option("--use-all-components", "install all available components").parse(process.argv);
  const opts = program2.opts();
  const optionName = optionConversion(opts.name);
  const optionReactFramework = optionConversion(opts.reactFramework);
  const optionVueFramework = optionConversion(opts.vueFramework);
  const optionTechStack = optionConversion(opts.techStack);
  const optionCss = optionConversion(opts.css);
  const optionUseAllComponents = optionConversion(opts.useAllComponents);
  const onPromptState = (state) => {
    if (state.aborted) {
      process.stdout.write("\x1B[?25h");
      process.stdout.write("\n");
      process.exit(1);
    }
  };
  return {
    onPromptState,
    optionName,
    optionReactFramework,
    optionVueFramework,
    optionTechStack,
    optionCss,
    optionUseAllComponents
  };
})();
const basic = {
  RESULT_OK: "ok",
  RESULT_NG: "ng"
};
const noop = () => {
};
const UNIT_SYMBOL = /* @__PURE__ */ Symbol("UNIT_SYMBOL");
const resultUtility = (function() {
  const { RESULT_NG, RESULT_OK } = basic;
  const UNIT = Object.freeze({
    _unit: UNIT_SYMBOL
  });
  const checkPromiseReturn = async ({
    fn,
    err
  }) => {
    try {
      const result = await fn();
      return createOk(result);
    } catch (e) {
      return createNg(err(e));
    }
  };
  const checkPromiseVoid = async ({
    fn,
    err
  }) => {
    try {
      await fn();
      return createOk(UNIT);
    } catch (e) {
      return createNg(err(e));
    }
  };
  const checkResultReturn = ({
    fn,
    err
  }) => {
    try {
      const result = fn();
      return createOk(result);
    } catch (e) {
      return createNg(err(e));
    }
  };
  const checkResultVoid = ({
    fn,
    err
  }) => {
    try {
      fn();
      return createOk(UNIT);
    } catch (e) {
      return createNg(err(e));
    }
  };
  const createOk = (value) => {
    return Object.freeze({
      kind: RESULT_OK,
      isOk: true,
      isErr: false,
      value
    });
  };
  const createNg = (err) => {
    return Object.freeze({
      kind: RESULT_NG,
      isOk: false,
      isErr: true,
      err
    });
  };
  return Object.freeze({
    UNIT,
    checkResultReturn,
    checkResultVoid,
    checkPromiseReturn,
    checkPromiseVoid,
    createOk,
    createNg
  });
})();
var prompts$3 = {};
var kleur;
var hasRequiredKleur;
function requireKleur() {
  if (hasRequiredKleur) return kleur;
  hasRequiredKleur = 1;
  const { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
  const $ = {
    enabled: !NODE_DISABLE_COLORS && TERM !== "dumb" && FORCE_COLOR !== "0",
    // modifiers
    reset: init(0, 0),
    bold: init(1, 22),
    dim: init(2, 22),
    italic: init(3, 23),
    underline: init(4, 24),
    inverse: init(7, 27),
    hidden: init(8, 28),
    strikethrough: init(9, 29),
    // colors
    black: init(30, 39),
    red: init(31, 39),
    green: init(32, 39),
    yellow: init(33, 39),
    blue: init(34, 39),
    magenta: init(35, 39),
    cyan: init(36, 39),
    white: init(37, 39),
    gray: init(90, 39),
    grey: init(90, 39),
    // background colors
    bgBlack: init(40, 49),
    bgRed: init(41, 49),
    bgGreen: init(42, 49),
    bgYellow: init(43, 49),
    bgBlue: init(44, 49),
    bgMagenta: init(45, 49),
    bgCyan: init(46, 49),
    bgWhite: init(47, 49)
  };
  function run2(arr, str) {
    let i = 0, tmp, beg = "", end = "";
    for (; i < arr.length; i++) {
      tmp = arr[i];
      beg += tmp.open;
      end += tmp.close;
      if (str.includes(tmp.close)) {
        str = str.replace(tmp.rgx, tmp.close + tmp.open);
      }
    }
    return beg + str + end;
  }
  function chain(has, keys) {
    let ctx = { has, keys };
    ctx.reset = $.reset.bind(ctx);
    ctx.bold = $.bold.bind(ctx);
    ctx.dim = $.dim.bind(ctx);
    ctx.italic = $.italic.bind(ctx);
    ctx.underline = $.underline.bind(ctx);
    ctx.inverse = $.inverse.bind(ctx);
    ctx.hidden = $.hidden.bind(ctx);
    ctx.strikethrough = $.strikethrough.bind(ctx);
    ctx.black = $.black.bind(ctx);
    ctx.red = $.red.bind(ctx);
    ctx.green = $.green.bind(ctx);
    ctx.yellow = $.yellow.bind(ctx);
    ctx.blue = $.blue.bind(ctx);
    ctx.magenta = $.magenta.bind(ctx);
    ctx.cyan = $.cyan.bind(ctx);
    ctx.white = $.white.bind(ctx);
    ctx.gray = $.gray.bind(ctx);
    ctx.grey = $.grey.bind(ctx);
    ctx.bgBlack = $.bgBlack.bind(ctx);
    ctx.bgRed = $.bgRed.bind(ctx);
    ctx.bgGreen = $.bgGreen.bind(ctx);
    ctx.bgYellow = $.bgYellow.bind(ctx);
    ctx.bgBlue = $.bgBlue.bind(ctx);
    ctx.bgMagenta = $.bgMagenta.bind(ctx);
    ctx.bgCyan = $.bgCyan.bind(ctx);
    ctx.bgWhite = $.bgWhite.bind(ctx);
    return ctx;
  }
  function init(open, close) {
    let blk = {
      open: `\x1B[${open}m`,
      close: `\x1B[${close}m`,
      rgx: new RegExp(`\\x1b\\[${close}m`, "g")
    };
    return function(txt) {
      if (this !== void 0 && this.has !== void 0) {
        this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
        return txt === void 0 ? this : $.enabled ? run2(this.keys, txt + "") : txt + "";
      }
      return txt === void 0 ? chain([open], [blk]) : $.enabled ? run2([blk], txt + "") : txt + "";
    };
  }
  kleur = $;
  return kleur;
}
var action$1;
var hasRequiredAction$1;
function requireAction$1() {
  if (hasRequiredAction$1) return action$1;
  hasRequiredAction$1 = 1;
  action$1 = (key, isSelect) => {
    if (key.meta && key.name !== "escape") return;
    if (key.ctrl) {
      if (key.name === "a") return "first";
      if (key.name === "c") return "abort";
      if (key.name === "d") return "abort";
      if (key.name === "e") return "last";
      if (key.name === "g") return "reset";
    }
    if (isSelect) {
      if (key.name === "j") return "down";
      if (key.name === "k") return "up";
    }
    if (key.name === "return") return "submit";
    if (key.name === "enter") return "submit";
    if (key.name === "backspace") return "delete";
    if (key.name === "delete") return "deleteForward";
    if (key.name === "abort") return "abort";
    if (key.name === "escape") return "exit";
    if (key.name === "tab") return "next";
    if (key.name === "pagedown") return "nextPage";
    if (key.name === "pageup") return "prevPage";
    if (key.name === "home") return "home";
    if (key.name === "end") return "end";
    if (key.name === "up") return "up";
    if (key.name === "down") return "down";
    if (key.name === "right") return "right";
    if (key.name === "left") return "left";
    return false;
  };
  return action$1;
}
var strip$1;
var hasRequiredStrip$1;
function requireStrip$1() {
  if (hasRequiredStrip$1) return strip$1;
  hasRequiredStrip$1 = 1;
  strip$1 = (str) => {
    const pattern2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
    const RGX = new RegExp(pattern2, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
  };
  return strip$1;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const ESC = "\x1B";
  const CSI = `${ESC}[`;
  const beep = "\x07";
  const cursor = {
    to(x, y) {
      if (!y) return `${CSI}${x + 1}G`;
      return `${CSI}${y + 1};${x + 1}H`;
    },
    move(x, y) {
      let ret = "";
      if (x < 0) ret += `${CSI}${-x}D`;
      else if (x > 0) ret += `${CSI}${x}C`;
      if (y < 0) ret += `${CSI}${-y}A`;
      else if (y > 0) ret += `${CSI}${y}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  const scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  const erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear2 = "";
      for (let i = 0; i < count; i++)
        clear2 += this.line + (i < count - 1 ? cursor.up() : "");
      if (count)
        clear2 += cursor.left;
      return clear2;
    }
  };
  src = { cursor, scroll, erase, beep };
  return src;
}
var clear$1;
var hasRequiredClear$1;
function requireClear$1() {
  if (hasRequiredClear$1) return clear$1;
  hasRequiredClear$1 = 1;
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
        if (it) o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    } };
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  const strip2 = requireStrip$1();
  const _require = requireSrc(), erase = _require.erase, cursor = _require.cursor;
  const width = (str) => [...strip2(str)].length;
  clear$1 = function(prompt2, perLine) {
    if (!perLine) return erase.line + cursor.to(0);
    let rows = 0;
    const lines2 = prompt2.split(/\r?\n/);
    var _iterator = _createForOfIteratorHelper(lines2), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let line = _step.value;
        rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return erase.lines(rows);
  };
  return clear$1;
}
var figures_1$1;
var hasRequiredFigures$1;
function requireFigures$1() {
  if (hasRequiredFigures$1) return figures_1$1;
  hasRequiredFigures$1 = 1;
  const main = {
    arrowUp: "↑",
    arrowDown: "↓",
    arrowLeft: "←",
    arrowRight: "→",
    radioOn: "◉",
    radioOff: "◯",
    tick: "✔",
    cross: "✖",
    ellipsis: "…",
    pointerSmall: "›",
    line: "─",
    pointer: "❯"
  };
  const win = {
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "√",
    cross: "×",
    ellipsis: "...",
    pointerSmall: "»",
    line: "─",
    pointer: ">"
  };
  const figures = process.platform === "win32" ? win : main;
  figures_1$1 = figures;
  return figures_1$1;
}
var style$1;
var hasRequiredStyle$1;
function requireStyle$1() {
  if (hasRequiredStyle$1) return style$1;
  hasRequiredStyle$1 = 1;
  const c = requireKleur();
  const figures = requireFigures$1();
  const styles = Object.freeze({
    password: {
      scale: 1,
      render: (input) => "*".repeat(input.length)
    },
    emoji: {
      scale: 2,
      render: (input) => "😃".repeat(input.length)
    },
    invisible: {
      scale: 0,
      render: (input) => ""
    },
    default: {
      scale: 1,
      render: (input) => `${input}`
    }
  });
  const render = (type) => styles[type] || styles.default;
  const symbols = Object.freeze({
    aborted: c.red(figures.cross),
    done: c.green(figures.tick),
    exited: c.yellow(figures.cross),
    default: c.cyan("?")
  });
  const symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
  const delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
  const item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
  style$1 = {
    styles,
    render,
    symbols,
    symbol,
    delimiter,
    item
  };
  return style$1;
}
var lines$1;
var hasRequiredLines$1;
function requireLines$1() {
  if (hasRequiredLines$1) return lines$1;
  hasRequiredLines$1 = 1;
  const strip2 = requireStrip$1();
  lines$1 = function(msg, perLine) {
    let lines2 = String(strip2(msg) || "").split(/\r?\n/);
    if (!perLine) return lines2.length;
    return lines2.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
  };
  return lines$1;
}
var wrap$1;
var hasRequiredWrap$1;
function requireWrap$1() {
  if (hasRequiredWrap$1) return wrap$1;
  hasRequiredWrap$1 = 1;
  wrap$1 = (msg, opts = {}) => {
    const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
    const width = opts.width;
    return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
      if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width) arr[arr.length - 1] += ` ${w}`;
      else arr.push(`${tab}${w}`);
      return arr;
    }, [tab]).join("\n")).join("\n");
  };
  return wrap$1;
}
var entriesToDisplay$1;
var hasRequiredEntriesToDisplay$1;
function requireEntriesToDisplay$1() {
  if (hasRequiredEntriesToDisplay$1) return entriesToDisplay$1;
  hasRequiredEntriesToDisplay$1 = 1;
  entriesToDisplay$1 = (cursor, total, maxVisible) => {
    maxVisible = maxVisible || total;
    let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
    if (startIndex < 0) startIndex = 0;
    let endIndex = Math.min(startIndex + maxVisible, total);
    return {
      startIndex,
      endIndex
    };
  };
  return entriesToDisplay$1;
}
var util$1;
var hasRequiredUtil$1;
function requireUtil$1() {
  if (hasRequiredUtil$1) return util$1;
  hasRequiredUtil$1 = 1;
  util$1 = {
    action: requireAction$1(),
    clear: requireClear$1(),
    style: requireStyle$1(),
    strip: requireStrip$1(),
    figures: requireFigures$1(),
    lines: requireLines$1(),
    wrap: requireWrap$1(),
    entriesToDisplay: requireEntriesToDisplay$1()
  };
  return util$1;
}
var prompt$1;
var hasRequiredPrompt$1;
function requirePrompt$1() {
  if (hasRequiredPrompt$1) return prompt$1;
  hasRequiredPrompt$1 = 1;
  const readline = require$$0$2;
  const _require = requireUtil$1(), action2 = _require.action;
  const EventEmitter = require$$2$1;
  const _require2 = requireSrc(), beep = _require2.beep, cursor = _require2.cursor;
  const color = requireKleur();
  class Prompt extends EventEmitter {
    constructor(opts = {}) {
      super();
      this.firstRender = true;
      this.in = opts.stdin || process.stdin;
      this.out = opts.stdout || process.stdout;
      this.onRender = (opts.onRender || (() => void 0)).bind(this);
      const rl = readline.createInterface({
        input: this.in,
        escapeCodeTimeout: 50
      });
      readline.emitKeypressEvents(this.in, rl);
      if (this.in.isTTY) this.in.setRawMode(true);
      const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
      const keypress = (str, key) => {
        let a = action2(key, isSelect);
        if (a === false) {
          this._ && this._(str, key);
        } else if (typeof this[a] === "function") {
          this[a](key);
        } else {
          this.bell();
        }
      };
      this.close = () => {
        this.out.write(cursor.show);
        this.in.removeListener("keypress", keypress);
        if (this.in.isTTY) this.in.setRawMode(false);
        rl.close();
        this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
        this.closed = true;
      };
      this.in.on("keypress", keypress);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(beep);
    }
    render() {
      this.onRender(color);
      if (this.firstRender) this.firstRender = false;
    }
  }
  prompt$1 = Prompt;
  return prompt$1;
}
var text$1;
var hasRequiredText$1;
function requireText$1() {
  if (hasRequiredText$1) return text$1;
  hasRequiredText$1 = 1;
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireSrc(), erase = _require.erase, cursor = _require.cursor;
  const _require2 = requireUtil$1(), style2 = _require2.style, clear2 = _require2.clear, lines2 = _require2.lines, figures = _require2.figures;
  class TextPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style2.render(opts.style);
      this.scale = this.transform.scale;
      this.msg = opts.message;
      this.initial = opts.initial || ``;
      this.validator = opts.validate || (() => true);
      this.value = ``;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.clear = clear2(``, this.out.columns);
      this.render();
    }
    set value(v) {
      if (!v && this.initial) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(this.initial));
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(v);
      }
      this._value = v;
      this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = ``;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.red = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === `string`) {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        _this2.value = _this2.value || _this2.initial;
        _this2.cursorOffset = 0;
        _this2.cursor = _this2.rendered.length;
        yield _this2.validate();
        if (_this2.error) {
          _this2.red = true;
          _this2.fire();
          _this2.render();
          return;
        }
        _this2.done = true;
        _this2.aborted = false;
        _this2.fire();
        _this2.render();
        _this2.out.write("\n");
        _this2.close();
      })();
    }
    next() {
      if (!this.placeholder) return this.bell();
      this.value = this.initial;
      this.cursor = this.rendered.length;
      this.fire();
      this.render();
    }
    moveCursor(n) {
      if (this.placeholder) return;
      this.cursor = this.cursor + n;
      this.cursorOffset += n;
    }
    _(c, key) {
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${c}${s2}`;
      this.red = false;
      this.cursor = this.placeholder ? 0 : s1.length + 1;
      this.render();
    }
    delete() {
      if (this.isCursorAtStart()) return this.bell();
      let s1 = this.value.slice(0, this.cursor - 1);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtStart()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
        this.moveCursor(-1);
      }
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor + 1);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtEnd()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
      }
      this.render();
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length;
      this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder) return this.bell();
      this.moveCursor(-1);
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      this.moveCursor(1);
      this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      if (this.closed) return;
      if (!this.firstRender) {
        if (this.outputError) this.out.write(cursor.down(lines2(this.outputError, this.out.columns) - 1) + clear2(this.outputError, this.out.columns));
        this.out.write(clear2(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(this.done), this.red ? color.red(this.rendered) : this.rendered].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
    }
  }
  text$1 = TextPrompt;
  return text$1;
}
var select$1;
var hasRequiredSelect$1;
function requireSelect$1() {
  if (hasRequiredSelect$1) return select$1;
  hasRequiredSelect$1 = 1;
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireUtil$1(), style2 = _require.style, clear2 = _require.clear, figures = _require.figures, wrap2 = _require.wrap, entriesToDisplay2 = _require.entriesToDisplay;
  const _require2 = requireSrc(), cursor = _require2.cursor;
  class SelectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
      this.warn = opts.warn || "- This option is disabled";
      this.cursor = opts.initial || 0;
      this.choices = opts.choices.map((ch, idx) => {
        if (typeof ch === "string") ch = {
          title: ch,
          value: idx
        };
        return {
          title: ch && (ch.title || ch.value || ch),
          value: ch && (ch.value === void 0 ? idx : ch.value),
          description: ch && ch.description,
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = (this.choices[this.cursor] || {}).value;
      this.clear = clear2("", this.out.columns);
      this.render();
    }
    moveCursor(n) {
      this.cursor = n;
      this.value = this.choices[n].value;
      this.fire();
    }
    reset() {
      this.moveCursor(0);
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      if (!this.selection.disabled) {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      } else this.bell();
    }
    first() {
      this.moveCursor(0);
      this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1);
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.moveCursor(this.choices.length - 1);
      } else {
        this.moveCursor(this.cursor - 1);
      }
      this.render();
    }
    down() {
      if (this.cursor === this.choices.length - 1) {
        this.moveCursor(0);
      } else {
        this.moveCursor(this.cursor + 1);
      }
      this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length);
      this.render();
    }
    _(c, key) {
      if (c === " ") return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      let _entriesToDisplay = entriesToDisplay2(this.cursor, this.choices.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      this.outputText = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(false), this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)].join(" ");
      if (!this.done) {
        this.outputText += "\n";
        for (let i = startIndex; i < endIndex; i++) {
          let title, prefix, desc = "", v = this.choices[i];
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < this.choices.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          if (v.disabled) {
            title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
            prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
          } else {
            title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
            prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
            if (v.description && this.cursor === i) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap2(v.description, {
                  margin: 3,
                  width: this.out.columns
                });
              }
            }
          }
          this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
        }
      }
      this.out.write(this.outputText);
    }
  }
  select$1 = SelectPrompt;
  return select$1;
}
var toggle$1;
var hasRequiredToggle$1;
function requireToggle$1() {
  if (hasRequiredToggle$1) return toggle$1;
  hasRequiredToggle$1 = 1;
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireUtil$1(), style2 = _require.style, clear2 = _require.clear;
  const _require2 = requireSrc(), cursor = _require2.cursor, erase = _require2.erase;
  class TogglePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = !!opts.initial;
      this.active = opts.active || "on";
      this.inactive = opts.inactive || "off";
      this.initialValue = this.value;
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    deactivate() {
      if (this.value === false) return this.bell();
      this.value = false;
      this.render();
    }
    activate() {
      if (this.value === true) return this.bell();
      this.value = true;
      this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.value = !this.value;
      } else if (c === "1") {
        this.value = true;
      } else if (c === "0") {
        this.value = false;
      } else return this.bell();
      this.render();
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(this.done), this.value ? this.inactive : color.cyan().underline(this.inactive), color.gray("/"), this.value ? color.cyan().underline(this.active) : this.active].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  toggle$1 = TogglePrompt;
  return toggle$1;
}
var datepart$1;
var hasRequiredDatepart$1;
function requireDatepart$1() {
  if (hasRequiredDatepart$1) return datepart$1;
  hasRequiredDatepart$1 = 1;
  class DatePart {
    constructor({
      token,
      date: date2,
      parts,
      locales
    }) {
      this.token = token;
      this.date = date2 || /* @__PURE__ */ new Date();
      this.parts = parts || [this];
      this.locales = locales || {};
    }
    up() {
    }
    down() {
    }
    next() {
      const currentIdx = this.parts.indexOf(this);
      return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    setTo(val) {
    }
    prev() {
      let parts = [].concat(this.parts).reverse();
      const currentIdx = parts.indexOf(this);
      return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    toString() {
      return String(this.date);
    }
  }
  datepart$1 = DatePart;
  return datepart$1;
}
var meridiem$1;
var hasRequiredMeridiem$1;
function requireMeridiem$1() {
  if (hasRequiredMeridiem$1) return meridiem$1;
  hasRequiredMeridiem$1 = 1;
  const DatePart = requireDatepart$1();
  class Meridiem extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let meridiem2 = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? meridiem2.toUpperCase() : meridiem2;
    }
  }
  meridiem$1 = Meridiem;
  return meridiem$1;
}
var day$1;
var hasRequiredDay$1;
function requireDay$1() {
  if (hasRequiredDay$1) return day$1;
  hasRequiredDay$1 = 1;
  const DatePart = requireDatepart$1();
  const pos = (n) => {
    n = n % 10;
    return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  };
  class Day extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(val) {
      this.date.setDate(parseInt(val.substr(-2)));
    }
    toString() {
      let date2 = this.date.getDate();
      let day2 = this.date.getDay();
      return this.token === "DD" ? String(date2).padStart(2, "0") : this.token === "Do" ? date2 + pos(date2) : this.token === "d" ? day2 + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day2] : this.token === "dddd" ? this.locales.weekdays[day2] : date2;
    }
  }
  day$1 = Day;
  return day$1;
}
var hours$1;
var hasRequiredHours$1;
function requireHours$1() {
  if (hasRequiredHours$1) return hours$1;
  hasRequiredHours$1 = 1;
  const DatePart = requireDatepart$1();
  class Hours extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(val) {
      this.date.setHours(parseInt(val.substr(-2)));
    }
    toString() {
      let hours2 = this.date.getHours();
      if (/h/.test(this.token)) hours2 = hours2 % 12 || 12;
      return this.token.length > 1 ? String(hours2).padStart(2, "0") : hours2;
    }
  }
  hours$1 = Hours;
  return hours$1;
}
var milliseconds$1;
var hasRequiredMilliseconds$1;
function requireMilliseconds$1() {
  if (hasRequiredMilliseconds$1) return milliseconds$1;
  hasRequiredMilliseconds$1 = 1;
  const DatePart = requireDatepart$1();
  class Milliseconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(val) {
      this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  }
  milliseconds$1 = Milliseconds;
  return milliseconds$1;
}
var minutes$1;
var hasRequiredMinutes$1;
function requireMinutes$1() {
  if (hasRequiredMinutes$1) return minutes$1;
  hasRequiredMinutes$1 = 1;
  const DatePart = requireDatepart$1();
  class Minutes extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(val) {
      this.date.setMinutes(parseInt(val.substr(-2)));
    }
    toString() {
      let m = this.date.getMinutes();
      return this.token.length > 1 ? String(m).padStart(2, "0") : m;
    }
  }
  minutes$1 = Minutes;
  return minutes$1;
}
var month$1;
var hasRequiredMonth$1;
function requireMonth$1() {
  if (hasRequiredMonth$1) return month$1;
  hasRequiredMonth$1 = 1;
  const DatePart = requireDatepart$1();
  class Month extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(val) {
      val = parseInt(val.substr(-2)) - 1;
      this.date.setMonth(val < 0 ? 0 : val);
    }
    toString() {
      let month2 = this.date.getMonth();
      let tl = this.token.length;
      return tl === 2 ? String(month2 + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month2] : tl === 4 ? this.locales.months[month2] : String(month2 + 1);
    }
  }
  month$1 = Month;
  return month$1;
}
var seconds$1;
var hasRequiredSeconds$1;
function requireSeconds$1() {
  if (hasRequiredSeconds$1) return seconds$1;
  hasRequiredSeconds$1 = 1;
  const DatePart = requireDatepart$1();
  class Seconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(val) {
      this.date.setSeconds(parseInt(val.substr(-2)));
    }
    toString() {
      let s = this.date.getSeconds();
      return this.token.length > 1 ? String(s).padStart(2, "0") : s;
    }
  }
  seconds$1 = Seconds;
  return seconds$1;
}
var year$1;
var hasRequiredYear$1;
function requireYear$1() {
  if (hasRequiredYear$1) return year$1;
  hasRequiredYear$1 = 1;
  const DatePart = requireDatepart$1();
  class Year extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(val) {
      this.date.setFullYear(val.substr(-4));
    }
    toString() {
      let year2 = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? year2.substr(-2) : year2;
    }
  }
  year$1 = Year;
  return year$1;
}
var dateparts$1;
var hasRequiredDateparts$1;
function requireDateparts$1() {
  if (hasRequiredDateparts$1) return dateparts$1;
  hasRequiredDateparts$1 = 1;
  dateparts$1 = {
    DatePart: requireDatepart$1(),
    Meridiem: requireMeridiem$1(),
    Day: requireDay$1(),
    Hours: requireHours$1(),
    Milliseconds: requireMilliseconds$1(),
    Minutes: requireMinutes$1(),
    Month: requireMonth$1(),
    Seconds: requireSeconds$1(),
    Year: requireYear$1()
  };
  return dateparts$1;
}
var date$1;
var hasRequiredDate$1;
function requireDate$1() {
  if (hasRequiredDate$1) return date$1;
  hasRequiredDate$1 = 1;
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireUtil$1(), style2 = _require.style, clear2 = _require.clear, figures = _require.figures;
  const _require2 = requireSrc(), erase = _require2.erase, cursor = _require2.cursor;
  const _require3 = requireDateparts$1(), DatePart = _require3.DatePart, Meridiem = _require3.Meridiem, Day = _require3.Day, Hours = _require3.Hours, Milliseconds = _require3.Milliseconds, Minutes = _require3.Minutes, Month = _require3.Month, Seconds = _require3.Seconds, Year = _require3.Year;
  const regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
  const regexGroups = {
    1: ({
      token
    }) => token.replace(/\\(.)/g, "$1"),
    2: (opts) => new Day(opts),
    // Day // TODO
    3: (opts) => new Month(opts),
    // Month
    4: (opts) => new Year(opts),
    // Year
    5: (opts) => new Meridiem(opts),
    // AM/PM // TODO (special)
    6: (opts) => new Hours(opts),
    // Hours
    7: (opts) => new Minutes(opts),
    // Minutes
    8: (opts) => new Seconds(opts),
    // Seconds
    9: (opts) => new Milliseconds(opts)
    // Fractional seconds
  };
  const dfltLocales = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  };
  class DatePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = 0;
      this.typed = "";
      this.locales = Object.assign(dfltLocales, opts.locales);
      this._date = opts.initial || /* @__PURE__ */ new Date();
      this.errorMsg = opts.error || "Please Enter A Valid Value";
      this.validator = opts.validate || (() => true);
      this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
      this.clear = clear2("", this.out.columns);
      this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(date2) {
      if (date2) this._date.setTime(date2.getTime());
    }
    set mask(mask) {
      let result;
      this.parts = [];
      while (result = regex.exec(mask)) {
        let match = result.shift();
        let idx = result.findIndex((gr) => gr != null);
        this.parts.push(idx in regexGroups ? regexGroups[idx]({
          token: result[idx] || match,
          date: this.date,
          parts: this.parts,
          locales: this.locales
        }) : result[idx] || match);
      }
      let parts = this.parts.reduce((arr, i) => {
        if (typeof i === "string" && typeof arr[arr.length - 1] === "string") arr[arr.length - 1] += i;
        else arr.push(i);
        return arr;
      }, []);
      this.parts.splice(0);
      this.parts.push(...parts);
      this.reset();
    }
    moveCursor(n) {
      this.typed = "";
      this.cursor = n;
      this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === "string") {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.validate();
        if (_this2.error) {
          _this2.color = "red";
          _this2.fire();
          _this2.render();
          return;
        }
        _this2.done = true;
        _this2.aborted = false;
        _this2.fire();
        _this2.render();
        _this2.out.write("\n");
        _this2.close();
      })();
    }
    up() {
      this.typed = "";
      this.parts[this.cursor].up();
      this.render();
    }
    down() {
      this.typed = "";
      this.parts[this.cursor].down();
      this.render();
    }
    left() {
      let prev = this.parts[this.cursor].prev();
      if (prev == null) return this.bell();
      this.moveCursor(this.parts.indexOf(prev));
      this.render();
    }
    right() {
      let next = this.parts[this.cursor].next();
      if (next == null) return this.bell();
      this.moveCursor(this.parts.indexOf(next));
      this.render();
    }
    next() {
      let next = this.parts[this.cursor].next();
      this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
      this.render();
    }
    _(c) {
      if (/\d/.test(c)) {
        this.typed += c;
        this.parts[this.cursor].setTo(this.typed);
        this.render();
      }
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(false), this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")].join(" ");
      if (this.error) {
        this.outputText += this.errorMsg.split("\n").reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  date$1 = DatePrompt;
  return date$1;
}
var number$1;
var hasRequiredNumber$1;
function requireNumber$1() {
  if (hasRequiredNumber$1) return number$1;
  hasRequiredNumber$1 = 1;
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireSrc(), cursor = _require.cursor, erase = _require.erase;
  const _require2 = requireUtil$1(), style2 = _require2.style, figures = _require2.figures, clear2 = _require2.clear, lines2 = _require2.lines;
  const isNumber2 = /[0-9]/;
  const isDef = (any) => any !== void 0;
  const round = (number2, precision) => {
    let factor = Math.pow(10, precision);
    return Math.round(number2 * factor) / factor;
  };
  class NumberPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style2.render(opts.style);
      this.msg = opts.message;
      this.initial = isDef(opts.initial) ? opts.initial : "";
      this.float = !!opts.float;
      this.round = opts.round || 2;
      this.inc = opts.increment || 1;
      this.min = isDef(opts.min) ? opts.min : -Infinity;
      this.max = isDef(opts.max) ? opts.max : Infinity;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.validator = opts.validate || (() => true);
      this.color = `cyan`;
      this.value = ``;
      this.typed = ``;
      this.lastHit = 0;
      this.render();
    }
    set value(v) {
      if (!v && v !== 0) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(`${this.initial}`));
        this._value = ``;
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(`${round(v, this.round)}`);
        this._value = round(v, this.round);
      }
      this.fire();
    }
    get value() {
      return this._value;
    }
    parse(x) {
      return this.float ? parseFloat(x) : parseInt(x);
    }
    valid(c) {
      return c === `-` || c === `.` && this.float || isNumber2.test(c);
    }
    reset() {
      this.typed = ``;
      this.value = ``;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`
`);
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === `string`) {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.validate();
        if (_this2.error) {
          _this2.color = `red`;
          _this2.fire();
          _this2.render();
          return;
        }
        let x = _this2.value;
        _this2.value = x !== `` ? x : _this2.initial;
        _this2.done = true;
        _this2.aborted = false;
        _this2.error = false;
        _this2.fire();
        _this2.render();
        _this2.out.write(`
`);
        _this2.close();
      })();
    }
    up() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min - this.inc;
      }
      if (this.value >= this.max) return this.bell();
      this.value += this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    down() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min + this.inc;
      }
      if (this.value <= this.min) return this.bell();
      this.value -= this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    delete() {
      let val = this.value.toString();
      if (val.length === 0) return this.bell();
      this.value = this.parse(val = val.slice(0, -1)) || ``;
      if (this.value !== "" && this.value < this.min) {
        this.value = this.min;
      }
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    next() {
      this.value = this.initial;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (!this.valid(c)) return this.bell();
      const now = Date.now();
      if (now - this.lastHit > 1e3) this.typed = ``;
      this.typed += c;
      this.lastHit = now;
      this.color = `cyan`;
      if (c === `.`) return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max);
      if (this.value > this.max) this.value = this.max;
      if (this.value < this.min) this.value = this.min;
      this.fire();
      this.render();
    }
    render() {
      if (this.closed) return;
      if (!this.firstRender) {
        if (this.outputError) this.out.write(cursor.down(lines2(this.outputError, this.out.columns) - 1) + clear2(this.outputError, this.out.columns));
        this.out.write(clear2(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(this.done), !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
    }
  }
  number$1 = NumberPrompt;
  return number$1;
}
var multiselect$1;
var hasRequiredMultiselect$1;
function requireMultiselect$1() {
  if (hasRequiredMultiselect$1) return multiselect$1;
  hasRequiredMultiselect$1 = 1;
  const color = requireKleur();
  const _require = requireSrc(), cursor = _require.cursor;
  const Prompt = requirePrompt$1();
  const _require2 = requireUtil$1(), clear2 = _require2.clear, figures = _require2.figures, style2 = _require2.style, wrap2 = _require2.wrap, entriesToDisplay2 = _require2.entriesToDisplay;
  class MultiselectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = opts.cursor || 0;
      this.scrollIndex = opts.cursor || 0;
      this.hint = opts.hint || "";
      this.warn = opts.warn || "- This option is disabled -";
      this.minSelected = opts.min;
      this.showMinError = false;
      this.maxChoices = opts.max;
      this.instructions = opts.instructions;
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = opts.choices.map((ch, idx) => {
        if (typeof ch === "string") ch = {
          title: ch,
          value: idx
        };
        return {
          title: ch && (ch.title || ch.value || ch),
          description: ch && ch.description,
          value: ch && (ch.value === void 0 ? idx : ch.value),
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.clear = clear2("", this.out.columns);
      if (!opts.overrideRender) {
        this.render();
      }
    }
    reset() {
      this.value.map((v) => !v.selected);
      this.cursor = 0;
      this.fire();
      this.render();
    }
    selected() {
      return this.value.filter((v) => v.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      const selected = this.value.filter((e) => e.selected);
      if (this.minSelected && selected.length < this.minSelected) {
        this.showMinError = true;
        this.render();
      } else {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.value.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.value.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.value[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
      this.value[this.cursor].selected = true;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.value[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
        return this.bell();
      }
      const newSelected = !this.value[this.cursor].selected;
      this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else if (c === "a") {
        this.toggleAll();
      } else {
        return this.bell();
      }
    }
    renderInstructions() {
      if (this.instructions === void 0 || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
      }
      return "";
    }
    renderOption(cursor2, v, i, arrowIndicator) {
      const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
      let title, desc;
      if (v.disabled) {
        title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      } else {
        title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        if (cursor2 === i && v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap2(v.description, {
              margin: prefix.length,
              width: this.out.columns
            });
          }
        }
      }
      return prefix + title + color.gray(desc || "");
    }
    // shared with autocompleteMultiselect
    paginateOptions(options) {
      if (options.length === 0) {
        return color.red("No matches for this query.");
      }
      let _entriesToDisplay = entriesToDisplay2(this.cursor, options.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      let prefix, styledOptions = [];
      for (let i = startIndex; i < endIndex; i++) {
        if (i === startIndex && startIndex > 0) {
          prefix = figures.arrowUp;
        } else if (i === endIndex - 1 && endIndex < options.length) {
          prefix = figures.arrowDown;
        } else {
          prefix = " ";
        }
        styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
      }
      return "\n" + styledOptions.join("\n");
    }
    // shared with autocomleteMultiselect
    renderOptions(options) {
      if (!this.done) {
        return this.paginateOptions(options);
      }
      return "";
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions()];
      if (this.value[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      super.render();
      let prompt2 = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(false), this.renderDoneOrInstructions()].join(" ");
      if (this.showMinError) {
        prompt2 += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt2 += this.renderOptions(this.value);
      this.out.write(this.clear + prompt2);
      this.clear = clear2(prompt2, this.out.columns);
    }
  }
  multiselect$1 = MultiselectPrompt;
  return multiselect$1;
}
var autocomplete$1;
var hasRequiredAutocomplete$1;
function requireAutocomplete$1() {
  if (hasRequiredAutocomplete$1) return autocomplete$1;
  hasRequiredAutocomplete$1 = 1;
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireSrc(), erase = _require.erase, cursor = _require.cursor;
  const _require2 = requireUtil$1(), style2 = _require2.style, clear2 = _require2.clear, figures = _require2.figures, wrap2 = _require2.wrap, entriesToDisplay2 = _require2.entriesToDisplay;
  const getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
  const getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
  const getIndex = (arr, valOrTitle) => {
    const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
    return index > -1 ? index : void 0;
  };
  class AutocompletePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.suggest = opts.suggest;
      this.choices = opts.choices;
      this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
      this.select = this.initial || opts.cursor || 0;
      this.i18n = {
        noMatches: opts.noMatches || "no matches found"
      };
      this.fallback = opts.fallback || this.initial;
      this.clearFirst = opts.clearFirst || false;
      this.suggestions = [];
      this.input = "";
      this.limit = opts.limit || 10;
      this.cursor = 0;
      this.transform = style2.render(opts.style);
      this.scale = this.transform.scale;
      this.render = this.render.bind(this);
      this.complete = this.complete.bind(this);
      this.clear = clear2("", this.out.columns);
      this.complete(this.render);
      this.render();
    }
    set fallback(fb) {
      this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
    }
    get fallback() {
      let choice;
      if (typeof this._fb === "number") choice = this.choices[this._fb];
      else if (typeof this._fb === "string") choice = {
        title: this._fb
      };
      return choice || this._fb || {
        title: this.i18n.noMatches
      };
    }
    moveSelect(i) {
      this.select = i;
      if (this.suggestions.length > 0) this.value = getVal(this.suggestions, i);
      else this.value = this.fallback.value;
      this.fire();
    }
    complete(cb) {
      var _this = this;
      return _asyncToGenerator(function* () {
        const p = _this.completing = _this.suggest(_this.input, _this.choices);
        const suggestions = yield p;
        if (_this.completing !== p) return;
        _this.suggestions = suggestions.map((s, i, arr) => ({
          title: getTitle(arr, i),
          value: getVal(arr, i),
          description: s.description
        }));
        _this.completing = false;
        const l = Math.max(suggestions.length - 1, 0);
        _this.moveSelect(Math.min(l, _this.select));
        cb && cb();
      })();
    }
    reset() {
      this.input = "";
      this.complete(() => {
        this.moveSelect(this.initial !== void 0 ? this.initial : 0);
        this.render();
      });
      this.render();
    }
    exit() {
      if (this.clearFirst && this.input.length > 0) {
        this.reset();
      } else {
        this.done = this.exited = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    abort() {
      this.done = this.aborted = true;
      this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${c}${s2}`;
      this.cursor = s1.length + 1;
      this.complete(this.render);
      this.render();
    }
    delete() {
      if (this.cursor === 0) return this.bell();
      let s1 = this.input.slice(0, this.cursor - 1);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.cursor = this.cursor - 1;
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor + 1);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.render();
    }
    first() {
      this.moveSelect(0);
      this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1);
      this.render();
    }
    up() {
      if (this.select === 0) {
        this.moveSelect(this.suggestions.length - 1);
      } else {
        this.moveSelect(this.select - 1);
      }
      this.render();
    }
    down() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else {
        this.moveSelect(this.select + 1);
      }
      this.render();
    }
    next() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else this.moveSelect(this.select + 1);
      this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
      this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0));
      this.render();
    }
    left() {
      if (this.cursor <= 0) return this.bell();
      this.cursor = this.cursor - 1;
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      this.cursor = this.cursor + 1;
      this.render();
    }
    renderOption(v, hovered, isStart, isEnd) {
      let desc;
      let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
      let title = hovered ? color.cyan().underline(v.title) : v.title;
      prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
      if (v.description) {
        desc = ` - ${v.description}`;
        if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
          desc = "\n" + wrap2(v.description, {
            margin: 3,
            width: this.out.columns
          });
        }
      }
      return prefix + " " + title + color.gray(desc || "");
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      let _entriesToDisplay = entriesToDisplay2(this.select, this.choices.length, this.limit), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      this.outputText = [style2.symbol(this.done, this.aborted, this.exited), color.bold(this.msg), style2.delimiter(this.completing), this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)].join(" ");
      if (!this.done) {
        const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(item, this.select === i + startIndex, i === 0 && startIndex > 0, i + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
        this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  autocomplete$1 = AutocompletePrompt;
  return autocomplete$1;
}
var autocompleteMultiselect$1;
var hasRequiredAutocompleteMultiselect$1;
function requireAutocompleteMultiselect$1() {
  if (hasRequiredAutocompleteMultiselect$1) return autocompleteMultiselect$1;
  hasRequiredAutocompleteMultiselect$1 = 1;
  const color = requireKleur();
  const _require = requireSrc(), cursor = _require.cursor;
  const MultiselectPrompt = requireMultiselect$1();
  const _require2 = requireUtil$1(), clear2 = _require2.clear, style2 = _require2.style, figures = _require2.figures;
  class AutocompleteMultiselectPrompt extends MultiselectPrompt {
    constructor(opts = {}) {
      opts.overrideRender = true;
      super(opts);
      this.inputValue = "";
      this.clear = clear2("", this.out.columns);
      this.filteredOptions = this.value;
      this.render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.filteredOptions.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.filteredOptions.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
      this.filteredOptions[this.cursor].selected = true;
      this.render();
    }
    delete() {
      if (this.inputValue.length) {
        this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
        this.updateFilteredOptions();
      }
    }
    updateFilteredOptions() {
      const currentHighlight = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((v) => {
        if (this.inputValue) {
          if (typeof v.title === "string") {
            if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          if (typeof v.value === "string") {
            if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
      this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.filteredOptions[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    handleInputChange(c) {
      this.inputValue = this.inputValue + c;
      this.updateFilteredOptions();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else {
        this.handleInputChange(c);
      }
    }
    renderInstructions() {
      if (this.instructions === void 0 || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
      }
      return "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
    }
    renderOption(cursor2, v, i) {
      let title;
      if (v.disabled) title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      else title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
      return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      super.render();
      let prompt2 = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(false), this.renderDoneOrInstructions()].join(" ");
      if (this.showMinError) {
        prompt2 += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt2 += this.renderOptions(this.filteredOptions);
      this.out.write(this.clear + prompt2);
      this.clear = clear2(prompt2, this.out.columns);
    }
  }
  autocompleteMultiselect$1 = AutocompleteMultiselectPrompt;
  return autocompleteMultiselect$1;
}
var confirm$1;
var hasRequiredConfirm$1;
function requireConfirm$1() {
  if (hasRequiredConfirm$1) return confirm$1;
  hasRequiredConfirm$1 = 1;
  const color = requireKleur();
  const Prompt = requirePrompt$1();
  const _require = requireUtil$1(), style2 = _require.style, clear2 = _require.clear;
  const _require2 = requireSrc(), erase = _require2.erase, cursor = _require2.cursor;
  class ConfirmPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = opts.initial;
      this.initialValue = !!opts.initial;
      this.yesMsg = opts.yes || "yes";
      this.yesOption = opts.yesOption || "(Y/n)";
      this.noMsg = opts.no || "no";
      this.noOption = opts.noOption || "(y/N)";
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.value = this.value || false;
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      if (c.toLowerCase() === "y") {
        this.value = true;
        return this.submit();
      }
      if (c.toLowerCase() === "n") {
        this.value = false;
        return this.submit();
      }
      return this.bell();
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style2.symbol(this.done, this.aborted), color.bold(this.msg), style2.delimiter(this.done), this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  confirm$1 = ConfirmPrompt;
  return confirm$1;
}
var elements$1;
var hasRequiredElements$1;
function requireElements$1() {
  if (hasRequiredElements$1) return elements$1;
  hasRequiredElements$1 = 1;
  elements$1 = {
    TextPrompt: requireText$1(),
    SelectPrompt: requireSelect$1(),
    TogglePrompt: requireToggle$1(),
    DatePrompt: requireDate$1(),
    NumberPrompt: requireNumber$1(),
    MultiselectPrompt: requireMultiselect$1(),
    AutocompletePrompt: requireAutocomplete$1(),
    AutocompleteMultiselectPrompt: requireAutocompleteMultiselect$1(),
    ConfirmPrompt: requireConfirm$1()
  };
  return elements$1;
}
var hasRequiredPrompts$2;
function requirePrompts$2() {
  if (hasRequiredPrompts$2) return prompts$3;
  hasRequiredPrompts$2 = 1;
  (function(exports$1) {
    const $ = exports$1;
    const el = requireElements$1();
    const noop2 = (v) => v;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop2;
        const onSubmit = opts.onSubmit || noop2;
        const onExit = opts.onExit || noop2;
        p.on("state", args.onState || noop2);
        p.on("submit", (x) => res(onSubmit(x)));
        p.on("exit", (x) => res(onExit(x)));
        p.on("abort", (x) => rej(onAbort(x)));
      });
    }
    $.text = (args) => toPrompt("TextPrompt", args);
    $.password = (args) => {
      args.style = "password";
      return $.text(args);
    };
    $.invisible = (args) => {
      args.style = "invisible";
      return $.text(args);
    };
    $.number = (args) => toPrompt("NumberPrompt", args);
    $.date = (args) => toPrompt("DatePrompt", args);
    $.confirm = (args) => toPrompt("ConfirmPrompt", args);
    $.list = (args) => {
      const sep = args.separator || ",";
      return toPrompt("TextPrompt", args, {
        onSubmit: (str) => str.split(sep).map((s) => s.trim())
      });
    };
    $.toggle = (args) => toPrompt("TogglePrompt", args);
    $.select = (args) => toPrompt("SelectPrompt", args);
    $.multiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("MultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    $.autocompleteMultiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("AutocompleteMultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    const byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
    $.autocomplete = (args) => {
      args.suggest = args.suggest || byTitle;
      args.choices = [].concat(args.choices || []);
      return toPrompt("AutocompletePrompt", args);
    };
  })(prompts$3);
  return prompts$3;
}
var dist;
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
        if (it) o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    } };
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error2) {
      reject(error2);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  const prompts2 = requirePrompts$2();
  const passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
  const noop2 = () => {
  };
  function prompt2() {
    return _prompt.apply(this, arguments);
  }
  function _prompt() {
    _prompt = _asyncToGenerator(function* (questions = [], {
      onSubmit = noop2,
      onCancel = noop2
    } = {}) {
      const answers = {};
      const override2 = prompt2._override || {};
      questions = [].concat(questions);
      let answer, question, quit, name, type, lastPrompt;
      const getFormattedAnswer = /* @__PURE__ */ (function() {
        var _ref = _asyncToGenerator(function* (question2, answer2, skipValidation = false) {
          if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
            return;
          }
          return question2.format ? yield question2.format(answer2, answers) : answer2;
        });
        return function getFormattedAnswer2(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      })();
      var _iterator = _createForOfIteratorHelper(questions), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          question = _step.value;
          var _question = question;
          name = _question.name;
          type = _question.type;
          if (typeof type === "function") {
            type = yield type(answer, _objectSpread({}, answers), question);
            question["type"] = type;
          }
          if (!type) continue;
          for (let key in question) {
            if (passOn.includes(key)) continue;
            let value = question[key];
            question[key] = typeof value === "function" ? yield value(answer, _objectSpread({}, answers), lastPrompt) : value;
          }
          lastPrompt = question;
          if (typeof question.message !== "string") {
            throw new Error("prompt message is required");
          }
          var _question2 = question;
          name = _question2.name;
          type = _question2.type;
          if (prompts2[type] === void 0) {
            throw new Error(`prompt type (${type}) is not defined`);
          }
          if (override2[question.name] !== void 0) {
            answer = yield getFormattedAnswer(question, override2[question.name]);
            if (answer !== void 0) {
              answers[name] = answer;
              continue;
            }
          }
          try {
            answer = prompt2._injected ? getInjectedAnswer(prompt2._injected, question.initial) : yield prompts2[type](question);
            answers[name] = answer = yield getFormattedAnswer(question, answer, true);
            quit = yield onSubmit(question, answer, answers);
          } catch (err) {
            quit = !(yield onCancel(question, answers));
          }
          if (quit) return answers;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return answers;
    });
    return _prompt.apply(this, arguments);
  }
  function getInjectedAnswer(injected, deafultValue) {
    const answer = injected.shift();
    if (answer instanceof Error) {
      throw answer;
    }
    return answer === void 0 ? deafultValue : answer;
  }
  function inject(answers) {
    prompt2._injected = (prompt2._injected || []).concat(answers);
  }
  function override(answers) {
    prompt2._override = Object.assign({}, answers);
  }
  dist = Object.assign(prompt2, {
    prompt: prompt2,
    prompts: prompts2,
    inject,
    override
  });
  return dist;
}
var prompts$2 = {};
var action;
var hasRequiredAction;
function requireAction() {
  if (hasRequiredAction) return action;
  hasRequiredAction = 1;
  action = (key, isSelect) => {
    if (key.meta && key.name !== "escape") return;
    if (key.ctrl) {
      if (key.name === "a") return "first";
      if (key.name === "c") return "abort";
      if (key.name === "d") return "abort";
      if (key.name === "e") return "last";
      if (key.name === "g") return "reset";
    }
    if (isSelect) {
      if (key.name === "j") return "down";
      if (key.name === "k") return "up";
    }
    if (key.name === "return") return "submit";
    if (key.name === "enter") return "submit";
    if (key.name === "backspace") return "delete";
    if (key.name === "delete") return "deleteForward";
    if (key.name === "abort") return "abort";
    if (key.name === "escape") return "exit";
    if (key.name === "tab") return "next";
    if (key.name === "pagedown") return "nextPage";
    if (key.name === "pageup") return "prevPage";
    if (key.name === "home") return "home";
    if (key.name === "end") return "end";
    if (key.name === "up") return "up";
    if (key.name === "down") return "down";
    if (key.name === "right") return "right";
    if (key.name === "left") return "left";
    return false;
  };
  return action;
}
var strip;
var hasRequiredStrip;
function requireStrip() {
  if (hasRequiredStrip) return strip;
  hasRequiredStrip = 1;
  strip = (str) => {
    const pattern2 = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
    ].join("|");
    const RGX = new RegExp(pattern2, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
  };
  return strip;
}
var clear;
var hasRequiredClear;
function requireClear() {
  if (hasRequiredClear) return clear;
  hasRequiredClear = 1;
  const strip2 = requireStrip();
  const { erase, cursor } = requireSrc();
  const width = (str) => [...strip2(str)].length;
  clear = function(prompt2, perLine) {
    if (!perLine) return erase.line + cursor.to(0);
    let rows = 0;
    const lines2 = prompt2.split(/\r?\n/);
    for (let line of lines2) {
      rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
    }
    return erase.lines(rows);
  };
  return clear;
}
var figures_1;
var hasRequiredFigures;
function requireFigures() {
  if (hasRequiredFigures) return figures_1;
  hasRequiredFigures = 1;
  const main = {
    arrowUp: "↑",
    arrowDown: "↓",
    arrowLeft: "←",
    arrowRight: "→",
    radioOn: "◉",
    radioOff: "◯",
    tick: "✔",
    cross: "✖",
    ellipsis: "…",
    pointerSmall: "›",
    line: "─",
    pointer: "❯"
  };
  const win = {
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "√",
    cross: "×",
    ellipsis: "...",
    pointerSmall: "»",
    line: "─",
    pointer: ">"
  };
  const figures = process.platform === "win32" ? win : main;
  figures_1 = figures;
  return figures_1;
}
var style;
var hasRequiredStyle;
function requireStyle() {
  if (hasRequiredStyle) return style;
  hasRequiredStyle = 1;
  const c = requireKleur();
  const figures = requireFigures();
  const styles = Object.freeze({
    password: { scale: 1, render: (input) => "*".repeat(input.length) },
    emoji: { scale: 2, render: (input) => "😃".repeat(input.length) },
    invisible: { scale: 0, render: (input) => "" },
    default: { scale: 1, render: (input) => `${input}` }
  });
  const render = (type) => styles[type] || styles.default;
  const symbols = Object.freeze({
    aborted: c.red(figures.cross),
    done: c.green(figures.tick),
    exited: c.yellow(figures.cross),
    default: c.cyan("?")
  });
  const symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
  const delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
  const item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
  style = {
    styles,
    render,
    symbols,
    symbol,
    delimiter,
    item
  };
  return style;
}
var lines;
var hasRequiredLines;
function requireLines() {
  if (hasRequiredLines) return lines;
  hasRequiredLines = 1;
  const strip2 = requireStrip();
  lines = function(msg, perLine) {
    let lines2 = String(strip2(msg) || "").split(/\r?\n/);
    if (!perLine) return lines2.length;
    return lines2.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
  };
  return lines;
}
var wrap;
var hasRequiredWrap;
function requireWrap() {
  if (hasRequiredWrap) return wrap;
  hasRequiredWrap = 1;
  wrap = (msg, opts = {}) => {
    const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
    const width = opts.width;
    return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
      if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
        arr[arr.length - 1] += ` ${w}`;
      else arr.push(`${tab}${w}`);
      return arr;
    }, [tab]).join("\n")).join("\n");
  };
  return wrap;
}
var entriesToDisplay;
var hasRequiredEntriesToDisplay;
function requireEntriesToDisplay() {
  if (hasRequiredEntriesToDisplay) return entriesToDisplay;
  hasRequiredEntriesToDisplay = 1;
  entriesToDisplay = (cursor, total, maxVisible) => {
    maxVisible = maxVisible || total;
    let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
    if (startIndex < 0) startIndex = 0;
    let endIndex = Math.min(startIndex + maxVisible, total);
    return { startIndex, endIndex };
  };
  return entriesToDisplay;
}
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  util = {
    action: requireAction(),
    clear: requireClear(),
    style: requireStyle(),
    strip: requireStrip(),
    figures: requireFigures(),
    lines: requireLines(),
    wrap: requireWrap(),
    entriesToDisplay: requireEntriesToDisplay()
  };
  return util;
}
var prompt;
var hasRequiredPrompt;
function requirePrompt() {
  if (hasRequiredPrompt) return prompt;
  hasRequiredPrompt = 1;
  const readline = require$$0$2;
  const { action: action2 } = requireUtil();
  const EventEmitter = require$$2$1;
  const { beep, cursor } = requireSrc();
  const color = requireKleur();
  class Prompt extends EventEmitter {
    constructor(opts = {}) {
      super();
      this.firstRender = true;
      this.in = opts.stdin || process.stdin;
      this.out = opts.stdout || process.stdout;
      this.onRender = (opts.onRender || (() => void 0)).bind(this);
      const rl = readline.createInterface({ input: this.in, escapeCodeTimeout: 50 });
      readline.emitKeypressEvents(this.in, rl);
      if (this.in.isTTY) this.in.setRawMode(true);
      const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
      const keypress = (str, key) => {
        let a = action2(key, isSelect);
        if (a === false) {
          this._ && this._(str, key);
        } else if (typeof this[a] === "function") {
          this[a](key);
        } else {
          this.bell();
        }
      };
      this.close = () => {
        this.out.write(cursor.show);
        this.in.removeListener("keypress", keypress);
        if (this.in.isTTY) this.in.setRawMode(false);
        rl.close();
        this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
        this.closed = true;
      };
      this.in.on("keypress", keypress);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(beep);
    }
    render() {
      this.onRender(color);
      if (this.firstRender) this.firstRender = false;
    }
  }
  prompt = Prompt;
  return prompt;
}
var text;
var hasRequiredText;
function requireText() {
  if (hasRequiredText) return text;
  hasRequiredText = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { erase, cursor } = requireSrc();
  const { style: style2, clear: clear2, lines: lines2, figures } = requireUtil();
  class TextPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style2.render(opts.style);
      this.scale = this.transform.scale;
      this.msg = opts.message;
      this.initial = opts.initial || ``;
      this.validator = opts.validate || (() => true);
      this.value = ``;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.clear = clear2(``, this.out.columns);
      this.render();
    }
    set value(v) {
      if (!v && this.initial) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(this.initial));
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(v);
      }
      this._value = v;
      this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = ``;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.red = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === `string`) {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      this.value = this.value || this.initial;
      this.cursorOffset = 0;
      this.cursor = this.rendered.length;
      await this.validate();
      if (this.error) {
        this.red = true;
        this.fire();
        this.render();
        return;
      }
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    next() {
      if (!this.placeholder) return this.bell();
      this.value = this.initial;
      this.cursor = this.rendered.length;
      this.fire();
      this.render();
    }
    moveCursor(n) {
      if (this.placeholder) return;
      this.cursor = this.cursor + n;
      this.cursorOffset += n;
    }
    _(c, key) {
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${c}${s2}`;
      this.red = false;
      this.cursor = this.placeholder ? 0 : s1.length + 1;
      this.render();
    }
    delete() {
      if (this.isCursorAtStart()) return this.bell();
      let s1 = this.value.slice(0, this.cursor - 1);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtStart()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
        this.moveCursor(-1);
      }
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor + 1);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtEnd()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
      }
      this.render();
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length;
      this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder) return this.bell();
      this.moveCursor(-1);
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
      this.moveCursor(1);
      this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      if (this.closed) return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines2(this.outputError, this.out.columns) - 1) + clear2(this.outputError, this.out.columns));
        this.out.write(clear2(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(this.done),
        this.red ? color.red(this.rendered) : this.rendered
      ].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
    }
  }
  text = TextPrompt;
  return text;
}
var select;
var hasRequiredSelect;
function requireSelect() {
  if (hasRequiredSelect) return select;
  hasRequiredSelect = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { style: style2, clear: clear2, figures, wrap: wrap2, entriesToDisplay: entriesToDisplay2 } = requireUtil();
  const { cursor } = requireSrc();
  class SelectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
      this.warn = opts.warn || "- This option is disabled";
      this.cursor = opts.initial || 0;
      this.choices = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = { title: ch, value: idx };
        return {
          title: ch && (ch.title || ch.value || ch),
          value: ch && (ch.value === void 0 ? idx : ch.value),
          description: ch && ch.description,
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = (this.choices[this.cursor] || {}).value;
      this.clear = clear2("", this.out.columns);
      this.render();
    }
    moveCursor(n) {
      this.cursor = n;
      this.value = this.choices[n].value;
      this.fire();
    }
    reset() {
      this.moveCursor(0);
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      if (!this.selection.disabled) {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      } else
        this.bell();
    }
    first() {
      this.moveCursor(0);
      this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1);
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.moveCursor(this.choices.length - 1);
      } else {
        this.moveCursor(this.cursor - 1);
      }
      this.render();
    }
    down() {
      if (this.cursor === this.choices.length - 1) {
        this.moveCursor(0);
      } else {
        this.moveCursor(this.cursor + 1);
      }
      this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length);
      this.render();
    }
    _(c, key) {
      if (c === " ") return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      let { startIndex, endIndex } = entriesToDisplay2(this.cursor, this.choices.length, this.optionsPerPage);
      this.outputText = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(false),
        this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)
      ].join(" ");
      if (!this.done) {
        this.outputText += "\n";
        for (let i = startIndex; i < endIndex; i++) {
          let title, prefix, desc = "", v = this.choices[i];
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < this.choices.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          if (v.disabled) {
            title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
            prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
          } else {
            title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
            prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
            if (v.description && this.cursor === i) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap2(v.description, { margin: 3, width: this.out.columns });
              }
            }
          }
          this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
        }
      }
      this.out.write(this.outputText);
    }
  }
  select = SelectPrompt;
  return select;
}
var toggle;
var hasRequiredToggle;
function requireToggle() {
  if (hasRequiredToggle) return toggle;
  hasRequiredToggle = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { style: style2, clear: clear2 } = requireUtil();
  const { cursor, erase } = requireSrc();
  class TogglePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = !!opts.initial;
      this.active = opts.active || "on";
      this.inactive = opts.inactive || "off";
      this.initialValue = this.value;
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    deactivate() {
      if (this.value === false) return this.bell();
      this.value = false;
      this.render();
    }
    activate() {
      if (this.value === true) return this.bell();
      this.value = true;
      this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.value = !this.value;
      } else if (c === "1") {
        this.value = true;
      } else if (c === "0") {
        this.value = false;
      } else return this.bell();
      this.render();
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(this.done),
        this.value ? this.inactive : color.cyan().underline(this.inactive),
        color.gray("/"),
        this.value ? color.cyan().underline(this.active) : this.active
      ].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  toggle = TogglePrompt;
  return toggle;
}
var datepart;
var hasRequiredDatepart;
function requireDatepart() {
  if (hasRequiredDatepart) return datepart;
  hasRequiredDatepart = 1;
  class DatePart {
    constructor({ token, date: date2, parts, locales }) {
      this.token = token;
      this.date = date2 || /* @__PURE__ */ new Date();
      this.parts = parts || [this];
      this.locales = locales || {};
    }
    up() {
    }
    down() {
    }
    next() {
      const currentIdx = this.parts.indexOf(this);
      return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    setTo(val) {
    }
    prev() {
      let parts = [].concat(this.parts).reverse();
      const currentIdx = parts.indexOf(this);
      return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    toString() {
      return String(this.date);
    }
  }
  datepart = DatePart;
  return datepart;
}
var meridiem;
var hasRequiredMeridiem;
function requireMeridiem() {
  if (hasRequiredMeridiem) return meridiem;
  hasRequiredMeridiem = 1;
  const DatePart = requireDatepart();
  class Meridiem extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let meridiem2 = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? meridiem2.toUpperCase() : meridiem2;
    }
  }
  meridiem = Meridiem;
  return meridiem;
}
var day;
var hasRequiredDay;
function requireDay() {
  if (hasRequiredDay) return day;
  hasRequiredDay = 1;
  const DatePart = requireDatepart();
  const pos = (n) => {
    n = n % 10;
    return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  };
  class Day extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(val) {
      this.date.setDate(parseInt(val.substr(-2)));
    }
    toString() {
      let date2 = this.date.getDate();
      let day2 = this.date.getDay();
      return this.token === "DD" ? String(date2).padStart(2, "0") : this.token === "Do" ? date2 + pos(date2) : this.token === "d" ? day2 + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day2] : this.token === "dddd" ? this.locales.weekdays[day2] : date2;
    }
  }
  day = Day;
  return day;
}
var hours;
var hasRequiredHours;
function requireHours() {
  if (hasRequiredHours) return hours;
  hasRequiredHours = 1;
  const DatePart = requireDatepart();
  class Hours extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(val) {
      this.date.setHours(parseInt(val.substr(-2)));
    }
    toString() {
      let hours2 = this.date.getHours();
      if (/h/.test(this.token))
        hours2 = hours2 % 12 || 12;
      return this.token.length > 1 ? String(hours2).padStart(2, "0") : hours2;
    }
  }
  hours = Hours;
  return hours;
}
var milliseconds;
var hasRequiredMilliseconds;
function requireMilliseconds() {
  if (hasRequiredMilliseconds) return milliseconds;
  hasRequiredMilliseconds = 1;
  const DatePart = requireDatepart();
  class Milliseconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(val) {
      this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  }
  milliseconds = Milliseconds;
  return milliseconds;
}
var minutes;
var hasRequiredMinutes;
function requireMinutes() {
  if (hasRequiredMinutes) return minutes;
  hasRequiredMinutes = 1;
  const DatePart = requireDatepart();
  class Minutes extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(val) {
      this.date.setMinutes(parseInt(val.substr(-2)));
    }
    toString() {
      let m = this.date.getMinutes();
      return this.token.length > 1 ? String(m).padStart(2, "0") : m;
    }
  }
  minutes = Minutes;
  return minutes;
}
var month;
var hasRequiredMonth;
function requireMonth() {
  if (hasRequiredMonth) return month;
  hasRequiredMonth = 1;
  const DatePart = requireDatepart();
  class Month extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(val) {
      val = parseInt(val.substr(-2)) - 1;
      this.date.setMonth(val < 0 ? 0 : val);
    }
    toString() {
      let month2 = this.date.getMonth();
      let tl = this.token.length;
      return tl === 2 ? String(month2 + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month2] : tl === 4 ? this.locales.months[month2] : String(month2 + 1);
    }
  }
  month = Month;
  return month;
}
var seconds;
var hasRequiredSeconds;
function requireSeconds() {
  if (hasRequiredSeconds) return seconds;
  hasRequiredSeconds = 1;
  const DatePart = requireDatepart();
  class Seconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(val) {
      this.date.setSeconds(parseInt(val.substr(-2)));
    }
    toString() {
      let s = this.date.getSeconds();
      return this.token.length > 1 ? String(s).padStart(2, "0") : s;
    }
  }
  seconds = Seconds;
  return seconds;
}
var year;
var hasRequiredYear;
function requireYear() {
  if (hasRequiredYear) return year;
  hasRequiredYear = 1;
  const DatePart = requireDatepart();
  class Year extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(val) {
      this.date.setFullYear(val.substr(-4));
    }
    toString() {
      let year2 = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? year2.substr(-2) : year2;
    }
  }
  year = Year;
  return year;
}
var dateparts;
var hasRequiredDateparts;
function requireDateparts() {
  if (hasRequiredDateparts) return dateparts;
  hasRequiredDateparts = 1;
  dateparts = {
    DatePart: requireDatepart(),
    Meridiem: requireMeridiem(),
    Day: requireDay(),
    Hours: requireHours(),
    Milliseconds: requireMilliseconds(),
    Minutes: requireMinutes(),
    Month: requireMonth(),
    Seconds: requireSeconds(),
    Year: requireYear()
  };
  return dateparts;
}
var date;
var hasRequiredDate;
function requireDate() {
  if (hasRequiredDate) return date;
  hasRequiredDate = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { style: style2, clear: clear2, figures } = requireUtil();
  const { erase, cursor } = requireSrc();
  const { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = requireDateparts();
  const regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
  const regexGroups = {
    1: ({ token }) => token.replace(/\\(.)/g, "$1"),
    2: (opts) => new Day(opts),
    // Day // TODO
    3: (opts) => new Month(opts),
    // Month
    4: (opts) => new Year(opts),
    // Year
    5: (opts) => new Meridiem(opts),
    // AM/PM // TODO (special)
    6: (opts) => new Hours(opts),
    // Hours
    7: (opts) => new Minutes(opts),
    // Minutes
    8: (opts) => new Seconds(opts),
    // Seconds
    9: (opts) => new Milliseconds(opts)
    // Fractional seconds
  };
  const dfltLocales = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  };
  class DatePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = 0;
      this.typed = "";
      this.locales = Object.assign(dfltLocales, opts.locales);
      this._date = opts.initial || /* @__PURE__ */ new Date();
      this.errorMsg = opts.error || "Please Enter A Valid Value";
      this.validator = opts.validate || (() => true);
      this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
      this.clear = clear2("", this.out.columns);
      this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(date2) {
      if (date2) this._date.setTime(date2.getTime());
    }
    set mask(mask) {
      let result;
      this.parts = [];
      while (result = regex.exec(mask)) {
        let match = result.shift();
        let idx = result.findIndex((gr) => gr != null);
        this.parts.push(idx in regexGroups ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales }) : result[idx] || match);
      }
      let parts = this.parts.reduce((arr, i) => {
        if (typeof i === "string" && typeof arr[arr.length - 1] === "string")
          arr[arr.length - 1] += i;
        else arr.push(i);
        return arr;
      }, []);
      this.parts.splice(0);
      this.parts.push(...parts);
      this.reset();
    }
    moveCursor(n) {
      this.typed = "";
      this.cursor = n;
      this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === "string") {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      await this.validate();
      if (this.error) {
        this.color = "red";
        this.fire();
        this.render();
        return;
      }
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    up() {
      this.typed = "";
      this.parts[this.cursor].up();
      this.render();
    }
    down() {
      this.typed = "";
      this.parts[this.cursor].down();
      this.render();
    }
    left() {
      let prev = this.parts[this.cursor].prev();
      if (prev == null) return this.bell();
      this.moveCursor(this.parts.indexOf(prev));
      this.render();
    }
    right() {
      let next = this.parts[this.cursor].next();
      if (next == null) return this.bell();
      this.moveCursor(this.parts.indexOf(next));
      this.render();
    }
    next() {
      let next = this.parts[this.cursor].next();
      this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
      this.render();
    }
    _(c) {
      if (/\d/.test(c)) {
        this.typed += c;
        this.parts[this.cursor].setTo(this.typed);
        this.render();
      }
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(false),
        this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")
      ].join(" ");
      if (this.error) {
        this.outputText += this.errorMsg.split("\n").reduce(
          (a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`,
          ``
        );
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  date = DatePrompt;
  return date;
}
var number;
var hasRequiredNumber;
function requireNumber() {
  if (hasRequiredNumber) return number;
  hasRequiredNumber = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { cursor, erase } = requireSrc();
  const { style: style2, figures, clear: clear2, lines: lines2 } = requireUtil();
  const isNumber2 = /[0-9]/;
  const isDef = (any) => any !== void 0;
  const round = (number2, precision) => {
    let factor = Math.pow(10, precision);
    return Math.round(number2 * factor) / factor;
  };
  class NumberPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style2.render(opts.style);
      this.msg = opts.message;
      this.initial = isDef(opts.initial) ? opts.initial : "";
      this.float = !!opts.float;
      this.round = opts.round || 2;
      this.inc = opts.increment || 1;
      this.min = isDef(opts.min) ? opts.min : -Infinity;
      this.max = isDef(opts.max) ? opts.max : Infinity;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.validator = opts.validate || (() => true);
      this.color = `cyan`;
      this.value = ``;
      this.typed = ``;
      this.lastHit = 0;
      this.render();
    }
    set value(v) {
      if (!v && v !== 0) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(`${this.initial}`));
        this._value = ``;
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(`${round(v, this.round)}`);
        this._value = round(v, this.round);
      }
      this.fire();
    }
    get value() {
      return this._value;
    }
    parse(x) {
      return this.float ? parseFloat(x) : parseInt(x);
    }
    valid(c) {
      return c === `-` || c === `.` && this.float || isNumber2.test(c);
    }
    reset() {
      this.typed = ``;
      this.value = ``;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`
`);
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === `string`) {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      await this.validate();
      if (this.error) {
        this.color = `red`;
        this.fire();
        this.render();
        return;
      }
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = true;
      this.aborted = false;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`
`);
      this.close();
    }
    up() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min - this.inc;
      }
      if (this.value >= this.max) return this.bell();
      this.value += this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    down() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min + this.inc;
      }
      if (this.value <= this.min) return this.bell();
      this.value -= this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    delete() {
      let val = this.value.toString();
      if (val.length === 0) return this.bell();
      this.value = this.parse(val = val.slice(0, -1)) || ``;
      if (this.value !== "" && this.value < this.min) {
        this.value = this.min;
      }
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    next() {
      this.value = this.initial;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (!this.valid(c)) return this.bell();
      const now = Date.now();
      if (now - this.lastHit > 1e3) this.typed = ``;
      this.typed += c;
      this.lastHit = now;
      this.color = `cyan`;
      if (c === `.`) return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max);
      if (this.value > this.max) this.value = this.max;
      if (this.value < this.min) this.value = this.min;
      this.fire();
      this.render();
    }
    render() {
      if (this.closed) return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines2(this.outputError, this.out.columns) - 1) + clear2(this.outputError, this.out.columns));
        this.out.write(clear2(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(this.done),
        !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered
      ].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
    }
  }
  number = NumberPrompt;
  return number;
}
var multiselect;
var hasRequiredMultiselect;
function requireMultiselect() {
  if (hasRequiredMultiselect) return multiselect;
  hasRequiredMultiselect = 1;
  const color = requireKleur();
  const { cursor } = requireSrc();
  const Prompt = requirePrompt();
  const { clear: clear2, figures, style: style2, wrap: wrap2, entriesToDisplay: entriesToDisplay2 } = requireUtil();
  class MultiselectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = opts.cursor || 0;
      this.scrollIndex = opts.cursor || 0;
      this.hint = opts.hint || "";
      this.warn = opts.warn || "- This option is disabled -";
      this.minSelected = opts.min;
      this.showMinError = false;
      this.maxChoices = opts.max;
      this.instructions = opts.instructions;
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = { title: ch, value: idx };
        return {
          title: ch && (ch.title || ch.value || ch),
          description: ch && ch.description,
          value: ch && (ch.value === void 0 ? idx : ch.value),
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.clear = clear2("", this.out.columns);
      if (!opts.overrideRender) {
        this.render();
      }
    }
    reset() {
      this.value.map((v) => !v.selected);
      this.cursor = 0;
      this.fire();
      this.render();
    }
    selected() {
      return this.value.filter((v) => v.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      const selected = this.value.filter((e) => e.selected);
      if (this.minSelected && selected.length < this.minSelected) {
        this.showMinError = true;
        this.render();
      } else {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.value.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.value.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.value[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
      this.value[this.cursor].selected = true;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.value[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
        return this.bell();
      }
      const newSelected = !this.value[this.cursor].selected;
      this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else if (c === "a") {
        this.toggleAll();
      } else {
        return this.bell();
      }
    }
    renderInstructions() {
      if (this.instructions === void 0 || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
      }
      return "";
    }
    renderOption(cursor2, v, i, arrowIndicator) {
      const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
      let title, desc;
      if (v.disabled) {
        title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      } else {
        title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        if (cursor2 === i && v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap2(v.description, { margin: prefix.length, width: this.out.columns });
          }
        }
      }
      return prefix + title + color.gray(desc || "");
    }
    // shared with autocompleteMultiselect
    paginateOptions(options) {
      if (options.length === 0) {
        return color.red("No matches for this query.");
      }
      let { startIndex, endIndex } = entriesToDisplay2(this.cursor, options.length, this.optionsPerPage);
      let prefix, styledOptions = [];
      for (let i = startIndex; i < endIndex; i++) {
        if (i === startIndex && startIndex > 0) {
          prefix = figures.arrowUp;
        } else if (i === endIndex - 1 && endIndex < options.length) {
          prefix = figures.arrowDown;
        } else {
          prefix = " ";
        }
        styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
      }
      return "\n" + styledOptions.join("\n");
    }
    // shared with autocomleteMultiselect
    renderOptions(options) {
      if (!this.done) {
        return this.paginateOptions(options);
      }
      return "";
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions()];
      if (this.value[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      super.render();
      let prompt2 = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(false),
        this.renderDoneOrInstructions()
      ].join(" ");
      if (this.showMinError) {
        prompt2 += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt2 += this.renderOptions(this.value);
      this.out.write(this.clear + prompt2);
      this.clear = clear2(prompt2, this.out.columns);
    }
  }
  multiselect = MultiselectPrompt;
  return multiselect;
}
var autocomplete;
var hasRequiredAutocomplete;
function requireAutocomplete() {
  if (hasRequiredAutocomplete) return autocomplete;
  hasRequiredAutocomplete = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { erase, cursor } = requireSrc();
  const { style: style2, clear: clear2, figures, wrap: wrap2, entriesToDisplay: entriesToDisplay2 } = requireUtil();
  const getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
  const getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
  const getIndex = (arr, valOrTitle) => {
    const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
    return index > -1 ? index : void 0;
  };
  class AutocompletePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.suggest = opts.suggest;
      this.choices = opts.choices;
      this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
      this.select = this.initial || opts.cursor || 0;
      this.i18n = { noMatches: opts.noMatches || "no matches found" };
      this.fallback = opts.fallback || this.initial;
      this.clearFirst = opts.clearFirst || false;
      this.suggestions = [];
      this.input = "";
      this.limit = opts.limit || 10;
      this.cursor = 0;
      this.transform = style2.render(opts.style);
      this.scale = this.transform.scale;
      this.render = this.render.bind(this);
      this.complete = this.complete.bind(this);
      this.clear = clear2("", this.out.columns);
      this.complete(this.render);
      this.render();
    }
    set fallback(fb) {
      this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
    }
    get fallback() {
      let choice;
      if (typeof this._fb === "number")
        choice = this.choices[this._fb];
      else if (typeof this._fb === "string")
        choice = { title: this._fb };
      return choice || this._fb || { title: this.i18n.noMatches };
    }
    moveSelect(i) {
      this.select = i;
      if (this.suggestions.length > 0)
        this.value = getVal(this.suggestions, i);
      else this.value = this.fallback.value;
      this.fire();
    }
    async complete(cb) {
      const p = this.completing = this.suggest(this.input, this.choices);
      const suggestions = await p;
      if (this.completing !== p) return;
      this.suggestions = suggestions.map((s, i, arr) => ({ title: getTitle(arr, i), value: getVal(arr, i), description: s.description }));
      this.completing = false;
      const l = Math.max(suggestions.length - 1, 0);
      this.moveSelect(Math.min(l, this.select));
      cb && cb();
    }
    reset() {
      this.input = "";
      this.complete(() => {
        this.moveSelect(this.initial !== void 0 ? this.initial : 0);
        this.render();
      });
      this.render();
    }
    exit() {
      if (this.clearFirst && this.input.length > 0) {
        this.reset();
      } else {
        this.done = this.exited = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    abort() {
      this.done = this.aborted = true;
      this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${c}${s2}`;
      this.cursor = s1.length + 1;
      this.complete(this.render);
      this.render();
    }
    delete() {
      if (this.cursor === 0) return this.bell();
      let s1 = this.input.slice(0, this.cursor - 1);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.cursor = this.cursor - 1;
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor + 1);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.render();
    }
    first() {
      this.moveSelect(0);
      this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1);
      this.render();
    }
    up() {
      if (this.select === 0) {
        this.moveSelect(this.suggestions.length - 1);
      } else {
        this.moveSelect(this.select - 1);
      }
      this.render();
    }
    down() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else {
        this.moveSelect(this.select + 1);
      }
      this.render();
    }
    next() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else this.moveSelect(this.select + 1);
      this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
      this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0));
      this.render();
    }
    left() {
      if (this.cursor <= 0) return this.bell();
      this.cursor = this.cursor - 1;
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length) return this.bell();
      this.cursor = this.cursor + 1;
      this.render();
    }
    renderOption(v, hovered, isStart, isEnd) {
      let desc;
      let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
      let title = hovered ? color.cyan().underline(v.title) : v.title;
      prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
      if (v.description) {
        desc = ` - ${v.description}`;
        if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
          desc = "\n" + wrap2(v.description, { margin: 3, width: this.out.columns });
        }
      }
      return prefix + " " + title + color.gray(desc || "");
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      let { startIndex, endIndex } = entriesToDisplay2(this.select, this.choices.length, this.limit);
      this.outputText = [
        style2.symbol(this.done, this.aborted, this.exited),
        color.bold(this.msg),
        style2.delimiter(this.completing),
        this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
      ].join(" ");
      if (!this.done) {
        const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(
          item,
          this.select === i + startIndex,
          i === 0 && startIndex > 0,
          i + startIndex === endIndex - 1 && endIndex < this.choices.length
        )).join("\n");
        this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  autocomplete = AutocompletePrompt;
  return autocomplete;
}
var autocompleteMultiselect;
var hasRequiredAutocompleteMultiselect;
function requireAutocompleteMultiselect() {
  if (hasRequiredAutocompleteMultiselect) return autocompleteMultiselect;
  hasRequiredAutocompleteMultiselect = 1;
  const color = requireKleur();
  const { cursor } = requireSrc();
  const MultiselectPrompt = requireMultiselect();
  const { clear: clear2, style: style2, figures } = requireUtil();
  class AutocompleteMultiselectPrompt extends MultiselectPrompt {
    constructor(opts = {}) {
      opts.overrideRender = true;
      super(opts);
      this.inputValue = "";
      this.clear = clear2("", this.out.columns);
      this.filteredOptions = this.value;
      this.render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.filteredOptions.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.filteredOptions.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
      this.filteredOptions[this.cursor].selected = true;
      this.render();
    }
    delete() {
      if (this.inputValue.length) {
        this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
        this.updateFilteredOptions();
      }
    }
    updateFilteredOptions() {
      const currentHighlight = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((v) => {
        if (this.inputValue) {
          if (typeof v.title === "string") {
            if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          if (typeof v.value === "string") {
            if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
      this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.filteredOptions[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    handleInputChange(c) {
      this.inputValue = this.inputValue + c;
      this.updateFilteredOptions();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else {
        this.handleInputChange(c);
      }
    }
    renderInstructions() {
      if (this.instructions === void 0 || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
      }
      return "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
    }
    renderOption(cursor2, v, i) {
      let title;
      if (v.disabled) title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      else title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
      return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      super.render();
      let prompt2 = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(false),
        this.renderDoneOrInstructions()
      ].join(" ");
      if (this.showMinError) {
        prompt2 += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt2 += this.renderOptions(this.filteredOptions);
      this.out.write(this.clear + prompt2);
      this.clear = clear2(prompt2, this.out.columns);
    }
  }
  autocompleteMultiselect = AutocompleteMultiselectPrompt;
  return autocompleteMultiselect;
}
var confirm;
var hasRequiredConfirm;
function requireConfirm() {
  if (hasRequiredConfirm) return confirm;
  hasRequiredConfirm = 1;
  const color = requireKleur();
  const Prompt = requirePrompt();
  const { style: style2, clear: clear2 } = requireUtil();
  const { erase, cursor } = requireSrc();
  class ConfirmPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = opts.initial;
      this.initialValue = !!opts.initial;
      this.yesMsg = opts.yes || "yes";
      this.yesOption = opts.yesOption || "(Y/n)";
      this.noMsg = opts.no || "no";
      this.noOption = opts.noOption || "(y/N)";
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.value = this.value || false;
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      if (c.toLowerCase() === "y") {
        this.value = true;
        return this.submit();
      }
      if (c.toLowerCase() === "n") {
        this.value = false;
        return this.submit();
      }
      return this.bell();
    }
    render() {
      if (this.closed) return;
      if (this.firstRender) this.out.write(cursor.hide);
      else this.out.write(clear2(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style2.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style2.delimiter(this.done),
        this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)
      ].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  confirm = ConfirmPrompt;
  return confirm;
}
var elements;
var hasRequiredElements;
function requireElements() {
  if (hasRequiredElements) return elements;
  hasRequiredElements = 1;
  elements = {
    TextPrompt: requireText(),
    SelectPrompt: requireSelect(),
    TogglePrompt: requireToggle(),
    DatePrompt: requireDate(),
    NumberPrompt: requireNumber(),
    MultiselectPrompt: requireMultiselect(),
    AutocompletePrompt: requireAutocomplete(),
    AutocompleteMultiselectPrompt: requireAutocompleteMultiselect(),
    ConfirmPrompt: requireConfirm()
  };
  return elements;
}
var hasRequiredPrompts$1;
function requirePrompts$1() {
  if (hasRequiredPrompts$1) return prompts$2;
  hasRequiredPrompts$1 = 1;
  (function(exports$1) {
    const $ = exports$1;
    const el = requireElements();
    const noop2 = (v) => v;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop2;
        const onSubmit = opts.onSubmit || noop2;
        const onExit = opts.onExit || noop2;
        p.on("state", args.onState || noop2);
        p.on("submit", (x) => res(onSubmit(x)));
        p.on("exit", (x) => res(onExit(x)));
        p.on("abort", (x) => rej(onAbort(x)));
      });
    }
    $.text = (args) => toPrompt("TextPrompt", args);
    $.password = (args) => {
      args.style = "password";
      return $.text(args);
    };
    $.invisible = (args) => {
      args.style = "invisible";
      return $.text(args);
    };
    $.number = (args) => toPrompt("NumberPrompt", args);
    $.date = (args) => toPrompt("DatePrompt", args);
    $.confirm = (args) => toPrompt("ConfirmPrompt", args);
    $.list = (args) => {
      const sep = args.separator || ",";
      return toPrompt("TextPrompt", args, {
        onSubmit: (str) => str.split(sep).map((s) => s.trim())
      });
    };
    $.toggle = (args) => toPrompt("TogglePrompt", args);
    $.select = (args) => toPrompt("SelectPrompt", args);
    $.multiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("MultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    $.autocompleteMultiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("AutocompleteMultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    const byTitle = (input, choices) => Promise.resolve(
      choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase())
    );
    $.autocomplete = (args) => {
      args.suggest = args.suggest || byTitle;
      args.choices = [].concat(args.choices || []);
      return toPrompt("AutocompletePrompt", args);
    };
  })(prompts$2);
  return prompts$2;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  const prompts2 = requirePrompts$1();
  const passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
  const noop2 = () => {
  };
  async function prompt2(questions = [], { onSubmit = noop2, onCancel = noop2 } = {}) {
    const answers = {};
    const override2 = prompt2._override || {};
    questions = [].concat(questions);
    let answer, question, quit, name, type, lastPrompt;
    const getFormattedAnswer = async (question2, answer2, skipValidation = false) => {
      if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
        return;
      }
      return question2.format ? await question2.format(answer2, answers) : answer2;
    };
    for (question of questions) {
      ({ name, type } = question);
      if (typeof type === "function") {
        type = await type(answer, { ...answers }, question);
        question["type"] = type;
      }
      if (!type) continue;
      for (let key in question) {
        if (passOn.includes(key)) continue;
        let value = question[key];
        question[key] = typeof value === "function" ? await value(answer, { ...answers }, lastPrompt) : value;
      }
      lastPrompt = question;
      if (typeof question.message !== "string") {
        throw new Error("prompt message is required");
      }
      ({ name, type } = question);
      if (prompts2[type] === void 0) {
        throw new Error(`prompt type (${type}) is not defined`);
      }
      if (override2[question.name] !== void 0) {
        answer = await getFormattedAnswer(question, override2[question.name]);
        if (answer !== void 0) {
          answers[name] = answer;
          continue;
        }
      }
      try {
        answer = prompt2._injected ? getInjectedAnswer(prompt2._injected, question.initial) : await prompts2[type](question);
        answers[name] = answer = await getFormattedAnswer(question, answer, true);
        quit = await onSubmit(question, answer, answers);
      } catch (err) {
        quit = !await onCancel(question, answers);
      }
      if (quit) return answers;
    }
    return answers;
  }
  function getInjectedAnswer(injected, deafultValue) {
    const answer = injected.shift();
    if (answer instanceof Error) {
      throw answer;
    }
    return answer === void 0 ? deafultValue : answer;
  }
  function inject(answers) {
    prompt2._injected = (prompt2._injected || []).concat(answers);
  }
  function override(answers) {
    prompt2._override = Object.assign({}, answers);
  }
  lib = Object.assign(prompt2, { prompt: prompt2, prompts: prompts2, inject, override });
  return lib;
}
var prompts$1;
var hasRequiredPrompts;
function requirePrompts() {
  if (hasRequiredPrompts) return prompts$1;
  hasRequiredPrompts = 1;
  function isNodeLT(tar) {
    tar = (Array.isArray(tar) ? tar : tar.split(".")).map(Number);
    let i = 0, src2 = process.versions.node.split(".").map(Number);
    for (; i < tar.length; i++) {
      if (src2[i] > tar[i]) return false;
      if (tar[i] > src2[i]) return true;
    }
    return false;
  }
  prompts$1 = isNodeLT("8.6.0") ? requireDist() : requireLib();
  return prompts$1;
}
var promptsExports = requirePrompts();
const prompts = /* @__PURE__ */ getDefaultExportFromCjs(promptsExports);
async function nameCommand(optionName) {
  const { optionConversion } = optionUtility;
  const { onPromptState } = commanderCore;
  const { createOk, checkPromiseReturn } = resultUtility;
  if (optionName.isSome && isString(optionName.value)) {
    return createOk(optionName.value.trim());
  }
  const response = await checkPromiseReturn({
    fn: async () => await prompts({
      onState: onPromptState,
      type: "text",
      name: "path",
      message: "What is your project named?",
      initial: "my-project",
      validate: (name2) => {
        const validation = validateNpmName(name2);
        if (validation.valid) {
          return true;
        }
        return `Invalid project name: ${validation.problems?.join(", ")}`;
      }
    }),
    err: (e) => {
      if (e instanceof Error) {
        return new Error(`Prompt failed: ${e.message}`);
      }
      return new Error("Prompt failed: Unknown error");
    }
  });
  if (response.isErr) {
    return response;
  }
  const name = optionConversion(response.value.path);
  if (name.isSome && isString(name.value)) {
    return createOk(name.value.trim());
  }
  return createOk("my-project");
}
function cliErrorLog(err) {
  console.error(picocolors_browserExports.red(err.message));
  console.error(picocolors_browserExports.red(err.stack ?? ""));
}
const techStacks = ["react", "vue"];
const techStackSelectList = [
  { title: "React", value: "react" },
  { title: "Vue", value: "vue" }
];
const frameworks = [
  "tanstack-router",
  "next/app",
  "next/pages"
];
const reactCSSes = ["tailwind", "vanilla-extract"];
function isReactFramework(value) {
  if (typeof value !== "string") {
    return false;
  }
  return frameworks.includes(value);
}
function isTechStack(value) {
  if (typeof value !== "string") {
    return false;
  }
  return techStacks.includes(value);
}
function isReactCss(value) {
  return reactCSSes.includes(value);
}
async function techStackCommand(optionTech) {
  const { createOk, createNg, checkPromiseReturn } = resultUtility;
  const { onPromptState } = commanderCore;
  if (optionTech.isSome && isTechStack(optionTech.value)) {
    return createOk(optionTech.value);
  }
  const response = await checkPromiseReturn({
    fn: async () => await prompts({
      onState: onPromptState,
      type: "select",
      name: "techStack",
      message: "Select a tech stack for your project:",
      choices: techStackSelectList,
      initial: 0
    }),
    err: (e) => {
      if (e instanceof Error) {
        return new Error(`Prompt failed: ${e.message}`);
      }
      return new Error("Prompt failed: Unknown error");
    }
  });
  if (response.isErr) {
    return response;
  }
  const techStack = response.value.techStack;
  if (isTechStack(techStack)) {
    return createOk(techStack);
  }
  return createNg(new Error("Tech stack selection is invalid"));
}
function isFolderEmpty(root, name) {
  const validFiles = [
    ".DS_Store",
    ".git",
    ".gitattributes",
    ".gitignore",
    ".gitlab-ci.yml",
    ".hg",
    ".hgcheck",
    ".hgignore",
    ".idea",
    ".npmignore",
    ".travis.yml",
    "LICENSE",
    "Thumbs.db",
    "docs",
    "mkdocs.yml",
    "npm-debug.log",
    "yarn-debug.log",
    "yarn-error.log",
    "yarnrc.yml",
    ".yarn"
  ];
  const conflicts = require$$3.readdirSync(root).filter((file) => {
    return !validFiles.includes(file) && !/\.iml&/.test(file);
  });
  if (conflicts.length > 0) {
    console.log(
      `The directory ${picocolors_browserExports.green(name)} contains files that could conflict:`
    );
    console.log();
    for (const file of conflicts) {
      try {
        const stats = require$$3.lstatSync(require$$2.join(root, file));
        if (stats.isDirectory()) {
          console.log(picocolors_browserExports.blue(`  ${file}/`));
        } else {
          console.log(`  ${file}`);
        }
      } catch {
        console.log(`  ${file}`);
      }
    }
    console.log();
    console.log(
      "Either try using a new directory name, or remove the files listed above."
    );
    console.log();
    return false;
  }
  return true;
}
var tasks = {};
var utils$3 = {};
var array = {};
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  Object.defineProperty(array, "__esModule", { value: true });
  array.splitWhen = array.flatten = void 0;
  function flatten(items) {
    return items.reduce((collection, item) => [].concat(collection, item), []);
  }
  array.flatten = flatten;
  function splitWhen(items, predicate) {
    const result = [[]];
    let groupIndex = 0;
    for (const item of items) {
      if (predicate(item)) {
        groupIndex++;
        result[groupIndex] = [];
      } else {
        result[groupIndex].push(item);
      }
    }
    return result;
  }
  array.splitWhen = splitWhen;
  return array;
}
var errno = {};
var hasRequiredErrno;
function requireErrno() {
  if (hasRequiredErrno) return errno;
  hasRequiredErrno = 1;
  Object.defineProperty(errno, "__esModule", { value: true });
  errno.isEnoentCodeError = void 0;
  function isEnoentCodeError(error2) {
    return error2.code === "ENOENT";
  }
  errno.isEnoentCodeError = isEnoentCodeError;
  return errno;
}
var fs$3 = {};
var hasRequiredFs$3;
function requireFs$3() {
  if (hasRequiredFs$3) return fs$3;
  hasRequiredFs$3 = 1;
  Object.defineProperty(fs$3, "__esModule", { value: true });
  fs$3.createDirentFromStats = void 0;
  class DirentFromStats {
    constructor(name, stats) {
      this.name = name;
      this.isBlockDevice = stats.isBlockDevice.bind(stats);
      this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
      this.isDirectory = stats.isDirectory.bind(stats);
      this.isFIFO = stats.isFIFO.bind(stats);
      this.isFile = stats.isFile.bind(stats);
      this.isSocket = stats.isSocket.bind(stats);
      this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
    }
  }
  function createDirentFromStats(name, stats) {
    return new DirentFromStats(name, stats);
  }
  fs$3.createDirentFromStats = createDirentFromStats;
  return fs$3;
}
var path = {};
var hasRequiredPath;
function requirePath() {
  if (hasRequiredPath) return path;
  hasRequiredPath = 1;
  Object.defineProperty(path, "__esModule", { value: true });
  path.convertPosixPathToPattern = path.convertWindowsPathToPattern = path.convertPathToPattern = path.escapePosixPath = path.escapeWindowsPath = path.escape = path.removeLeadingDotSegment = path.makeAbsolute = path.unixify = void 0;
  const os = require$$0$3;
  const path$1 = require$$0$4;
  const IS_WINDOWS_PLATFORM = os.platform() === "win32";
  const LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
  const POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
  const WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g;
  const DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
  const WINDOWS_BACKSLASHES_RE = /\\(?![!()+@[\]{}])/g;
  function unixify(filepath) {
    return filepath.replace(/\\/g, "/");
  }
  path.unixify = unixify;
  function makeAbsolute(cwd, filepath) {
    return path$1.resolve(cwd, filepath);
  }
  path.makeAbsolute = makeAbsolute;
  function removeLeadingDotSegment(entry2) {
    if (entry2.charAt(0) === ".") {
      const secondCharactery = entry2.charAt(1);
      if (secondCharactery === "/" || secondCharactery === "\\") {
        return entry2.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
      }
    }
    return entry2;
  }
  path.removeLeadingDotSegment = removeLeadingDotSegment;
  path.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
  function escapeWindowsPath(pattern2) {
    return pattern2.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
  }
  path.escapeWindowsPath = escapeWindowsPath;
  function escapePosixPath(pattern2) {
    return pattern2.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
  }
  path.escapePosixPath = escapePosixPath;
  path.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
  function convertWindowsPathToPattern(filepath) {
    return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
  }
  path.convertWindowsPathToPattern = convertWindowsPathToPattern;
  function convertPosixPathToPattern(filepath) {
    return escapePosixPath(filepath);
  }
  path.convertPosixPathToPattern = convertPosixPathToPattern;
  return path;
}
var pattern = {};
var isExtglob;
var hasRequiredIsExtglob;
function requireIsExtglob() {
  if (hasRequiredIsExtglob) return isExtglob;
  hasRequiredIsExtglob = 1;
  isExtglob = function isExtglob2(str) {
    if (typeof str !== "string" || str === "") {
      return false;
    }
    var match;
    while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
      if (match[2]) return true;
      str = str.slice(match.index + match[0].length);
    }
    return false;
  };
  return isExtglob;
}
var isGlob;
var hasRequiredIsGlob;
function requireIsGlob() {
  if (hasRequiredIsGlob) return isGlob;
  hasRequiredIsGlob = 1;
  var isExtglob2 = requireIsExtglob();
  var chars = { "{": "}", "(": ")", "[": "]" };
  var strictCheck = function(str) {
    if (str[0] === "!") {
      return true;
    }
    var index = 0;
    var pipeIndex = -2;
    var closeSquareIndex = -2;
    var closeCurlyIndex = -2;
    var closeParenIndex = -2;
    var backSlashIndex = -2;
    while (index < str.length) {
      if (str[index] === "*") {
        return true;
      }
      if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
        return true;
      }
      if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
        if (closeSquareIndex < index) {
          closeSquareIndex = str.indexOf("]", index);
        }
        if (closeSquareIndex > index) {
          if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
            return true;
          }
          backSlashIndex = str.indexOf("\\", index);
          if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
            return true;
          }
        }
      }
      if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
        closeCurlyIndex = str.indexOf("}", index);
        if (closeCurlyIndex > index) {
          backSlashIndex = str.indexOf("\\", index);
          if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
            return true;
          }
        }
      }
      if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
        closeParenIndex = str.indexOf(")", index);
        if (closeParenIndex > index) {
          backSlashIndex = str.indexOf("\\", index);
          if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
            return true;
          }
        }
      }
      if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
        if (pipeIndex < index) {
          pipeIndex = str.indexOf("|", index);
        }
        if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
          closeParenIndex = str.indexOf(")", pipeIndex);
          if (closeParenIndex > pipeIndex) {
            backSlashIndex = str.indexOf("\\", pipeIndex);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
      }
      if (str[index] === "\\") {
        var open = str[index + 1];
        index += 2;
        var close = chars[open];
        if (close) {
          var n = str.indexOf(close, index);
          if (n !== -1) {
            index = n + 1;
          }
        }
        if (str[index] === "!") {
          return true;
        }
      } else {
        index++;
      }
    }
    return false;
  };
  var relaxedCheck = function(str) {
    if (str[0] === "!") {
      return true;
    }
    var index = 0;
    while (index < str.length) {
      if (/[*?{}()[\]]/.test(str[index])) {
        return true;
      }
      if (str[index] === "\\") {
        var open = str[index + 1];
        index += 2;
        var close = chars[open];
        if (close) {
          var n = str.indexOf(close, index);
          if (n !== -1) {
            index = n + 1;
          }
        }
        if (str[index] === "!") {
          return true;
        }
      } else {
        index++;
      }
    }
    return false;
  };
  isGlob = function isGlob2(str, options) {
    if (typeof str !== "string" || str === "") {
      return false;
    }
    if (isExtglob2(str)) {
      return true;
    }
    var check = strictCheck;
    if (options && options.strict === false) {
      check = relaxedCheck;
    }
    return check(str);
  };
  return isGlob;
}
var globParent;
var hasRequiredGlobParent;
function requireGlobParent() {
  if (hasRequiredGlobParent) return globParent;
  hasRequiredGlobParent = 1;
  var isGlob2 = requireIsGlob();
  var pathPosixDirname = require$$0$4.posix.dirname;
  var isWin32 = require$$0$3.platform() === "win32";
  var slash = "/";
  var backslash = /\\/g;
  var enclosure = /[\{\[].*[\}\]]$/;
  var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
  var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
  globParent = function globParent2(str, opts) {
    var options = Object.assign({ flipBackslashes: true }, opts);
    if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
      str = str.replace(backslash, slash);
    }
    if (enclosure.test(str)) {
      str += slash;
    }
    str += "a";
    do {
      str = pathPosixDirname(str);
    } while (isGlob2(str) || globby.test(str));
    return str.replace(escaped, "$1");
  };
  return globParent;
}
var utils$2 = {};
var hasRequiredUtils$3;
function requireUtils$3() {
  if (hasRequiredUtils$3) return utils$2;
  hasRequiredUtils$3 = 1;
  (function(exports$1) {
    exports$1.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports$1.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports$1.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false) return false;
      if (!exports$1.isInteger(min) || !exports$1.isInteger(max)) return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports$1.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node) return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports$1.encloseBrace = (node) => {
      if (node.type !== "brace") return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports$1.isInvalidBrace = (block) => {
      if (block.type !== "brace") return false;
      if (block.invalid === true || block.dollar) return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports$1.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports$1.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text") acc.push(node.value);
      if (node.type === "range") node.type = "text";
      return acc;
    }, []);
    exports$1.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      };
      flat(args);
      return result;
    };
  })(utils$2);
  return utils$2;
}
var stringify;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify;
  hasRequiredStringify = 1;
  const utils2 = requireUtils$3();
  stringify = (ast, options = {}) => {
    const stringify2 = (node, parent = {}) => {
      const invalidBlock = options.escapeInvalid && utils2.isInvalidBrace(parent);
      const invalidNode = node.invalid === true && options.escapeInvalid === true;
      let output = "";
      if (node.value) {
        if ((invalidBlock || invalidNode) && utils2.isOpenOrClose(node)) {
          return "\\" + node.value;
        }
        return node.value;
      }
      if (node.value) {
        return node.value;
      }
      if (node.nodes) {
        for (const child of node.nodes) {
          output += stringify2(child);
        }
      }
      return output;
    };
    return stringify2(ast);
  };
  return stringify;
}
var isNumber;
var hasRequiredIsNumber;
function requireIsNumber() {
  if (hasRequiredIsNumber) return isNumber;
  hasRequiredIsNumber = 1;
  isNumber = function(num) {
    if (typeof num === "number") {
      return num - num === 0;
    }
    if (typeof num === "string" && num.trim() !== "") {
      return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
  };
  return isNumber;
}
var toRegexRange_1;
var hasRequiredToRegexRange;
function requireToRegexRange() {
  if (hasRequiredToRegexRange) return toRegexRange_1;
  hasRequiredToRegexRange = 1;
  const isNumber2 = requireIsNumber();
  const toRegexRange = (min, max, options) => {
    if (isNumber2(min) === false) {
      throw new TypeError("toRegexRange: expected the first argument to be a number");
    }
    if (max === void 0 || min === max) {
      return String(min);
    }
    if (isNumber2(max) === false) {
      throw new TypeError("toRegexRange: expected the second argument to be a number.");
    }
    let opts = { relaxZeros: true, ...options };
    if (typeof opts.strictZeros === "boolean") {
      opts.relaxZeros = opts.strictZeros === false;
    }
    let relax = String(opts.relaxZeros);
    let shorthand = String(opts.shorthand);
    let capture = String(opts.capture);
    let wrap2 = String(opts.wrap);
    let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap2;
    if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
      return toRegexRange.cache[cacheKey].result;
    }
    let a = Math.min(min, max);
    let b = Math.max(min, max);
    if (Math.abs(a - b) === 1) {
      let result = min + "|" + max;
      if (opts.capture) {
        return `(${result})`;
      }
      if (opts.wrap === false) {
        return result;
      }
      return `(?:${result})`;
    }
    let isPadded = hasPadding(min) || hasPadding(max);
    let state = { min, max, a, b };
    let positives = [];
    let negatives = [];
    if (isPadded) {
      state.isPadded = isPadded;
      state.maxLen = String(state.max).length;
    }
    if (a < 0) {
      let newMin = b < 0 ? Math.abs(b) : 1;
      negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
      a = state.a = 0;
    }
    if (b >= 0) {
      positives = splitToPatterns(a, b, state, opts);
    }
    state.negatives = negatives;
    state.positives = positives;
    state.result = collatePatterns(negatives, positives);
    if (opts.capture === true) {
      state.result = `(${state.result})`;
    } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
      state.result = `(?:${state.result})`;
    }
    toRegexRange.cache[cacheKey] = state;
    return state.result;
  };
  function collatePatterns(neg, pos, options) {
    let onlyNegative = filterPatterns(neg, pos, "-", false) || [];
    let onlyPositive = filterPatterns(pos, neg, "", false) || [];
    let intersected = filterPatterns(neg, pos, "-?", true) || [];
    let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
    return subpatterns.join("|");
  }
  function splitToRanges(min, max) {
    let nines = 1;
    let zeros = 1;
    let stop = countNines(min, nines);
    let stops = /* @__PURE__ */ new Set([max]);
    while (min <= stop && stop <= max) {
      stops.add(stop);
      nines += 1;
      stop = countNines(min, nines);
    }
    stop = countZeros(max + 1, zeros) - 1;
    while (min < stop && stop <= max) {
      stops.add(stop);
      zeros += 1;
      stop = countZeros(max + 1, zeros) - 1;
    }
    stops = [...stops];
    stops.sort(compare);
    return stops;
  }
  function rangeToPattern(start, stop, options) {
    if (start === stop) {
      return { pattern: start, count: [], digits: 0 };
    }
    let zipped = zip(start, stop);
    let digits = zipped.length;
    let pattern2 = "";
    let count = 0;
    for (let i = 0; i < digits; i++) {
      let [startDigit, stopDigit] = zipped[i];
      if (startDigit === stopDigit) {
        pattern2 += startDigit;
      } else if (startDigit !== "0" || stopDigit !== "9") {
        pattern2 += toCharacterClass(startDigit, stopDigit);
      } else {
        count++;
      }
    }
    if (count) {
      pattern2 += options.shorthand === true ? "\\d" : "[0-9]";
    }
    return { pattern: pattern2, count: [count], digits };
  }
  function splitToPatterns(min, max, tok, options) {
    let ranges = splitToRanges(min, max);
    let tokens = [];
    let start = min;
    let prev;
    for (let i = 0; i < ranges.length; i++) {
      let max2 = ranges[i];
      let obj = rangeToPattern(String(start), String(max2), options);
      let zeros = "";
      if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
        if (prev.count.length > 1) {
          prev.count.pop();
        }
        prev.count.push(obj.count[0]);
        prev.string = prev.pattern + toQuantifier(prev.count);
        start = max2 + 1;
        continue;
      }
      if (tok.isPadded) {
        zeros = padZeros(max2, tok, options);
      }
      obj.string = zeros + obj.pattern + toQuantifier(obj.count);
      tokens.push(obj);
      start = max2 + 1;
      prev = obj;
    }
    return tokens;
  }
  function filterPatterns(arr, comparison, prefix, intersection, options) {
    let result = [];
    for (let ele of arr) {
      let { string: string2 } = ele;
      if (!intersection && !contains(comparison, "string", string2)) {
        result.push(prefix + string2);
      }
      if (intersection && contains(comparison, "string", string2)) {
        result.push(prefix + string2);
      }
    }
    return result;
  }
  function zip(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
    return arr;
  }
  function compare(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
  }
  function contains(arr, key, val) {
    return arr.some((ele) => ele[key] === val);
  }
  function countNines(min, len) {
    return Number(String(min).slice(0, -len) + "9".repeat(len));
  }
  function countZeros(integer, zeros) {
    return integer - integer % Math.pow(10, zeros);
  }
  function toQuantifier(digits) {
    let [start = 0, stop = ""] = digits;
    if (stop || start > 1) {
      return `{${start + (stop ? "," + stop : "")}}`;
    }
    return "";
  }
  function toCharacterClass(a, b, options) {
    return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
  }
  function hasPadding(str) {
    return /^-?(0+)\d/.test(str);
  }
  function padZeros(value, tok, options) {
    if (!tok.isPadded) {
      return value;
    }
    let diff = Math.abs(tok.maxLen - String(value).length);
    let relax = options.relaxZeros !== false;
    switch (diff) {
      case 0:
        return "";
      case 1:
        return relax ? "0?" : "0";
      case 2:
        return relax ? "0{0,2}" : "00";
      default: {
        return relax ? `0{0,${diff}}` : `0{${diff}}`;
      }
    }
  }
  toRegexRange.cache = {};
  toRegexRange.clearCache = () => toRegexRange.cache = {};
  toRegexRange_1 = toRegexRange;
  return toRegexRange_1;
}
var fillRange;
var hasRequiredFillRange;
function requireFillRange() {
  if (hasRequiredFillRange) return fillRange;
  hasRequiredFillRange = 1;
  const util2 = require$$0$5;
  const toRegexRange = requireToRegexRange();
  const isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
  const transform = (toNumber) => {
    return (value) => toNumber === true ? Number(value) : String(value);
  };
  const isValidValue = (value) => {
    return typeof value === "number" || typeof value === "string" && value !== "";
  };
  const isNumber2 = (num) => Number.isInteger(+num);
  const zeros = (input) => {
    let value = `${input}`;
    let index = -1;
    if (value[0] === "-") value = value.slice(1);
    if (value === "0") return false;
    while (value[++index] === "0") ;
    return index > 0;
  };
  const stringify2 = (start, end, options) => {
    if (typeof start === "string" || typeof end === "string") {
      return true;
    }
    return options.stringify === true;
  };
  const pad = (input, maxLength, toNumber) => {
    if (maxLength > 0) {
      let dash = input[0] === "-" ? "-" : "";
      if (dash) input = input.slice(1);
      input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
    }
    if (toNumber === false) {
      return String(input);
    }
    return input;
  };
  const toMaxLen = (input, maxLength) => {
    let negative = input[0] === "-" ? "-" : "";
    if (negative) {
      input = input.slice(1);
      maxLength--;
    }
    while (input.length < maxLength) input = "0" + input;
    return negative ? "-" + input : input;
  };
  const toSequence = (parts, options, maxLen) => {
    parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    let prefix = options.capture ? "" : "?:";
    let positives = "";
    let negatives = "";
    let result;
    if (parts.positives.length) {
      positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
    }
    if (parts.negatives.length) {
      negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
    }
    if (positives && negatives) {
      result = `${positives}|${negatives}`;
    } else {
      result = positives || negatives;
    }
    if (options.wrap) {
      return `(${prefix}${result})`;
    }
    return result;
  };
  const toRange = (a, b, isNumbers, options) => {
    if (isNumbers) {
      return toRegexRange(a, b, { wrap: false, ...options });
    }
    let start = String.fromCharCode(a);
    if (a === b) return start;
    let stop = String.fromCharCode(b);
    return `[${start}-${stop}]`;
  };
  const toRegex = (start, end, options) => {
    if (Array.isArray(start)) {
      let wrap2 = options.wrap === true;
      let prefix = options.capture ? "" : "?:";
      return wrap2 ? `(${prefix}${start.join("|")})` : start.join("|");
    }
    return toRegexRange(start, end, options);
  };
  const rangeError = (...args) => {
    return new RangeError("Invalid range arguments: " + util2.inspect(...args));
  };
  const invalidRange = (start, end, options) => {
    if (options.strictRanges === true) throw rangeError([start, end]);
    return [];
  };
  const invalidStep = (step, options) => {
    if (options.strictRanges === true) {
      throw new TypeError(`Expected step "${step}" to be a number`);
    }
    return [];
  };
  const fillNumbers = (start, end, step = 1, options = {}) => {
    let a = Number(start);
    let b = Number(end);
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      if (options.strictRanges === true) throw rangeError([start, end]);
      return [];
    }
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    let descending = a > b;
    let startString = String(start);
    let endString = String(end);
    let stepString = String(step);
    step = Math.max(Math.abs(step), 1);
    let padded = zeros(startString) || zeros(endString) || zeros(stepString);
    let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
    let toNumber = padded === false && stringify2(start, end, options) === false;
    let format = options.transform || transform(toNumber);
    if (options.toRegex && step === 1) {
      return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
    }
    let parts = { negatives: [], positives: [] };
    let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
    let range = [];
    let index = 0;
    while (descending ? a >= b : a <= b) {
      if (options.toRegex === true && step > 1) {
        push(a);
      } else {
        range.push(pad(format(a, index), maxLen, toNumber));
      }
      a = descending ? a - step : a + step;
      index++;
    }
    if (options.toRegex === true) {
      return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, { wrap: false, ...options });
    }
    return range;
  };
  const fillLetters = (start, end, step = 1, options = {}) => {
    if (!isNumber2(start) && start.length > 1 || !isNumber2(end) && end.length > 1) {
      return invalidRange(start, end, options);
    }
    let format = options.transform || ((val) => String.fromCharCode(val));
    let a = `${start}`.charCodeAt(0);
    let b = `${end}`.charCodeAt(0);
    let descending = a > b;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    if (options.toRegex && step === 1) {
      return toRange(min, max, false, options);
    }
    let range = [];
    let index = 0;
    while (descending ? a >= b : a <= b) {
      range.push(format(a, index));
      a = descending ? a - step : a + step;
      index++;
    }
    if (options.toRegex === true) {
      return toRegex(range, null, { wrap: false, options });
    }
    return range;
  };
  const fill = (start, end, step, options = {}) => {
    if (end == null && isValidValue(start)) {
      return [start];
    }
    if (!isValidValue(start) || !isValidValue(end)) {
      return invalidRange(start, end, options);
    }
    if (typeof step === "function") {
      return fill(start, end, 1, { transform: step });
    }
    if (isObject(step)) {
      return fill(start, end, 0, step);
    }
    let opts = { ...options };
    if (opts.capture === true) opts.wrap = true;
    step = step || opts.step || 1;
    if (!isNumber2(step)) {
      if (step != null && !isObject(step)) return invalidStep(step, opts);
      return fill(start, end, 1, step);
    }
    if (isNumber2(start) && isNumber2(end)) {
      return fillNumbers(start, end, step, opts);
    }
    return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
  };
  fillRange = fill;
  return fillRange;
}
var compile_1;
var hasRequiredCompile;
function requireCompile() {
  if (hasRequiredCompile) return compile_1;
  hasRequiredCompile = 1;
  const fill = requireFillRange();
  const utils2 = requireUtils$3();
  const compile = (ast, options = {}) => {
    const walk = (node, parent = {}) => {
      const invalidBlock = utils2.isInvalidBrace(parent);
      const invalidNode = node.invalid === true && options.escapeInvalid === true;
      const invalid = invalidBlock === true || invalidNode === true;
      const prefix = options.escapeInvalid === true ? "\\" : "";
      let output = "";
      if (node.isOpen === true) {
        return prefix + node.value;
      }
      if (node.isClose === true) {
        console.log("node.isClose", prefix, node.value);
        return prefix + node.value;
      }
      if (node.type === "open") {
        return invalid ? prefix + node.value : "(";
      }
      if (node.type === "close") {
        return invalid ? prefix + node.value : ")";
      }
      if (node.type === "comma") {
        return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
      }
      if (node.value) {
        return node.value;
      }
      if (node.nodes && node.ranges > 0) {
        const args = utils2.reduce(node.nodes);
        const range = fill(...args, { ...options, wrap: false, toRegex: true, strictZeros: true });
        if (range.length !== 0) {
          return args.length > 1 && range.length > 1 ? `(${range})` : range;
        }
      }
      if (node.nodes) {
        for (const child of node.nodes) {
          output += walk(child, node);
        }
      }
      return output;
    };
    return walk(ast);
  };
  compile_1 = compile;
  return compile_1;
}
var expand_1;
var hasRequiredExpand;
function requireExpand() {
  if (hasRequiredExpand) return expand_1;
  hasRequiredExpand = 1;
  const fill = requireFillRange();
  const stringify2 = requireStringify();
  const utils2 = requireUtils$3();
  const append = (queue2 = "", stash = "", enclose = false) => {
    const result = [];
    queue2 = [].concat(queue2);
    stash = [].concat(stash);
    if (!stash.length) return queue2;
    if (!queue2.length) {
      return enclose ? utils2.flatten(stash).map((ele) => `{${ele}}`) : stash;
    }
    for (const item of queue2) {
      if (Array.isArray(item)) {
        for (const value of item) {
          result.push(append(value, stash, enclose));
        }
      } else {
        for (let ele of stash) {
          if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
          result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
        }
      }
    }
    return utils2.flatten(result);
  };
  const expand = (ast, options = {}) => {
    const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
    const walk = (node, parent = {}) => {
      node.queue = [];
      let p = parent;
      let q = parent.queue;
      while (p.type !== "brace" && p.type !== "root" && p.parent) {
        p = p.parent;
        q = p.queue;
      }
      if (node.invalid || node.dollar) {
        q.push(append(q.pop(), stringify2(node, options)));
        return;
      }
      if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
        q.push(append(q.pop(), ["{}"]));
        return;
      }
      if (node.nodes && node.ranges > 0) {
        const args = utils2.reduce(node.nodes);
        if (utils2.exceedsLimit(...args, options.step, rangeLimit)) {
          throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
        }
        let range = fill(...args, options);
        if (range.length === 0) {
          range = stringify2(node, options);
        }
        q.push(append(q.pop(), range));
        node.nodes = [];
        return;
      }
      const enclose = utils2.encloseBrace(node);
      let queue2 = node.queue;
      let block = node;
      while (block.type !== "brace" && block.type !== "root" && block.parent) {
        block = block.parent;
        queue2 = block.queue;
      }
      for (let i = 0; i < node.nodes.length; i++) {
        const child = node.nodes[i];
        if (child.type === "comma" && node.type === "brace") {
          if (i === 1) queue2.push("");
          queue2.push("");
          continue;
        }
        if (child.type === "close") {
          q.push(append(q.pop(), queue2, enclose));
          continue;
        }
        if (child.value && child.type !== "open") {
          queue2.push(append(queue2.pop(), child.value));
          continue;
        }
        if (child.nodes) {
          walk(child, node);
        }
      }
      return queue2;
    };
    return utils2.flatten(walk(ast));
  };
  expand_1 = expand;
  return expand_1;
}
var constants$2;
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2) return constants$2;
  hasRequiredConstants$2 = 1;
  constants$2 = {
    MAX_LENGTH: 1e4,
    // Digits
    CHAR_0: "0",
    /* 0 */
    CHAR_9: "9",
    /* 9 */
    // Alphabet chars.
    CHAR_UPPERCASE_A: "A",
    /* A */
    CHAR_LOWERCASE_A: "a",
    /* a */
    CHAR_UPPERCASE_Z: "Z",
    /* Z */
    CHAR_LOWERCASE_Z: "z",
    /* z */
    CHAR_LEFT_PARENTHESES: "(",
    /* ( */
    CHAR_RIGHT_PARENTHESES: ")",
    /* ) */
    CHAR_ASTERISK: "*",
    /* * */
    // Non-alphabetic chars.
    CHAR_AMPERSAND: "&",
    /* & */
    CHAR_AT: "@",
    /* @ */
    CHAR_BACKSLASH: "\\",
    /* \ */
    CHAR_BACKTICK: "`",
    /* ` */
    CHAR_CARRIAGE_RETURN: "\r",
    /* \r */
    CHAR_CIRCUMFLEX_ACCENT: "^",
    /* ^ */
    CHAR_COLON: ":",
    /* : */
    CHAR_COMMA: ",",
    /* , */
    CHAR_DOLLAR: "$",
    /* . */
    CHAR_DOT: ".",
    /* . */
    CHAR_DOUBLE_QUOTE: '"',
    /* " */
    CHAR_EQUAL: "=",
    /* = */
    CHAR_EXCLAMATION_MARK: "!",
    /* ! */
    CHAR_FORM_FEED: "\f",
    /* \f */
    CHAR_FORWARD_SLASH: "/",
    /* / */
    CHAR_HASH: "#",
    /* # */
    CHAR_HYPHEN_MINUS: "-",
    /* - */
    CHAR_LEFT_ANGLE_BRACKET: "<",
    /* < */
    CHAR_LEFT_CURLY_BRACE: "{",
    /* { */
    CHAR_LEFT_SQUARE_BRACKET: "[",
    /* [ */
    CHAR_LINE_FEED: "\n",
    /* \n */
    CHAR_NO_BREAK_SPACE: " ",
    /* \u00A0 */
    CHAR_PERCENT: "%",
    /* % */
    CHAR_PLUS: "+",
    /* + */
    CHAR_QUESTION_MARK: "?",
    /* ? */
    CHAR_RIGHT_ANGLE_BRACKET: ">",
    /* > */
    CHAR_RIGHT_CURLY_BRACE: "}",
    /* } */
    CHAR_RIGHT_SQUARE_BRACKET: "]",
    /* ] */
    CHAR_SEMICOLON: ";",
    /* ; */
    CHAR_SINGLE_QUOTE: "'",
    /* ' */
    CHAR_SPACE: " ",
    /*   */
    CHAR_TAB: "	",
    /* \t */
    CHAR_UNDERSCORE: "_",
    /* _ */
    CHAR_VERTICAL_LINE: "|",
    /* | */
    CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
    /* \uFEFF */
  };
  return constants$2;
}
var parse_1$1;
var hasRequiredParse$1;
function requireParse$1() {
  if (hasRequiredParse$1) return parse_1$1;
  hasRequiredParse$1 = 1;
  const stringify2 = requireStringify();
  const {
    MAX_LENGTH,
    CHAR_BACKSLASH,
    /* \ */
    CHAR_BACKTICK,
    /* ` */
    CHAR_COMMA,
    /* , */
    CHAR_DOT,
    /* . */
    CHAR_LEFT_PARENTHESES,
    /* ( */
    CHAR_RIGHT_PARENTHESES,
    /* ) */
    CHAR_LEFT_CURLY_BRACE,
    /* { */
    CHAR_RIGHT_CURLY_BRACE,
    /* } */
    CHAR_LEFT_SQUARE_BRACKET,
    /* [ */
    CHAR_RIGHT_SQUARE_BRACKET,
    /* ] */
    CHAR_DOUBLE_QUOTE,
    /* " */
    CHAR_SINGLE_QUOTE,
    /* ' */
    CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_NOBREAK_SPACE
  } = requireConstants$2();
  const parse = (input, options = {}) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected a string");
    }
    const opts = options || {};
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    if (input.length > max) {
      throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
    }
    const ast = { type: "root", input, nodes: [] };
    const stack = [ast];
    let block = ast;
    let prev = ast;
    let brackets = 0;
    const length = input.length;
    let index = 0;
    let depth = 0;
    let value;
    const advance = () => input[index++];
    const push = (node) => {
      if (node.type === "text" && prev.type === "dot") {
        prev.type = "text";
      }
      if (prev && prev.type === "text" && node.type === "text") {
        prev.value += node.value;
        return;
      }
      block.nodes.push(node);
      node.parent = block;
      node.prev = prev;
      prev = node;
      return node;
    };
    push({ type: "bos" });
    while (index < length) {
      block = stack[stack.length - 1];
      value = advance();
      if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
        continue;
      }
      if (value === CHAR_BACKSLASH) {
        push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
        continue;
      }
      if (value === CHAR_RIGHT_SQUARE_BRACKET) {
        push({ type: "text", value: "\\" + value });
        continue;
      }
      if (value === CHAR_LEFT_SQUARE_BRACKET) {
        brackets++;
        let next;
        while (index < length && (next = advance())) {
          value += next;
          if (next === CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            continue;
          }
          if (next === CHAR_BACKSLASH) {
            value += advance();
            continue;
          }
          if (next === CHAR_RIGHT_SQUARE_BRACKET) {
            brackets--;
            if (brackets === 0) {
              break;
            }
          }
        }
        push({ type: "text", value });
        continue;
      }
      if (value === CHAR_LEFT_PARENTHESES) {
        block = push({ type: "paren", nodes: [] });
        stack.push(block);
        push({ type: "text", value });
        continue;
      }
      if (value === CHAR_RIGHT_PARENTHESES) {
        if (block.type !== "paren") {
          push({ type: "text", value });
          continue;
        }
        block = stack.pop();
        push({ type: "text", value });
        block = stack[stack.length - 1];
        continue;
      }
      if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
        const open = value;
        let next;
        if (options.keepQuotes !== true) {
          value = "";
        }
        while (index < length && (next = advance())) {
          if (next === CHAR_BACKSLASH) {
            value += next + advance();
            continue;
          }
          if (next === open) {
            if (options.keepQuotes === true) value += next;
            break;
          }
          value += next;
        }
        push({ type: "text", value });
        continue;
      }
      if (value === CHAR_LEFT_CURLY_BRACE) {
        depth++;
        const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
        const brace = {
          type: "brace",
          open: true,
          close: false,
          dollar,
          depth,
          commas: 0,
          ranges: 0,
          nodes: []
        };
        block = push(brace);
        stack.push(block);
        push({ type: "open", value });
        continue;
      }
      if (value === CHAR_RIGHT_CURLY_BRACE) {
        if (block.type !== "brace") {
          push({ type: "text", value });
          continue;
        }
        const type = "close";
        block = stack.pop();
        block.close = true;
        push({ type, value });
        depth--;
        block = stack[stack.length - 1];
        continue;
      }
      if (value === CHAR_COMMA && depth > 0) {
        if (block.ranges > 0) {
          block.ranges = 0;
          const open = block.nodes.shift();
          block.nodes = [open, { type: "text", value: stringify2(block) }];
        }
        push({ type: "comma", value });
        block.commas++;
        continue;
      }
      if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
        const siblings = block.nodes;
        if (depth === 0 || siblings.length === 0) {
          push({ type: "text", value });
          continue;
        }
        if (prev.type === "dot") {
          block.range = [];
          prev.value += value;
          prev.type = "range";
          if (block.nodes.length !== 3 && block.nodes.length !== 5) {
            block.invalid = true;
            block.ranges = 0;
            prev.type = "text";
            continue;
          }
          block.ranges++;
          block.args = [];
          continue;
        }
        if (prev.type === "range") {
          siblings.pop();
          const before = siblings[siblings.length - 1];
          before.value += prev.value + value;
          prev = before;
          block.ranges--;
          continue;
        }
        push({ type: "dot", value });
        continue;
      }
      push({ type: "text", value });
    }
    do {
      block = stack.pop();
      if (block.type !== "root") {
        block.nodes.forEach((node) => {
          if (!node.nodes) {
            if (node.type === "open") node.isOpen = true;
            if (node.type === "close") node.isClose = true;
            if (!node.nodes) node.type = "text";
            node.invalid = true;
          }
        });
        const parent = stack[stack.length - 1];
        const index2 = parent.nodes.indexOf(block);
        parent.nodes.splice(index2, 1, ...block.nodes);
      }
    } while (stack.length > 0);
    push({ type: "eos" });
    return ast;
  };
  parse_1$1 = parse;
  return parse_1$1;
}
var braces_1;
var hasRequiredBraces;
function requireBraces() {
  if (hasRequiredBraces) return braces_1;
  hasRequiredBraces = 1;
  const stringify2 = requireStringify();
  const compile = requireCompile();
  const expand = requireExpand();
  const parse = requireParse$1();
  const braces = (input, options = {}) => {
    let output = [];
    if (Array.isArray(input)) {
      for (const pattern2 of input) {
        const result = braces.create(pattern2, options);
        if (Array.isArray(result)) {
          output.push(...result);
        } else {
          output.push(result);
        }
      }
    } else {
      output = [].concat(braces.create(input, options));
    }
    if (options && options.expand === true && options.nodupes === true) {
      output = [...new Set(output)];
    }
    return output;
  };
  braces.parse = (input, options = {}) => parse(input, options);
  braces.stringify = (input, options = {}) => {
    if (typeof input === "string") {
      return stringify2(braces.parse(input, options), options);
    }
    return stringify2(input, options);
  };
  braces.compile = (input, options = {}) => {
    if (typeof input === "string") {
      input = braces.parse(input, options);
    }
    return compile(input, options);
  };
  braces.expand = (input, options = {}) => {
    if (typeof input === "string") {
      input = braces.parse(input, options);
    }
    let result = expand(input, options);
    if (options.noempty === true) {
      result = result.filter(Boolean);
    }
    if (options.nodupes === true) {
      result = [...new Set(result)];
    }
    return result;
  };
  braces.create = (input, options = {}) => {
    if (input === "" || input.length < 3) {
      return [input];
    }
    return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
  };
  braces_1 = braces;
  return braces_1;
}
var utils$1 = {};
var constants$1;
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1) return constants$1;
  hasRequiredConstants$1 = 1;
  const path2 = require$$0$4;
  const WIN_SLASH = "\\\\/";
  const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
  const DEFAULT_MAX_EXTGLOB_RECURSION = 0;
  const DOT_LITERAL = "\\.";
  const PLUS_LITERAL = "\\+";
  const QMARK_LITERAL = "\\?";
  const SLASH_LITERAL = "\\/";
  const ONE_CHAR = "(?=.)";
  const QMARK = "[^/]";
  const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
  const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
  const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
  const NO_DOT = `(?!${DOT_LITERAL})`;
  const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
  const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
  const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
  const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
  const STAR = `${QMARK}*?`;
  const POSIX_CHARS = {
    DOT_LITERAL,
    PLUS_LITERAL,
    QMARK_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    QMARK,
    END_ANCHOR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
  };
  const WINDOWS_CHARS = {
    ...POSIX_CHARS,
    SLASH_LITERAL: `[${WIN_SLASH}]`,
    QMARK: WIN_NO_SLASH,
    STAR: `${WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
    NO_DOT: `(?!${DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
    END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
  };
  const POSIX_REGEX_SOURCE = {
    __proto__: null,
    alnum: "a-zA-Z0-9",
    alpha: "a-zA-Z",
    ascii: "\\x00-\\x7F",
    blank: " \\t",
    cntrl: "\\x00-\\x1F\\x7F",
    digit: "0-9",
    graph: "\\x21-\\x7E",
    lower: "a-z",
    print: "\\x20-\\x7E ",
    punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
    space: " \\t\\r\\n\\v\\f",
    upper: "A-Z",
    word: "A-Za-z0-9_",
    xdigit: "A-Fa-f0-9"
  };
  constants$1 = {
    DEFAULT_MAX_EXTGLOB_RECURSION,
    MAX_LENGTH: 1024 * 64,
    POSIX_REGEX_SOURCE,
    // regular expressions
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    // Replace globs with equivalent patterns to reduce parsing time.
    REPLACEMENTS: {
      __proto__: null,
      "***": "*",
      "**/**": "**",
      "**/**/**": "**"
    },
    // Digits
    CHAR_0: 48,
    /* 0 */
    CHAR_9: 57,
    /* 9 */
    // Alphabet chars.
    CHAR_UPPERCASE_A: 65,
    /* A */
    CHAR_LOWERCASE_A: 97,
    /* a */
    CHAR_UPPERCASE_Z: 90,
    /* Z */
    CHAR_LOWERCASE_Z: 122,
    /* z */
    CHAR_LEFT_PARENTHESES: 40,
    /* ( */
    CHAR_RIGHT_PARENTHESES: 41,
    /* ) */
    CHAR_ASTERISK: 42,
    /* * */
    // Non-alphabetic chars.
    CHAR_AMPERSAND: 38,
    /* & */
    CHAR_AT: 64,
    /* @ */
    CHAR_BACKWARD_SLASH: 92,
    /* \ */
    CHAR_CARRIAGE_RETURN: 13,
    /* \r */
    CHAR_CIRCUMFLEX_ACCENT: 94,
    /* ^ */
    CHAR_COLON: 58,
    /* : */
    CHAR_COMMA: 44,
    /* , */
    CHAR_DOT: 46,
    /* . */
    CHAR_DOUBLE_QUOTE: 34,
    /* " */
    CHAR_EQUAL: 61,
    /* = */
    CHAR_EXCLAMATION_MARK: 33,
    /* ! */
    CHAR_FORM_FEED: 12,
    /* \f */
    CHAR_FORWARD_SLASH: 47,
    /* / */
    CHAR_GRAVE_ACCENT: 96,
    /* ` */
    CHAR_HASH: 35,
    /* # */
    CHAR_HYPHEN_MINUS: 45,
    /* - */
    CHAR_LEFT_ANGLE_BRACKET: 60,
    /* < */
    CHAR_LEFT_CURLY_BRACE: 123,
    /* { */
    CHAR_LEFT_SQUARE_BRACKET: 91,
    /* [ */
    CHAR_LINE_FEED: 10,
    /* \n */
    CHAR_NO_BREAK_SPACE: 160,
    /* \u00A0 */
    CHAR_PERCENT: 37,
    /* % */
    CHAR_PLUS: 43,
    /* + */
    CHAR_QUESTION_MARK: 63,
    /* ? */
    CHAR_RIGHT_ANGLE_BRACKET: 62,
    /* > */
    CHAR_RIGHT_CURLY_BRACE: 125,
    /* } */
    CHAR_RIGHT_SQUARE_BRACKET: 93,
    /* ] */
    CHAR_SEMICOLON: 59,
    /* ; */
    CHAR_SINGLE_QUOTE: 39,
    /* ' */
    CHAR_SPACE: 32,
    /*   */
    CHAR_TAB: 9,
    /* \t */
    CHAR_UNDERSCORE: 95,
    /* _ */
    CHAR_VERTICAL_LINE: 124,
    /* | */
    CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    /* \uFEFF */
    SEP: path2.sep,
    /**
     * Create EXTGLOB_CHARS
     */
    extglobChars(chars) {
      return {
        "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
        "?": { type: "qmark", open: "(?:", close: ")?" },
        "+": { type: "plus", open: "(?:", close: ")+" },
        "*": { type: "star", open: "(?:", close: ")*" },
        "@": { type: "at", open: "(?:", close: ")" }
      };
    },
    /**
     * Create GLOB_CHARS
     */
    globChars(win32) {
      return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
    }
  };
  return constants$1;
}
var hasRequiredUtils$2;
function requireUtils$2() {
  if (hasRequiredUtils$2) return utils$1;
  hasRequiredUtils$2 = 1;
  (function(exports$1) {
    const path2 = require$$0$4;
    const win32 = process.platform === "win32";
    const {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = requireConstants$1();
    exports$1.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports$1.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports$1.isRegexChar = (str) => str.length === 1 && exports$1.hasRegexChars(str);
    exports$1.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports$1.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports$1.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports$1.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports$1.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports$1.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports$1.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports$1.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports$1.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  })(utils$1);
  return utils$1;
}
var scan_1;
var hasRequiredScan;
function requireScan() {
  if (hasRequiredScan) return scan_1;
  hasRequiredScan = 1;
  const utils2 = requireUtils$2();
  const {
    CHAR_ASTERISK,
    /* * */
    CHAR_AT,
    /* @ */
    CHAR_BACKWARD_SLASH,
    /* \ */
    CHAR_COMMA,
    /* , */
    CHAR_DOT,
    /* . */
    CHAR_EXCLAMATION_MARK,
    /* ! */
    CHAR_FORWARD_SLASH,
    /* / */
    CHAR_LEFT_CURLY_BRACE,
    /* { */
    CHAR_LEFT_PARENTHESES,
    /* ( */
    CHAR_LEFT_SQUARE_BRACKET,
    /* [ */
    CHAR_PLUS,
    /* + */
    CHAR_QUESTION_MARK,
    /* ? */
    CHAR_RIGHT_CURLY_BRACE,
    /* } */
    CHAR_RIGHT_PARENTHESES,
    /* ) */
    CHAR_RIGHT_SQUARE_BRACKET
    /* ] */
  } = requireConstants$1();
  const isPathSeparator = (code) => {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
  };
  const depth = (token) => {
    if (token.isPrefix !== true) {
      token.depth = token.isGlobstar ? Infinity : 1;
    }
  };
  const scan = (input, options) => {
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob2 = false;
    let isExtglob2 = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = { value: "", depth: 0, isGlob: false };
    const eos = () => index >= length;
    const peek = () => str.charCodeAt(index + 1);
    const advance = () => {
      prev = code;
      return str.charCodeAt(++index);
    };
    while (index < length) {
      code = advance();
      let next;
      if (code === CHAR_BACKWARD_SLASH) {
        backslashes = token.backslashes = true;
        code = advance();
        if (code === CHAR_LEFT_CURLY_BRACE) {
          braceEscaped = true;
        }
        continue;
      }
      if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
        braces++;
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            advance();
            continue;
          }
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            continue;
          }
          if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
            isBrace = token.isBrace = true;
            isGlob2 = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (braceEscaped !== true && code === CHAR_COMMA) {
            isBrace = token.isBrace = true;
            isGlob2 = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_RIGHT_CURLY_BRACE) {
            braces--;
            if (braces === 0) {
              braceEscaped = false;
              isBrace = token.isBrace = true;
              finished = true;
              break;
            }
          }
        }
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_FORWARD_SLASH) {
        slashes.push(index);
        tokens.push(token);
        token = { value: "", depth: 0, isGlob: false };
        if (finished === true) continue;
        if (prev === CHAR_DOT && index === start + 1) {
          start += 2;
          continue;
        }
        lastIndex = index + 1;
        continue;
      }
      if (opts.noext !== true) {
        const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
        if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
          isGlob2 = token.isGlob = true;
          isExtglob2 = token.isExtglob = true;
          finished = true;
          if (code === CHAR_EXCLAMATION_MARK && index === start) {
            negatedExtglob = true;
          }
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                isGlob2 = token.isGlob = true;
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
      }
      if (code === CHAR_ASTERISK) {
        if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
        isGlob2 = token.isGlob = true;
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_QUESTION_MARK) {
        isGlob2 = token.isGlob = true;
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_LEFT_SQUARE_BRACKET) {
        while (eos() !== true && (next = advance())) {
          if (next === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            advance();
            continue;
          }
          if (next === CHAR_RIGHT_SQUARE_BRACKET) {
            isBracket = token.isBracket = true;
            isGlob2 = token.isGlob = true;
            finished = true;
            break;
          }
        }
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
        negated = token.negated = true;
        start++;
        continue;
      }
      if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
        isGlob2 = token.isGlob = true;
        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_LEFT_PARENTHESES) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }
            if (code === CHAR_RIGHT_PARENTHESES) {
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (isGlob2 === true) {
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
    }
    if (opts.noext === true) {
      isExtglob2 = false;
      isGlob2 = false;
    }
    let base = str;
    let prefix = "";
    let glob = "";
    if (start > 0) {
      prefix = str.slice(0, start);
      str = str.slice(start);
      lastIndex -= start;
    }
    if (base && isGlob2 === true && lastIndex > 0) {
      base = str.slice(0, lastIndex);
      glob = str.slice(lastIndex);
    } else if (isGlob2 === true) {
      base = "";
      glob = str;
    } else {
      base = str;
    }
    if (base && base !== "" && base !== "/" && base !== str) {
      if (isPathSeparator(base.charCodeAt(base.length - 1))) {
        base = base.slice(0, -1);
      }
    }
    if (opts.unescape === true) {
      if (glob) glob = utils2.removeBackslashes(glob);
      if (base && backslashes === true) {
        base = utils2.removeBackslashes(base);
      }
    }
    const state = {
      prefix,
      input,
      start,
      base,
      glob,
      isBrace,
      isBracket,
      isGlob: isGlob2,
      isExtglob: isExtglob2,
      isGlobstar,
      negated,
      negatedExtglob
    };
    if (opts.tokens === true) {
      state.maxDepth = 0;
      if (!isPathSeparator(code)) {
        tokens.push(token);
      }
      state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
      let prevIndex;
      for (let idx = 0; idx < slashes.length; idx++) {
        const n = prevIndex ? prevIndex + 1 : start;
        const i = slashes[idx];
        const value = input.slice(n, i);
        if (opts.tokens) {
          if (idx === 0 && start !== 0) {
            tokens[idx].isPrefix = true;
            tokens[idx].value = prefix;
          } else {
            tokens[idx].value = value;
          }
          depth(tokens[idx]);
          state.maxDepth += tokens[idx].depth;
        }
        if (idx !== 0 || value !== "") {
          parts.push(value);
        }
        prevIndex = i;
      }
      if (prevIndex && prevIndex + 1 < input.length) {
        const value = input.slice(prevIndex + 1);
        parts.push(value);
        if (opts.tokens) {
          tokens[tokens.length - 1].value = value;
          depth(tokens[tokens.length - 1]);
          state.maxDepth += tokens[tokens.length - 1].depth;
        }
      }
      state.slashes = slashes;
      state.parts = parts;
    }
    return state;
  };
  scan_1 = scan;
  return scan_1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const constants2 = requireConstants$1();
  const utils2 = requireUtils$2();
  const {
    MAX_LENGTH,
    POSIX_REGEX_SOURCE,
    REGEX_NON_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_BACKREF,
    REPLACEMENTS
  } = constants2;
  const expandRange = (args, options) => {
    if (typeof options.expandRange === "function") {
      return options.expandRange(...args, options);
    }
    args.sort();
    const value = `[${args.join("-")}]`;
    try {
      new RegExp(value);
    } catch (ex) {
      return args.map((v) => utils2.escapeRegex(v)).join("..");
    }
    return value;
  };
  const syntaxError = (type, char) => {
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
  };
  const splitTopLevel = (input) => {
    const parts = [];
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let value = "";
    let escaped = false;
    for (const ch of input) {
      if (escaped === true) {
        value += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        value += ch;
        escaped = true;
        continue;
      }
      if (ch === '"') {
        quote = quote === 1 ? 0 : 1;
        value += ch;
        continue;
      }
      if (quote === 0) {
        if (ch === "[") {
          bracket++;
        } else if (ch === "]" && bracket > 0) {
          bracket--;
        } else if (bracket === 0) {
          if (ch === "(") {
            paren++;
          } else if (ch === ")" && paren > 0) {
            paren--;
          } else if (ch === "|" && paren === 0) {
            parts.push(value);
            value = "";
            continue;
          }
        }
      }
      value += ch;
    }
    parts.push(value);
    return parts;
  };
  const isPlainBranch = (branch) => {
    let escaped = false;
    for (const ch of branch) {
      if (escaped === true) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (/[?*+@!()[\]{}]/.test(ch)) {
        return false;
      }
    }
    return true;
  };
  const normalizeSimpleBranch = (branch) => {
    let value = branch.trim();
    let changed = true;
    while (changed === true) {
      changed = false;
      if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
        value = value.slice(2, -1);
        changed = true;
      }
    }
    if (!isPlainBranch(value)) {
      return;
    }
    return value.replace(/\\(.)/g, "$1");
  };
  const hasRepeatedCharPrefixOverlap = (branches) => {
    const values = branches.map(normalizeSimpleBranch).filter(Boolean);
    for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        const a = values[i];
        const b = values[j];
        const char = a[0];
        if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
          continue;
        }
        if (a === b || a.startsWith(b) || b.startsWith(a)) {
          return true;
        }
      }
    }
    return false;
  };
  const parseRepeatedExtglob = (pattern2, requireEnd = true) => {
    if (pattern2[0] !== "+" && pattern2[0] !== "*" || pattern2[1] !== "(") {
      return;
    }
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let escaped = false;
    for (let i = 1; i < pattern2.length; i++) {
      const ch = pattern2[i];
      if (escaped === true) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === '"') {
        quote = quote === 1 ? 0 : 1;
        continue;
      }
      if (quote === 1) {
        continue;
      }
      if (ch === "[") {
        bracket++;
        continue;
      }
      if (ch === "]" && bracket > 0) {
        bracket--;
        continue;
      }
      if (bracket > 0) {
        continue;
      }
      if (ch === "(") {
        paren++;
        continue;
      }
      if (ch === ")") {
        paren--;
        if (paren === 0) {
          if (requireEnd === true && i !== pattern2.length - 1) {
            return;
          }
          return {
            type: pattern2[0],
            body: pattern2.slice(2, i),
            end: i
          };
        }
      }
    }
  };
  const getStarExtglobSequenceOutput = (pattern2) => {
    let index = 0;
    const chars = [];
    while (index < pattern2.length) {
      const match = parseRepeatedExtglob(pattern2.slice(index), false);
      if (!match || match.type !== "*") {
        return;
      }
      const branches = splitTopLevel(match.body).map((branch2) => branch2.trim());
      if (branches.length !== 1) {
        return;
      }
      const branch = normalizeSimpleBranch(branches[0]);
      if (!branch || branch.length !== 1) {
        return;
      }
      chars.push(branch);
      index += match.end + 1;
    }
    if (chars.length < 1) {
      return;
    }
    const source = chars.length === 1 ? utils2.escapeRegex(chars[0]) : `[${chars.map((ch) => utils2.escapeRegex(ch)).join("")}]`;
    return `${source}*`;
  };
  const repeatedExtglobRecursion = (pattern2) => {
    let depth = 0;
    let value = pattern2.trim();
    let match = parseRepeatedExtglob(value);
    while (match) {
      depth++;
      value = match.body.trim();
      match = parseRepeatedExtglob(value);
    }
    return depth;
  };
  const analyzeRepeatedExtglob = (body, options) => {
    if (options.maxExtglobRecursion === false) {
      return { risky: false };
    }
    const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants2.DEFAULT_MAX_EXTGLOB_RECURSION;
    const branches = splitTopLevel(body).map((branch) => branch.trim());
    if (branches.length > 1) {
      if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
        return { risky: true };
      }
    }
    for (const branch of branches) {
      const safeOutput = getStarExtglobSequenceOutput(branch);
      if (safeOutput) {
        return { risky: true, safeOutput };
      }
      if (repeatedExtglobRecursion(branch) > max) {
        return { risky: true };
      }
    }
    return { risky: false };
  };
  const parse = (input, options) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected a string");
    }
    input = REPLACEMENTS[input] || input;
    const opts = { ...options };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) {
      throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    const bos = { type: "bos", value: "", output: opts.prepend || "" };
    const tokens = [bos];
    const capture = opts.capture ? "" : "?:";
    const win32 = utils2.isWindows(options);
    const PLATFORM_CHARS = constants2.globChars(win32);
    const EXTGLOB_CHARS = constants2.extglobChars(PLATFORM_CHARS);
    const {
      DOT_LITERAL,
      PLUS_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    } = PLATFORM_CHARS;
    const globstar = (opts2) => {
      return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? "" : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) {
      star = `(${star})`;
    }
    if (typeof opts.noext === "boolean") {
      opts.noextglob = opts.noext;
    }
    const state = {
      input,
      index: -1,
      start: 0,
      dot: opts.dot === true,
      consumed: "",
      output: "",
      prefix: "",
      backtrack: false,
      negated: false,
      brackets: 0,
      braces: 0,
      parens: 0,
      quotes: 0,
      globstar: false,
      tokens
    };
    input = utils2.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    const eos = () => state.index === len - 1;
    const peek = state.peek = (n = 1) => input[state.index + n];
    const advance = state.advance = () => input[++state.index] || "";
    const remaining = () => input.slice(state.index + 1);
    const consume = (value2 = "", num = 0) => {
      state.consumed += value2;
      state.index += num;
    };
    const append = (token) => {
      state.output += token.output != null ? token.output : token.value;
      consume(token.value);
    };
    const negate = () => {
      let count = 1;
      while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
        advance();
        state.start++;
        count++;
      }
      if (count % 2 === 0) {
        return false;
      }
      state.negated = true;
      state.start++;
      return true;
    };
    const increment = (type) => {
      state[type]++;
      stack.push(type);
    };
    const decrement = (type) => {
      state[type]--;
      stack.pop();
    };
    const push = (tok) => {
      if (prev.type === "globstar") {
        const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
        const isExtglob2 = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
        if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob2) {
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "star";
          prev.value = "*";
          prev.output = star;
          state.output += prev.output;
        }
      }
      if (extglobs.length && tok.type !== "paren") {
        extglobs[extglobs.length - 1].inner += tok.value;
      }
      if (tok.value || tok.output) append(tok);
      if (prev && prev.type === "text" && tok.type === "text") {
        prev.value += tok.value;
        prev.output = (prev.output || "") + tok.value;
        return;
      }
      tok.prev = prev;
      tokens.push(tok);
      prev = tok;
    };
    const extglobOpen = (type, value2) => {
      const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
      token.prev = prev;
      token.parens = state.parens;
      token.output = state.output;
      token.startIndex = state.index;
      token.tokensIndex = tokens.length;
      const output = (opts.capture ? "(" : "") + token.open;
      increment("parens");
      push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
      push({ type: "paren", extglob: true, value: advance(), output });
      extglobs.push(token);
    };
    const extglobClose = (token) => {
      const literal = input.slice(token.startIndex, state.index + 1);
      const body = input.slice(token.startIndex + 2, state.index);
      const analysis = analyzeRepeatedExtglob(body, opts);
      if ((token.type === "plus" || token.type === "star") && analysis.risky) {
        const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
        const open = tokens[token.tokensIndex];
        open.type = "text";
        open.value = literal;
        open.output = safeOutput || utils2.escapeRegex(literal);
        for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
          tokens[i].value = "";
          tokens[i].output = "";
          delete tokens[i].suffix;
        }
        state.output = token.output + open.output;
        state.backtrack = true;
        push({ type: "paren", extglob: true, value, output: "" });
        decrement("parens");
        return;
      }
      let output = token.close + (opts.capture ? ")" : "");
      let rest;
      if (token.type === "negate") {
        let extglobStar = star;
        if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
          extglobStar = globstar(opts);
        }
        if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
          output = token.close = `)$))${extglobStar}`;
        }
        if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
          const expression = parse(rest, { ...options, fastpaths: false }).output;
          output = token.close = `)${expression})${extglobStar})`;
        }
        if (token.prev.type === "bos") {
          state.negatedExtglob = true;
        }
      }
      push({ type: "paren", extglob: true, value, output });
      decrement("parens");
    };
    if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
      let backslashes = false;
      let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
        if (first === "\\") {
          backslashes = true;
          return m;
        }
        if (first === "?") {
          if (esc) {
            return esc + first + (rest ? QMARK.repeat(rest.length) : "");
          }
          if (index === 0) {
            return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
          }
          return QMARK.repeat(chars.length);
        }
        if (first === ".") {
          return DOT_LITERAL.repeat(chars.length);
        }
        if (first === "*") {
          if (esc) {
            return esc + first + (rest ? star : "");
          }
          return star;
        }
        return esc ? m : `\\${m}`;
      });
      if (backslashes === true) {
        if (opts.unescape === true) {
          output = output.replace(/\\/g, "");
        } else {
          output = output.replace(/\\+/g, (m) => {
            return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
          });
        }
      }
      if (output === input && opts.contains === true) {
        state.output = input;
        return state;
      }
      state.output = utils2.wrapOutput(output, state, options);
      return state;
    }
    while (!eos()) {
      value = advance();
      if (value === "\0") {
        continue;
      }
      if (value === "\\") {
        const next = peek();
        if (next === "/" && opts.bash !== true) {
          continue;
        }
        if (next === "." || next === ";") {
          continue;
        }
        if (!next) {
          value += "\\";
          push({ type: "text", value });
          continue;
        }
        const match = /^\\+/.exec(remaining());
        let slashes = 0;
        if (match && match[0].length > 2) {
          slashes = match[0].length;
          state.index += slashes;
          if (slashes % 2 !== 0) {
            value += "\\";
          }
        }
        if (opts.unescape === true) {
          value = advance();
        } else {
          value += advance();
        }
        if (state.brackets === 0) {
          push({ type: "text", value });
          continue;
        }
      }
      if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
        if (opts.posix !== false && value === ":") {
          const inner = prev.value.slice(1);
          if (inner.includes("[")) {
            prev.posix = true;
            if (inner.includes(":")) {
              const idx = prev.value.lastIndexOf("[");
              const pre = prev.value.slice(0, idx);
              const rest2 = prev.value.slice(idx + 2);
              const posix = POSIX_REGEX_SOURCE[rest2];
              if (posix) {
                prev.value = pre + posix;
                state.backtrack = true;
                advance();
                if (!bos.output && tokens.indexOf(prev) === 1) {
                  bos.output = ONE_CHAR;
                }
                continue;
              }
            }
          }
        }
        if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
          value = `\\${value}`;
        }
        if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
          value = `\\${value}`;
        }
        if (opts.posix === true && value === "!" && prev.value === "[") {
          value = "^";
        }
        prev.value += value;
        append({ value });
        continue;
      }
      if (state.quotes === 1 && value !== '"') {
        value = utils2.escapeRegex(value);
        prev.value += value;
        append({ value });
        continue;
      }
      if (value === '"') {
        state.quotes = state.quotes === 1 ? 0 : 1;
        if (opts.keepQuotes === true) {
          push({ type: "text", value });
        }
        continue;
      }
      if (value === "(") {
        increment("parens");
        push({ type: "paren", value });
        continue;
      }
      if (value === ")") {
        if (state.parens === 0 && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("opening", "("));
        }
        const extglob = extglobs[extglobs.length - 1];
        if (extglob && state.parens === extglob.parens + 1) {
          extglobClose(extglobs.pop());
          continue;
        }
        push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
        decrement("parens");
        continue;
      }
      if (value === "[") {
        if (opts.nobracket === true || !remaining().includes("]")) {
          if (opts.nobracket !== true && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("closing", "]"));
          }
          value = `\\${value}`;
        } else {
          increment("brackets");
        }
        push({ type: "bracket", value });
        continue;
      }
      if (value === "]") {
        if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
          push({ type: "text", value, output: `\\${value}` });
          continue;
        }
        if (state.brackets === 0) {
          if (opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "["));
          }
          push({ type: "text", value, output: `\\${value}` });
          continue;
        }
        decrement("brackets");
        const prevValue = prev.value.slice(1);
        if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
          value = `/${value}`;
        }
        prev.value += value;
        append({ value });
        if (opts.literalBrackets === false || utils2.hasRegexChars(prevValue)) {
          continue;
        }
        const escaped = utils2.escapeRegex(prev.value);
        state.output = state.output.slice(0, -prev.value.length);
        if (opts.literalBrackets === true) {
          state.output += escaped;
          prev.value = escaped;
          continue;
        }
        prev.value = `(${capture}${escaped}|${prev.value})`;
        state.output += prev.value;
        continue;
      }
      if (value === "{" && opts.nobrace !== true) {
        increment("braces");
        const open = {
          type: "brace",
          value,
          output: "(",
          outputIndex: state.output.length,
          tokensIndex: state.tokens.length
        };
        braces.push(open);
        push(open);
        continue;
      }
      if (value === "}") {
        const brace = braces[braces.length - 1];
        if (opts.nobrace === true || !brace) {
          push({ type: "text", value, output: value });
          continue;
        }
        let output = ")";
        if (brace.dots === true) {
          const arr = tokens.slice();
          const range = [];
          for (let i = arr.length - 1; i >= 0; i--) {
            tokens.pop();
            if (arr[i].type === "brace") {
              break;
            }
            if (arr[i].type !== "dots") {
              range.unshift(arr[i].value);
            }
          }
          output = expandRange(range, opts);
          state.backtrack = true;
        }
        if (brace.comma !== true && brace.dots !== true) {
          const out2 = state.output.slice(0, brace.outputIndex);
          const toks = state.tokens.slice(brace.tokensIndex);
          brace.value = brace.output = "\\{";
          value = output = "\\}";
          state.output = out2;
          for (const t of toks) {
            state.output += t.output || t.value;
          }
        }
        push({ type: "brace", value, output });
        decrement("braces");
        braces.pop();
        continue;
      }
      if (value === "|") {
        if (extglobs.length > 0) {
          extglobs[extglobs.length - 1].conditions++;
        }
        push({ type: "text", value });
        continue;
      }
      if (value === ",") {
        let output = value;
        const brace = braces[braces.length - 1];
        if (brace && stack[stack.length - 1] === "braces") {
          brace.comma = true;
          output = "|";
        }
        push({ type: "comma", value, output });
        continue;
      }
      if (value === "/") {
        if (prev.type === "dot" && state.index === state.start + 1) {
          state.start = state.index + 1;
          state.consumed = "";
          state.output = "";
          tokens.pop();
          prev = bos;
          continue;
        }
        push({ type: "slash", value, output: SLASH_LITERAL });
        continue;
      }
      if (value === ".") {
        if (state.braces > 0 && prev.type === "dot") {
          if (prev.value === ".") prev.output = DOT_LITERAL;
          const brace = braces[braces.length - 1];
          prev.type = "dots";
          prev.output += value;
          prev.value += value;
          brace.dots = true;
          continue;
        }
        if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
          push({ type: "text", value, output: DOT_LITERAL });
          continue;
        }
        push({ type: "dot", value, output: DOT_LITERAL });
        continue;
      }
      if (value === "?") {
        const isGroup = prev && prev.value === "(";
        if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          extglobOpen("qmark", value);
          continue;
        }
        if (prev && prev.type === "paren") {
          const next = peek();
          let output = value;
          if (next === "<" && !utils2.supportsLookbehinds()) {
            throw new Error("Node.js v10 or higher is required for regex lookbehinds");
          }
          if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
            output = `\\${value}`;
          }
          push({ type: "text", value, output });
          continue;
        }
        if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
          push({ type: "qmark", value, output: QMARK_NO_DOT });
          continue;
        }
        push({ type: "qmark", value, output: QMARK });
        continue;
      }
      if (value === "!") {
        if (opts.noextglob !== true && peek() === "(") {
          if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
            extglobOpen("negate", value);
            continue;
          }
        }
        if (opts.nonegate !== true && state.index === 0) {
          negate();
          continue;
        }
      }
      if (value === "+") {
        if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          extglobOpen("plus", value);
          continue;
        }
        if (prev && prev.value === "(" || opts.regex === false) {
          push({ type: "plus", value, output: PLUS_LITERAL });
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
          push({ type: "plus", value });
          continue;
        }
        push({ type: "plus", value: PLUS_LITERAL });
        continue;
      }
      if (value === "@") {
        if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          push({ type: "at", extglob: true, value, output: "" });
          continue;
        }
        push({ type: "text", value });
        continue;
      }
      if (value !== "*") {
        if (value === "$" || value === "^") {
          value = `\\${value}`;
        }
        const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
        if (match) {
          value += match[0];
          state.index += match[0].length;
        }
        push({ type: "text", value });
        continue;
      }
      if (prev && (prev.type === "globstar" || prev.star === true)) {
        prev.type = "star";
        prev.star = true;
        prev.value += value;
        prev.output = star;
        state.backtrack = true;
        state.globstar = true;
        consume(value);
        continue;
      }
      let rest = remaining();
      if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
        extglobOpen("star", value);
        continue;
      }
      if (prev.type === "star") {
        if (opts.noglobstar === true) {
          consume(value);
          continue;
        }
        const prior = prev.prev;
        const before = prior.prev;
        const isStart = prior.type === "slash" || prior.type === "bos";
        const afterStar = before && (before.type === "star" || before.type === "globstar");
        if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
          push({ type: "star", value, output: "" });
          continue;
        }
        const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
        const isExtglob2 = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
        if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob2) {
          push({ type: "star", value, output: "" });
          continue;
        }
        while (rest.slice(0, 3) === "/**") {
          const after = input[state.index + 4];
          if (after && after !== "/") {
            break;
          }
          rest = rest.slice(3);
          consume("/**", 3);
        }
        if (prior.type === "bos" && eos()) {
          prev.type = "globstar";
          prev.value += value;
          prev.output = globstar(opts);
          state.output = prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
          state.output = state.output.slice(0, -(prior.output + prev.output).length);
          prior.output = `(?:${prior.output}`;
          prev.type = "globstar";
          prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
          prev.value += value;
          state.globstar = true;
          state.output += prior.output + prev.output;
          consume(value);
          continue;
        }
        if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
          const end = rest[1] !== void 0 ? "|$" : "";
          state.output = state.output.slice(0, -(prior.output + prev.output).length);
          prior.output = `(?:${prior.output}`;
          prev.type = "globstar";
          prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
          prev.value += value;
          state.output += prior.output + prev.output;
          state.globstar = true;
          consume(value + advance());
          push({ type: "slash", value: "/", output: "" });
          continue;
        }
        if (prior.type === "bos" && rest[0] === "/") {
          prev.type = "globstar";
          prev.value += value;
          prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
          state.output = prev.output;
          state.globstar = true;
          consume(value + advance());
          push({ type: "slash", value: "/", output: "" });
          continue;
        }
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = "globstar";
        prev.output = globstar(opts);
        prev.value += value;
        state.output += prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }
      const token = { type: "star", value, output: star };
      if (opts.bash === true) {
        token.output = ".*?";
        if (prev.type === "bos" || prev.type === "slash") {
          token.output = nodot + token.output;
        }
        push(token);
        continue;
      }
      if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
        token.output = value;
        push(token);
        continue;
      }
      if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
        if (prev.type === "dot") {
          state.output += NO_DOT_SLASH;
          prev.output += NO_DOT_SLASH;
        } else if (opts.dot === true) {
          state.output += NO_DOTS_SLASH;
          prev.output += NO_DOTS_SLASH;
        } else {
          state.output += nodot;
          prev.output += nodot;
        }
        if (peek() !== "*") {
          state.output += ONE_CHAR;
          prev.output += ONE_CHAR;
        }
      }
      push(token);
    }
    while (state.brackets > 0) {
      if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
      state.output = utils2.escapeLast(state.output, "[");
      decrement("brackets");
    }
    while (state.parens > 0) {
      if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
      state.output = utils2.escapeLast(state.output, "(");
      decrement("parens");
    }
    while (state.braces > 0) {
      if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
      state.output = utils2.escapeLast(state.output, "{");
      decrement("braces");
    }
    if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
      push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
    }
    if (state.backtrack === true) {
      state.output = "";
      for (const token of state.tokens) {
        state.output += token.output != null ? token.output : token.value;
        if (token.suffix) {
          state.output += token.suffix;
        }
      }
    }
    return state;
  };
  parse.fastpaths = (input, options) => {
    const opts = { ...options };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) {
      throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    input = REPLACEMENTS[input] || input;
    const win32 = utils2.isWindows(options);
    const {
      DOT_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOTS_SLASH,
      STAR,
      START_ANCHOR
    } = constants2.globChars(win32);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? "" : "?:";
    const state = { negated: false, prefix: "" };
    let star = opts.bash === true ? ".*?" : STAR;
    if (opts.capture) {
      star = `(${star})`;
    }
    const globstar = (opts2) => {
      if (opts2.noglobstar === true) return star;
      return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str) => {
      switch (str) {
        case "*":
          return `${nodot}${ONE_CHAR}${star}`;
        case ".*":
          return `${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "*.*":
          return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "*/*":
          return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
        case "**":
          return nodot + globstar(opts);
        case "**/*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
        case "**/*.*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "**/.*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
        default: {
          const match = /^(.*?)\.(\w+)$/.exec(str);
          if (!match) return;
          const source2 = create(match[1]);
          if (!source2) return;
          return source2 + DOT_LITERAL + match[2];
        }
      }
    };
    const output = utils2.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) {
      source += `${SLASH_LITERAL}?`;
    }
    return source;
  };
  parse_1 = parse;
  return parse_1;
}
var picomatch_1;
var hasRequiredPicomatch$1;
function requirePicomatch$1() {
  if (hasRequiredPicomatch$1) return picomatch_1;
  hasRequiredPicomatch$1 = 1;
  const path2 = require$$0$4;
  const scan = requireScan();
  const parse = requireParse();
  const utils2 = requireUtils$2();
  const constants2 = requireConstants$1();
  const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
  const picomatch2 = (glob, options, returnState = false) => {
    if (Array.isArray(glob)) {
      const fns = glob.map((input) => picomatch2(input, options, returnState));
      const arrayMatcher = (str) => {
        for (const isMatch of fns) {
          const state2 = isMatch(str);
          if (state2) return state2;
        }
        return false;
      };
      return arrayMatcher;
    }
    const isState = isObject(glob) && glob.tokens && glob.input;
    if (glob === "" || typeof glob !== "string" && !isState) {
      throw new TypeError("Expected pattern to be a non-empty string");
    }
    const opts = options || {};
    const posix = utils2.isWindows(options);
    const regex = isState ? picomatch2.compileRe(glob, options) : picomatch2.makeRe(glob, options, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = () => false;
    if (opts.ignore) {
      const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
      isIgnored = picomatch2(opts.ignore, ignoreOpts, returnState);
    }
    const matcher2 = (input, returnObject = false) => {
      const { isMatch, match, output } = picomatch2.test(input, regex, options, { glob, posix });
      const result = { glob, state, regex, posix, input, output, match, isMatch };
      if (typeof opts.onResult === "function") {
        opts.onResult(result);
      }
      if (isMatch === false) {
        result.isMatch = false;
        return returnObject ? result : false;
      }
      if (isIgnored(input)) {
        if (typeof opts.onIgnore === "function") {
          opts.onIgnore(result);
        }
        result.isMatch = false;
        return returnObject ? result : false;
      }
      if (typeof opts.onMatch === "function") {
        opts.onMatch(result);
      }
      return returnObject ? result : true;
    };
    if (returnState) {
      matcher2.state = state;
    }
    return matcher2;
  };
  picomatch2.test = (input, regex, options, { glob, posix } = {}) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected input to be a string");
    }
    if (input === "") {
      return { isMatch: false, output: "" };
    }
    const opts = options || {};
    const format = opts.format || (posix ? utils2.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
      output = format ? format(input) : input;
      match = output === glob;
    }
    if (match === false || opts.capture === true) {
      if (opts.matchBase === true || opts.basename === true) {
        match = picomatch2.matchBase(input, regex, options, posix);
      } else {
        match = regex.exec(output);
      }
    }
    return { isMatch: Boolean(match), match, output };
  };
  picomatch2.matchBase = (input, glob, options, posix = utils2.isWindows(options)) => {
    const regex = glob instanceof RegExp ? glob : picomatch2.makeRe(glob, options);
    return regex.test(path2.basename(input));
  };
  picomatch2.isMatch = (str, patterns, options) => picomatch2(patterns, options)(str);
  picomatch2.parse = (pattern2, options) => {
    if (Array.isArray(pattern2)) return pattern2.map((p) => picomatch2.parse(p, options));
    return parse(pattern2, { ...options, fastpaths: false });
  };
  picomatch2.scan = (input, options) => scan(input, options);
  picomatch2.compileRe = (state, options, returnOutput = false, returnState = false) => {
    if (returnOutput === true) {
      return state.output;
    }
    const opts = options || {};
    const prepend = opts.contains ? "" : "^";
    const append = opts.contains ? "" : "$";
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) {
      source = `^(?!${source}).*$`;
    }
    const regex = picomatch2.toRegex(source, options);
    if (returnState === true) {
      regex.state = state;
    }
    return regex;
  };
  picomatch2.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
    if (!input || typeof input !== "string") {
      throw new TypeError("Expected a non-empty string");
    }
    let parsed = { negated: false, fastpaths: true };
    if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
      parsed.output = parse.fastpaths(input, options);
    }
    if (!parsed.output) {
      parsed = parse(input, options);
    }
    return picomatch2.compileRe(parsed, options, returnOutput, returnState);
  };
  picomatch2.toRegex = (source, options) => {
    try {
      const opts = options || {};
      return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
    } catch (err) {
      if (options && options.debug === true) throw err;
      return /$^/;
    }
  };
  picomatch2.constants = constants2;
  picomatch_1 = picomatch2;
  return picomatch_1;
}
var picomatch;
var hasRequiredPicomatch;
function requirePicomatch() {
  if (hasRequiredPicomatch) return picomatch;
  hasRequiredPicomatch = 1;
  picomatch = requirePicomatch$1();
  return picomatch;
}
var micromatch_1;
var hasRequiredMicromatch;
function requireMicromatch() {
  if (hasRequiredMicromatch) return micromatch_1;
  hasRequiredMicromatch = 1;
  const util2 = require$$0$5;
  const braces = requireBraces();
  const picomatch2 = requirePicomatch();
  const utils2 = requireUtils$2();
  const isEmptyString = (v) => v === "" || v === "./";
  const hasBraces = (v) => {
    const index = v.indexOf("{");
    return index > -1 && v.indexOf("}", index) > -1;
  };
  const micromatch = (list, patterns, options) => {
    patterns = [].concat(patterns);
    list = [].concat(list);
    let omit = /* @__PURE__ */ new Set();
    let keep = /* @__PURE__ */ new Set();
    let items = /* @__PURE__ */ new Set();
    let negatives = 0;
    let onResult = (state) => {
      items.add(state.output);
      if (options && options.onResult) {
        options.onResult(state);
      }
    };
    for (let i = 0; i < patterns.length; i++) {
      let isMatch = picomatch2(String(patterns[i]), { ...options, onResult }, true);
      let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
      if (negated) negatives++;
      for (let item of list) {
        let matched = isMatch(item, true);
        let match = negated ? !matched.isMatch : matched.isMatch;
        if (!match) continue;
        if (negated) {
          omit.add(matched.output);
        } else {
          omit.delete(matched.output);
          keep.add(matched.output);
        }
      }
    }
    let result = negatives === patterns.length ? [...items] : [...keep];
    let matches = result.filter((item) => !omit.has(item));
    if (options && matches.length === 0) {
      if (options.failglob === true) {
        throw new Error(`No matches found for "${patterns.join(", ")}"`);
      }
      if (options.nonull === true || options.nullglob === true) {
        return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
      }
    }
    return matches;
  };
  micromatch.match = micromatch;
  micromatch.matcher = (pattern2, options) => picomatch2(pattern2, options);
  micromatch.isMatch = (str, patterns, options) => picomatch2(patterns, options)(str);
  micromatch.any = micromatch.isMatch;
  micromatch.not = (list, patterns, options = {}) => {
    patterns = [].concat(patterns).map(String);
    let result = /* @__PURE__ */ new Set();
    let items = [];
    let onResult = (state) => {
      if (options.onResult) options.onResult(state);
      items.push(state.output);
    };
    let matches = new Set(micromatch(list, patterns, { ...options, onResult }));
    for (let item of items) {
      if (!matches.has(item)) {
        result.add(item);
      }
    }
    return [...result];
  };
  micromatch.contains = (str, pattern2, options) => {
    if (typeof str !== "string") {
      throw new TypeError(`Expected a string: "${util2.inspect(str)}"`);
    }
    if (Array.isArray(pattern2)) {
      return pattern2.some((p) => micromatch.contains(str, p, options));
    }
    if (typeof pattern2 === "string") {
      if (isEmptyString(str) || isEmptyString(pattern2)) {
        return false;
      }
      if (str.includes(pattern2) || str.startsWith("./") && str.slice(2).includes(pattern2)) {
        return true;
      }
    }
    return micromatch.isMatch(str, pattern2, { ...options, contains: true });
  };
  micromatch.matchKeys = (obj, patterns, options) => {
    if (!utils2.isObject(obj)) {
      throw new TypeError("Expected the first argument to be an object");
    }
    let keys = micromatch(Object.keys(obj), patterns, options);
    let res = {};
    for (let key of keys) res[key] = obj[key];
    return res;
  };
  micromatch.some = (list, patterns, options) => {
    let items = [].concat(list);
    for (let pattern2 of [].concat(patterns)) {
      let isMatch = picomatch2(String(pattern2), options);
      if (items.some((item) => isMatch(item))) {
        return true;
      }
    }
    return false;
  };
  micromatch.every = (list, patterns, options) => {
    let items = [].concat(list);
    for (let pattern2 of [].concat(patterns)) {
      let isMatch = picomatch2(String(pattern2), options);
      if (!items.every((item) => isMatch(item))) {
        return false;
      }
    }
    return true;
  };
  micromatch.all = (str, patterns, options) => {
    if (typeof str !== "string") {
      throw new TypeError(`Expected a string: "${util2.inspect(str)}"`);
    }
    return [].concat(patterns).every((p) => picomatch2(p, options)(str));
  };
  micromatch.capture = (glob, input, options) => {
    let posix = utils2.isWindows(options);
    let regex = picomatch2.makeRe(String(glob), { ...options, capture: true });
    let match = regex.exec(posix ? utils2.toPosixSlashes(input) : input);
    if (match) {
      return match.slice(1).map((v) => v === void 0 ? "" : v);
    }
  };
  micromatch.makeRe = (...args) => picomatch2.makeRe(...args);
  micromatch.scan = (...args) => picomatch2.scan(...args);
  micromatch.parse = (patterns, options) => {
    let res = [];
    for (let pattern2 of [].concat(patterns || [])) {
      for (let str of braces(String(pattern2), options)) {
        res.push(picomatch2.parse(str, options));
      }
    }
    return res;
  };
  micromatch.braces = (pattern2, options) => {
    if (typeof pattern2 !== "string") throw new TypeError("Expected a string");
    if (options && options.nobrace === true || !hasBraces(pattern2)) {
      return [pattern2];
    }
    return braces(pattern2, options);
  };
  micromatch.braceExpand = (pattern2, options) => {
    if (typeof pattern2 !== "string") throw new TypeError("Expected a string");
    return micromatch.braces(pattern2, { ...options, expand: true });
  };
  micromatch.hasBraces = hasBraces;
  micromatch_1 = micromatch;
  return micromatch_1;
}
var hasRequiredPattern;
function requirePattern() {
  if (hasRequiredPattern) return pattern;
  hasRequiredPattern = 1;
  Object.defineProperty(pattern, "__esModule", { value: true });
  pattern.isAbsolute = pattern.partitionAbsoluteAndRelative = pattern.removeDuplicateSlashes = pattern.matchAny = pattern.convertPatternsToRe = pattern.makeRe = pattern.getPatternParts = pattern.expandBraceExpansion = pattern.expandPatternsWithBraceExpansion = pattern.isAffectDepthOfReadingPattern = pattern.endsWithSlashGlobStar = pattern.hasGlobStar = pattern.getBaseDirectory = pattern.isPatternRelatedToParentDirectory = pattern.getPatternsOutsideCurrentDirectory = pattern.getPatternsInsideCurrentDirectory = pattern.getPositivePatterns = pattern.getNegativePatterns = pattern.isPositivePattern = pattern.isNegativePattern = pattern.convertToNegativePattern = pattern.convertToPositivePattern = pattern.isDynamicPattern = pattern.isStaticPattern = void 0;
  const path2 = require$$0$4;
  const globParent2 = requireGlobParent();
  const micromatch = requireMicromatch();
  const GLOBSTAR = "**";
  const ESCAPE_SYMBOL = "\\";
  const COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
  const REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
  const REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
  const GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
  const BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
  const DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
  function isStaticPattern(pattern2, options = {}) {
    return !isDynamicPattern(pattern2, options);
  }
  pattern.isStaticPattern = isStaticPattern;
  function isDynamicPattern(pattern2, options = {}) {
    if (pattern2 === "") {
      return false;
    }
    if (options.caseSensitiveMatch === false || pattern2.includes(ESCAPE_SYMBOL)) {
      return true;
    }
    if (COMMON_GLOB_SYMBOLS_RE.test(pattern2) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern2) || REGEX_GROUP_SYMBOLS_RE.test(pattern2)) {
      return true;
    }
    if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern2)) {
      return true;
    }
    if (options.braceExpansion !== false && hasBraceExpansion(pattern2)) {
      return true;
    }
    return false;
  }
  pattern.isDynamicPattern = isDynamicPattern;
  function hasBraceExpansion(pattern2) {
    const openingBraceIndex = pattern2.indexOf("{");
    if (openingBraceIndex === -1) {
      return false;
    }
    const closingBraceIndex = pattern2.indexOf("}", openingBraceIndex + 1);
    if (closingBraceIndex === -1) {
      return false;
    }
    const braceContent = pattern2.slice(openingBraceIndex, closingBraceIndex);
    return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
  }
  function convertToPositivePattern(pattern2) {
    return isNegativePattern(pattern2) ? pattern2.slice(1) : pattern2;
  }
  pattern.convertToPositivePattern = convertToPositivePattern;
  function convertToNegativePattern(pattern2) {
    return "!" + pattern2;
  }
  pattern.convertToNegativePattern = convertToNegativePattern;
  function isNegativePattern(pattern2) {
    return pattern2.startsWith("!") && pattern2[1] !== "(";
  }
  pattern.isNegativePattern = isNegativePattern;
  function isPositivePattern(pattern2) {
    return !isNegativePattern(pattern2);
  }
  pattern.isPositivePattern = isPositivePattern;
  function getNegativePatterns(patterns) {
    return patterns.filter(isNegativePattern);
  }
  pattern.getNegativePatterns = getNegativePatterns;
  function getPositivePatterns(patterns) {
    return patterns.filter(isPositivePattern);
  }
  pattern.getPositivePatterns = getPositivePatterns;
  function getPatternsInsideCurrentDirectory(patterns) {
    return patterns.filter((pattern2) => !isPatternRelatedToParentDirectory(pattern2));
  }
  pattern.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
  function getPatternsOutsideCurrentDirectory(patterns) {
    return patterns.filter(isPatternRelatedToParentDirectory);
  }
  pattern.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
  function isPatternRelatedToParentDirectory(pattern2) {
    return pattern2.startsWith("..") || pattern2.startsWith("./..");
  }
  pattern.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
  function getBaseDirectory(pattern2) {
    return globParent2(pattern2, { flipBackslashes: false });
  }
  pattern.getBaseDirectory = getBaseDirectory;
  function hasGlobStar(pattern2) {
    return pattern2.includes(GLOBSTAR);
  }
  pattern.hasGlobStar = hasGlobStar;
  function endsWithSlashGlobStar(pattern2) {
    return pattern2.endsWith("/" + GLOBSTAR);
  }
  pattern.endsWithSlashGlobStar = endsWithSlashGlobStar;
  function isAffectDepthOfReadingPattern(pattern2) {
    const basename = path2.basename(pattern2);
    return endsWithSlashGlobStar(pattern2) || isStaticPattern(basename);
  }
  pattern.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
  function expandPatternsWithBraceExpansion(patterns) {
    return patterns.reduce((collection, pattern2) => {
      return collection.concat(expandBraceExpansion(pattern2));
    }, []);
  }
  pattern.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
  function expandBraceExpansion(pattern2) {
    const patterns = micromatch.braces(pattern2, { expand: true, nodupes: true, keepEscaping: true });
    patterns.sort((a, b) => a.length - b.length);
    return patterns.filter((pattern3) => pattern3 !== "");
  }
  pattern.expandBraceExpansion = expandBraceExpansion;
  function getPatternParts(pattern2, options) {
    let { parts } = micromatch.scan(pattern2, Object.assign(Object.assign({}, options), { parts: true }));
    if (parts.length === 0) {
      parts = [pattern2];
    }
    if (parts[0].startsWith("/")) {
      parts[0] = parts[0].slice(1);
      parts.unshift("");
    }
    return parts;
  }
  pattern.getPatternParts = getPatternParts;
  function makeRe(pattern2, options) {
    return micromatch.makeRe(pattern2, options);
  }
  pattern.makeRe = makeRe;
  function convertPatternsToRe(patterns, options) {
    return patterns.map((pattern2) => makeRe(pattern2, options));
  }
  pattern.convertPatternsToRe = convertPatternsToRe;
  function matchAny(entry2, patternsRe) {
    return patternsRe.some((patternRe) => patternRe.test(entry2));
  }
  pattern.matchAny = matchAny;
  function removeDuplicateSlashes(pattern2) {
    return pattern2.replace(DOUBLE_SLASH_RE, "/");
  }
  pattern.removeDuplicateSlashes = removeDuplicateSlashes;
  function partitionAbsoluteAndRelative(patterns) {
    const absolute = [];
    const relative = [];
    for (const pattern2 of patterns) {
      if (isAbsolute(pattern2)) {
        absolute.push(pattern2);
      } else {
        relative.push(pattern2);
      }
    }
    return [absolute, relative];
  }
  pattern.partitionAbsoluteAndRelative = partitionAbsoluteAndRelative;
  function isAbsolute(pattern2) {
    return path2.isAbsolute(pattern2);
  }
  pattern.isAbsolute = isAbsolute;
  return pattern;
}
var stream$3 = {};
var merge2_1;
var hasRequiredMerge2;
function requireMerge2() {
  if (hasRequiredMerge2) return merge2_1;
  hasRequiredMerge2 = 1;
  const Stream = require$$0$6;
  const PassThrough = Stream.PassThrough;
  const slice = Array.prototype.slice;
  merge2_1 = merge2;
  function merge2() {
    const streamsQueue = [];
    const args = slice.call(arguments);
    let merging = false;
    let options = args[args.length - 1];
    if (options && !Array.isArray(options) && options.pipe == null) {
      args.pop();
    } else {
      options = {};
    }
    const doEnd = options.end !== false;
    const doPipeError = options.pipeError === true;
    if (options.objectMode == null) {
      options.objectMode = true;
    }
    if (options.highWaterMark == null) {
      options.highWaterMark = 64 * 1024;
    }
    const mergedStream = PassThrough(options);
    function addStream() {
      for (let i = 0, len = arguments.length; i < len; i++) {
        streamsQueue.push(pauseStreams(arguments[i], options));
      }
      mergeStream();
      return this;
    }
    function mergeStream() {
      if (merging) {
        return;
      }
      merging = true;
      let streams = streamsQueue.shift();
      if (!streams) {
        process.nextTick(endStream);
        return;
      }
      if (!Array.isArray(streams)) {
        streams = [streams];
      }
      let pipesCount = streams.length + 1;
      function next() {
        if (--pipesCount > 0) {
          return;
        }
        merging = false;
        mergeStream();
      }
      function pipe(stream2) {
        function onend() {
          stream2.removeListener("merge2UnpipeEnd", onend);
          stream2.removeListener("end", onend);
          if (doPipeError) {
            stream2.removeListener("error", onerror);
          }
          next();
        }
        function onerror(err) {
          mergedStream.emit("error", err);
        }
        if (stream2._readableState.endEmitted) {
          return next();
        }
        stream2.on("merge2UnpipeEnd", onend);
        stream2.on("end", onend);
        if (doPipeError) {
          stream2.on("error", onerror);
        }
        stream2.pipe(mergedStream, { end: false });
        stream2.resume();
      }
      for (let i = 0; i < streams.length; i++) {
        pipe(streams[i]);
      }
      next();
    }
    function endStream() {
      merging = false;
      mergedStream.emit("queueDrain");
      if (doEnd) {
        mergedStream.end();
      }
    }
    mergedStream.setMaxListeners(0);
    mergedStream.add = addStream;
    mergedStream.on("unpipe", function(stream2) {
      stream2.emit("merge2UnpipeEnd");
    });
    if (args.length) {
      addStream.apply(null, args);
    }
    return mergedStream;
  }
  function pauseStreams(streams, options) {
    if (!Array.isArray(streams)) {
      if (!streams._readableState && streams.pipe) {
        streams = streams.pipe(PassThrough(options));
      }
      if (!streams._readableState || !streams.pause || !streams.pipe) {
        throw new Error("Only readable stream can be merged.");
      }
      streams.pause();
    } else {
      for (let i = 0, len = streams.length; i < len; i++) {
        streams[i] = pauseStreams(streams[i], options);
      }
    }
    return streams;
  }
  return merge2_1;
}
var hasRequiredStream$3;
function requireStream$3() {
  if (hasRequiredStream$3) return stream$3;
  hasRequiredStream$3 = 1;
  Object.defineProperty(stream$3, "__esModule", { value: true });
  stream$3.merge = void 0;
  const merge2 = requireMerge2();
  function merge(streams) {
    const mergedStream = merge2(streams);
    streams.forEach((stream2) => {
      stream2.once("error", (error2) => mergedStream.emit("error", error2));
    });
    mergedStream.once("close", () => propagateCloseEventToSources(streams));
    mergedStream.once("end", () => propagateCloseEventToSources(streams));
    return mergedStream;
  }
  stream$3.merge = merge;
  function propagateCloseEventToSources(streams) {
    streams.forEach((stream2) => stream2.emit("close"));
  }
  return stream$3;
}
var string = {};
var hasRequiredString;
function requireString() {
  if (hasRequiredString) return string;
  hasRequiredString = 1;
  Object.defineProperty(string, "__esModule", { value: true });
  string.isEmpty = string.isString = void 0;
  function isString2(input) {
    return typeof input === "string";
  }
  string.isString = isString2;
  function isEmpty(input) {
    return input === "";
  }
  string.isEmpty = isEmpty;
  return string;
}
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$3;
  hasRequiredUtils$1 = 1;
  Object.defineProperty(utils$3, "__esModule", { value: true });
  utils$3.string = utils$3.stream = utils$3.pattern = utils$3.path = utils$3.fs = utils$3.errno = utils$3.array = void 0;
  const array2 = requireArray();
  utils$3.array = array2;
  const errno2 = requireErrno();
  utils$3.errno = errno2;
  const fs2 = requireFs$3();
  utils$3.fs = fs2;
  const path2 = requirePath();
  utils$3.path = path2;
  const pattern2 = requirePattern();
  utils$3.pattern = pattern2;
  const stream2 = requireStream$3();
  utils$3.stream = stream2;
  const string2 = requireString();
  utils$3.string = string2;
  return utils$3;
}
var hasRequiredTasks;
function requireTasks() {
  if (hasRequiredTasks) return tasks;
  hasRequiredTasks = 1;
  Object.defineProperty(tasks, "__esModule", { value: true });
  tasks.convertPatternGroupToTask = tasks.convertPatternGroupsToTasks = tasks.groupPatternsByBaseDirectory = tasks.getNegativePatternsAsPositive = tasks.getPositivePatterns = tasks.convertPatternsToTasks = tasks.generate = void 0;
  const utils2 = requireUtils$1();
  function generate(input, settings2) {
    const patterns = processPatterns(input, settings2);
    const ignore = processPatterns(settings2.ignore, settings2);
    const positivePatterns = getPositivePatterns(patterns);
    const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
    const staticPatterns = positivePatterns.filter((pattern2) => utils2.pattern.isStaticPattern(pattern2, settings2));
    const dynamicPatterns = positivePatterns.filter((pattern2) => utils2.pattern.isDynamicPattern(pattern2, settings2));
    const staticTasks = convertPatternsToTasks(
      staticPatterns,
      negativePatterns,
      /* dynamic */
      false
    );
    const dynamicTasks = convertPatternsToTasks(
      dynamicPatterns,
      negativePatterns,
      /* dynamic */
      true
    );
    return staticTasks.concat(dynamicTasks);
  }
  tasks.generate = generate;
  function processPatterns(input, settings2) {
    let patterns = input;
    if (settings2.braceExpansion) {
      patterns = utils2.pattern.expandPatternsWithBraceExpansion(patterns);
    }
    if (settings2.baseNameMatch) {
      patterns = patterns.map((pattern2) => pattern2.includes("/") ? pattern2 : `**/${pattern2}`);
    }
    return patterns.map((pattern2) => utils2.pattern.removeDuplicateSlashes(pattern2));
  }
  function convertPatternsToTasks(positive, negative, dynamic) {
    const tasks2 = [];
    const patternsOutsideCurrentDirectory = utils2.pattern.getPatternsOutsideCurrentDirectory(positive);
    const patternsInsideCurrentDirectory = utils2.pattern.getPatternsInsideCurrentDirectory(positive);
    const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
    const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
    tasks2.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
    if ("." in insideCurrentDirectoryGroup) {
      tasks2.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
    } else {
      tasks2.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
    }
    return tasks2;
  }
  tasks.convertPatternsToTasks = convertPatternsToTasks;
  function getPositivePatterns(patterns) {
    return utils2.pattern.getPositivePatterns(patterns);
  }
  tasks.getPositivePatterns = getPositivePatterns;
  function getNegativePatternsAsPositive(patterns, ignore) {
    const negative = utils2.pattern.getNegativePatterns(patterns).concat(ignore);
    const positive = negative.map(utils2.pattern.convertToPositivePattern);
    return positive;
  }
  tasks.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
  function groupPatternsByBaseDirectory(patterns) {
    const group = {};
    return patterns.reduce((collection, pattern2) => {
      const base = utils2.pattern.getBaseDirectory(pattern2);
      if (base in collection) {
        collection[base].push(pattern2);
      } else {
        collection[base] = [pattern2];
      }
      return collection;
    }, group);
  }
  tasks.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
  function convertPatternGroupsToTasks(positive, negative, dynamic) {
    return Object.keys(positive).map((base) => {
      return convertPatternGroupToTask(base, positive[base], negative, dynamic);
    });
  }
  tasks.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
  function convertPatternGroupToTask(base, positive, negative, dynamic) {
    return {
      dynamic,
      positive,
      negative,
      base,
      patterns: [].concat(positive, negative.map(utils2.pattern.convertToNegativePattern))
    };
  }
  tasks.convertPatternGroupToTask = convertPatternGroupToTask;
  return tasks;
}
var async$5 = {};
var async$4 = {};
var out$3 = {};
var async$3 = {};
var async$2 = {};
var out$2 = {};
var async$1 = {};
var out$1 = {};
var async = {};
var hasRequiredAsync$5;
function requireAsync$5() {
  if (hasRequiredAsync$5) return async;
  hasRequiredAsync$5 = 1;
  Object.defineProperty(async, "__esModule", { value: true });
  async.read = void 0;
  function read(path2, settings2, callback) {
    settings2.fs.lstat(path2, (lstatError, lstat) => {
      if (lstatError !== null) {
        callFailureCallback(callback, lstatError);
        return;
      }
      if (!lstat.isSymbolicLink() || !settings2.followSymbolicLink) {
        callSuccessCallback(callback, lstat);
        return;
      }
      settings2.fs.stat(path2, (statError, stat) => {
        if (statError !== null) {
          if (settings2.throwErrorOnBrokenSymbolicLink) {
            callFailureCallback(callback, statError);
            return;
          }
          callSuccessCallback(callback, lstat);
          return;
        }
        if (settings2.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        callSuccessCallback(callback, stat);
      });
    });
  }
  async.read = read;
  function callFailureCallback(callback, error2) {
    callback(error2);
  }
  function callSuccessCallback(callback, result) {
    callback(null, result);
  }
  return async;
}
var sync$5 = {};
var hasRequiredSync$5;
function requireSync$5() {
  if (hasRequiredSync$5) return sync$5;
  hasRequiredSync$5 = 1;
  Object.defineProperty(sync$5, "__esModule", { value: true });
  sync$5.read = void 0;
  function read(path2, settings2) {
    const lstat = settings2.fs.lstatSync(path2);
    if (!lstat.isSymbolicLink() || !settings2.followSymbolicLink) {
      return lstat;
    }
    try {
      const stat = settings2.fs.statSync(path2);
      if (settings2.markSymbolicLink) {
        stat.isSymbolicLink = () => true;
      }
      return stat;
    } catch (error2) {
      if (!settings2.throwErrorOnBrokenSymbolicLink) {
        return lstat;
      }
      throw error2;
    }
  }
  sync$5.read = read;
  return sync$5;
}
var settings$3 = {};
var fs$2 = {};
var hasRequiredFs$2;
function requireFs$2() {
  if (hasRequiredFs$2) return fs$2;
  hasRequiredFs$2 = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    exports$1.createFileSystemAdapter = exports$1.FILE_SYSTEM_ADAPTER = void 0;
    const fs2 = require$$0$7;
    exports$1.FILE_SYSTEM_ADAPTER = {
      lstat: fs2.lstat,
      stat: fs2.stat,
      lstatSync: fs2.lstatSync,
      statSync: fs2.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports$1.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports$1.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports$1.createFileSystemAdapter = createFileSystemAdapter;
  })(fs$2);
  return fs$2;
}
var hasRequiredSettings$3;
function requireSettings$3() {
  if (hasRequiredSettings$3) return settings$3;
  hasRequiredSettings$3 = 1;
  Object.defineProperty(settings$3, "__esModule", { value: true });
  const fs2 = requireFs$2();
  class Settings {
    constructor(_options = {}) {
      this._options = _options;
      this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
      this.fs = fs2.createFileSystemAdapter(this._options.fs);
      this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
      this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
    }
    _getValue(option2, value) {
      return option2 !== null && option2 !== void 0 ? option2 : value;
    }
  }
  settings$3.default = Settings;
  return settings$3;
}
var hasRequiredOut$3;
function requireOut$3() {
  if (hasRequiredOut$3) return out$1;
  hasRequiredOut$3 = 1;
  Object.defineProperty(out$1, "__esModule", { value: true });
  out$1.statSync = out$1.stat = out$1.Settings = void 0;
  const async2 = requireAsync$5();
  const sync2 = requireSync$5();
  const settings_1 = requireSettings$3();
  out$1.Settings = settings_1.default;
  function stat(path2, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === "function") {
      async2.read(path2, getSettings(), optionsOrSettingsOrCallback);
      return;
    }
    async2.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
  }
  out$1.stat = stat;
  function statSync(path2, optionsOrSettings) {
    const settings2 = getSettings(optionsOrSettings);
    return sync2.read(path2, settings2);
  }
  out$1.statSync = statSync;
  function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
      return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
  }
  return out$1;
}
var queueMicrotask_1;
var hasRequiredQueueMicrotask;
function requireQueueMicrotask() {
  if (hasRequiredQueueMicrotask) return queueMicrotask_1;
  hasRequiredQueueMicrotask = 1;
  let promise;
  queueMicrotask_1 = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : commonjsGlobal) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
    throw err;
  }, 0));
  return queueMicrotask_1;
}
var runParallel_1;
var hasRequiredRunParallel;
function requireRunParallel() {
  if (hasRequiredRunParallel) return runParallel_1;
  hasRequiredRunParallel = 1;
  runParallel_1 = runParallel;
  const queueMicrotask2 = requireQueueMicrotask();
  function runParallel(tasks2, cb) {
    let results, pending, keys;
    let isSync = true;
    if (Array.isArray(tasks2)) {
      results = [];
      pending = tasks2.length;
    } else {
      keys = Object.keys(tasks2);
      results = {};
      pending = keys.length;
    }
    function done(err) {
      function end() {
        if (cb) cb(err, results);
        cb = null;
      }
      if (isSync) queueMicrotask2(end);
      else end();
    }
    function each(i, err, result) {
      results[i] = result;
      if (--pending === 0 || err) {
        done(err);
      }
    }
    if (!pending) {
      done(null);
    } else if (keys) {
      keys.forEach(function(key) {
        tasks2[key](function(err, result) {
          each(key, err, result);
        });
      });
    } else {
      tasks2.forEach(function(task, i) {
        task(function(err, result) {
          each(i, err, result);
        });
      });
    }
    isSync = false;
  }
  return runParallel_1;
}
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  Object.defineProperty(constants, "__esModule", { value: true });
  constants.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
  const NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
  if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
    throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
  }
  const MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
  const MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
  const SUPPORTED_MAJOR_VERSION = 10;
  const SUPPORTED_MINOR_VERSION = 10;
  const IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
  const IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
  constants.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  return constants;
}
var utils = {};
var fs$1 = {};
var hasRequiredFs$1;
function requireFs$1() {
  if (hasRequiredFs$1) return fs$1;
  hasRequiredFs$1 = 1;
  Object.defineProperty(fs$1, "__esModule", { value: true });
  fs$1.createDirentFromStats = void 0;
  class DirentFromStats {
    constructor(name, stats) {
      this.name = name;
      this.isBlockDevice = stats.isBlockDevice.bind(stats);
      this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
      this.isDirectory = stats.isDirectory.bind(stats);
      this.isFIFO = stats.isFIFO.bind(stats);
      this.isFile = stats.isFile.bind(stats);
      this.isSocket = stats.isSocket.bind(stats);
      this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
    }
  }
  function createDirentFromStats(name, stats) {
    return new DirentFromStats(name, stats);
  }
  fs$1.createDirentFromStats = createDirentFromStats;
  return fs$1;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  Object.defineProperty(utils, "__esModule", { value: true });
  utils.fs = void 0;
  const fs2 = requireFs$1();
  utils.fs = fs2;
  return utils;
}
var common$1 = {};
var hasRequiredCommon$1;
function requireCommon$1() {
  if (hasRequiredCommon$1) return common$1;
  hasRequiredCommon$1 = 1;
  Object.defineProperty(common$1, "__esModule", { value: true });
  common$1.joinPathSegments = void 0;
  function joinPathSegments(a, b, separator) {
    if (a.endsWith(separator)) {
      return a + b;
    }
    return a + separator + b;
  }
  common$1.joinPathSegments = joinPathSegments;
  return common$1;
}
var hasRequiredAsync$4;
function requireAsync$4() {
  if (hasRequiredAsync$4) return async$1;
  hasRequiredAsync$4 = 1;
  Object.defineProperty(async$1, "__esModule", { value: true });
  async$1.readdir = async$1.readdirWithFileTypes = async$1.read = void 0;
  const fsStat = requireOut$3();
  const rpl = requireRunParallel();
  const constants_1 = requireConstants();
  const utils2 = requireUtils();
  const common2 = requireCommon$1();
  function read(directory, settings2, callback) {
    if (!settings2.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
      readdirWithFileTypes(directory, settings2, callback);
      return;
    }
    readdir(directory, settings2, callback);
  }
  async$1.read = read;
  function readdirWithFileTypes(directory, settings2, callback) {
    settings2.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
      if (readdirError !== null) {
        callFailureCallback(callback, readdirError);
        return;
      }
      const entries = dirents.map((dirent) => ({
        dirent,
        name: dirent.name,
        path: common2.joinPathSegments(directory, dirent.name, settings2.pathSegmentSeparator)
      }));
      if (!settings2.followSymbolicLinks) {
        callSuccessCallback(callback, entries);
        return;
      }
      const tasks2 = entries.map((entry2) => makeRplTaskEntry(entry2, settings2));
      rpl(tasks2, (rplError, rplEntries) => {
        if (rplError !== null) {
          callFailureCallback(callback, rplError);
          return;
        }
        callSuccessCallback(callback, rplEntries);
      });
    });
  }
  async$1.readdirWithFileTypes = readdirWithFileTypes;
  function makeRplTaskEntry(entry2, settings2) {
    return (done) => {
      if (!entry2.dirent.isSymbolicLink()) {
        done(null, entry2);
        return;
      }
      settings2.fs.stat(entry2.path, (statError, stats) => {
        if (statError !== null) {
          if (settings2.throwErrorOnBrokenSymbolicLink) {
            done(statError);
            return;
          }
          done(null, entry2);
          return;
        }
        entry2.dirent = utils2.fs.createDirentFromStats(entry2.name, stats);
        done(null, entry2);
      });
    };
  }
  function readdir(directory, settings2, callback) {
    settings2.fs.readdir(directory, (readdirError, names) => {
      if (readdirError !== null) {
        callFailureCallback(callback, readdirError);
        return;
      }
      const tasks2 = names.map((name) => {
        const path2 = common2.joinPathSegments(directory, name, settings2.pathSegmentSeparator);
        return (done) => {
          fsStat.stat(path2, settings2.fsStatSettings, (error2, stats) => {
            if (error2 !== null) {
              done(error2);
              return;
            }
            const entry2 = {
              name,
              path: path2,
              dirent: utils2.fs.createDirentFromStats(name, stats)
            };
            if (settings2.stats) {
              entry2.stats = stats;
            }
            done(null, entry2);
          });
        };
      });
      rpl(tasks2, (rplError, entries) => {
        if (rplError !== null) {
          callFailureCallback(callback, rplError);
          return;
        }
        callSuccessCallback(callback, entries);
      });
    });
  }
  async$1.readdir = readdir;
  function callFailureCallback(callback, error2) {
    callback(error2);
  }
  function callSuccessCallback(callback, result) {
    callback(null, result);
  }
  return async$1;
}
var sync$4 = {};
var hasRequiredSync$4;
function requireSync$4() {
  if (hasRequiredSync$4) return sync$4;
  hasRequiredSync$4 = 1;
  Object.defineProperty(sync$4, "__esModule", { value: true });
  sync$4.readdir = sync$4.readdirWithFileTypes = sync$4.read = void 0;
  const fsStat = requireOut$3();
  const constants_1 = requireConstants();
  const utils2 = requireUtils();
  const common2 = requireCommon$1();
  function read(directory, settings2) {
    if (!settings2.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
      return readdirWithFileTypes(directory, settings2);
    }
    return readdir(directory, settings2);
  }
  sync$4.read = read;
  function readdirWithFileTypes(directory, settings2) {
    const dirents = settings2.fs.readdirSync(directory, { withFileTypes: true });
    return dirents.map((dirent) => {
      const entry2 = {
        dirent,
        name: dirent.name,
        path: common2.joinPathSegments(directory, dirent.name, settings2.pathSegmentSeparator)
      };
      if (entry2.dirent.isSymbolicLink() && settings2.followSymbolicLinks) {
        try {
          const stats = settings2.fs.statSync(entry2.path);
          entry2.dirent = utils2.fs.createDirentFromStats(entry2.name, stats);
        } catch (error2) {
          if (settings2.throwErrorOnBrokenSymbolicLink) {
            throw error2;
          }
        }
      }
      return entry2;
    });
  }
  sync$4.readdirWithFileTypes = readdirWithFileTypes;
  function readdir(directory, settings2) {
    const names = settings2.fs.readdirSync(directory);
    return names.map((name) => {
      const entryPath = common2.joinPathSegments(directory, name, settings2.pathSegmentSeparator);
      const stats = fsStat.statSync(entryPath, settings2.fsStatSettings);
      const entry2 = {
        name,
        path: entryPath,
        dirent: utils2.fs.createDirentFromStats(name, stats)
      };
      if (settings2.stats) {
        entry2.stats = stats;
      }
      return entry2;
    });
  }
  sync$4.readdir = readdir;
  return sync$4;
}
var settings$2 = {};
var fs = {};
var hasRequiredFs;
function requireFs() {
  if (hasRequiredFs) return fs;
  hasRequiredFs = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    exports$1.createFileSystemAdapter = exports$1.FILE_SYSTEM_ADAPTER = void 0;
    const fs2 = require$$0$7;
    exports$1.FILE_SYSTEM_ADAPTER = {
      lstat: fs2.lstat,
      stat: fs2.stat,
      lstatSync: fs2.lstatSync,
      statSync: fs2.statSync,
      readdir: fs2.readdir,
      readdirSync: fs2.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports$1.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports$1.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports$1.createFileSystemAdapter = createFileSystemAdapter;
  })(fs);
  return fs;
}
var hasRequiredSettings$2;
function requireSettings$2() {
  if (hasRequiredSettings$2) return settings$2;
  hasRequiredSettings$2 = 1;
  Object.defineProperty(settings$2, "__esModule", { value: true });
  const path2 = require$$0$4;
  const fsStat = requireOut$3();
  const fs2 = requireFs();
  class Settings {
    constructor(_options = {}) {
      this._options = _options;
      this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
      this.fs = fs2.createFileSystemAdapter(this._options.fs);
      this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
      this.stats = this._getValue(this._options.stats, false);
      this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      this.fsStatSettings = new fsStat.Settings({
        followSymbolicLink: this.followSymbolicLinks,
        fs: this.fs,
        throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
      });
    }
    _getValue(option2, value) {
      return option2 !== null && option2 !== void 0 ? option2 : value;
    }
  }
  settings$2.default = Settings;
  return settings$2;
}
var hasRequiredOut$2;
function requireOut$2() {
  if (hasRequiredOut$2) return out$2;
  hasRequiredOut$2 = 1;
  Object.defineProperty(out$2, "__esModule", { value: true });
  out$2.Settings = out$2.scandirSync = out$2.scandir = void 0;
  const async2 = requireAsync$4();
  const sync2 = requireSync$4();
  const settings_1 = requireSettings$2();
  out$2.Settings = settings_1.default;
  function scandir(path2, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === "function") {
      async2.read(path2, getSettings(), optionsOrSettingsOrCallback);
      return;
    }
    async2.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
  }
  out$2.scandir = scandir;
  function scandirSync(path2, optionsOrSettings) {
    const settings2 = getSettings(optionsOrSettings);
    return sync2.read(path2, settings2);
  }
  out$2.scandirSync = scandirSync;
  function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
      return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
  }
  return out$2;
}
var queue = { exports: {} };
var reusify_1;
var hasRequiredReusify;
function requireReusify() {
  if (hasRequiredReusify) return reusify_1;
  hasRequiredReusify = 1;
  function reusify(Constructor) {
    var head = new Constructor();
    var tail = head;
    function get() {
      var current = head;
      if (current.next) {
        head = current.next;
      } else {
        head = new Constructor();
        tail = head;
      }
      current.next = null;
      return current;
    }
    function release(obj) {
      tail.next = obj;
      tail = obj;
    }
    return {
      get,
      release
    };
  }
  reusify_1 = reusify;
  return reusify_1;
}
var hasRequiredQueue;
function requireQueue() {
  if (hasRequiredQueue) return queue.exports;
  hasRequiredQueue = 1;
  var reusify = requireReusify();
  function fastqueue(context, worker, _concurrency) {
    if (typeof context === "function") {
      _concurrency = worker;
      worker = context;
      context = null;
    }
    if (!(_concurrency >= 1)) {
      throw new Error("fastqueue concurrency must be equal to or greater than 1");
    }
    var cache = reusify(Task);
    var queueHead = null;
    var queueTail = null;
    var _running = 0;
    var errorHandler = null;
    var self2 = {
      push,
      drain: noop2,
      saturated: noop2,
      pause,
      paused: false,
      get concurrency() {
        return _concurrency;
      },
      set concurrency(value) {
        if (!(value >= 1)) {
          throw new Error("fastqueue concurrency must be equal to or greater than 1");
        }
        _concurrency = value;
        if (self2.paused) return;
        for (; queueHead && _running < _concurrency; ) {
          _running++;
          release();
        }
      },
      running,
      resume,
      idle,
      length,
      getQueue,
      unshift,
      empty: noop2,
      kill,
      killAndDrain,
      error: error2,
      abort
    };
    return self2;
    function running() {
      return _running;
    }
    function pause() {
      self2.paused = true;
    }
    function length() {
      var current = queueHead;
      var counter = 0;
      while (current) {
        current = current.next;
        counter++;
      }
      return counter;
    }
    function getQueue() {
      var current = queueHead;
      var tasks2 = [];
      while (current) {
        tasks2.push(current.value);
        current = current.next;
      }
      return tasks2;
    }
    function resume() {
      if (!self2.paused) return;
      self2.paused = false;
      if (queueHead === null) {
        _running++;
        release();
        return;
      }
      for (; queueHead && _running < _concurrency; ) {
        _running++;
        release();
      }
    }
    function idle() {
      return _running === 0 && self2.length() === 0;
    }
    function push(value, done) {
      var current = cache.get();
      current.context = context;
      current.release = release;
      current.value = value;
      current.callback = done || noop2;
      current.errorHandler = errorHandler;
      if (_running >= _concurrency || self2.paused) {
        if (queueTail) {
          queueTail.next = current;
          queueTail = current;
        } else {
          queueHead = current;
          queueTail = current;
          self2.saturated();
        }
      } else {
        _running++;
        worker.call(context, current.value, current.worked);
      }
    }
    function unshift(value, done) {
      var current = cache.get();
      current.context = context;
      current.release = release;
      current.value = value;
      current.callback = done || noop2;
      current.errorHandler = errorHandler;
      if (_running >= _concurrency || self2.paused) {
        if (queueHead) {
          current.next = queueHead;
          queueHead = current;
        } else {
          queueHead = current;
          queueTail = current;
          self2.saturated();
        }
      } else {
        _running++;
        worker.call(context, current.value, current.worked);
      }
    }
    function release(holder) {
      if (holder) {
        cache.release(holder);
      }
      var next = queueHead;
      if (next && _running <= _concurrency) {
        if (!self2.paused) {
          if (queueTail === queueHead) {
            queueTail = null;
          }
          queueHead = next.next;
          next.next = null;
          worker.call(context, next.value, next.worked);
          if (queueTail === null) {
            self2.empty();
          }
        } else {
          _running--;
        }
      } else if (--_running === 0) {
        self2.drain();
      }
    }
    function kill() {
      queueHead = null;
      queueTail = null;
      self2.drain = noop2;
    }
    function killAndDrain() {
      queueHead = null;
      queueTail = null;
      self2.drain();
      self2.drain = noop2;
    }
    function abort() {
      var current = queueHead;
      queueHead = null;
      queueTail = null;
      while (current) {
        var next = current.next;
        var callback = current.callback;
        var errorHandler2 = current.errorHandler;
        var val = current.value;
        var context2 = current.context;
        current.value = null;
        current.callback = noop2;
        current.errorHandler = null;
        if (errorHandler2) {
          errorHandler2(new Error("abort"), val);
        }
        callback.call(context2, new Error("abort"));
        current.release(current);
        current = next;
      }
      self2.drain = noop2;
    }
    function error2(handler) {
      errorHandler = handler;
    }
  }
  function noop2() {
  }
  function Task() {
    this.value = null;
    this.callback = noop2;
    this.next = null;
    this.release = noop2;
    this.context = null;
    this.errorHandler = null;
    var self2 = this;
    this.worked = function worked(err, result) {
      var callback = self2.callback;
      var errorHandler = self2.errorHandler;
      var val = self2.value;
      self2.value = null;
      self2.callback = noop2;
      if (self2.errorHandler) {
        errorHandler(err, val);
      }
      callback.call(self2.context, err, result);
      self2.release(self2);
    };
  }
  function queueAsPromised(context, worker, _concurrency) {
    if (typeof context === "function") {
      _concurrency = worker;
      worker = context;
      context = null;
    }
    function asyncWrapper(arg, cb) {
      worker.call(this, arg).then(function(res) {
        cb(null, res);
      }, cb);
    }
    var queue2 = fastqueue(context, asyncWrapper, _concurrency);
    var pushCb = queue2.push;
    var unshiftCb = queue2.unshift;
    queue2.push = push;
    queue2.unshift = unshift;
    queue2.drained = drained;
    return queue2;
    function push(value) {
      var p = new Promise(function(resolve, reject) {
        pushCb(value, function(err, result) {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
      p.catch(noop2);
      return p;
    }
    function unshift(value) {
      var p = new Promise(function(resolve, reject) {
        unshiftCb(value, function(err, result) {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
      p.catch(noop2);
      return p;
    }
    function drained() {
      var p = new Promise(function(resolve) {
        process.nextTick(function() {
          if (queue2.idle()) {
            resolve();
          } else {
            var previousDrain = queue2.drain;
            queue2.drain = function() {
              if (typeof previousDrain === "function") previousDrain();
              resolve();
              queue2.drain = previousDrain;
            };
          }
        });
      });
      return p;
    }
  }
  queue.exports = fastqueue;
  queue.exports.promise = queueAsPromised;
  return queue.exports;
}
var common = {};
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  Object.defineProperty(common, "__esModule", { value: true });
  common.joinPathSegments = common.replacePathSegmentSeparator = common.isAppliedFilter = common.isFatalError = void 0;
  function isFatalError(settings2, error2) {
    if (settings2.errorFilter === null) {
      return true;
    }
    return !settings2.errorFilter(error2);
  }
  common.isFatalError = isFatalError;
  function isAppliedFilter(filter, value) {
    return filter === null || filter(value);
  }
  common.isAppliedFilter = isAppliedFilter;
  function replacePathSegmentSeparator(filepath, separator) {
    return filepath.split(/[/\\]/).join(separator);
  }
  common.replacePathSegmentSeparator = replacePathSegmentSeparator;
  function joinPathSegments(a, b, separator) {
    if (a === "") {
      return b;
    }
    if (a.endsWith(separator)) {
      return a + b;
    }
    return a + separator + b;
  }
  common.joinPathSegments = joinPathSegments;
  return common;
}
var reader$1 = {};
var hasRequiredReader$1;
function requireReader$1() {
  if (hasRequiredReader$1) return reader$1;
  hasRequiredReader$1 = 1;
  Object.defineProperty(reader$1, "__esModule", { value: true });
  const common2 = requireCommon();
  class Reader {
    constructor(_root, _settings) {
      this._root = _root;
      this._settings = _settings;
      this._root = common2.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
    }
  }
  reader$1.default = Reader;
  return reader$1;
}
var hasRequiredAsync$3;
function requireAsync$3() {
  if (hasRequiredAsync$3) return async$2;
  hasRequiredAsync$3 = 1;
  Object.defineProperty(async$2, "__esModule", { value: true });
  const events_1 = require$$2$1;
  const fsScandir = requireOut$2();
  const fastq = requireQueue();
  const common2 = requireCommon();
  const reader_1 = requireReader$1();
  class AsyncReader extends reader_1.default {
    constructor(_root, _settings) {
      super(_root, _settings);
      this._settings = _settings;
      this._scandir = fsScandir.scandir;
      this._emitter = new events_1.EventEmitter();
      this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
      this._isFatalError = false;
      this._isDestroyed = false;
      this._queue.drain = () => {
        if (!this._isFatalError) {
          this._emitter.emit("end");
        }
      };
    }
    read() {
      this._isFatalError = false;
      this._isDestroyed = false;
      setImmediate(() => {
        this._pushToQueue(this._root, this._settings.basePath);
      });
      return this._emitter;
    }
    get isDestroyed() {
      return this._isDestroyed;
    }
    destroy() {
      if (this._isDestroyed) {
        throw new Error("The reader is already destroyed");
      }
      this._isDestroyed = true;
      this._queue.killAndDrain();
    }
    onEntry(callback) {
      this._emitter.on("entry", callback);
    }
    onError(callback) {
      this._emitter.once("error", callback);
    }
    onEnd(callback) {
      this._emitter.once("end", callback);
    }
    _pushToQueue(directory, base) {
      const queueItem = { directory, base };
      this._queue.push(queueItem, (error2) => {
        if (error2 !== null) {
          this._handleError(error2);
        }
      });
    }
    _worker(item, done) {
      this._scandir(item.directory, this._settings.fsScandirSettings, (error2, entries) => {
        if (error2 !== null) {
          done(error2, void 0);
          return;
        }
        for (const entry2 of entries) {
          this._handleEntry(entry2, item.base);
        }
        done(null, void 0);
      });
    }
    _handleError(error2) {
      if (this._isDestroyed || !common2.isFatalError(this._settings, error2)) {
        return;
      }
      this._isFatalError = true;
      this._isDestroyed = true;
      this._emitter.emit("error", error2);
    }
    _handleEntry(entry2, base) {
      if (this._isDestroyed || this._isFatalError) {
        return;
      }
      const fullpath = entry2.path;
      if (base !== void 0) {
        entry2.path = common2.joinPathSegments(base, entry2.name, this._settings.pathSegmentSeparator);
      }
      if (common2.isAppliedFilter(this._settings.entryFilter, entry2)) {
        this._emitEntry(entry2);
      }
      if (entry2.dirent.isDirectory() && common2.isAppliedFilter(this._settings.deepFilter, entry2)) {
        this._pushToQueue(fullpath, base === void 0 ? void 0 : entry2.path);
      }
    }
    _emitEntry(entry2) {
      this._emitter.emit("entry", entry2);
    }
  }
  async$2.default = AsyncReader;
  return async$2;
}
var hasRequiredAsync$2;
function requireAsync$2() {
  if (hasRequiredAsync$2) return async$3;
  hasRequiredAsync$2 = 1;
  Object.defineProperty(async$3, "__esModule", { value: true });
  const async_1 = requireAsync$3();
  class AsyncProvider {
    constructor(_root, _settings) {
      this._root = _root;
      this._settings = _settings;
      this._reader = new async_1.default(this._root, this._settings);
      this._storage = [];
    }
    read(callback) {
      this._reader.onError((error2) => {
        callFailureCallback(callback, error2);
      });
      this._reader.onEntry((entry2) => {
        this._storage.push(entry2);
      });
      this._reader.onEnd(() => {
        callSuccessCallback(callback, this._storage);
      });
      this._reader.read();
    }
  }
  async$3.default = AsyncProvider;
  function callFailureCallback(callback, error2) {
    callback(error2);
  }
  function callSuccessCallback(callback, entries) {
    callback(null, entries);
  }
  return async$3;
}
var stream$2 = {};
var hasRequiredStream$2;
function requireStream$2() {
  if (hasRequiredStream$2) return stream$2;
  hasRequiredStream$2 = 1;
  Object.defineProperty(stream$2, "__esModule", { value: true });
  const stream_1 = require$$0$6;
  const async_1 = requireAsync$3();
  class StreamProvider {
    constructor(_root, _settings) {
      this._root = _root;
      this._settings = _settings;
      this._reader = new async_1.default(this._root, this._settings);
      this._stream = new stream_1.Readable({
        objectMode: true,
        read: () => {
        },
        destroy: () => {
          if (!this._reader.isDestroyed) {
            this._reader.destroy();
          }
        }
      });
    }
    read() {
      this._reader.onError((error2) => {
        this._stream.emit("error", error2);
      });
      this._reader.onEntry((entry2) => {
        this._stream.push(entry2);
      });
      this._reader.onEnd(() => {
        this._stream.push(null);
      });
      this._reader.read();
      return this._stream;
    }
  }
  stream$2.default = StreamProvider;
  return stream$2;
}
var sync$3 = {};
var sync$2 = {};
var hasRequiredSync$3;
function requireSync$3() {
  if (hasRequiredSync$3) return sync$2;
  hasRequiredSync$3 = 1;
  Object.defineProperty(sync$2, "__esModule", { value: true });
  const fsScandir = requireOut$2();
  const common2 = requireCommon();
  const reader_1 = requireReader$1();
  class SyncReader extends reader_1.default {
    constructor() {
      super(...arguments);
      this._scandir = fsScandir.scandirSync;
      this._storage = [];
      this._queue = /* @__PURE__ */ new Set();
    }
    read() {
      this._pushToQueue(this._root, this._settings.basePath);
      this._handleQueue();
      return this._storage;
    }
    _pushToQueue(directory, base) {
      this._queue.add({ directory, base });
    }
    _handleQueue() {
      for (const item of this._queue.values()) {
        this._handleDirectory(item.directory, item.base);
      }
    }
    _handleDirectory(directory, base) {
      try {
        const entries = this._scandir(directory, this._settings.fsScandirSettings);
        for (const entry2 of entries) {
          this._handleEntry(entry2, base);
        }
      } catch (error2) {
        this._handleError(error2);
      }
    }
    _handleError(error2) {
      if (!common2.isFatalError(this._settings, error2)) {
        return;
      }
      throw error2;
    }
    _handleEntry(entry2, base) {
      const fullpath = entry2.path;
      if (base !== void 0) {
        entry2.path = common2.joinPathSegments(base, entry2.name, this._settings.pathSegmentSeparator);
      }
      if (common2.isAppliedFilter(this._settings.entryFilter, entry2)) {
        this._pushToStorage(entry2);
      }
      if (entry2.dirent.isDirectory() && common2.isAppliedFilter(this._settings.deepFilter, entry2)) {
        this._pushToQueue(fullpath, base === void 0 ? void 0 : entry2.path);
      }
    }
    _pushToStorage(entry2) {
      this._storage.push(entry2);
    }
  }
  sync$2.default = SyncReader;
  return sync$2;
}
var hasRequiredSync$2;
function requireSync$2() {
  if (hasRequiredSync$2) return sync$3;
  hasRequiredSync$2 = 1;
  Object.defineProperty(sync$3, "__esModule", { value: true });
  const sync_1 = requireSync$3();
  class SyncProvider {
    constructor(_root, _settings) {
      this._root = _root;
      this._settings = _settings;
      this._reader = new sync_1.default(this._root, this._settings);
    }
    read() {
      return this._reader.read();
    }
  }
  sync$3.default = SyncProvider;
  return sync$3;
}
var settings$1 = {};
var hasRequiredSettings$1;
function requireSettings$1() {
  if (hasRequiredSettings$1) return settings$1;
  hasRequiredSettings$1 = 1;
  Object.defineProperty(settings$1, "__esModule", { value: true });
  const path2 = require$$0$4;
  const fsScandir = requireOut$2();
  class Settings {
    constructor(_options = {}) {
      this._options = _options;
      this.basePath = this._getValue(this._options.basePath, void 0);
      this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
      this.deepFilter = this._getValue(this._options.deepFilter, null);
      this.entryFilter = this._getValue(this._options.entryFilter, null);
      this.errorFilter = this._getValue(this._options.errorFilter, null);
      this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
      this.fsScandirSettings = new fsScandir.Settings({
        followSymbolicLinks: this._options.followSymbolicLinks,
        fs: this._options.fs,
        pathSegmentSeparator: this._options.pathSegmentSeparator,
        stats: this._options.stats,
        throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
      });
    }
    _getValue(option2, value) {
      return option2 !== null && option2 !== void 0 ? option2 : value;
    }
  }
  settings$1.default = Settings;
  return settings$1;
}
var hasRequiredOut$1;
function requireOut$1() {
  if (hasRequiredOut$1) return out$3;
  hasRequiredOut$1 = 1;
  Object.defineProperty(out$3, "__esModule", { value: true });
  out$3.Settings = out$3.walkStream = out$3.walkSync = out$3.walk = void 0;
  const async_1 = requireAsync$2();
  const stream_1 = requireStream$2();
  const sync_1 = requireSync$2();
  const settings_1 = requireSettings$1();
  out$3.Settings = settings_1.default;
  function walk(directory, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === "function") {
      new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
      return;
    }
    new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
  }
  out$3.walk = walk;
  function walkSync(directory, optionsOrSettings) {
    const settings2 = getSettings(optionsOrSettings);
    const provider2 = new sync_1.default(directory, settings2);
    return provider2.read();
  }
  out$3.walkSync = walkSync;
  function walkStream(directory, optionsOrSettings) {
    const settings2 = getSettings(optionsOrSettings);
    const provider2 = new stream_1.default(directory, settings2);
    return provider2.read();
  }
  out$3.walkStream = walkStream;
  function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
      return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
  }
  return out$3;
}
var reader = {};
var hasRequiredReader;
function requireReader() {
  if (hasRequiredReader) return reader;
  hasRequiredReader = 1;
  Object.defineProperty(reader, "__esModule", { value: true });
  const path2 = require$$0$4;
  const fsStat = requireOut$3();
  const utils2 = requireUtils$1();
  class Reader {
    constructor(_settings) {
      this._settings = _settings;
      this._fsStatSettings = new fsStat.Settings({
        followSymbolicLink: this._settings.followSymbolicLinks,
        fs: this._settings.fs,
        throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
      });
    }
    _getFullEntryPath(filepath) {
      return path2.resolve(this._settings.cwd, filepath);
    }
    _makeEntry(stats, pattern2) {
      const entry2 = {
        name: pattern2,
        path: pattern2,
        dirent: utils2.fs.createDirentFromStats(pattern2, stats)
      };
      if (this._settings.stats) {
        entry2.stats = stats;
      }
      return entry2;
    }
    _isFatalError(error2) {
      return !utils2.errno.isEnoentCodeError(error2) && !this._settings.suppressErrors;
    }
  }
  reader.default = Reader;
  return reader;
}
var stream$1 = {};
var hasRequiredStream$1;
function requireStream$1() {
  if (hasRequiredStream$1) return stream$1;
  hasRequiredStream$1 = 1;
  Object.defineProperty(stream$1, "__esModule", { value: true });
  const stream_1 = require$$0$6;
  const fsStat = requireOut$3();
  const fsWalk = requireOut$1();
  const reader_1 = requireReader();
  class ReaderStream extends reader_1.default {
    constructor() {
      super(...arguments);
      this._walkStream = fsWalk.walkStream;
      this._stat = fsStat.stat;
    }
    dynamic(root, options) {
      return this._walkStream(root, options);
    }
    static(patterns, options) {
      const filepaths = patterns.map(this._getFullEntryPath, this);
      const stream2 = new stream_1.PassThrough({ objectMode: true });
      stream2._write = (index, _enc, done) => {
        return this._getEntry(filepaths[index], patterns[index], options).then((entry2) => {
          if (entry2 !== null && options.entryFilter(entry2)) {
            stream2.push(entry2);
          }
          if (index === filepaths.length - 1) {
            stream2.end();
          }
          done();
        }).catch(done);
      };
      for (let i = 0; i < filepaths.length; i++) {
        stream2.write(i);
      }
      return stream2;
    }
    _getEntry(filepath, pattern2, options) {
      return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern2)).catch((error2) => {
        if (options.errorFilter(error2)) {
          return null;
        }
        throw error2;
      });
    }
    _getStat(filepath) {
      return new Promise((resolve, reject) => {
        this._stat(filepath, this._fsStatSettings, (error2, stats) => {
          return error2 === null ? resolve(stats) : reject(error2);
        });
      });
    }
  }
  stream$1.default = ReaderStream;
  return stream$1;
}
var hasRequiredAsync$1;
function requireAsync$1() {
  if (hasRequiredAsync$1) return async$4;
  hasRequiredAsync$1 = 1;
  Object.defineProperty(async$4, "__esModule", { value: true });
  const fsWalk = requireOut$1();
  const reader_1 = requireReader();
  const stream_1 = requireStream$1();
  class ReaderAsync extends reader_1.default {
    constructor() {
      super(...arguments);
      this._walkAsync = fsWalk.walk;
      this._readerStream = new stream_1.default(this._settings);
    }
    dynamic(root, options) {
      return new Promise((resolve, reject) => {
        this._walkAsync(root, options, (error2, entries) => {
          if (error2 === null) {
            resolve(entries);
          } else {
            reject(error2);
          }
        });
      });
    }
    async static(patterns, options) {
      const entries = [];
      const stream2 = this._readerStream.static(patterns, options);
      return new Promise((resolve, reject) => {
        stream2.once("error", reject);
        stream2.on("data", (entry2) => entries.push(entry2));
        stream2.once("end", () => resolve(entries));
      });
    }
  }
  async$4.default = ReaderAsync;
  return async$4;
}
var provider = {};
var deep = {};
var partial = {};
var matcher = {};
var hasRequiredMatcher;
function requireMatcher() {
  if (hasRequiredMatcher) return matcher;
  hasRequiredMatcher = 1;
  Object.defineProperty(matcher, "__esModule", { value: true });
  const utils2 = requireUtils$1();
  class Matcher {
    constructor(_patterns, _settings, _micromatchOptions) {
      this._patterns = _patterns;
      this._settings = _settings;
      this._micromatchOptions = _micromatchOptions;
      this._storage = [];
      this._fillStorage();
    }
    _fillStorage() {
      for (const pattern2 of this._patterns) {
        const segments = this._getPatternSegments(pattern2);
        const sections = this._splitSegmentsIntoSections(segments);
        this._storage.push({
          complete: sections.length <= 1,
          pattern: pattern2,
          segments,
          sections
        });
      }
    }
    _getPatternSegments(pattern2) {
      const parts = utils2.pattern.getPatternParts(pattern2, this._micromatchOptions);
      return parts.map((part) => {
        const dynamic = utils2.pattern.isDynamicPattern(part, this._settings);
        if (!dynamic) {
          return {
            dynamic: false,
            pattern: part
          };
        }
        return {
          dynamic: true,
          pattern: part,
          patternRe: utils2.pattern.makeRe(part, this._micromatchOptions)
        };
      });
    }
    _splitSegmentsIntoSections(segments) {
      return utils2.array.splitWhen(segments, (segment) => segment.dynamic && utils2.pattern.hasGlobStar(segment.pattern));
    }
  }
  matcher.default = Matcher;
  return matcher;
}
var hasRequiredPartial;
function requirePartial() {
  if (hasRequiredPartial) return partial;
  hasRequiredPartial = 1;
  Object.defineProperty(partial, "__esModule", { value: true });
  const matcher_1 = requireMatcher();
  class PartialMatcher extends matcher_1.default {
    match(filepath) {
      const parts = filepath.split("/");
      const levels = parts.length;
      const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
      for (const pattern2 of patterns) {
        const section = pattern2.sections[0];
        if (!pattern2.complete && levels > section.length) {
          return true;
        }
        const match = parts.every((part, index) => {
          const segment = pattern2.segments[index];
          if (segment.dynamic && segment.patternRe.test(part)) {
            return true;
          }
          if (!segment.dynamic && segment.pattern === part) {
            return true;
          }
          return false;
        });
        if (match) {
          return true;
        }
      }
      return false;
    }
  }
  partial.default = PartialMatcher;
  return partial;
}
var hasRequiredDeep;
function requireDeep() {
  if (hasRequiredDeep) return deep;
  hasRequiredDeep = 1;
  Object.defineProperty(deep, "__esModule", { value: true });
  const utils2 = requireUtils$1();
  const partial_1 = requirePartial();
  class DeepFilter {
    constructor(_settings, _micromatchOptions) {
      this._settings = _settings;
      this._micromatchOptions = _micromatchOptions;
    }
    getFilter(basePath, positive, negative) {
      const matcher2 = this._getMatcher(positive);
      const negativeRe = this._getNegativePatternsRe(negative);
      return (entry2) => this._filter(basePath, entry2, matcher2, negativeRe);
    }
    _getMatcher(patterns) {
      return new partial_1.default(patterns, this._settings, this._micromatchOptions);
    }
    _getNegativePatternsRe(patterns) {
      const affectDepthOfReadingPatterns = patterns.filter(utils2.pattern.isAffectDepthOfReadingPattern);
      return utils2.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
    }
    _filter(basePath, entry2, matcher2, negativeRe) {
      if (this._isSkippedByDeep(basePath, entry2.path)) {
        return false;
      }
      if (this._isSkippedSymbolicLink(entry2)) {
        return false;
      }
      const filepath = utils2.path.removeLeadingDotSegment(entry2.path);
      if (this._isSkippedByPositivePatterns(filepath, matcher2)) {
        return false;
      }
      return this._isSkippedByNegativePatterns(filepath, negativeRe);
    }
    _isSkippedByDeep(basePath, entryPath) {
      if (this._settings.deep === Infinity) {
        return false;
      }
      return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
    }
    _getEntryLevel(basePath, entryPath) {
      const entryPathDepth = entryPath.split("/").length;
      if (basePath === "") {
        return entryPathDepth;
      }
      const basePathDepth = basePath.split("/").length;
      return entryPathDepth - basePathDepth;
    }
    _isSkippedSymbolicLink(entry2) {
      return !this._settings.followSymbolicLinks && entry2.dirent.isSymbolicLink();
    }
    _isSkippedByPositivePatterns(entryPath, matcher2) {
      return !this._settings.baseNameMatch && !matcher2.match(entryPath);
    }
    _isSkippedByNegativePatterns(entryPath, patternsRe) {
      return !utils2.pattern.matchAny(entryPath, patternsRe);
    }
  }
  deep.default = DeepFilter;
  return deep;
}
var entry$1 = {};
var hasRequiredEntry$1;
function requireEntry$1() {
  if (hasRequiredEntry$1) return entry$1;
  hasRequiredEntry$1 = 1;
  Object.defineProperty(entry$1, "__esModule", { value: true });
  const utils2 = requireUtils$1();
  class EntryFilter {
    constructor(_settings, _micromatchOptions) {
      this._settings = _settings;
      this._micromatchOptions = _micromatchOptions;
      this.index = /* @__PURE__ */ new Map();
    }
    getFilter(positive, negative) {
      const [absoluteNegative, relativeNegative] = utils2.pattern.partitionAbsoluteAndRelative(negative);
      const patterns = {
        positive: {
          all: utils2.pattern.convertPatternsToRe(positive, this._micromatchOptions)
        },
        negative: {
          absolute: utils2.pattern.convertPatternsToRe(absoluteNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true })),
          relative: utils2.pattern.convertPatternsToRe(relativeNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }))
        }
      };
      return (entry2) => this._filter(entry2, patterns);
    }
    _filter(entry2, patterns) {
      const filepath = utils2.path.removeLeadingDotSegment(entry2.path);
      if (this._settings.unique && this._isDuplicateEntry(filepath)) {
        return false;
      }
      if (this._onlyFileFilter(entry2) || this._onlyDirectoryFilter(entry2)) {
        return false;
      }
      const isMatched = this._isMatchToPatternsSet(filepath, patterns, entry2.dirent.isDirectory());
      if (this._settings.unique && isMatched) {
        this._createIndexRecord(filepath);
      }
      return isMatched;
    }
    _isDuplicateEntry(filepath) {
      return this.index.has(filepath);
    }
    _createIndexRecord(filepath) {
      this.index.set(filepath, void 0);
    }
    _onlyFileFilter(entry2) {
      return this._settings.onlyFiles && !entry2.dirent.isFile();
    }
    _onlyDirectoryFilter(entry2) {
      return this._settings.onlyDirectories && !entry2.dirent.isDirectory();
    }
    _isMatchToPatternsSet(filepath, patterns, isDirectory) {
      const isMatched = this._isMatchToPatterns(filepath, patterns.positive.all, isDirectory);
      if (!isMatched) {
        return false;
      }
      const isMatchedByRelativeNegative = this._isMatchToPatterns(filepath, patterns.negative.relative, isDirectory);
      if (isMatchedByRelativeNegative) {
        return false;
      }
      const isMatchedByAbsoluteNegative = this._isMatchToAbsoluteNegative(filepath, patterns.negative.absolute, isDirectory);
      if (isMatchedByAbsoluteNegative) {
        return false;
      }
      return true;
    }
    _isMatchToAbsoluteNegative(filepath, patternsRe, isDirectory) {
      if (patternsRe.length === 0) {
        return false;
      }
      const fullpath = utils2.path.makeAbsolute(this._settings.cwd, filepath);
      return this._isMatchToPatterns(fullpath, patternsRe, isDirectory);
    }
    _isMatchToPatterns(filepath, patternsRe, isDirectory) {
      if (patternsRe.length === 0) {
        return false;
      }
      const isMatched = utils2.pattern.matchAny(filepath, patternsRe);
      if (!isMatched && isDirectory) {
        return utils2.pattern.matchAny(filepath + "/", patternsRe);
      }
      return isMatched;
    }
  }
  entry$1.default = EntryFilter;
  return entry$1;
}
var error = {};
var hasRequiredError;
function requireError() {
  if (hasRequiredError) return error;
  hasRequiredError = 1;
  Object.defineProperty(error, "__esModule", { value: true });
  const utils2 = requireUtils$1();
  class ErrorFilter {
    constructor(_settings) {
      this._settings = _settings;
    }
    getFilter() {
      return (error2) => this._isNonFatalError(error2);
    }
    _isNonFatalError(error2) {
      return utils2.errno.isEnoentCodeError(error2) || this._settings.suppressErrors;
    }
  }
  error.default = ErrorFilter;
  return error;
}
var entry = {};
var hasRequiredEntry;
function requireEntry() {
  if (hasRequiredEntry) return entry;
  hasRequiredEntry = 1;
  Object.defineProperty(entry, "__esModule", { value: true });
  const utils2 = requireUtils$1();
  class EntryTransformer {
    constructor(_settings) {
      this._settings = _settings;
    }
    getTransformer() {
      return (entry2) => this._transform(entry2);
    }
    _transform(entry2) {
      let filepath = entry2.path;
      if (this._settings.absolute) {
        filepath = utils2.path.makeAbsolute(this._settings.cwd, filepath);
        filepath = utils2.path.unixify(filepath);
      }
      if (this._settings.markDirectories && entry2.dirent.isDirectory()) {
        filepath += "/";
      }
      if (!this._settings.objectMode) {
        return filepath;
      }
      return Object.assign(Object.assign({}, entry2), { path: filepath });
    }
  }
  entry.default = EntryTransformer;
  return entry;
}
var hasRequiredProvider;
function requireProvider() {
  if (hasRequiredProvider) return provider;
  hasRequiredProvider = 1;
  Object.defineProperty(provider, "__esModule", { value: true });
  const path2 = require$$0$4;
  const deep_1 = requireDeep();
  const entry_1 = requireEntry$1();
  const error_1 = requireError();
  const entry_2 = requireEntry();
  class Provider {
    constructor(_settings) {
      this._settings = _settings;
      this.errorFilter = new error_1.default(this._settings);
      this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
      this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
      this.entryTransformer = new entry_2.default(this._settings);
    }
    _getRootDirectory(task) {
      return path2.resolve(this._settings.cwd, task.base);
    }
    _getReaderOptions(task) {
      const basePath = task.base === "." ? "" : task.base;
      return {
        basePath,
        pathSegmentSeparator: "/",
        concurrency: this._settings.concurrency,
        deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
        entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
        errorFilter: this.errorFilter.getFilter(),
        followSymbolicLinks: this._settings.followSymbolicLinks,
        fs: this._settings.fs,
        stats: this._settings.stats,
        throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
        transform: this.entryTransformer.getTransformer()
      };
    }
    _getMicromatchOptions() {
      return {
        dot: this._settings.dot,
        matchBase: this._settings.baseNameMatch,
        nobrace: !this._settings.braceExpansion,
        nocase: !this._settings.caseSensitiveMatch,
        noext: !this._settings.extglob,
        noglobstar: !this._settings.globstar,
        posix: true,
        strictSlashes: false
      };
    }
  }
  provider.default = Provider;
  return provider;
}
var hasRequiredAsync;
function requireAsync() {
  if (hasRequiredAsync) return async$5;
  hasRequiredAsync = 1;
  Object.defineProperty(async$5, "__esModule", { value: true });
  const async_1 = requireAsync$1();
  const provider_1 = requireProvider();
  class ProviderAsync extends provider_1.default {
    constructor() {
      super(...arguments);
      this._reader = new async_1.default(this._settings);
    }
    async read(task) {
      const root = this._getRootDirectory(task);
      const options = this._getReaderOptions(task);
      const entries = await this.api(root, task, options);
      return entries.map((entry2) => options.transform(entry2));
    }
    api(root, task, options) {
      if (task.dynamic) {
        return this._reader.dynamic(root, options);
      }
      return this._reader.static(task.patterns, options);
    }
  }
  async$5.default = ProviderAsync;
  return async$5;
}
var stream = {};
var hasRequiredStream;
function requireStream() {
  if (hasRequiredStream) return stream;
  hasRequiredStream = 1;
  Object.defineProperty(stream, "__esModule", { value: true });
  const stream_1 = require$$0$6;
  const stream_2 = requireStream$1();
  const provider_1 = requireProvider();
  class ProviderStream extends provider_1.default {
    constructor() {
      super(...arguments);
      this._reader = new stream_2.default(this._settings);
    }
    read(task) {
      const root = this._getRootDirectory(task);
      const options = this._getReaderOptions(task);
      const source = this.api(root, task, options);
      const destination = new stream_1.Readable({ objectMode: true, read: () => {
      } });
      source.once("error", (error2) => destination.emit("error", error2)).on("data", (entry2) => destination.emit("data", options.transform(entry2))).once("end", () => destination.emit("end"));
      destination.once("close", () => source.destroy());
      return destination;
    }
    api(root, task, options) {
      if (task.dynamic) {
        return this._reader.dynamic(root, options);
      }
      return this._reader.static(task.patterns, options);
    }
  }
  stream.default = ProviderStream;
  return stream;
}
var sync$1 = {};
var sync = {};
var hasRequiredSync$1;
function requireSync$1() {
  if (hasRequiredSync$1) return sync;
  hasRequiredSync$1 = 1;
  Object.defineProperty(sync, "__esModule", { value: true });
  const fsStat = requireOut$3();
  const fsWalk = requireOut$1();
  const reader_1 = requireReader();
  class ReaderSync extends reader_1.default {
    constructor() {
      super(...arguments);
      this._walkSync = fsWalk.walkSync;
      this._statSync = fsStat.statSync;
    }
    dynamic(root, options) {
      return this._walkSync(root, options);
    }
    static(patterns, options) {
      const entries = [];
      for (const pattern2 of patterns) {
        const filepath = this._getFullEntryPath(pattern2);
        const entry2 = this._getEntry(filepath, pattern2, options);
        if (entry2 === null || !options.entryFilter(entry2)) {
          continue;
        }
        entries.push(entry2);
      }
      return entries;
    }
    _getEntry(filepath, pattern2, options) {
      try {
        const stats = this._getStat(filepath);
        return this._makeEntry(stats, pattern2);
      } catch (error2) {
        if (options.errorFilter(error2)) {
          return null;
        }
        throw error2;
      }
    }
    _getStat(filepath) {
      return this._statSync(filepath, this._fsStatSettings);
    }
  }
  sync.default = ReaderSync;
  return sync;
}
var hasRequiredSync;
function requireSync() {
  if (hasRequiredSync) return sync$1;
  hasRequiredSync = 1;
  Object.defineProperty(sync$1, "__esModule", { value: true });
  const sync_1 = requireSync$1();
  const provider_1 = requireProvider();
  class ProviderSync extends provider_1.default {
    constructor() {
      super(...arguments);
      this._reader = new sync_1.default(this._settings);
    }
    read(task) {
      const root = this._getRootDirectory(task);
      const options = this._getReaderOptions(task);
      const entries = this.api(root, task, options);
      return entries.map(options.transform);
    }
    api(root, task, options) {
      if (task.dynamic) {
        return this._reader.dynamic(root, options);
      }
      return this._reader.static(task.patterns, options);
    }
  }
  sync$1.default = ProviderSync;
  return sync$1;
}
var settings = {};
var hasRequiredSettings;
function requireSettings() {
  if (hasRequiredSettings) return settings;
  hasRequiredSettings = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    exports$1.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    const fs2 = require$$0$7;
    const os = require$$0$3;
    const CPU_COUNT = Math.max(os.cpus().length, 1);
    exports$1.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs2.lstat,
      lstatSync: fs2.lstatSync,
      stat: fs2.stat,
      statSync: fs2.statSync,
      readdir: fs2.readdir,
      readdirSync: fs2.readdirSync
    };
    class Settings {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
        this.ignore = [].concat(this.ignore);
      }
      _getValue(option2, value) {
        return option2 === void 0 ? value : option2;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports$1.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    }
    exports$1.default = Settings;
  })(settings);
  return settings;
}
var out;
var hasRequiredOut;
function requireOut() {
  if (hasRequiredOut) return out;
  hasRequiredOut = 1;
  const taskManager = requireTasks();
  const async_1 = requireAsync();
  const stream_1 = requireStream();
  const sync_1 = requireSync();
  const settings_1 = requireSettings();
  const utils2 = requireUtils$1();
  async function FastGlob(source, options) {
    assertPatternsInput(source);
    const works = getWorks(source, async_1.default, options);
    const result = await Promise.all(works);
    return utils2.array.flatten(result);
  }
  (function(FastGlob2) {
    FastGlob2.glob = FastGlob2;
    FastGlob2.globSync = sync2;
    FastGlob2.globStream = stream2;
    FastGlob2.async = FastGlob2;
    function sync2(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, sync_1.default, options);
      return utils2.array.flatten(works);
    }
    FastGlob2.sync = sync2;
    function stream2(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, stream_1.default, options);
      return utils2.stream.merge(works);
    }
    FastGlob2.stream = stream2;
    function generateTasks(source, options) {
      assertPatternsInput(source);
      const patterns = [].concat(source);
      const settings2 = new settings_1.default(options);
      return taskManager.generate(patterns, settings2);
    }
    FastGlob2.generateTasks = generateTasks;
    function isDynamicPattern(source, options) {
      assertPatternsInput(source);
      const settings2 = new settings_1.default(options);
      return utils2.pattern.isDynamicPattern(source, settings2);
    }
    FastGlob2.isDynamicPattern = isDynamicPattern;
    function escapePath(source) {
      assertPatternsInput(source);
      return utils2.path.escape(source);
    }
    FastGlob2.escapePath = escapePath;
    function convertPathToPattern(source) {
      assertPatternsInput(source);
      return utils2.path.convertPathToPattern(source);
    }
    FastGlob2.convertPathToPattern = convertPathToPattern;
    (function(posix) {
      function escapePath2(source) {
        assertPatternsInput(source);
        return utils2.path.escapePosixPath(source);
      }
      posix.escapePath = escapePath2;
      function convertPathToPattern2(source) {
        assertPatternsInput(source);
        return utils2.path.convertPosixPathToPattern(source);
      }
      posix.convertPathToPattern = convertPathToPattern2;
    })(FastGlob2.posix || (FastGlob2.posix = {}));
    (function(win32) {
      function escapePath2(source) {
        assertPatternsInput(source);
        return utils2.path.escapeWindowsPath(source);
      }
      win32.escapePath = escapePath2;
      function convertPathToPattern2(source) {
        assertPatternsInput(source);
        return utils2.path.convertWindowsPathToPattern(source);
      }
      win32.convertPathToPattern = convertPathToPattern2;
    })(FastGlob2.win32 || (FastGlob2.win32 = {}));
  })(FastGlob || (FastGlob = {}));
  function getWorks(source, _Provider, options) {
    const patterns = [].concat(source);
    const settings2 = new settings_1.default(options);
    const tasks2 = taskManager.generate(patterns, settings2);
    const provider2 = new _Provider(settings2);
    return tasks2.map(provider2.read, provider2);
  }
  function assertPatternsInput(input) {
    const source = [].concat(input);
    const isValidSource = source.every((item) => utils2.string.isString(item) && !utils2.string.isEmpty(item));
    if (!isValidSource) {
      throw new TypeError("Patterns must be a string (non empty) or an array of strings");
    }
  }
  out = FastGlob;
  return out;
}
var outExports = requireOut();
const identity = (x) => x;
async function copy(src2, dest, { cwd, rename = identity, parents = true }) {
  const { createNg, createOk, checkPromiseReturn } = resultUtility;
  const sources = typeof src2 === "string" ? [src2] : src2;
  if (sources.length === 0 || dest === "") {
    return createNg(new Error("src or dest is empty"));
  }
  const sourceFiles = await checkPromiseReturn({
    fn: () => outExports.async(sources, {
      cwd,
      dot: true,
      absolute: false,
      stats: false,
      onlyFiles: true
    }),
    err: () => new Error("Failed to glob source files")
  });
  if (sourceFiles.isErr) {
    return sourceFiles;
  }
  const destRelativeToCwd = cwd ? require$$2.resolve(cwd, dest) : dest;
  for (const p of sourceFiles.value) {
    const dirName = require$$2.dirname(p);
    const baseName = rename(require$$2.basename(p));
    const from = cwd ? require$$2.resolve(cwd, p) : p;
    const to = parents ? require$$2.join(destRelativeToCwd, dirName, baseName) : require$$2.join(destRelativeToCwd, baseName);
    await promises.mkdir(require$$2.dirname(to), { recursive: true });
    await promises.copyFile(from, to);
  }
  return createOk(() => {
  });
}
async function typescriptTemplateInstall({
  root,
  appName,
  material
}) {
  const { createNg, createOk, checkPromiseVoid } = resultUtility;
  const { path: templatePath } = material;
  const copySource = ["**/*"];
  require$$3.mkdirSync(root, { recursive: true });
  if (!isFolderEmpty(root, appName)) {
    return createNg(
      new Error(
        `The directory ${appName} is not empty. Please choose a different project name or remove the existing directory.
`
      )
    );
  }
  console.log(`Creating a new React app in ${picocolors_browserExports.green(root)}.`);
  console.log();
  process.chdir(root);
  const res = await copy(copySource, root, {
    parents: true,
    cwd: templatePath,
    rename: (name) => {
      switch (name) {
        case "gitignore":
          return `.${name}`;
        case "env":
          return `.${name}`;
        case "package-template.json":
          return "package.json";
        case "README.sample.md":
          return "README.md";
        default:
          return name;
      }
    }
  });
  if (res.isErr) {
    return res;
  }
  const pkgPath = require$$2.join(root, "package.json");
  const exists = await checkPromiseVoid({
    fn: async () => {
      await fs$4.stat(pkgPath);
    },
    err: (e) => {
      if (e instanceof Error) {
        return new Error(`Failed to access package.json: ${e.message}`);
      }
      return new Error("Failed to access package.json: Unknown error");
    }
  });
  if (exists.isErr) {
    return exists;
  }
  const raw = await fs$4.readFile(pkgPath, "utf8");
  const pkg = JSON.parse(raw || "{}");
  if (!appName || typeof appName !== "string") {
    return createNg(new Error("Invalid app name"));
  }
  pkg.name = appName;
  pkg.version = "0.1.0";
  const writeResult = await checkPromiseVoid({
    fn: async () => {
      await fs$4.writeFile(
        pkgPath,
        JSON.stringify(pkg, null, 2) + "\n",
        "utf8"
      );
    },
    err: () => new Error(`Failed to update package.json name`)
  });
  if (writeResult.isErr) {
    return writeResult;
  }
  return createOk(noop);
}
async function reactInstaller({
  appPath,
  material
}) {
  const { createNg } = resultUtility;
  const { styleSheet } = material;
  const root = require$$2.resolve(appPath);
  const appName = require$$2.basename(appPath);
  if (styleSheet.isNone) {
    return createNg(new Error("CSS option is required"));
  }
  return await typescriptTemplateInstall({
    root,
    appName,
    material
  });
}
const vueFramework = ["vue-router", "nuxt"];
const vueCSSes = ["vanilla-extract", "scoped-css"];
function isVueFramework(value) {
  return typeof value === "string" && vueFramework.includes(value);
}
function isVueCss(value) {
  return typeof value === "string" && vueCSSes.includes(value);
}
async function cssCommand({
  optionCss,
  isCss,
  csses
}) {
  const { optionConversion } = optionUtility;
  const { createOk, createNg, checkPromiseReturn } = resultUtility;
  const { onPromptState } = commanderCore;
  if (optionCss.isSome && isCss(optionCss.value)) {
    return createOk(optionCss.value);
  }
  const response = await checkPromiseReturn({
    fn: async () => await prompts({
      onState: onPromptState,
      type: "select",
      name: "css",
      message: "Select a CSS framework for your project:",
      choices: csses,
      initial: 0
    }),
    err: (e) => {
      if (e instanceof Error) {
        return new Error(`Prompt failed: ${e.message}`);
      }
      return new Error("Prompt failed: Unknown error");
    }
  });
  if (response.isErr) {
    return response;
  }
  const css = optionConversion(response.value.css);
  if (css.isSome && isCss(css.value)) {
    return createOk(css.value);
  }
  return createNg(new Error("CSS selection is invalid"));
}
async function vueCssCommander(optionVueCss) {
  const choises = [
    { title: "scoped-css", value: "scoped-css" },
    { title: "vanilla-extract", value: "vanilla-extract" }
  ];
  return await cssCommand({
    optionCss: optionVueCss,
    isCss: isVueCss,
    csses: choises
  });
}
async function vueFrameworkCommand(optionVueFramework) {
  const { onPromptState } = commanderCore;
  const { createOk, checkPromiseReturn, createNg } = resultUtility;
  if (optionVueFramework.isSome && isVueFramework(optionVueFramework.value)) {
    return createOk(optionVueFramework.value);
  }
  const response = await checkPromiseReturn({
    fn: async () => await prompts({
      onState: onPromptState,
      type: "select",
      name: "framework",
      message: `Select a framework for your project:`,
      choices: [
        { title: "Vue router", value: "vue-router" },
        { title: "Nuxt.js", value: "nuxt" }
      ],
      initial: 0
    }),
    err: (e) => {
      if (e instanceof Error) {
        return new Error(`Prompt failed: ${e.message}`);
      }
      return new Error("Prompt failed: Unknown error");
    }
  });
  if (response.isErr) {
    return response;
  }
  const framework = response.value.framework;
  if (isVueFramework(framework)) {
    return createOk(framework);
  }
  return createNg(new Error("Framework selection is invalid"));
}
function foundFolder(paths) {
  const { createNg, createOk } = resultUtility;
  for (const p of paths) {
    if (require$$3.existsSync(p)) {
      return createOk(p);
    }
  }
  return createNg(new Error(`Not found folder: ${paths.join(", ")}`));
}
async function vueCli() {
  const { optionCss, optionVueFramework } = commanderCore;
  const { createSome } = optionUtility;
  const { createOk } = resultUtility;
  const frameworkResult = await vueFrameworkCommand(optionVueFramework);
  if (frameworkResult.isErr) {
    return frameworkResult;
  }
  const cssResult = await vueCssCommander(optionCss);
  if (cssResult.isErr) {
    return cssResult;
  }
  const templatePath = [
    require$$0$4.join(
      __dirname,
      "template",
      "vue",
      frameworkResult.value,
      cssResult.value
    ),
    require$$0$4.join(
      __dirname,
      "..",
      "..",
      "..",
      "template",
      "vue",
      frameworkResult.value,
      cssResult.value
    )
  ];
  const resultPath = foundFolder(templatePath);
  if (resultPath.isErr) {
    return resultPath;
  }
  const techMaterial = {
    path: resultPath.value,
    styleSheet: createSome(cssResult.value)
  };
  return createOk(techMaterial);
}
async function vueInstaller({
  appPath,
  material
}) {
  const { createNg } = resultUtility;
  const { styleSheet } = material;
  if (styleSheet.isNone) {
    return createNg(new Error("CSS option is required"));
  }
  const root = require$$2.resolve(appPath);
  const appName = require$$2.basename(appPath);
  const installResult = await typescriptTemplateInstall({
    root,
    appName,
    material
  });
  return installResult;
}
async function cssReactCommand(optionReactCss) {
  const choises = [
    { title: "tailwindCSS", value: "tailwind" },
    { title: "vanilla-extract ", value: "vanilla-extract" }
  ];
  return await cssCommand({
    optionCss: optionReactCss,
    isCss: isReactCss,
    csses: choises
  });
}
async function frameworkCommand(optionFramework) {
  const { createNg, createOk, checkPromiseReturn } = resultUtility;
  const { onPromptState } = commanderCore;
  if (optionFramework.isSome && isReactFramework(optionFramework.value)) {
    return createOk(optionFramework.value);
  }
  const response = await checkPromiseReturn({
    fn: async () => await prompts({
      onState: onPromptState,
      type: "select",
      name: "framework",
      message: `Select a framework for your project:`,
      choices: [
        { title: "TanStack Router", value: "tanstack-router" },
        { title: "Next.js (App Router)", value: "next/app" },
        { title: "Next.js (Pages Router)", value: "next/pages" }
      ],
      initial: 0
    }),
    err: (e) => {
      if (e instanceof Error) {
        return new Error(`Prompt failed: ${e.message}`);
      }
      return new Error("Prompt failed: Unknown error");
    }
  });
  if (response.isErr) {
    return response;
  }
  const framework = response.value.framework;
  if (isReactFramework(framework)) {
    return createOk(framework);
  }
  return createNg(new Error("Framework selection is invalid"));
}
async function reactCli() {
  const { optionReactFramework, optionCss } = commanderCore;
  const { createOk } = resultUtility;
  const { createSome } = optionUtility;
  const frameworResult = await frameworkCommand(optionReactFramework);
  if (frameworResult.isErr) {
    return frameworResult;
  }
  const cssResult = await cssReactCommand(optionCss);
  if (cssResult.isErr) {
    return cssResult;
  }
  const resultPath = foundFolder([
    require$$0$4.join(
      __dirname,
      "template",
      "react",
      frameworResult.value,
      cssResult.value
    )
  ]);
  if (resultPath.isErr) {
    return resultPath;
  }
  const techMaterial = {
    path: resultPath.value,
    styleSheet: createSome(cssResult.value)
  };
  return createOk(techMaterial);
}
async function createApp({
  appPath,
  tech
}) {
  switch (tech) {
    case "react": {
      const materialResult = await reactCli();
      if (materialResult.isErr) {
        return materialResult;
      }
      return await reactInstaller({
        appPath,
        material: materialResult.value
      });
    }
    case "vue": {
      const materialResult = await vueCli();
      if (materialResult.isErr) {
        return materialResult;
      }
      return await vueInstaller({
        appPath,
        material: materialResult.value
      });
    }
  }
}
function reactCallback() {
  console.log(`Package install: 

 ex) npm install`);
  console.log(`Application launch: 

 ex) npm run dev`);
}
const handleSigTerm = () => process.exit(0);
process.on("SIGTERM", handleSigTerm);
process.on("SIGINT", handleSigTerm);
async function run() {
  const { optionName, optionTechStack } = commanderCore;
  const projectName = await nameCommand(optionName);
  if (projectName.isErr) {
    cliErrorLog(projectName.err);
    process.exit(1);
  }
  const appPath = require$$2.resolve(projectName.value);
  const appName = require$$2.basename(appPath);
  const techStack = await techStackCommand(optionTechStack);
  if (techStack.isErr) {
    cliErrorLog(techStack.err);
    process.exit(1);
  }
  const validation = validateNpmName(appName);
  if (!validation.valid) {
    console.error(
      `Could not create a project called ${appName} because of npm naming restrictions:

- ${validation.problems?.join(
        "\n- "
      )}
`
    );
    process.exit(1);
  }
  if (require$$3.existsSync(appName)) {
    console.error(
      picocolors_browserExports.red(
        `The directory ${appName} already exists. Please choose a different project name or remove the existing directory.
`
      )
    );
    process.exit(1);
  }
  const installResult = await createApp({
    appPath,
    tech: techStack.value
  });
  if (installResult.isErr) {
    cliErrorLog(installResult.err);
    process.exit(1);
  }
  return {
    name: projectName.value,
    tech: techStack.value
  };
}
function techInstallInfo(techStack) {
  switch (techStack) {
    case "react": {
      reactCallback();
    }
  }
}
function notify(projectMaterial) {
  console.log("cd " + projectMaterial.name);
  techInstallInfo(projectMaterial.tech);
  console.log();
  console.log(picocolors_browserExports.bold(`${picocolors_browserExports.green("Happy hacking!")}`));
  process.exit(0);
}
function errorExit() {
  console.error(picocolors_browserExports.red("The operation was cancelled."));
  process.exit(1);
}
run().then((path2) => notify(path2)).catch(() => errorExit());
