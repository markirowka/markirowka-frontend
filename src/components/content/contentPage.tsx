import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ADMIN_ROLE } from "@/config/env";
import { userAtom } from "@/feature/common";
import { useAtom } from "jotai";
import { useState } from "react";

const defaultContent = {
  heading: "Заголовок",
  content: "<p>Текст</p>",
};

export const ContentPage = () => {
  const [user] = useAtom(userAtom);
  const [heading, setHeading] = useState(defaultContent.heading);
  const [content, setContent] = useState(defaultContent.content);
  const [editState, SwitchEditState] = useState(false);

  const editHeadingAction = (event: any) =>
    setHeading(String(event.target.value));

  const editStateHandler = () => {
    console.log("edit");
    SwitchEditState((prevState) => !prevState);
  };

  const deleteAction = () => {
    const userConfirmed = confirm(
      "Вы уверены, что хотите удалить ВЕСЬ контент?"
    );
    if (userConfirmed) {
      console.log("delete");
    }
  };

  const saveAction = () => {
    console.log("Save");
  };

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
            <div className="editBtn deleteBtn">
              <img
                src="/editor/delete.svg"
                className="editIcon"
                width="20"
                height="20"
                onClick={deleteAction}
              />
            </div>
          </div>
        ) : null}
      </div>
      {!editState ? (
        <div
          className="contentZone"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="contentEditor">
          <ReactQuill value={content} onChange={setContent} />
        </div>
      )}
    </div>
  );
};
