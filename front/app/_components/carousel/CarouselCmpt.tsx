import {Carousel, CarouselItem} from 'react-bootstrap';
import Image from 'next/image';

type CarouselImage = {
  path: string;
  name: string;
}

// List of images with path and name
const image_list : CarouselImage[] = [
  {path:"/activities/Activity_7.jpg", name:"Activity 7"},
  {path:"/activities/Activity_6.jpg", name:"Activity 6"},
  {path:"/activities/Activity_5.jpg", name:"Activity 5"},
  {path:"/activities/Activity_8.jpg", name:"Activity 8"},
  {path:"/activities/Activity_1.jpg", name:"Activity 1"},
  {path:"/activities/Activity_6.jpg", name:"Activity 6"},
  {path:"/activities/Activity_2.jpg", name:"Activity 2"},
  {path:"/activities/Activity_3.jpg", name:"Activity 3"},
  {path:"/activities/Activity_4.jpg", name:"Activity 4"},
];

// Function to merge carousel lines 3 by 3
const merge_carousel_rows = (result_rows: CarouselImage[][], key: CarouselImage, index: number) => {
  if(index % 3 == 0) {
    result_rows[result_rows.length] = [key];
  } else {
    result_rows[result_rows.length-1].push(key)
  }
  return result_rows;
};
const carousel_rows : CarouselImage[][] = image_list.reduce(merge_carousel_rows, []);

// Define the Carousel component
const CarouselCmpt = () => {
  return (
    <>
      <Carousel>
        {/* Iterating on carousel lines */}
        {carousel_rows.map((row, index_row) => (
        <CarouselItem key={index_row}>
          <div className="row d-flex">
            {/* Iterate over the images in each line */}
            {row.map((img, index_img) => (
            <div key={index_img} className="col-lg-4 col-md-6">
              <Image src={img.path} className="w-100" alt={img.name} width={300} height={600}></Image>
            </div>
            ))}
          </div>
        </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}

// Exporting the Carousel component
export default CarouselCmpt;