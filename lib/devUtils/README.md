# Dev Utils

This directory contains scripts that are useful for development.

Most of them are used to generate / update files to make automatic changes to the project code, to avoid doing them manually. For example:

- adding an index.ts file in several directories to make imports easier
- generating an `inMemory` object, containing data from each inMemory file
- updating the json-server source file based on the `inMemory` object

_Note: For some files, you cannot launch the script from this lib/devUtils/ directory, but you need to go to the root directory of the project and launch the script from there. You modify these files based on what I did in the generateCurrencyIdType file, allow launch them from anywhere if needed._
