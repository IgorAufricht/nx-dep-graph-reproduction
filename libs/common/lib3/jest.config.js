module.exports = {
  name: 'common-lib3',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/lib3',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
