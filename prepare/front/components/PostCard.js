import {
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { Card, Popover, Button } from "antd";
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id); // 옵셔널체이닝
  // === (state.user.me && state.user.me.id)

  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev); // false를 true로 true를 false로 (toggle에서 자주 사용)
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages Images={post.Images} />}
        actions={[
          // 배열안에 jsx를 넣을때는 항상 key를 넣어주기
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="red"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),

          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {/* 내 id가 게시글 작성자 id와 같으면 수정 삭제 가능  */}
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
        {/* <Content /> */}
      </Card>
      {commentFormOpened && <div>댓글 부분</div>}
      {/* <CommentForm /> */}
      {/* <Comments /> */}
    </div>
  );
};

PostCard.propTypes = {
  // 데이터의 모양대로
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
