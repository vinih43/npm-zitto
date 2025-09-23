<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-zitto/main/media/zitto.png" alt="Icon of Zitto" width="256" height="256">
  <h1>Zitto</h1>
</div>

<blockquote align="center">
  Zero-Dependency Utility • Runtime-Safe Options • Predictable Defaults • Strict Config Control
</blockquote>

<h4 align="center">
  🤫 Zitto - quiet config, loud clarity. A zero-dependency TypeScript/JavaScript helper for merging defaults and options across Node, Deno, Bun, and browsers. 🍯
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- ⚡ Always returns defaults when no opts passed  
- 🛠 Merges known keys with defaults  
- 🚫 Throws on unknown keys at runtime  
- 🧩 Enforces object shape with TS and runtime  
- 🔒 Strict variant drops extras automatically  
- 🪶 Tiny zero-dep footprint  
- 📦 Predictable results across runtimes

<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/zitto
```

```bash
yarn add @igorskyflyer/zitto
```

```bash
npm i @igorskyflyer/zitto
```

<br>

## 🤹🏼 API

### defineOptions

```ts
function defineOptions<T extends object>(
  defaults: T,
  options?: Partial<T>
): T
```  

Merge defaults with optional user options.  

`T` - Shape of the `defaults` object  

`defaults` - Base configuration with required keys  

`options` - Optional overrides, must be a subset of defaults

<br>

Returns a new object with defaults and overrides merged.  

<br>

### defineStrictOptions

```ts
function defineStrictOptions<T extends object, U extends Partial<T>>(
  defaults: T,
  options?: U
): T
```  

Merge defaults with optional user options, dropping unknown keys.  

`T` - Shape of the defaults object  

`U` - Subset of `T` allowed as overrides  

`defaults` - Base configuration with required keys  

`options` - Optional overrides, must be a subset of defaults

<br>

Throws a `TypeError` if `options` is not an object  

Throws an `Error` if `options` contains unknown keys  

Returns a new object with defaults and known overrides merged.

<br>

## 🗒️ Examples

```ts
import { defineOptions, defineStrictOptions } from '@igorskyflyer/zitto'

const opts = defineOptions({ retries: 3, verbose: false }, { verbose: true })
// => { retries: 3, verbose: true }

const opts = defineStrictOptions({ retries: 3, verbose: false }, { retries: 5, extra: 'x' })
// => { retries: 5, verbose: false }  // 'extra' is dropped
```

<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-zitto/blob/main/CHANGELOG.md).

<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-zitto/blob/main/LICENSE).

<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>

## 🧬 Related

[**@igorskyflyer/strip-html**](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[**@igorskyflyer/is-rootdir**](https://www.npmjs.com/package/@igorskyflyer/is-rootdir)

> _🔼 Checks whether the given path is the root of a drive or filesystem. ⛔_

<br>

[**@igorskyflyer/unc-path**](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[**@igorskyflyer/regkeys**](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 A package for fetching Windows registry keys. 🗝_

<br>

[**@igorskyflyer/rawelement**](https://www.npmjs.com/package/@igorskyflyer/rawelement)

> _🐯 A utility that lets you manipulate HTML elements, their attributes and innerHTML as strings, on the go and then render the modified HTML. Very useful in SSG projects. 💤_

<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
