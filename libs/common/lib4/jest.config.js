module.exports = {
  name: 'common-lib4',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/lib4',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
