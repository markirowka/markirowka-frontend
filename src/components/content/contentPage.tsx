import ReactQuill, { Quill } from "react-quill";
import parse from 'html-react-parser';
import "react-quill/dist/quill.snow.css";
import { ADMIN_ROLE } from "@/config/env";
import { statsAtom, userAtom } from "@/feature/common";
import { useAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { backendInstance } from "@/services/backendService";
import { useLocation } from "react-router-dom";
import { urlNamingFilter } from "@/utils";

const defaultContent = {
  heading: "Заголовок",
  content: "<p>Текст</p>",
};

const editorOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline'],
      ['image', "video"]
    ],
    clipboard: {
      matchVisual: false
    }
  },
  placeholder: '',
  theme: 'snow',
}

class Clipboard extends Quill.import('modules/clipboard') {
  async onPaste(e: any) {
    e.preventDefault();
    const clipboardData = (e.originalEvent || e).clipboardData;
    const text = clipboardData.getData('text/plain');
    const html = clipboardData.getData('text/html');

    
    if (html) {
      const delta = this.convert(html);
      this.quill.updateContents(delta, 'silent');
    } else {
      this.quill.insertText(this.quill.getSelection(), text);
    }

    this.quill.setSelection(this.quill.getLength(), 'silent');
    this.quill.scrollIntoView();
  }
}
Quill.register('modules/clipboard', Clipboard, true);

export const ContentPage = () => {
  const [user] = useAtom(userAtom);
  const quillRef = useRef<any>(null);
  const path = useLocation()
  const [pending, Pending] = useState(true);
  const [readStats, setReadStats] = useAtom(statsAtom);
  const [heading, setHeading] = useState(defaultContent.heading);
  const [content, setContent] = useState(defaultContent.content);
  const [editState, SwitchEditState] = useState(false);

  useEffect(() => {
     backendInstance.markPageRead(urlNamingFilter(path.pathname)).then(() => {
      readStats;
      backendInstance.getReadArticles().then((stats) => {
        setReadStats(stats)
      }).catch((e) => {
        console.log("Stats load error:", e)        
      })
     }).catch((e) => {
        console.log("Stats save error:", e)
     })
  }, [path.pathname])

  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    if (quill) {
      quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node: any, delta: any) => {
        node;
        return delta;
      });
    }
  }, []);

  const LoadContent = async () => {
    const page = await backendInstance.getPageContent(urlNamingFilter(path.pathname));
    setContent(page.content || "");
    setHeading(page.pageTitle || "")
    Pending(false);
  }

  const onQuillContentChange = (content: any)  => {
    setContent(content)
  }

  useMemo(() => {
    LoadContent()
  }, [])

  const editHeadingAction = (event: any) =>
    setHeading(String(event.target.value));

  const editStateHandler = () => {
    console.log("edit");
    SwitchEditState((prevState) => !prevState);
  };

  /* const deleteAction = () => {
    const userConfirmed = confirm(
      "Вы уверены, что хотите удалить ВЕСЬ контент?"
    );
    if (userConfirmed) {
      console.log("delete");
    }
  }; */

  const saveAction = async () => {
    console.log("Save");
    Pending(true);
    await backendInstance.savePageContent({
      pageUrl: urlNamingFilter(path.pathname),
      pageTitle: heading,
      content
    })
    LoadContent();
  };

  if (pending) {
    return(<div className="contentPage">Loading...</div>)
  }

  return (
    <div className="contentPage">
      <div className="contentHeading">
        {!editState ? (
          <h2>{heading}</h2>
        ) : (
          <div className="editHeading">
            <input type="text" value={heading} onChange={editHeadingAction} />
          </div>
        )}
        {user && user.user_role === ADMIN_ROLE ? (
          <div className="editBtnBlock">
            {!editState ? (
              <div className="editBtn">
                <img
                  src="/editor/edit.svg"
                  className="editIcon"
                  width="20"
                  height="20"
                  onClick={editStateHandler}
                />
              </div>
            ) : (
              <>
                <div className="editBtn goBackBtn">
                  <img
                    src="/editor/goback.svg"
                    className="editIcon"
                    width="20"
                    height="20"
                    onClick={editStateHandler}
                  />
                </div>
                <div className="editBtn saveBtn">
                  <img
                    src="/editor/save.svg"
                    className="editIcon"
                    width="20"
                    height="20"
                    onClick={saveAction}
                  />
                </div>
              </>
            )}
            {/* <div className="editBtn deleteBtn">
              <img
                src="/editor/delete.svg"
                className="editIcon"
                width="20"
                height="20"
                onClick={deleteAction}
              />
            </div>*/}
          </div>
        ) : null}
      </div>
      {!editState ? (
        <div
          className="contentZone">{parse(content)}</div>
      ) : (
        <div className="contentEditor">
          <ReactQuill ref={quillRef} value={content} onChange={onQuillContentChange} 
          modules={editorOptions.modules} />
        </div>
      )}
    </div>
  );
};
