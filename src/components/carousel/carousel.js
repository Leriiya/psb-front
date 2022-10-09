import React from "react";

export const CardsCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img width='250px' height='200px' class="d-block " src="https://sun9-west.userapi.com/sun9-46/s/v1/ig2/QWAZYYpUdCv4pRG1PydcsTF6-Jn3XlLOjZKEo2T6E5-vCYYbSbwFWGEpg8HTxZV0E2njXeWxC1gngvWGHc290Ac0.jpg?size=1280x1280&quality=95&type=album" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img width='250px' height='200px' class="d-block " src="https://sun9-west.userapi.com/sun9-1/s/v1/if1/4yuHo_OPKNS-x3RoXopaqvMAWHlr9_9zodmCXSgO_eH5N8jMU984oje4fdNQFzGS6_qJ9wu7.jpg?size=604x453&quality=96&type=album" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img width='250px' height='200px' class="d-block " src="https://sun9-west.userapi.com/sun9-40/s/v1/ig2/CQ2Emx1_mVHI5cz6KUgz-lAyeNDkDpSJ65upS8Un8xBkxYa01IlmO2Lz2T6Tc3AG7Sy8_PYI1rN5xANzbIZkBo81.jpg?size=890x693&quality=96&type=album" alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
