/*
Name Matching

At Checkr, one of the most important aspects of our work is accurately matching records # to candidates. One of the ways that we do this is by comparing the name on a given record # to a list of known aliases for the candidate. In this exercise, we will implement a `name_match` method that accepts the list of known aliases as well as the name returned on a record.

It should return True if the name matches any of the aliases and False otherwise. The name_match method will be required to pass the following tests:

1. Exact match

known_aliases = ['Alphonse Gabriel Capone', 'Al Capone']
name_match(known_aliases, 'Alphonse Gabriel Capone') => True
name_match(known_aliases, 'Al Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => False

2. Middle name missing (on alias)

known_aliases = ['Alphonse Capone']
name_match(known_aliases, 'Alphonse Gabriel Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => True
name_match(known_aliases, 'Alexander Capone') => False

3. Middle name missing (on record name)

known_aliases = ['Alphonse Gabriel Capone']
name_match(known_aliases, 'Alphonse Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => False
name_match(known_aliases, 'Alexander Capone') => False

4. More middle name tests
These serve as a sanity check of your implementation of cases 2 and 3

known_aliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']
name_match(known_aliases, 'Alphonse Gabriel Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => True
name_match(known_aliases, 'Alphonse Edward Capone') => False

5. Middle initial matches middle name

known_aliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone']
name_match(known_aliases, 'Alphonse G Capone') => True
name_match(known_aliases, 'Alphonse Francis Capone') => True
name_match(known_aliases, 'Alphonse E Capone') => False
name_match(known_aliases, 'Alphonse Edward Capone') => False
name_match(known_aliases, 'Alphonse Gregory Capone') => False

Bonus: Transposition
Transposition (swapping) of the first name and middle name is relatively common. In order to accurately match the name returned from a record we should take this into account. All of the test cases implemented previously also apply to the transposed name.

6. First name and middle name can be transposed
'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'

known_aliases = ['Alphonse Gabriel Capone']
name_match(known_aliases, 'Gabriel Alphonse Capone') => True
name_match(known_aliases, 'Gabriel A Capone') => True
name_match(known_aliases, 'Gabriel Capone') => True
name_match(known_aliases, 'Gabriel Francis Capone') => False

7. Last name cannot be transposed
'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'

known_aliases = ['Alphonse Gabriel Capone']
name_match(known_aliases, 'Alphonse Capone Gabriel') => False
name_match(known_aliases, 'Capone Alphonse Gabriel') => False
name_match(known_aliases, 'Capone Gabriel') => False

*/

function hasMiddleName(name) {
  let splitName = name.split(' ');

  return splitName.length === 3;
}

function nameWithoutMiddleName(name) {
  if (hasMiddleName(name)) {
    let splitName = name.split(' ');
    return [splitName[0], splitName[2]].join(' ');
  }

  return name;
}

function nameWithMiddleInitial(name) {
  if (hasMiddleName(name)) {
    let splitName = name.split(' ');
    return [splitName[0], splitName[1][0], splitName[2]].join(' ');
  } else {
    return name;
  }
}

function nameMatch(knownAliases, name) {
  // Implement me
  let hasExactMatch = knownAliases.includes(name);

  if (hasExactMatch) {
    return hasExactMatch;
  }

  // Find a match with the middle name missing on the provided name
  let hasFuzzyMiddleNameMatch = knownAliases.includes(
    nameWithoutMiddleName(name)
  );
  if (hasFuzzyMiddleNameMatch) {
    return hasFuzzyMiddleNameMatch;
  }

  // Find a match with the middle name missing on the provided aliases
  let aliasWithoutMiddleName = knownAliases.map((alias) =>
    nameWithoutMiddleName(alias)
  );
  let hasFuzzyAliasMiddleNameMatch = aliasWithoutMiddleName.includes(name);
  if (hasFuzzyAliasMiddleNameMatch) {
    return hasFuzzyAliasMiddleNameMatch;
  }

  let hasMiddleInitialMatch = knownAliases.includes(
    nameWithMiddleInitial(name)
  );
  if (hasMiddleInitialMatch) {
    return hasMiddleInitialMatch;
  }

  let aliaswithMiddleInitialName = knownAliases.map((alias) =>
    nameWithMiddleInitial(alias)
  );

  let hasAliasMiddleInitialNameMatch =
    aliaswithMiddleInitialName.includes(name);

  if (hasAliasMiddleInitialNameMatch) {
    return hasAliasMiddleInitialNameMatch;
  }

  return false;
}

/** Tests **/

function assertEqual(expected, result, errorMessage) {
  if (result !== expected) {
    console.log(errorMessage);
    console.log(`expected: ${expected}`);
    console.log(`actual: ${result}`);
    console.log('');
  }
}

function test() {
  let knownAliases;

  knownAliases = ['Alphonse Gabriel Capone', 'Al Capone'];
  assertEqual(
    true,
    nameMatch(knownAliases, 'Alphonse Gabriel Capone'),
    'error 1.1'
  );
  assertEqual(true, nameMatch(knownAliases, 'Al Capone'), 'error 1.2');
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Francis Capone'),
    'error 1.3'
  );

  knownAliases = ['Alphonse Capone'];
  assertEqual(
    true,
    nameMatch(knownAliases, 'Alphonse Gabriel Capone'),
    'error 2.1'
  );
  assertEqual(
    true,
    nameMatch(knownAliases, 'Alphonse Francis Capone'),
    'error 2.2'
  );
  assertEqual(false, nameMatch(knownAliases, 'Alexander Capone'), 'error 2.3');

  knownAliases = ['Alphonse Gabriel Capone'];
  assertEqual(true, nameMatch(knownAliases, 'Alphonse Capone'), 'error 3.1');
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Francis Capone'),
    'error 3.2'
  );
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Edward Capone'),
    'error 3.3'
  );

  knownAliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone'];
  assertEqual(
    true,
    nameMatch(knownAliases, 'Alphonse Gabriel Capone'),
    'error 4.1'
  );
  assertEqual(
    true,
    nameMatch(knownAliases, 'Alphonse Francis Capone'),
    'error 4.2'
  );
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Edward Capone'),
    'error 4.3'
  );

  knownAliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone'];
  assertEqual(true, nameMatch(knownAliases, 'Alphonse G Capone'), 'error 5.1');
  assertEqual(
    true,
    nameMatch(knownAliases, 'Alphonse Francis Capone'),
    'error 5.2'
  );
  assertEqual(false, nameMatch(knownAliases, 'Alphonse E Capone'), 'error 5.3');
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Edward Capone'),
    'error 5.4'
  );
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Gregory Capone'),
    'error 5.5'
  );

  knownAliases = ['Alphonse Gabriel Capone'];
  assertEqual(
    true,
    nameMatch(knownAliases, 'Gabriel Alphonse Capone'),
    'error 6.1'
  );
  assertEqual(true, nameMatch(knownAliases, 'Gabriel A Capone'), 'error 6.2');
  assertEqual(true, nameMatch(knownAliases, 'Gabriel Capone'), 'error 6.3');
  assertEqual(
    false,
    nameMatch(knownAliases, 'Gabriel Francis Capone'),
    'error 6.4'
  );

  knownAliases = ['Alphonse Gabriel Capone'];
  assertEqual(
    false,
    nameMatch(knownAliases, 'Alphonse Capone Gabriel'),
    'error 7.1'
  );
  assertEqual(
    false,
    nameMatch(knownAliases, 'Capone Alphonse Gabriel'),
    'error 7.2'
  );
  assertEqual(false, nameMatch(knownAliases, 'Capone Gabriel'), 'error 7.3');

  console.log('Test run finished');
}
test();
