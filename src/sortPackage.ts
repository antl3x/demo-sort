/* -------------------------------------------------------------------------- */
/*                            Sort Package Function                           */
/* -------------------------------------------------------------------------- */
/**
 * - [0] A quick check for any invalid input.
 * - [1] Here we address precision issues by rounding the volume to the nearest whole number
 * - [2] Ensure calculations stay within JS safe integer range.
 * - [3] Here we check for bulkiness and heaviness.
 * - [4] Finally, we return the appropriate package type.
 */
export function sortPackage(width: number, height: number, length: number, mass: number): string {
    // ^[0]
    if ([width, height, length, mass].some(_invalidInput)) {
        throw new Error('Invalid input. All parameters must be valid positive numbers.');
    }

    // ^[1]
    const volume = Math.round(Math.max(0, width) * Math.max(0, height) * Math.max(0, length));

    // ^[2]
    if (!Number.isSafeInteger(volume) || !Number.isSafeInteger(Math.round(mass))) {
       throw new Error('Invalid input. Calculations exceed safe integer range.');
    }

    // ^[3]
    const isBulky = volume >= 1000000 || Math.max(width, height, length) >= 150;
    const isHeavy = mass >= 20;

    // ^[4]
    if (isBulky && isHeavy) {
        return 'REJECTED';
    } else if (isBulky || isHeavy) {
        return 'SPECIAL';
    } else {
        return 'STANDARD';
    }
}
/* ------------------------------ _invalidInput ----------------------------- */

function _invalidInput(param: unknown): boolean {
    return typeof param !== 'number' || param < 0 || !isFinite(param)
}

