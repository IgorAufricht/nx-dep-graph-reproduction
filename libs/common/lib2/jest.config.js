module.exports = {
  name: 'common-lib2',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/lib2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
