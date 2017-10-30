'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var actual = _readlineSync2.default.question('What\'s your name?: ');
    console.log('Hello, ' + actual);
}; //var readlineSync = require('readline-sync');
/*
const getsName = () => {
    const readlineSync = require('readline-sync');

    // Wait for user's response.

    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}
export { getsName }*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhY3R1YWwiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBOzs7Ozs7a0JBQ2UsWUFBTTtBQUNqQixRQUFNQSxTQUFTLHVCQUFhQyxRQUFiLENBQXNCLHNCQUF0QixDQUFmO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxZQUFZSCxNQUF4QjtBQUNILEMsRUFmRDtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXIgcmVhZGxpbmVTeW5jID0gcmVxdWlyZSgncmVhZGxpbmUtc3luYycpO1xyXG4vKlxyXG5jb25zdCBnZXRzTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlYWRsaW5lU3luYyA9IHJlcXVpcmUoJ3JlYWRsaW5lLXN5bmMnKTtcclxuXHJcbiAgICAvLyBXYWl0IGZvciB1c2VyJ3MgcmVzcG9uc2UuXHJcblxyXG4gICAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcclxuICAgIGNvbnNvbGUubG9nKCdIaSAnICsgdXNlck5hbWUgKyAnIScpO1xyXG59XHJcbmV4cG9ydCB7IGdldHNOYW1lIH0qL1xyXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3R1YWwgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1doYXRcXCdzIHlvdXIgbmFtZT86ICcpO1xyXG4gICAgY29uc29sZS5sb2coJ0hlbGxvLCAnICsgYWN0dWFsKTtcclxufSJdfQ==