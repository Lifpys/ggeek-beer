// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.
import "./styles.css";

// The editor creator to use.
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useRef } from "react";
import { UploadController } from "@/api/services/UploadController";

const CustomCkEditor = ({ text, setText, readOnly }: any) => {
  const uploadInstance = new UploadController();
  const editorRef = useRef<any>(null);

  const customUploadAdapter = (loader: any) => {
    return {
      upload() {
        return new Promise((resolve) => {
          const data = new FormData();
          loader.file.then((file: any) => {
            data.append("name", file.name);
            data.append("files[0]", file);
            uploadInstance.uploadCKeditor({ upload: file }).then((e: any) => {
              if (e.data.uploaded) {
                resolve({ default: e.data.url });
              }
            });
          });
        });
      },
    };
  };

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return customUploadAdapter(loader);
    };

    //툴바 더보기 클릭시 오토 포커스 끄기
    setTimeout(() => {
      editor.ui.view.toolbar.element.addEventListener("click", (event: any) => {
        const target = event.target;
        if (
          target.tagName == "circle" ||
          target.classList.contains("ck-dropdown__button") ||
          target.classList.contains("ck-reset_all-excluded")
        ) {
          function check(index: any) {
            let pan = document.getElementsByClassName(
              "ck-dropdown__panel-visible"
            )[index];
            if (pan) {
              (pan as any).click();
              (pan as any).focus();
            }
          }
          check(0);
          check(1);
          setTimeout(() => {
            check(0);
            check(1);
          }, 250);
        }
      });
    }, 500);
  }

  const edrtorConfiguration = {
    extraPlugins: [uploadPlugin],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "fontSize",
        "italic",
        "fontColor",
        "underline",
        "link",
        "|",
        "imageUpload",
        "mediaEmbed",
        "undo",
        "redo",
        "horizontalLine",
        "fontBackgroundColor",
      ],
    },
    mediaEmbed: {
      previewsInData: true,
    },
    language: "ko",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
  };

  useEffect(() => {
    const editorInstance = editorRef.current?.editor;
    if (!editorInstance) return;
    editorInstance.isComposing = false;
    const viewDocument = editorInstance.editing.view.document;

    const handleCompositionStart = () => {
      editorInstance.isComposing = true;
    };
    const handleCompositionEnd = () => {
      editorInstance.isComposing = false;
    };
    const handleKeyDown = (event: any, domEventData: any) => {
      // if (!editorInstance.isComposing) {
      //     // Your keydown event handling code here
      //     console.log('Keydown event triggered');
      //     alert('Keydown event triggered');
      // }
    };

    viewDocument.on("compositionstart", handleCompositionStart);
    viewDocument.on("compositionend", handleCompositionEnd);
    viewDocument.on("keydown", handleKeyDown);

    return () => {
      // Cleanup event listeners on component unmount
      viewDocument.off("compositionstart", handleCompositionStart);
      viewDocument.off("compositionend", handleCompositionEnd);
      viewDocument.off("keydown", handleKeyDown);
    };
  }, [editorRef]);

  return (
    <CKEditor
      ref={editorRef as any}
      onReady={(editor) => {
        editorRef.current = editor;
      }}
      editor={Editor as any}
      config={!readOnly && (edrtorConfiguration as any)}
      data={text ? text : ""}
      onBlur={(e, editor) => {
        !readOnly && setText(editor.getData());
      }}
    />
  );
};

export default CustomCkEditor;
