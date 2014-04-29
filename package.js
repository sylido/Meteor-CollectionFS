 Package.describe({
  name: 'cfs-tempstore',
  summary: 'CollectionFS, temporary storage'
});

Package.on_use(function(api) {
  api.use(['cfs-base-package']);

  api.use('cfs-filesystem', { weak: true });

  api.use('cfs-gridfs', { weak: true });

  api.add_files([
    'tempStore.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use('collectionFS');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('tests/server-tests.js', 'server');
});
