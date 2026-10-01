import { expect, test } from 'vitest'

const seenOnEntry = process.env.DATABASE_URL

test('first file sees the configured env on entry', () => {
  expect(seenOnEntry).toBe('postgres://h/shared')
})

process.env.DATABASE_URL = 'postgres://h/mutated-by-first'
