# Mono Repo Example with create-react-app, Yarn Workspaces, and Lerna

## Summary

This bare-bones example that shows how to create a monorepo with create-react-app that uses [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces) and [Lerna](https://lernajs.io). In a nutshell, Yarn Workspaces are used to ensure referenced packages aren't redundant and can be shared across the repo. Lerna allows you to manage and publish packages in a more optimal workflow.

> See more info in create-react-app [documentation](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#sharing-components-in-a-monorepo).

## Requirements

- [yarn](https://yarnpkg.com/lang/en/docs/workspaces/)
- [create-react-app 2.0](https://github.com/facebook/create-react-app)
- [Lerna](https://lernajs.io)

> As of this writing, create-react-app is in beta and can be installed with:

```
yarn global add create-react-app@next
```

## Instructions

> Note: Browse files for more details.

1.  Create an empty directory where you want your monorepo.
2.  Create a packages directory. This is later used by Lerna.
3.  Using create-react-app, create two apps in the packages directory. I have named mine app1 and comp1. app1 might be a primary app, while comp1 could be used for common components. 
4.  From each of the created apps, delete node_modules and yarn.lock.
5.  Create a lib1 folder in packages with a simple js file and a package.json with name, version, and private=true.
6.  In the app1 package.json, manually create a dependency that points to comp1 and lib1. (See file).
7.  At this point, you should have three directories: app1, comp1, and lib1.
8.  In the root directory create a package.json with the following:

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

9.  Add a .gitignore file to the root directory and lib1 directory. The important thing is adding a /node_modules entry.
10.  Run `yarn` to install all shared npm packages. Any shared packages will be at the root level, with the exception of exectutables in the .bin directory.
11. Run ```lerna init``` to get Lerna set up.

> Troubleshooting - Verify the respective package.json files and ensure react-scripts is 2.x. If not, you can manually copy and paste the correct version from [npm](https://www.npmjs.com/package/create-react-app) and run ```yarn``` again.

At this point, you are set up and ready to go, though here a few additional recommended, though optional tweaks:

1.  Update each of the respective package.json files so the name uses namespace syntax. For example: @myorg/app1.
2.  Add an index.js file in your comp1 root folder so your components can be more easily referenced.
3.  Add start up scripts from your root package.json.
4.  Delete create-react-app boilerplate files like App.css, index.css, logo.svg, and registerServiceWorker.js.
5.  Add an .env with NODE_PATH for relative paths. See create-react-app [documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#advanced-configuration).
