const { src, dest, watch } = require('gulp');

function copyLocalizedResources() {
    return src('../spfx/src/webparts/**/loc/*.d.ts')
        .pipe(dest('./src/webparts'));
}

function triggerTargetWebPartRelod() {
    return src('../spfx/src/index.ts')
        .pipe(dest('../spfx/src/'));
}

exports.watch = function () {
    watch('../spfx/src/webparts/**/loc/*d.ts', {
        ignoreInital: false
    }, copyLocalizedResources);

    watch('./dist/*.js', triggerTargetWebPartRelod);
}