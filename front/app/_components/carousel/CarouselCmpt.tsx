import {Carousel, CarouselItem} from 'react-bootstrap';
import Image from 'next/image';

type CarouselImage = {
  path: string;
  name: string;
}

// Liste des images avec leur chemin et nom
const image_list : CarouselImage[] = [
  {path:"/activities/Activity_1.jpg", name:"Activity 1"},
  {path:"/activities/Activity_2.jpg", name:"Activity 2"},
  {path:"/activities/Activity_3.jpg", name:"Activity 3"},
  {path:"/activities/Activity_4.jpg", name:"Activity 4"},
  {path:"/activities/Activity_5.jpg", name:"Activity 5"},
  {path:"/activities/Activity_6.jpg", name:"Activity 6"},
  {path:"/activities/Activity_1.jpg", name:"Activity 1"},
  {path:"/activities/Activity_2.jpg", name:"Activity 2"},
  {path:"/activities/Activity_3.jpg", name:"Activity 3"},
  {path:"/activities/Activity_4.jpg", name:"Activity 4"},
  {path:"/activities/Activity_5.jpg", name:"Activity 5"},
  {path:"/activities/Activity_6.jpg", name:"Activity 6"},
  {path:"/activities/Activity_6.jpg", name:"Activity 5"},
  {path:"/activities/Activity_6.jpg", name:"Activity 6"},
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
    <section className="activities py-5">
      <div className="container">
        <div className="row">
          <Carousel className="col-12">
            {/* Itérer sur les lignes du carrousel */}
            {carousel_rows.map((row, index_row) => (
            <CarouselItem key={index_row}>
              <div className="d-flex flex-wrap">
                {/* Itérer sur les images de chaque ligne */}
                {row.map((img, index_img) => (
                <div key={index_img}>
                  {/* Afficher l'image avec Next.js Image component */}
                  <Image src={img.path} className="d-block w-100" alt={img.name} width={300} height={500}></Image>
                </div>
                ))}
              </div>
            </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
    </>
  );
}

// Exporter le composant Carousel
export default CarouselCmpt;