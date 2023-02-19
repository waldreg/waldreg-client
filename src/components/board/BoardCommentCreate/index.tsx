import { useState } from 'react';
import { useCommentCreate } from '../../../hooks/board/comment/useCommentCreate';
import { useParams } from 'react-router-dom';
import CreateButton from '../../common/createbutton';
import { CommentInput, CommentLabel } from './style';
import FONT from '../../../constants/fonts';

const BoardCommentCreate = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();

  const createMutation = useCommentCreate(parseInt(id!!), comment);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <CommentLabel>
        <CommentInput
          type="text"
          placeholder="댓글을 남겨주세요"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <CreateButton style={FONT.SUBTITLE1} onClick={handleSubmit} />
      </CommentLabel>
    </form>
  );
};

export default BoardCommentCreate;
