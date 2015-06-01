angular.module('qjpcpu.angular-dropzone', []).directive('qjpDropzone', function() {
  return {
    restrict: 'A',
    scope: {
      extraParameters: '=',
      startUpload: '=',
      addedfile: '&',
      uploadprogress: '&',
      success: '&',
      error: '&'
    },
    link: function($scope, $element, $attrs) {
      var dropzoneObject, dropzoneWidget;
      dropzoneObject = null;
      dropzoneWidget = $element.dropzone({
        url: $attrs.url,
        method: $attrs.method || 'post',
        paramName: $attrs.paramName || 'file',
        autoProcessQueue: typeof $attrs.autoUpload === 'undefined' || $attrs.autoUpload !== 'false',
        addedfile: function(file) {
          if (!dropzoneObject) {
            dropzoneObject = this;
            dropzoneObject.on('sending', function(file, xhr, data) {
              var k, ref, results, v;
              if ($scope.extraParameters) {
                ref = $scope.extraParameters;
                results = [];
                for (k in ref) {
                  v = ref[k];
                  results.push(data.append(k, v));
                }
                return results;
              }
            });
          }
          if ($scope.addedfile) {
            return $scope.addedfile({
              $file: file
            });
          }
        },
        uploadprogress: function(file, progress, bytesSent) {
          if ($scope.uploadprogress) {
            return $scope.uploadprogress({
              $file: file,
              $progress: progress
            });
          }
        },
        success: function(file) {
          if ($scope.success) {
            return $scope.success({
              $file: file
            });
          }
        },
        error: function(file) {
          if ($scope.error) {
            return $scope.error({
              $file: file
            });
          }
        }
      });
      if ($attrs.autoUpload === 'false') {
        return $scope.$watch('startUpload', function(newAction, oldAction) {
          if (newAction && dropzoneObject) {
            return dropzoneObject.processQueue();
          }
        });
      }
    }
  };
});
