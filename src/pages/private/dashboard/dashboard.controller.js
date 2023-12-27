import { useState } from "react"

export const useDashBoardController = () => {
  const [open, setOpen] = useState(false)
  const graphData = [1, 3, 2, 4, 6, 4, 9, 6, 2, 8, 5, 9]

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setOpen(false)
  }

  const ImageListings = [
    {
      id: 1,
      description: "heater",
      alt: "",
      image:
        "https://media.istockphoto.com/id/1198272365/photo/colorful-wavy-object.jpg?b=1&s=170667a&w=0&k=20&c=My1pxsaNk-nI5ctrFwdWo9QpQJFTSyWrj13XU__5XqA="
    },
    {
      id: 2,
      alt: "",
      description: "2019 Toyota Tacoma grill",
      image:
        "https://media.istockphoto.com/id/1384378940/photo/data-stream.jpg?b=1&s=170667a&w=0&k=20&c=DLdrzrbqKhP1m9KTg3PEWQB2Ti2Ks_2A9uU6mkDECTo="
    },
    {
      id: 3,
      description: "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
      image:
        "https://media.istockphoto.com/id/1198271727/photo/abstract-wavy-object.jpg?b=1&s=170667a&w=0&k=20&c=vZ7GTnSoJlLLJOlqlpKsaXHom4GVFmAoitxUnFZGHs4="
    },
    {
      id: 4,
      alt: "",
      description: "wood",
      image:
        "https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?b=1&s=170667a&w=0&k=20&c=MuV8KwtwQ7Zc7wN5SoGyS0IcBKGCp8GvtQi-MwNdjzM="
    },
    {
      id: 5,
      alt: "",
      description: "Beautiful couch",
      image:
        "https://media.istockphoto.com/id/1198272365/photo/colorful-wavy-object.jpg?b=1&s=170667a&w=0&k=20&c=My1pxsaNk-nI5ctrFwdWo9QpQJFTSyWrj13XU__5XqA="
    },
    {
      id: 6,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1333772664/photo/digital-eye-wave-lines-stock-background.jpg?b=1&s=170667a&w=0&k=20&c=R0FzFqrFrsb9FzAtmbpV9lkEPKIMIX-3io6nDhze1j0="
    },
    {
      id: 7,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1299765486/photo/fairy-winter-landscape.jpg?b=1&s=170667a&w=0&k=20&c=18tEg08_4_8nSPIwCqU8Aup9VjUY5DwU1qq7fRPWtqs="
    },
    {
      id: 8,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1214446442/photo/island-small-island-in-ocean-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=LRK6MC6OZoetBf3HqGHSm0fKRs00DwnSQnKzthYAyRI="
    },
    {
      id: 9,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/952039286/photo/abstract-background-wallpaper.jpg?b=1&s=170667a&w=0&k=20&c=O42TVdq7QcprHBQS6lrIw_AkF04c3AkyCmtM1ZGJitA="
    },
    {
      id: 10,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1361855790/photo/abstract-composition-with-connecting-dots-and-lines-blue-background-plexus-effect.jpg?b=1&s=170667a&w=0&k=20&c=Xt0-xuQTKpJz34kL_964GsCdZyWVvRzRvcTvbyusnR4="
    },
    {
      id: 11,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/952039286/photo/abstract-background-wallpaper.jpg?b=1&s=170667a&w=0&k=20&c=O42TVdq7QcprHBQS6lrIw_AkF04c3AkyCmtM1ZGJitA="
    },
    {
      id: 12,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1361855790/photo/abstract-composition-with-connecting-dots-and-lines-blue-background-plexus-effect.jpg?b=1&s=170667a&w=0&k=20&c=Xt0-xuQTKpJz34kL_964GsCdZyWVvRzRvcTvbyusnR4="
    },
    {
      id: 13,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1337639487/photo/round-podium-or-pedestal-with-green-background.jpg?b=1&s=170667a&w=0&k=20&c=c95dBgfd1mLt6TCatZK6fJBexrb3TxPs8D2x6Y5zIUw="
    },
    {
      id: 14,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1371290125/photo/canary-wharf-district-at-night-london-united-kingdom.jpg?b=1&s=170667a&w=0&k=20&c=JGcl2ArmQY6t_HLP7u2ysi8zz4VYXaKN_HAT8kPkgCA="
    },
    {
      id: 15,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1226478932/photo/round-podium-or-pedestal-with-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=AkUOd2vv2ce1SGV5Sf3hG0OzYFgWLmKXT8SrnXIxea8="
    },
    {
      id: 16,
      alt: "",
      description: "Treadmill Parts For Free",
      image:
        "https://media.istockphoto.com/id/1390124896/photo/office-buildings-in-canary-wharf-the-downtown-financial-district-in-london.jpg?b=1&s=170667a&w=0&k=20&c=SxU1oc_2mPlOdaUt9qg2AilPcoKU1DSCUA2qy8efMRw="
    }
  ]

  return {
    open,
    handleOpen,
    handleClose,
    handleSubmit,
    graphData,
    ImageListings
  }
}
