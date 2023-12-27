const flipdata = [
  {
    id: 0,
    title: "Front1",
    title2: "Back1"
  },
  {
    id: 1,
    title: "Front2",
    title2: "Back2"
  },
  {
    id: 2,
    title: "Front3",
    title2: "Back3"
  },
  {
    id: 3,
    title: "Front4",
    title2: "Back4"
  },
  {
    id: 4,
    title: "Front5",
    title2: "Back5"
  },
  {
    id: 5,
    title: "Front6",
    title2: "Back6"
  }
]
const cardUpScrolldata = [
  {
    id: 0,
    img: "https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg",
    name: "Karan Singh",
    profession: "Graphic Designer"
  },
  {
    id: 1,
    img: "https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
    name: "Aakash Agrawal",
    profession: "Chartered Accountant "
  },
  {
    id: 2,
    img: "https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    name: "Dolly Seth",
    profession: "Digital Marketing"
  }
]

const cardSwapUpData = [
  {
    id: 0,
    heading: "Heading 1",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/u/users"
  },
  {
    id: 1,
    heading: "Heading 2",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/u/sub-admins"
  },
  {
    id: 2,
    heading: "Heading 3",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/u/roles"
  }
]
const cardOverlayData = [
  {
    id: 0,
    img: "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg",
    title: "Title 1",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#"
  },
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg",
    title: "Title 1",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#"
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg",
    title: "Title 1",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#"
  }
]

const cardLeftRightScrollData = [
  {
    id: 0,
    title: "title 1",
    img: "https://source.unsplash.com/800x600/?flames,fire"
  },
  {
    id: 1,
    title: "title 2",
    img: "https://source.unsplash.com/800x600/?sea,water"
  },
  {
    id: 2,
    title: "title 3",
    img: "https://source.unsplash.com/800x600/?ground,desert"
  }
]
const cardEffectdData = [
  {
    id: 0,
    title: "This is option 1",
    para: "Card description with lots of great facts and interesting details."
  },
  {
    id: 1,
    title: "This is option 2",
    para: "Card description with lots of great facts and interesting details."
  },
  {
    id: 2,
    title: "This is option 3",
    para: "Card description with lots of great facts and interesting details."
  }
]
const stepCardData = [
  {
    id: 0,
    step: "01",
    title: "Card One",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?",
    link: "#"
  },
  {
    id: 1,
    step: "02",
    title: "Card Two",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?",
    link: "#"
  },
  {
    id: 2,
    step: "03",
    title: "Card Three",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?",
    link: "#"
  }
]
const cardBlurData = [
  {
    id: 0,
    link: "#",
    img: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    para: "Category",
    heading: "Heading One"
  },
  {
    id: 1,
    link: "#",
    img: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    para: "Category",
    heading: "Heading Two"
  },
  {
    id: 2,
    link: "#",
    img: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    para: "Category",
    heading: "Heading Three"
  },
  {
    id: 3,
    link: "#",
    img: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    para: "Category",
    heading: "Heading Four"
  }
]
export const useCommonAnimationModel = () => {
  return {
    flipdata,
    cardUpScrolldata,
    cardSwapUpData,
    cardOverlayData,
    cardLeftRightScrollData,
    cardEffectdData,
    stepCardData,
    cardBlurData
  }
}
