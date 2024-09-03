import { Plugin } from 'ckeditor5'
import FileUploadEditing from './src/fileuploadediting'
import FileUploadUI from './src/fileuploadui'

export default class FileUpload extends Plugin {
  static get requires () {
    return [FileUploadEditing, FileUploadUI]
  }

  /**
   * @inheritDoc
   */
  static get pluginName () {
    return 'fileUpload'
  }
}
