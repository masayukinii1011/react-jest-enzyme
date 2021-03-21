import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Hoge from "./components/Hoge";

test("子コンポーネントが存在すること", () => {
  // == 準備 ==
  /** Appコンポーネントをshallowレンダリング */
  const wrapper = shallow(<App />);

  // == 検証 ==
  /** Hogeコンポーネントの数を取得し、1であればOK */
  expect(wrapper.find(Hoge).length).toBe(1);
});

test("テキストが含まれているか確認", () => {
  const wrapper = shallow(<App />);
  //<App />内の文章に「みやだいもうくん」が含まれているかどうかをテストする
  //”toContain”は含まれているかどうかをチェックする関数
  expect(wrapper.text()).toContain("みやだいもうくん");
});

test("テキストが一致するか確認", () => {
  const wrapper = shallow(<App />);
  //<App />内の文章に「aaaみやだいもうくん<Hoge />」に一致するか確認
  expect(wrapper.text()).toEqual("aaaみやだいもうくん<Hoge />");
});
