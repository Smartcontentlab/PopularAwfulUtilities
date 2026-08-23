Source: https://github.com/obsidianmd/obsidian-api
Title: GitHub - obsidianmd/obsidian-api: Type definitions for the latest Obsidian API. · GitHub
Fetched: 2026-08-23T20:02:47.767Z

[Skip to content](https://github.com/obsidianmd/obsidian-api#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/obsidianmd/obsidian-api) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/obsidianmd/obsidian-api) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/obsidianmd/obsidian-api) to refresh your session.Dismiss alert

{{ message }}

### Uh oh!

There was an error while loading. [Please reload this page](https://github.com/obsidianmd/obsidian-api).

[obsidianmd](https://github.com/obsidianmd)/ **[obsidian-api](https://github.com/obsidianmd/obsidian-api)** Public

- [Notifications](https://github.com/login?return_to=%2Fobsidianmd%2Fobsidian-api) You must be signed in to change notification settings
- [Fork\\
271](https://github.com/login?return_to=%2Fobsidianmd%2Fobsidian-api)
- [Star\\
2.3k](https://github.com/login?return_to=%2Fobsidianmd%2Fobsidian-api)


master

[**1** Branch](https://github.com/obsidianmd/obsidian-api/branches) [**0** Tags](https://github.com/obsidianmd/obsidian-api/tags)

[Go to Branches page](https://github.com/obsidianmd/obsidian-api/branches)[Go to Tags page](https://github.com/obsidianmd/obsidian-api/tags)

Go to file

Code

Open more actions menu

## Latest commit

[![lishid](https://avatars.githubusercontent.com/u/609710?v=4&size=40)](https://github.com/lishid)[lishid](https://github.com/obsidianmd/obsidian-api/commits?author=lishid)

[Bump package version and dependencies to latest used in Obsidian 1.13.2.](https://github.com/obsidianmd/obsidian-api/commit/cc1744324150c632416857c98964f87b1574a5fc)

last monthJul 14, 2026

[cc17443](https://github.com/obsidianmd/obsidian-api/commit/cc1744324150c632416857c98964f87b1574a5fc) · last monthJul 14, 2026

## History

[166 Commits](https://github.com/obsidianmd/obsidian-api/commits/master/)

Open commit details

[View commit history for this file.](https://github.com/obsidianmd/obsidian-api/commits/master/) 166 Commits

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| [.gitignore](https://github.com/obsidianmd/obsidian-api/blob/master/.gitignore ".gitignore") | [.gitignore](https://github.com/obsidianmd/obsidian-api/blob/master/.gitignore ".gitignore") |  |  |
| [CHANGELOG.md](https://github.com/obsidianmd/obsidian-api/blob/master/CHANGELOG.md "CHANGELOG.md") | [CHANGELOG.md](https://github.com/obsidianmd/obsidian-api/blob/master/CHANGELOG.md "CHANGELOG.md") |  |  |
| [LICENSE.md](https://github.com/obsidianmd/obsidian-api/blob/master/LICENSE.md "LICENSE.md") | [LICENSE.md](https://github.com/obsidianmd/obsidian-api/blob/master/LICENSE.md "LICENSE.md") |  |  |
| [README.md](https://github.com/obsidianmd/obsidian-api/blob/master/README.md "README.md") | [README.md](https://github.com/obsidianmd/obsidian-api/blob/master/README.md "README.md") |  |  |
| [canvas.d.ts](https://github.com/obsidianmd/obsidian-api/blob/master/canvas.d.ts "canvas.d.ts") | [canvas.d.ts](https://github.com/obsidianmd/obsidian-api/blob/master/canvas.d.ts "canvas.d.ts") |  |  |
| [obsidian.d.ts](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts "obsidian.d.ts") | [obsidian.d.ts](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts "obsidian.d.ts") |  |  |
| [package.json](https://github.com/obsidianmd/obsidian-api/blob/master/package.json "package.json") | [package.json](https://github.com/obsidianmd/obsidian-api/blob/master/package.json "package.json") |  |  |
| [publish.d.ts](https://github.com/obsidianmd/obsidian-api/blob/master/publish.d.ts "publish.d.ts") | [publish.d.ts](https://github.com/obsidianmd/obsidian-api/blob/master/publish.d.ts "publish.d.ts") |  |  |
| View all files |

## Repository files navigation

## Obsidian API

[Permalink: Obsidian API](https://github.com/obsidianmd/obsidian-api#obsidian-api)

Type definitions for the latest [Obsidian](https://obsidian.md/) API.

### Documentation

[Permalink: Documentation](https://github.com/obsidianmd/obsidian-api#documentation)

You can browse our Plugin API documentation at [https://docs.obsidian.md/](https://docs.obsidian.md/)

For an example on how to create Obsidian plugins, use the template at [https://github.com/obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)

### Issues and API requests

[Permalink: Issues and API requests](https://github.com/obsidianmd/obsidian-api#issues-and-api-requests)

For issues with the API, or to make requests for new APIs, please go to our forum: [https://forum.obsidian.md/c/developers-api/14](https://forum.obsidian.md/c/developers-api/14)

### Plugin structure

[Permalink: Plugin structure](https://github.com/obsidianmd/obsidian-api#plugin-structure)

`manifest.json`

- `id` the ID of your plugin.
- `name` the display name of your plugin.
- `author` the plugin author's name.
- `version` the version of your plugin.
- `minAppVersion` the minimum required Obsidian version for your plugin.
- `description` the long description of your plugin.
- `isDesktopOnly` whether your plugin uses NodeJS or Electron APIs.
- `authorUrl` (optional) a URL to your own website.
- `fundingUrl` (optional) a link for users to donation to show appreciation and support plugin development.

`main.js`

- This is the main entry point of your plugin.
- Import any Obsidian API using `require('obsidian')`
- Import NodeJS or Electron API using `require('fs')` or `require('electron')`
- Must export a default class which extends `Plugin`
- Must bundle all external dependencies into this file, using Rollup, Webpack, or another javascript bundler.

### App Architecture

[Permalink: App Architecture](https://github.com/obsidianmd/obsidian-api#app-architecture)

##### The app is organized into a few major modules:

[Permalink: The app is organized into a few major modules:](https://github.com/obsidianmd/obsidian-api#the-app-is-organized-into-a-few-major-modules)

- `App`, the global object that owns everything else. You can access this via `this.app` inside your plugin. The `App` interface provides accessors for the following interfaces.
- `Vault`, the interface that lets you interact with files and folders in the vault.
- `Workspace`, the interface that lets you interact with panes on the screen.
- `MetadataCache`, the interface that contains cached metadata about each markdown file, including headings, links, embeds, tags, and blocks.

##### Additionally, by inheriting `Plugin`, you can:

[Permalink: Additionally, by inheriting Plugin, you can:](https://github.com/obsidianmd/obsidian-api#additionally-by-inheriting-plugin-you-can)

- Add a ribbon icon using `this.addRibbonIcon`.
- Add a status bar (bottom) element using `this.addStatusBarItem`.
- Add a global command, optionally with a default hotkey, using `this.addCommand`.
- Add a plugin settings tab using `this.addSettingTab`.
- Register a new kind of view using `this.registerView`.
- Save and load plugin data using `this.loadData` and `this.saveData`.

##### Registering events

[Permalink: Registering events](https://github.com/obsidianmd/obsidian-api#registering-events)

For registering events from any event interfaces, such as `App` and `Workspace`, please use `this.registerEvent`, which will automatically detach your event handler when your plugin unloads:

```
this.registerEvent(app.on('event-name', callback));
```

If you register DOM events for elements that persist on the page after your plugin unloads, such as `window` or `document` events, please use `this.registerDomEvent`:

```
this.registerDomEvent(element, 'click', callback);
```

If you use `setInterval`, please use `this.registerInterval`:

```
this.registerInterval(setInterval(callback, 1000));
```

## About

Type definitions for the latest Obsidian API.

[docs.obsidian.md](https://docs.obsidian.md/)

### Resources

[Readme](https://github.com/obsidianmd/obsidian-api#readme-ov-file)

[MIT license](https://github.com/obsidianmd/obsidian-api#MIT-1-ov-file)

[Activity](https://github.com/obsidianmd/obsidian-api/activity)

[Custom properties](https://github.com/obsidianmd/obsidian-api/custom-properties)

### Stars

**2.3k** stars

### Watchers

**44** watching

### Forks

[**271** forks](https://github.com/obsidianmd/obsidian-api/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fobsidianmd%2Fobsidian-api&report=obsidianmd+%28user%29)

## Contributors

You can’t perform that action at this time.