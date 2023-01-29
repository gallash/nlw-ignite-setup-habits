# **NLW-SETUP**

This is the first time I am participating in Rocketseat's NLW!

Make sure that NPM (Node Package Manager) and Node.JS are installed in the machine. Check it by running from the terminal:

```bash
npm -v && node -v
```
If they are not installed, please do so before proceeding.

## **Initial configuration**
Navigate to the projects file and then run from the terminal:

```bash
npm init -y
```
This will create a simple environment for the project. The -y flag is a general yes answer to the questions, so every config will be default.

Check the `package.json`. There we will be able to find many settings of the project. From the name of the project, its current version, to the dependencies, tests commands, and even the git repository.

### **Installing dependencies**
We will be using `fastify` (a server-side framework):

```bash
npm i fastify
```
(I can be either `i` or `install`)

Now check inside `package.json`. The dependency is already listed there.

### **Create the src/ directory**
Run from the terminal:

```bash
mkdir src && touch server.ts && code src/server.ts
```

This will open the `server.ts` on VSCode. Yes, we will be using Typescript instead of vanilla Javascript, since it is a superset of JS that brings static types.

Typescript brings, among other things, types to JS, as I mentioned. And these types work analogously to structs in C++.

We can write our code in VSCode and it will be understood by the IDE, but in order to run `server.ts` we will have to install Typescript and configure it to run in NPM, since it does not run Typescript by default.

```bash
npm i typescript -D
```

The -D flag brings all the dev environment dependencies (we will not use it in production). And Typescript will be added as a dev dependency.

Now, run from the terminal:
```bash
npx tsc --init
```

`npx` stands for "Node Package Execute". It comes with NPM. It will execute binaries. It can execute any package that we want from the NPM registry without even installing it locally. Now the `tsconfig.json` should have been created.

This file, `tsconfig.json` works basically like the `package.json`, but for Typescript. 

Opening it up, we will change only one line of code. Instead of having "es2016", we will change it to "es2020" (ECMAScript 2020), the most recent version, since NPM already supports it.

Now, let us install TSX (works like Node for TS) and run `server.ts` with it.

```bash
npm tsx src/server.ts
```

And, if we don't want to keep rewriting these lines of command in the terminal every time, let's make it explicit in the `package.json` by editing the "start" or "dev" option:

```json
"scripts": {
    "dev": "npx tsx src/server.ts"
}
```

Finally, let's make the system update in real time, every time we alter something in the codebase. In order to do so, let us add a `watch` tag to the TSX in the `package.json`.


## Building the RESTful API
Our backend will be comprised of a RESTful API (i.e., an API which offers CRUD via HTTP).

We have to import fastify and start building the API.

Install Prisma by running:
```bash
npm i -D prisma
npm i @prisma/client
```
Here we installed Prisma as a development dependency and the Prisma client as a project dependency.

Now, we initialize the database, using SQLite:
```bash
npx prisma init --datasource-provider SQLite
```
Otherwise, we would need to use Docker to use Postgres or MySQL. SQLite is used locally, so it fits the purpose of this project.

Okay, after creating the `schema.prisma` and adding the `model` inside it, it's time to migrate the changes:

```bash
npx prisma migrate dev
```
We 'migrate dev' because we migrate it to the database that we are just now naming 'dev'. This is going to be the name of the database.

In order to run the prisma client, do:
```bash
npx prisma studio
```

### Configuration of CORS
Read more about CORS;
Download @fastify/cors;
Import CORS to the fastify server app;
Enable it;



## Creating the frontend in React using Vite
```bash
npm create vite@latest
```
If vite isn't installed, the terminal will ask you to do so, and after that, you will be prompted to input the name of the new project (in this case, `web`) and what framework will it be built on. For this project, we will select React + Typescript.

Next, cd in the new directoy and install the dependencies, which are listed in package.json inside the new dir, with `npm install`.

Now, run `npm run dev` from the terminal inside `web`'s dir.

#### `npm run dev` runs both the back and front end servers 

We can add HTML classes to our components by importing the component's CSS and passing the class as a `className` property to the returned HTML:
```typescript
// On "src/components/Habits/Habits.tsx"
import "./Habits.css"


interface HabitProps {
	completed: number
} 

export function Habit(props: HabitProps){
	return (
		<div className="habit-block">{props.completed}</div>
	)
}
```


Next, we will install Tailwind css to help us stylize the project.
```bash
npm i -D autoprefixer postcss tailwindcss
npx tailwind init -p
```
These will be installed as development dependencies, also postcss (base for the plugin called tailwindcss).
The npx tailwind was used with a `-p` flag so that it creates a postcss.config.cjs file, otherwise Vite wouldn't find it.

After doing so, do not forget to 
* import `tailwind` in the `global.css`, 
* to configure which files will be having access to tailwind's classes in the `tailwind.config.cjs` in the `content` section. 
* import `global.css` to `App.tsx`, where the components are going to be rendered.



## Installing the dev environment for React Native using Expo
Instructions link: https://react-native.rocketseat.dev/

## Installing and configuring the dev environment for Android SDK
Also follow the link in the section above to install dependencies for Android SDK, and to install the thing itself.

To screen cast from my phone to my Linux machine, I need to use a third party tool, airdroid (https://webcast.airdroid.com/#/) in tandem with their app on my smartphone. This step was necessary, since the Linux version of the Android SDK Electric Eel installed didn't allow me to download the Android Virtual Device, saying it was unavailable (jan 21th 2023).

Also, I will not be configuring to use KVM (Kernel-mode Virtual Machine) this time. This is my first contact with mobile development, so I want to get a grasp of it first before moving to more complex and demanding environments.

After installed, launch Android SDK from anywhere in the terminal by running `studio.sh`.

Follow the instructions on installing the device that is going to be used in this development (Pixel 4, 8GB storage). When installed, click on 'play'. When it's launched and powered on, open a terminal and type in `adb devices`. It should appear the virtual device connected to the computer, and its status 'device'.

In order to run the app in the emulator, we have to create first a project. We can create one by going to the root directory of the project (nlw-ignite-setup) and running `expo init`, and choosing the Bare Workflow template.

After that, we can open the app by running `npm run android` in the directory of the app created by `expo init` (this directory, generally 'myapp', should contain `App.js` . For more details, follow this link https://docs.expo.dev/get-started/installation/), while `studio.sh` (Android Studio) is up and running.

Next up, we need to install React Native CLI. Do it by running `npx react-native init <nameOfYourApp>`. It will install react-native to your machine.

So far, we should have these terminals opened:
- react-native installation
- studio.sh, running Android SDK
- npm run android inside myapp/, running the expo bare workflow app

Now, to continue the configuration of React Native, open up two terminals, inside the react app's directory (in this project, it is called `igniteApp`), and run (one command in each terminal):
- npm start [in terminal 1]
- npm run android [in terminal 2]


#### Tips for when going to production
Create a database 'deploy': `npx prisma migrate deploy`. We upload the 'deploy' to the production environment, while the 'dev' stays for development. Also, the Prisma development dependency does not go to production, since in production, the user won't have access to alter the DB.


## Deleting a git repository
Go to the directory where .git/ is located (check by running `ls -a` from the terminal and finding the .git/ directory). Delete the local repository by doing:
```bash
rm -fr .git
```
