export default function MI(props){
    return(
        <div
        sx={{
          height: [40],
          width: "100vw",
          textAlign: "center",
        }}
      >
        <img
          src="./annlee.jpeg"
          sx={{
            borderRadius: "circle",
            width: [100, 100, 110, 125],
            margin:0,
            mx: "auto",
            cursor: "pointer",
            transition: "1s",
            ":hover": {
              transform: "rotate(360deg)",
              transition: "2s",
            },
          }}
        />
      </div>
    )
}