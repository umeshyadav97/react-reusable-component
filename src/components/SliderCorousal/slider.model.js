export const useSliderCorousalModal = () => {
  const dataSlider = [
    {
      id: 0,
      title: "Title 1",
      subTitle: "paragraph 1",
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
    },
    {
      id: 1,
      title: "Title 2",
      subTitle: "paragraph 2",
      img: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
    },
    {
      id: 2,
      title: "Title 3",
      subTitle: "paragraph 3",
      img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg"
    },
    {
      id: 3,
      title: "Title 4",
      subTitle: "paragraph 4",
      img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"
    },
    {
      id: 4,
      title: "Title 5",
      subTitle: "paragraph 5",
      img: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg"
    }
  ]
  const images = [
    {
      id: 0,
      image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
      title: "Title 1",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
      title: "Title 2",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
      title: "Title 3",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
      title: "Title 4",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg",
      title: "Title 5",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  ]
  return {
    dataSlider,
    images
  }
}
