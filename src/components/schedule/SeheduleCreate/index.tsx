import React, { useState } from "react";
import { useScheduleCreate } from "../../../hooks/schedule/useScheduleCreate";
import { useNavigate } from "react-router-dom";

const ScheduleCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const scheduleData = {
    schedule_title: title,
    schedule_content: content,
    started_at: "2023-01-24T20:52",
    finish_at: "2023-01-31T23:59",
    repeat: {
      cycle: 123,
      repeat_finish_at: "2023-12-31T23:59",
    },
  };

  const createMutation = useScheduleCreate(scheduleData);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    navigate(-1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>내용</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button onSubmit={handleSubmit}>제출</button>
      </form>
    </div>
  );
};

export default ScheduleCreate;
