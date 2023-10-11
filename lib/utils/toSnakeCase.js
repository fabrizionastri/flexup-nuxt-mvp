export const toSnakeCase = (s) => {
  // Handle underscores by converting them to spaces, so that they can be processed uniformly
  s = s.replace(/_/g, ' ')

  // Step 1: Replace any non-alphanumeric character (other than spaces) with space
  s = s.replace(/[^a-zA-Z0-9 ]/g, ' ')

  // Step 2: Split the string using spaces
  let words = s.split(/\s+/)

  // Step 3: Handle sequences of uppercase letters before a lowercase letter
  let decomposedWords = []
  words.forEach((word) => {
    let matches = word.match(/[A-Z]?[a-z]+|[A-Z]+(?=[A-Z]|$)/g) || []
    decomposedWords = decomposedWords.concat(matches)
  })

  // Step 4: Join words with underscore and convert to lowercase
  let snakeCaseString = decomposedWords.join('_').toLowerCase()
  return snakeCaseString
}
