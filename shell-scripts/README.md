# scripts

This repo contains scripts that are used in my local development environments.

## Setup

I use [Oh My Zsh](https://ohmyz.sh/) for my shell configuration. Follow their instructions for installation and initial setup, then add the following to `~/.zshrc`:

```sh
source ~/.zsh_aliases
source ~/.zsh_functions
```

### `env_functions.sh`

This manages environments when moving between directories in the terminal. In particular, it makes sure to set up the correct version of Node and reset the environment when appropriate, and to not do that when the environment doesn't need to be changed.

To configure this script, add the following to `~/.zsh_functions`

```sh
source ~/gh-repos/shell-scripts/env_functions.sh
```

To use, run `mono`, `aoc`, `app`, or any other environment configured in `env_functions.sh` locally to move into each project with the environment loaded correctly:

```sh
➜  ~ mono
Now using ~/.env-node-monorepo
Now using node v20.0.0 (npm v9.6.4)
➜  node-monorepo git:(emmmett/next-app) ✗ aoc
```

### `new_component.sh`

Creates a new React component with boilerplate code already configured.

#### Configuration

Add the following to `~/.zsh_functions`

```sh
source ~/gh-repos/shell-scripts/new-component.sh
```

#### Usage

```sh
newc <MyComponentName>
```

This will create the following files in the current working directory:

```txt
./MyComponentName
    /MyComponentName.tsx
    /MyComponentName.module.scss
    /index.ts
```
