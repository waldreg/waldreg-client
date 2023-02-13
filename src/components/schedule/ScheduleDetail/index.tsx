import React from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useScheduleDelete } from "../../../hooks/schedule/useScheduleDelete";
import { useScheduleDetail } from "../../../hooks/schedule/useScheduleDetail";

const ScheduleDetail = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();

  const { scheduleDetail } = useScheduleDetail(id ? parseInt(id) : 0);

  const scheduleDelete = useScheduleDelete(id ? parseInt(id) : 0);

  const handleDeleteButtonClick = () => {
    scheduleDelete.mutate();
    navigate(-1);
  };

  return (
    <div>
      <div>{scheduleDetail?.id}</div>
      <div>{scheduleDetail?.schedule_title}</div>
      <div>{scheduleDetail?.schedule_content}</div>
      <div>{scheduleDetail?.started_at}</div>
      <div>{scheduleDetail?.finish_at}</div>

      <br />
      <button onClick={handleDeleteButtonClick}>삭제</button>
    </div>
  );
};

export default ScheduleDetail;
