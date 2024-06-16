import Image from 'next/image'
import Script from "next/script";

const caroussel_width=200;
const caroussel_height=200;

export default function HomePage() {
  return (
    <>
      {/* Mission Section */}
      <section className="mission text-center py-5">
          <h2>Notre Mission</h2>
          <p>Depuis 2006, Les Potes en Ciel s&apos;engage à promouvoir l&apos;accueil inconditionnel de l&apos;enfant et de son entourage. Nous offrons un lieu alternatif aux familles, un espace où la liberté et la solidarité sont au coeur de nos actions.</p>
      </section>

      {/* Planning Image Section */}
      <section className="planning py-5">
        <div className="container">
          <Image src={"/planning/planning_2024_S23.jpg"} alt="planning_2024_S23" width={800} height={500}></Image>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="activitiesCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex flex-wrap">
                      <div className="carousel-item-img">
                        <Image src={"/activities/Activity_1.jpg"} className="d-block w-100" alt="Activity 1" width={caroussel_width} height={caroussel_height}></Image>
                      </div>
                      <div className="carousel-item-img">
                        <Image src={"/activities/Activity_2.jpg"} className="d-block w-100" alt="Activity 2" width={caroussel_width} height={caroussel_height}></Image>
                      </div>
                      <div className="carousel-item-img">
                        <Image src={"/activities/Activity_3.jpg"} className="d-block w-100" alt="Activity 3" width={caroussel_width} height={caroussel_height}></Image>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex flex-wrap">
                      <div className="carousel-item-img">
                        <Image src={"/activities/Activity_4.jpg"} className="d-block w-100" alt="Activity 4" width={caroussel_width} height={caroussel_height}></Image>
                      </div>
                      <div className="carousel-item-img">
                        <Image src={"/activities/Activity_5.jpg"} className="d-block w-100" alt="Activity 5" width={caroussel_width} height={caroussel_height}></Image>
                      </div>
                      <div className="carousel-item-img">
                        <Image src={"/activities/Activity_6.jpg"} className="d-block w-100" alt="Activity 6" width={caroussel_width} height={caroussel_height}></Image>
                      </div>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </section>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></Script>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
      <Script src="scripts.js"></Script>
    </>
  );
}
