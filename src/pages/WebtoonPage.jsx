import React from "react";
import WebtoonHomeImg from "../components/WebtoonHomeImg";
import WebtoonList from "../components/WebtoonList";
import { GlobalLayout } from "../global";

const WebtoonPage = () => {
  const sliderTitle = [
    "매일매일 왓챠 웹툰",
    "소름 주의 오싹 공포툰",
    "설탕이 필요할 때 꺼내보세요",
    "눈을 홀리는 힐링작화",
    "#로맨스",
  ];
  const w = window.innerWidth;
  return (
    <GlobalLayout>
      <div className="WebtoonPage">
        <WebtoonHomeImg title={"웹툰"} />

        {sliderTitle.map((it) => (
          <>
            <WebtoonList it={it} number={3} />
            <WebtoonList it={it} number={w <= 1500 ? 5 : 8} />
          </>
        ))}
      </div>
    </GlobalLayout>
  );
};

export default WebtoonPage;
