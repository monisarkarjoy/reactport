import "./testimonials.scss"

export default function Testimonials() {

const data = [
  {
    id: 1,
    name: "Alex",
    title: "CEO of LAMA",
    img: "https://www.marieclaire.com.au/media/86267/famous-women-in-history-main.jpg",
    icon: "assets/twitter.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas."
  },
  {
    id: 2,
    name: "Joy",
    title: "Senior Developer",
    img: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    icon: "assets/youtube.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas.",
    featured: true,
  },
  {
    id: 3,
    name: "Andre Russel",
    title: "Software Developer",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    icon: "assets/linkedin.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas."
  },
]

  return (
    <div className='testimonials' id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4> {d.title} </h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
}
