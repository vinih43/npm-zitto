// Author: Igor Dimitrijević (@igorskyflyer)

import { describe, expect, it } from 'vitest'
import { defineOptions, defineStrictOptions } from '../src/index.js'

interface Opts {
  whitespace: boolean
  retries: number
}

const defaults: Opts = { whitespace: false, retries: 3 }

describe('🧪 Zitto runtime validation 🧪', () => {
  describe('defineOptions', () => {
    it('returns defaults when no options are passed', () => {
      expect(defineOptions(defaults)).toEqual({ whitespace: false, retries: 3 })
    })

    it('merges user options with defaults', () => {
      expect(defineOptions(defaults, { whitespace: true })).toEqual({
        whitespace: true,
        retries: 3
      })
    })

    it('throws if options is not an object', () => {
      // @ts-expect-error runtime misuse
      expect(() => defineOptions(defaults, 'oops')).toThrow(
        'Options must be an object'
      )
    })

    it('throws if options contain unknown keys', () => {
      expect(() =>
        // @ts-expect-error runtime misuse
        defineOptions(defaults, { retries: 5, extra: 'bad' })
      ).toThrow('Unknown option: "extra"')
    })
  })

  describe('defineStrictOptions', () => {
    it('returns defaults when no options are passed', () => {
      expect(defineStrictOptions(defaults)).toEqual({
        whitespace: false,
        retries: 3
      })
    })

    it('merges only known keys from options', () => {
      expect(defineStrictOptions(defaults, { retries: 10 })).toEqual({
        whitespace: false,
        retries: 10
      })
    })

    it('throws if options is not an object', () => {
      // @ts-expect-error runtime misuse
      expect(() => defineStrictOptions(defaults, 123)).toThrow(
        'Options must be an object'
      )
    })

    it('throws if options contain unknown keys', () => {
      expect(() =>
        defineStrictOptions(defaults, { retries: 7, nope: true })
      ).toThrow('Unknown option: "nope"')
    })
  })
})
