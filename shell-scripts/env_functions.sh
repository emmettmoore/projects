funtion init_node_monorepo_env() {
  echo "Now using ~/.env-node-monorepo"
  source ~/.env-node-monorepo
  nvm use v20.0.0
}

# Assumes All GH repos managed by env are in this
# structured folder path:
# ~/
# ~/gh-repos
# ~/gh-repos          <---- contains all GH repos
#    /gh-repo-1       <---- GH repo
#    /gh-repo-2       <---- GH repo
#    /etc

function mono() {
  should_update=false

  if [[ $PWD/ != ~/gh-repos/node-monorepo/* ]]; then
    should_update=true
  fi

  cd ~/gh-repos/node-monorepo

  if [ "$should_update" = true ] ; then
    init_node_monorepo_env
  fi
}

function aoc() {
  should_update=false

  if [[ $PWD/ != ~/gh-repos/node-monorepo/* ]]; then
    should_update=true
  fi

  cd ~/gh-repos/node-monorepo/@emmettmoore/advent-of-code

  if [ "$should_update" = true ] ; then
    init_node_monorepo_env
  fi
}

function app() {
  should_update=false

  if [[ $PWD/ != ~/gh-repos/node-monorepo/* ]]; then
    should_update=true
  fi

  cd ~/gh-repos/node-monorepo/@emmettmoore/app

  if [ "$should_update" = true ] ; then
    init_node_monorepo_env
  fi
}
