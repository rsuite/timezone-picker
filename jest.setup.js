/**
 * https://github.com/enzymejs/enzyme/blob/master/docs/guides/jest.md#jest-version-15-and-up
 */

/* eslint-disable */
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
/* eslint-enable */

Enzyme.configure({ adapter: new Adapter() });
