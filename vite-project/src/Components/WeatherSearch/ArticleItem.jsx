import React from "react";

const ArticleItem = ({ hourData, key }) => {
  return (
    <article
      key={key}
      className="bg-gray-200 p-3 rounded-lg shadow-sm flex-shrink-0 w-2/2 sm:w-1/2 md:w-1/3 dark:bg-indigo-800 dark:text-orange-300"
    >
      <p>
        <strong>Time:</strong> {hourData.time}
      </p>
      <p>
        <strong>Temp:</strong> {hourData.temp_c}°C
      </p>
      <p>
        <strong>Condition:</strong> {hourData.condition.text}
      </p>
    </article>
  );
};

export default ArticleItem;
