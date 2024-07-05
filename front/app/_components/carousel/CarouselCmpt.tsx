import {Carousel, CarouselItem} from 'react-bootstrap';
import Image from 'next/image';

type CarouselImage = {
  path: string;
  name: string;
}

// Liste des images avec leur chemin et nom
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

// Fonction pour fusionner les lignes du carrousel 3 par 3
const merge_carousel_rows = (result_rows: CarouselImage[][], key: CarouselImage, index: number) => {
  if(index % 3 == 0) {
    result_rows[result_rows.length] = [key];
  } else {
    result_rows[result_rows.length-1].push(key)
  }
  return result_rows;
};
const carousel_rows : CarouselImage[][] = image_list.reduce(merge_carousel_rows, []);

// Définir le composant Carousel
const CarouselCmpt = () => {
  return (
    <>
      <Carousel>
        {/* Itérer sur les lignes du carrousel */}
        {carousel_rows.map((row, index_row) => (
        <CarouselItem key={index_row}>
          <div className="row d-flex">
            {/* Itérer sur les images de chaque ligne */}
            {row.map((img, index_img) => (
            <div key={index_img} className="col-4">
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

// Exporter le composant Carousel
export default CarouselCmpt;