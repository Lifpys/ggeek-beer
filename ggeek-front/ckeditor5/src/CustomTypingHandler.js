import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class CustomTypingHandler extends Plugin {
    init() {
        const editor = this.editor;
        editor.isComposing = false;

        const viewDocument = editor.editing.view.document;

        viewDocument.on('compositionstart', () => {
            editor.isComposing = true;
            console.log('Composition started');
        });

        viewDocument.on('compositionend', () => {
            editor.isComposing = false;
            console.log('Composition ended');
        });

        this.listenTo(viewDocument, 'keydown', (evt, data) => {
            if (editor.isComposing) {
                evt.stop();
                console.log('Keydown event stopped during composition');
            }
        }, { priority: 'highest' });

        // Override the update text node logic
        this.listenTo(editor.editing.view.document, 'render', () => {
            const writer = editor.editing.view.writer;

            editor.editing.view.change((writer) => {
                const range = writer.createRangeIn(editor.editing.view.document.getRoot());

                for (const item of range.getItems()) {
                    if (item.is('text') && !editor.isComposing) {
                        // Your custom update logic here
                        console.log('Text node update', item.data);
                    }
                }
            });
        });
    }
}