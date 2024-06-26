import React from "react";
import { Grid } from "@mui/material";
import colors from "../consts/colors";
import BodyPaper from "./BodyPaper";
import img1 from "../img/elittur.png";
import img2 from "../img/doğa.jpg";
import img3 from "../img/web1.png";
import img4 from "../img/web2.png";

import darkColors from "../consts/darkColors";
import "../App.css";
import noktadesen from "../img/noktadesen.png";

const paperInfo = [
  {
    img: img2,
    text: "Ulaşım Uygulaması",
    link: "http://www.elittur.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Ulaşım Araçlarının Kullanıcıya Hızlı ve Güvenilir Bir Şekilde Ulaşmasını Amaçladık",
  },
  {
    img: img2,
    text: "Proje",
    link: "http://www.mounth.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Lojistik İşlemlerini İş Sahiplerinin Kesintisiz Doğru Bilgi İle Erişimini Sağladık",
  },
  {
    img: img2,
    text: "Proje",
    link: "http://www.web1.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Öğrencilerin Not Tutmaları İçin Kullanışlı ve Kolay Anlaşılabilir Not Uygulması Tasarladık",
  },
  {
    img: img2,
    text: "Proje",
    link: "http://www.web2.com",
    linkgit: "https://github.com/OmTun-Labs/transporter-website",
    desc: "Sağlık Bilgilerini Düzenli Olarak Kayıt Altına Alan ve Raporlayan Sağlık Sistemi Oluşturduk",
  },
];

const Body = () => (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: colors.black,
      color: colors.white,
      padding: "2rem",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "10%",
        backgroundImage: `url(${noktadesen})`,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div className="scrolling-text">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "3rem",
            fontFamily: "Poppins",
            color: "transparent",
            opacity: 0.6,
            textStroke: "1px white",
            display: "inline-block",
            letterSpacing: "1.5rem", // Increase space between words
          }}
        >
          TASARIM YENİLİKÇİ ÖZELLEŞTİRİLEBİLİR KULLANICI DOSTU İNOVATİF
        </h1>
      </div>
    </div>
    <Grid
      container
      style={{
        marginTop: "10rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      {paperInfo.map((info, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BodyPaper
            img={info.img}
            text={info.text}
            link={info.link}
            linkgit={info.linkgit}
            desc={info.desc}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Body;
