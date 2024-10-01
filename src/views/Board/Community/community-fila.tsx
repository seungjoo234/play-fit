import React, { useState } from "react";
import "./community-fila.css";

const profile = require("../../../assets/image/blank-profile.png");
const bg = require("../../../assets/image/bg.png");
const heart = require("../../../assets/image/Vector.png");
const comment = require("../../../assets/image/Comments.png");

const Community_fila = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <div className="cm">
      <div className="bg">
        <h1>커뮤니티</h1>
      </div>
      <div className="category-con">
        <a href="./community-life" className="cate">
          일상·잡담
        </a>
        <a href="./community-health" className="cate">
          헬스
        </a>
        <a href="./community-fila" className="fila">
          필라테스
        </a>
        <a href="./community-sports" className="cate">
          스포츠
        </a>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={bg} className="bgimg" />
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>안녕하세요</h1>
          <p>ㅁ너ㅏㅁㄴ러ㅏㅁㄴ렘ㄴㄴㅁ아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>반갑습니다!</h1>
          <p>ㅁㅁㄴㅇㅁㄴㅇ</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>필라테스 정보</h1>
          <p>ㅁㅁㄴㅇㄴㅁㅇㅏㅁㄴ렘ㄴㄴㅁ아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>헬스 정보</h1>
          <p>ㅁ너ㅏㅁㄴ러ㅏㅣㄷ가히ㅏㅎ디아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>헬스 정보</h1>
          <p>asdasdsdada러ㅏㅁㄴ렘ㄴㄴㅁ아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>헬스 정보</h1>
          <p>asfafasfsdddsadsadasd</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="pagination">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
          <button
            key={page}
            className={`page-button ${selectedPage === page ? "selected" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <button className="write">글쓰기</button>
      </div>
    </div>
  );
};

export default Community_fila;
