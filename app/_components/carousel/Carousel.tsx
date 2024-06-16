import Image from 'next/image';

const caroussel_width=300;
const caroussel_height=500;

const image_list = [
  {path:"/activities/Activity_1.jpg", name:"Activity 1"},
  {path:"/activities/Activity_2.jpg", name:"Activity 2"},
  {path:"/activities/Activity_3.jpg", name:"Activity 3"},
  {path:"/activities/Activity_4.jpg", name:"Activity 4"},
  {path:"/activities/Activity_5.jpg", name:"Activity 5"},
  {path:"/activities/Activity_6.jpg", name:"Activity 6"},
];

const merge_carousel_rows = (result_rows: object[][], key: object, index: number) => {
  if(index % 3 == 0) {
    result_rows[result_rows.length] = [key];
  } else {
    result_rows[result_rows.length-1].push(key)
  }
  return result_rows;
};
const carousel_rows = image_list.reduce(merge_carousel_rows, []);


const Carousel = () => {
  return (
    <>
    <section className="activities py-5">
      <div id="activitiesCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-target="#carouselPage1" data-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
          <button type="button" data-target="#carouselPage2" data-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-target="#carouselPage3" data-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {carousel_rows.map((row, index_row) => (
          <div key={index_row} className={"carousel-item "+(index_row==0 ? "active" : "")}>
            <div className="d-flex flex-wrap">
              {row.map((img, index_img) => (
              <div key={index_img} className="carousel-item-img">
                <Image src={img.path} className="d-block w-100" alt={img.name} width={caroussel_width} height={caroussel_height}></Image>
              </div>
              ))}
            </div>
          </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#activitiesCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#activitiesCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    </>
  );
}

export default Carousel;