/*@jsxImportSource theme-ui*/
import { useState, useEffect, useRef } from "react";
import { Box, Container } from "theme-ui";
import { Waypoint } from "react-waypoint";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import execoms from "../lib/execom";

const Component = () => {
  const [confetti, setConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const [imagePos, setImagePos] = useState([]);
  const confettiRelease = () => {
    setConfetti(true)
    setTimeout(() => {
      setConfetti(false)
    }, 15000)

  }
  const updateDescPos = () => {
    const firstItemOffset = imageBox.current.childNodes[0].offsetTop;
    let descPosArr = [];
    descPosArr.push(0);
    for (let i = 1; i < 9; i++) {
      const itemOffset = imageBox.current.childNodes[i].offsetTop;
      const diff = itemOffset - firstItemOffset;
      if (diff === 0) {
        descPosArr.push(0);
      }
      else {
        descPosArr.push(diff / 220);
      }
    }
    setImagePos(descPosArr)
  }
  useEffect(() => {
    updateDescPos()
    window.addEventListener('resize', updateDescPos);

    return () => {
      window.removeEventListener('resize', updateDescPos);
    };
  }, [])
  const imageBox = useRef(null);
  return (
    <div>

      <Box
        sx={{
          backgroundImage: ["url('https://support.scdn.co/web/_next/static/assets/d3f3f22/search-mobile.webp')", "url('https://support.scdn.co/web/_next/static/assets/d3f3f22/search-mobile.webp')", "url('https://support.scdn.co/web/_next/static/assets/d3f3f22/search-desktop.webp')"],
          backgroundColor: '#1c2963',
          backgroundPosition: 'top 100%',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          color: "white",
          pt: [4],
          pb: [4],
          textAlign: "center",
          height: '100vh',
          position: "relative",
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >{confetti ? <Confetti
        width={width}
        height={height * 6}
      /> : null}
        <h1 sx={{ my: [0], fontSize: [5, 6, 7], color: 'white' }}>IEDCMEC</h1>
        <p sx={{ fontSize: [3, 4, 5], mt: [1] }}>
          FAREWELL 2021
        </p>
        <div
          sx={{
            height: [40],
            width: "100vw",
            textAlign: "center",
          }}
        >
          <img
            src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"
            sx={{
              borderRadius: "circle",
              width: [60, 80, 100, 110],
              mx: "auto",
              cursor: "pointer",
            }}
          />
        </div>
        <Waypoint
          onLeave={confettiRelease}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: '#1c2963',
          color: "white",
          pt: [4],
          pb: [4],
          textAlign: "center",
          minHeight: '100vh',
          width: '100vw',
          position: "relative",
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p sx={{ fontSize: [3, 4, 5], mt: [1] }}>
          THANK YOU GUYS !💓
        </p>

        <Box
          ref={imageBox}
          sx={{
            pt: [4],
            pb: [4],
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',

            //padding:['0 5% 0 5%']
          }}>
          {execoms.map((item, index) => {
            return (
              <div
                sx={{
                  textAlign: "center",
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                {imagePos[index] % 2 !== 0 ? (
                  <div
                    className="imageDesc">
                    <p sx={{
                      lineHeight: ['19px','22px','22px'],
                      textAlign: 'left',
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      fontSize: ['12px', '14px', '14px']
                    }}>
                      {item.text}
                    </p>
                  </div>) : null}
                <img
                  src={item.image}
                  sx={{
                    width: [200],
                    mx: "auto",
                    cursor: "pointer",
                    transition: "1s",
                  }}
                />
                {imagePos[index] % 2 === 0 ? (
                  <div
                    className="imageDesc2">
                    <p sx={{
                      lineHeight: '22px',
                      textAlign: 'right',
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      fontSize: ['12px', '14px', '14px']

                    }}>
                      {item.text}
                    </p>
                  </div>) : null}
              </div>
            )
          })}

        </Box>
      </Box>
    </div >
  );
};

export default Component;
