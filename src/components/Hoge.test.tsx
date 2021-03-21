import React from "react";
import { shallow } from "enzyme";

import Hoge from "./Hoge";

describe("hoge", () => {
  it("className Hoge length", () => {
    //enzymeはjQueryライクにDOM操作を実現するライブラリ
    //shallow.mount
    //テストにクラス名、id名を使うのは如何なものか。。。スタイリングで使ってるかも。。。
    //describe()でit()をグルーピング
    //testとitは同じ
    //Hogeコンポーネントをレンダリング
    //hogeクラス
    //の個数
    //1つかどうか
    expect(shallow(<Hoge />).find(".hoge").length).toBe(1);
  });

  it("is truth", () => {
    expect(shallow(<Hoge />).find(".hoge")).toBeTruthy();
  });
});
