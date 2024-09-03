import { Plugin, FileDialogButtonView } from 'ckeditor5'
import fileUploadIcon from '../theme/icons/fileupload.svg?raw'

/**
 * The file upload button plugin.
 *
 * Adds the `'fileUpload'` button to the {@link module:ui/componentfactory~ComponentFactory UI component factory}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class FileUploadUI extends Plugin {
  /**
   * @inheritDoc
   */
  init () {
    const editor = this.editor
    const t = editor.t

    // Setup `fileUpload` button.
    editor.ui.componentFactory.add('fileUpload', locale => {
      const view = new FileDialogButtonView(locale)
      const command = editor.commands.get('fileUpload')
      const fileTypes = editor.config.get('simpleFileUpload.fileTypes')

      view.set({
        acceptedType: fileTypes.map(type => `${type}`).join(','),
        allowMultipleFiles: false
      })

      view.buttonView.set({
        label: t('Insert file'),
        icon: fileUploadIcon,
        tooltip: true
      })

      view.buttonView.bind('isEnabled').to(command)

      view.on('done', (evt, file) => {
        const fileToUpload = file

        if (fileToUpload.length) {
          editor.execute('fileUpload', { file: fileToUpload })
        }
      })

      return view
    })
  }
}
