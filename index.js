#!/usr/bin/env node

const parseChangelog = require('changelog-parser')

const [changelogPath] = process.argv.slice(2)

const start = async () => {
  const { versions } = await parseChangelog(changelogPath)
  const [lastTag] = versions
  console.log(lastTag.body)
}

start()
