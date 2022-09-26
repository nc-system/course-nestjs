
# NEST NEW - NEW PROJECT

$ nest new <name> [options]
$ nest n <name> [options]

- Creates and initializes a new Nest project. Prompts for package manager.

Creates a folder with the given <name>
Populates the folder with configuration files
Creates sub-folders for source code (/src) and end-to-end tests (/test)
Populates the sub-folders with default files for app components and tests

- Options
Option	Description
--dry-run	Reports changes that would be made, but does not change the filesystem.
Alias: -d
--skip-git	Skip git repository initialization.
Alias: -g
--skip-install	Skip package installation.
Alias: -s
--package-manager [package-manager]	Specify package manager. Use npm, yarn, or pnpm. Package manager must be installed globally.
Alias: -p
--language [language]	Specify programming language (TS or JS).
Alias: -l
--collection [collectionName]	Specify schematics collection. Use package name of installed npm package containing schematic.
Alias: -c
--strict	Start the project with the following TypeScript compiler flags enabled: strictNullChecks, noImplicitAny, strictBindCallApply, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch
