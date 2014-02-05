
# reverse

  Unicode-aware string reverser. For more information, visit: https://github.com/mathiasbynens/esrever.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/reverse

  Or with node.js:

    $ npm install component-reverse

## Example

```js
reverse('foo 𝌆 bar') // rab 𝌆 oof
reverse('mañana mañana') // anañam anañam
```

## API

### `reverse(str)`

Reverse a string

## Credits

The logic and examples are originally from: https://github.com/mathiasbynens/esrever.
This code is reformatted and simplified for component.

## Test

    npm install component-test
    make test

## License

  MIT
