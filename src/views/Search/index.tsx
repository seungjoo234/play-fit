import React from "react";
import "./style.css";

const profile = require("../../assets/image/blank-profile.png");
const bg = require("../../assets/image/bg.png");
const heart = require("../../assets/image/Vector.png");
const comment = require("../../assets/image/Comments.png");

// component: 검색 화면 컴포넌트 //
const SearchPage = () => {
  // 예시 데이터 (작성 날짜와 사용자 이름 추가)
  const searchResults = [
    {
      id: 1,
      title: "첫 번째 결과",
      content: "운동 꾸준히 하는 팁 좀",
      user: "에디",
      date: "2024-09-22 04:10",
    },
    {
      id: 2,
      title: "두 번째 결과",
      content: "이거 어떻게 하는 지 아시는 분",
      user: "민수",
      date: "2024-09-21 12:30",
    },
    {
      id: 3,
      title: "세 번째 결과",
      content: "운동하다 허리 삔 썰 푼다",
      user: "지수",
      date: "2024-09-20 09:15",
    },
    {
      id: 4,
      title: "네 번째 결과",
      content: "ㅎㅎ 안녕 ㄸㄸㄸㄸ",
      user: "소연",
      date: "2024-09-19 17:45",
    },
    {
      id: 5,
      title: "다섯 번째 결과",
      content: "내용 쓰기도 귀찮다 일단 뭐라도 쓸게요 으아아아아아아아앙아",
      user: "철수",
      date: "2024-09-18 08:00",
    },
  ];

  return (
    <div className="search-page">
      <h1>검색 결과</h1>
      <div className="results-container">
        {searchResults.map((result, index) => (
          <div className="result-card" key={result.id}>
            {index === 0 && <img src={bg} className="bgimg" alt="Background" />}{" "}
            {/* 첫 번째 결과에만 배경 이미지 추가 */}
            <div className="card-content">
              <div className="pro-pic">
                <img src={profile} className="profile-pic" alt="User Profile" />
                <div className="user-info">
                  <h3>{result.user}</h3>
                  <p className="post-date">{result.date}</p>
                </div>
              </div>
              <h2>{result.title}</h2>
              <p className="post-content">{result.content}</p>
              <div className="right-items">
                <img src={heart} className="icon-icon" alt="Like" />
                <p>0</p>
                <img src={comment} className="icon-icon" alt="Comment" />
                <p>0</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
