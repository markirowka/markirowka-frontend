import { ContentBlock } from "@/feature/types";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { editorOptions } from "./options";

const ContentBlockEditor = (props: {
  block: ContentBlock;
  onUpdate: (block: ContentBlock) => void;
  onDelete: (id: number) => void;
}) => {
  const quillRef = useRef<any>(null);
  const [blockContent, setBlockContent] = useState(props.block.content);

  const onQuillContentChange = (content: any) => {
    setBlockContent(content);
  };

  return (
    <div className="blockEditContainer additionalContentBlock">
      <div className="blockEditorMenu">
        <div className="editBtn saveBtn">
          <img
            src="/editor/save.svg"
            className="editIcon"
            width="20"
            height="20"
            onClick={() =>
              props.onUpdate({ ...props.block, content: blockContent })
            }
          />
        </div>
        <div className="editBtn deleteBtn">
          <img
            src="/editor/delete.svg"
            className="editIcon"
            width="20"
            height="20"
            onClick={() => props.onDelete(props.block.id)}
          />
        </div>
      </div>
      <ReactQuill
        ref={quillRef}
        value={blockContent}
        onChange={onQuillContentChange}
        modules={editorOptions.modules}
      />
    </div>
  );
};

export default ContentBlockEditor;
