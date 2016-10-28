import raf from 'raf';

const PI = Math.PI;
const halfPi = PI / 2;

/**
 * Deafult ease function from 'https://github.com/d3/d3-ease'.
 *
 * @param  {Number} t The time.
 *
 * @return {Number} The eased time.
 */
function sinOut(t) {
    return Math.sin(t * halfPi);
}

/**
 * Utility to scroll the window to a given offset with animation.
 *
 * @param  {Number}   [offset=0]        The target offset property of the window.
 * @param  {Number}   [speed=5000]      The speed in pixels per second.
 * @param  {Function} [ease=easeSinOut] The easing equation to use. Is is recommended to use d3-ease.
 * @param  {Function} callback          The callback that is called when animation finish.
 */
export default function skrollto(offset = 0, speed = 5000, ease = sinOut, callback) {
    const scrollY = window.scrollY;
    let currentTime = 0;

    // Calculate the duration of the animation in seconds
    const time = Math.abs(scrollY - offset) / speed;

    // Add animation loop
    function tick() {
        currentTime += 1 / 60;

        const p = currentTime / time;
        const t = ease(p);

        if (p < 1) {
            raf(tick);

            window.scrollTo(0, scrollY + ((offset - scrollY) * t));
        } else {
            window.scrollTo(0, offset);
            callback && raf(callback); // eslint-disable-line callback-return
        }
    }

    // If scrollY is already equal to offset, call callback immediately
    if (scrollY === offset) {
        callback && raf(callback); // eslint-disable-line callback-return
    } else {
        // Call it once to get started
        tick();
    }
}
