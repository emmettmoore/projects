funtion init_projects_env() {
  echo "Now using ~/.env-projects"
  source ~/.env-projects
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

function pjs() {
  should_update=false

  if [[ $PWD/ != ~/gh-repos/projects/* ]]; then
    should_update=true
  fi

  cd ~/gh-repos/projects

  if [ "$should_update" = true ] ; then
    init_projects_env
  fi
}

function aoc() {
  should_update=false

  if [[ $PWD/ != ~/gh-repos/projects/* ]]; then
    should_update=true
  fi

  cd ~/gh-repos/projects/@emmettmoore/advent-of-code

  if [ "$should_update" = true ] ; then
    init_projects_env
  fi
}

function site() {
  should_update=false

  if [[ $PWD/ != ~/gh-repos/projects/* ]]; then
    should_update=true
  fi

  cd ~/gh-repos/projects/@emmettmoore/site

  if [ "$should_update" = true ] ; then
    init_projects_env
  fi
}
