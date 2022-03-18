/**
 * Wait until the target element exist
 *
 * @param {function} target The function that checks if element exist.
 * @param {function} success The function that will be performed if the target exist.
 * @param {function} error An optional function that will be performed if there's an error.
 */
function waitUntil(target, success, error) {
    // Perform target checking until it exist
    var targetChecking = setInterval(function() {
        if (target()) {
            clearInterval(targetChecking);
            targetChecking = null;
            success();
        }
    }, 33);

    // Error handling
    setTimeout(function() {
        if (targetChecking !== null) {
            clearInterval(targetChecking);
            if (typeof(error) === 'function') {
                error();
            }
        }
    }, 20000);
}