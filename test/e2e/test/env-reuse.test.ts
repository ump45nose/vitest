import { expect, test } from 'vitest'
import { runVitest } from '../../test-utils'

test.each(['forks', 'threads'] as const)(
  '{ test.env } is reapplied before each file in a reused worker (pool: %s)',
  async (pool) => {
    const { stderr, exitCode } = await runVitest({
      root: './fixtures/env-reuse-fixtures',
      pool,
      isolate: false,
      maxWorkers: 1,
      fileParallelism: false,
      env: {
        DATABASE_URL: 'postgres://h/shared',
      },
    })

    expect(stderr).toBe('')
    expect(exitCode).toBe(0)
  },
)
