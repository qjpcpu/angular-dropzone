## Install
```
bower install qjpcpu/angular-dropzone
```
add reference in `index.html`
```
<link rel="stylesheet" href="bower_components/dropzone/dist/dropzone.css">
<script src="bower_components/dropzone/dist/dropzone.js"></script>
<script src="bower_components/angular-dropzone/angular-dropzone.js"></script>
```
add dependencies
```
app = angular.module("my-app", [
  'qjpcpu.angular-dropzone'
]);
```
## Usage
### Simple Usage
```
<div qjp-dropzone class="droppable-area" url="'/url/to-upload'">
	Drop file here
</div>
```
### Full Usage
```
<div qjp-dropzone class="droppable-area"
url="'/url/to-upload'"
method="'post'"
param-name="'afile'"
auto-upload="false"
start-upload="false"
extra-parameters="{key: 'value'}"
addedfile="fileNotify($file)"
uploadprogress="progressNotify($file,$progress)"
success="uploadedOk($file)"
error="uploadFail($file)"
>
	Drop file here
</div>
```
* `url`: the url the file would be uploaded to
* `method`: can be `post` or `put`, default is `post`
* `param-name`: the uploaded file parameter name, default is `file`
* `auto-upload`: if `false`, the file would start to upload when `start-upload` is true
* `start-upload`: manually upload file when value is `true`, works when `auto-upload` is false or `undefined`
* `extra-parameters`: extra parameters would send together with file upload
* `addedfile`: function would be invoked when new file dropped into
* `uploadprogress`: function would be invoked when uploading
* `success`: function would be invoked when upload ok
* `error`: function would be invoked when upload failed

### Feel free to fork
