import React, { useRef, useCallback, useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths, postAdded } = useSelector((state) => state.post);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]); // current를 통해서 Input에 접근

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // 게시글 업로드
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText(''); // 게시글 업로드하면 게시글 없애주기
  }, []);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          // 이미지 미리보기 (경로저장)
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
