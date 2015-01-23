Package.describe({
    name: 'jjman505:ramda',
    summary: 'A practical functional library for Javascript programmers.',
    version: '0.1.0',
    git: 'https://github.com/jjman505/meteor-ramda.git',
    upstreamVersion: "0.1.0"
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'lib/dist/ramda.js',
    ], 'client');

    if(api.export)
        api.export('ramda');
});
