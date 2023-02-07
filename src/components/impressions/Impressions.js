import React from "react";

import { Star } from "../../assets/svg";

const impressions = () => {
  return (
    <div className="impressions">
      <div className="impressions-left">
        <div className="impressions-left-comment">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            elit, commodo nec ante id, ornare efficitur dui. Nulla in quam sed
            ex aliquam feugiat. In varius risus est, sed placerat tortor mollis
            a. -{" "}
            <span className="impressions-left-comment-author">Pera Perić</span>
          </span>
        </div>
        <div className="impressions-left-comment">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            elit, commodo nec ante id, ornare efficitur dui. Nulla in quam sed
            ex aliquam feugiat. In varius risus est, sed placerat tortor mollis
            a. -{" "}
            <span className="impressions-left-comment-author">
              Marija Simić
            </span>
          </span>
        </div>
        <div className="impressions-left-comment">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. -{" "}
            <span className="impressions-left-comment-author">
              Jovan Jovanović
            </span>
          </span>
        </div>
        <div className="impressions-left-comment">
          <span>
            Nullam mi elit, commodo nec ante id, ornare efficitur dui. Nulla in
            quam sed ex aliquam feugiat. In varius risus est. -{" "}
            <span className="impressions-left-comment-author">Sima Simić</span>
          </span>
        </div>
      </div>
      <div className="impressions-right">
        <div className="impressions-right-top">Vaš utisak</div>
        <div className="impressions-right-list">
          <ul>
            <li>
              Opšta
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
            <li>
              Ambijent
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
            <li>
              Atmosfera
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
            <li>
              Hrana
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
            <li>
              Higijena
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
            <li>
              Cene
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
            <li>
              Usluga
              <div className="impressions-right-list-star">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
            </li>
          </ul>
        </div>
        <div className="impressions-right-comment">
          <div className="impressions-right-comment-name">Komentar</div>
          <textarea
            className="impressions-right-comment-container"
            placeholder="Ovde unesi komentar"
            type="text"
          />

          <button className="impressions-right-comment-button">
            Ostavi utisak
          </button>
        </div>
      </div>
    </div>
  );
};

export default impressions;
