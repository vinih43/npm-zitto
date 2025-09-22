// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * Merge defaults with optional user options.
 *
 * @typeParam T - Shape of the defaults object
 * @param defaults - Base configuration with required keys
 * @param options - Optional overrides, must be a subset of defaults
 * @returns A new object with defaults and overrides merged
 *
 * @example
 * const opts = defineOptions({ retries: 3, verbose: false }, { verbose: true })
 * // => { retries: 3, verbose: true }
 */
export function defineOptions<T extends object>(
  defaults: T,
  options?: Partial<T>
): T {
  if (options) {
    assertOptions(defaults, options)
  }
  return { ...defaults, ...(options || {}) }
}

/**
 * Merge defaults with optional user options, dropping unknown keys.
 *
 * @typeParam T - Shape of the defaults object
 * @typeParam U - Subset of T allowed as overrides
 * @param defaults - Base configuration with required keys
 * @param options - Optional overrides, must be a subset of defaults
 * @throws {TypeError} If 'options' is not an object
 * @throws {Error} If 'options' contains unknown keys
 * @returns A new object with defaults and known overrides merged
 *
 * @example
 * const opts = defineStrictOptions({ retries: 3, verbose: false }, { retries: 5, extra: 'x' })
 * // => { retries: 5, verbose: false }  // 'extra' is dropped
 */
export function defineStrictOptions<T extends object, U extends Partial<T>>(
  defaults: T,
  options?: U
): T {
  if (options) {
    assertOptions(defaults, options)
  }

  // biome-ignore lint/suspicious/noExplicitAny: accumulator object with dynamic keys
  const result: any = { ...defaults }

  if (options) {
    for (const key in defaults) {
      if (key in options) {
        result[key] = options[key]
      }
    }
  }

  return result
}

function assertOptions<T extends object>(
  defaults: T,
  options: unknown
): asserts options is Partial<T> {
  if (typeof options !== 'object' || options == null) {
    throw new TypeError('Options must be an object.')
  }

  for (const key of Object.keys(options)) {
    if (!(key in defaults)) {
      throw new Error(`Unknown option: "${key}".`)
    }
  }
}
