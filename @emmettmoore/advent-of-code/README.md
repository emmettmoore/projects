# Advent Of Code

## Commands

### Setup a new problem day

```sh
 npm run setup -w @emmettmoore/advent-of-code --problem=<advent day>
```

If there is no solution for that day already in `src/solutions/day<advent day>` it will set up a template for that solution there.

Once your solution is implemented you can add it to `src/solutions/getAllSolutions` to run it (see below for instructions on running a solution.

### Running a solution

```sh
  npm run solve  -w @emmettmoore/advent-of-code --problem=<advent day>
```

This will run all parts of the solution by default.
