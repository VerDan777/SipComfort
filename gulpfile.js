var tasks = [
    './gulp/tasks/pug.js',
    './gulp/tasks/styles.js',
    './gulp/tasks/copy.js',
    './gulp/tasks/image-min.js',
    './gulp/tasks/build.js',
    './gulp/tasks/clean.js',
    './gulp/tasks/gh-pages.js',
    './gulp/tasks/symbols.js',
    './gulp/tasks/watch.js',
    './gulp/tasks/scripts.js'
]

for(var i =0; i < tasks.length; i++) {
    require(tasks[i]);
}