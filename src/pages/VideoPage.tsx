import ReactPlayer from "react-player";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

export const VideoPage = () => {
  const { filename } = useParams();

  useLayoutEffect(() => {
    // Сохраняем исходные стили (если нужно восстановить)
    const originalStyles = {
      backgroundColor: document.body.style.backgroundColor,
      color: document.body.style.color,
      height: document.body.style.height,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      margin: document.body.style.margin,
      padding: document.body.style.padding,
    };

    // Устанавливаем стили
    Object.assign(document.body.style, {
      backgroundColor: "#000",
      color: "#fff",
      height: "100%",
      width: "100%",
      overflow: "hidden",
      position: "absolute",
      margin: "0",
      padding: "0",
    });

    // Очистка: возвращаем исходные стили
    return () => {
      Object.assign(document.body.style, originalStyles);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: 480,
        overflowY: "hidden",
      }}
    >
      <ReactPlayer
        url={`/video/${filename}`}
        controls
        width="100%"
        height="100%"
        playsinline
        config={{
          file: {
            attributes: {
              crossOrigin: "anonymous",
            },
          },
        }}
      />
    </div>
  );
};

/* 
import ReactPlayer from 'react-player';

<ReactPlayer
  url={`/api/file/free/${filename}`}
  controls
  width="100%"
  height="100%"
  playsinline
  config={{
    file: {
      attributes: {
        crossOrigin: 'anonymous',
      },
    },
  }}
/>
*/
