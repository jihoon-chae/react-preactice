// 중복되는 부분 적어주기 (커스텀훅)

import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler]; // handler는 setValue의 입력값이 된다.
};


