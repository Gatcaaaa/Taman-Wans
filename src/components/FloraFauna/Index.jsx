import FFCard from "./FFCard";
import { Fade } from "react-awesome-reveal";

export default function FloraFaunaComponent() {
  const description = (description) => {
    if (!description) {
      return <p className="text-lg mb-5">Tidak ada deskripsi</p>;
    }
    return description.split(/\n\n?/).map((item, index) => {
      return (
        <p key={index} className="text-lg mb-5">
          {item}
        </p>
      );
    });
  };

  const DataFloraFauna = [
    {
      name: "Sengon",
      image:
        "https://tanilink.com/uploads/berita/2019-04-15/40437356_1879616295466619_6493002911366543558_n.jpg",
      description:
        "Sengon dijumpai secara alami di hutan luruh daun campuran di wilayah lembab dan ugahari, dengan curah hujan antara 1.000–5.000 mm pertahun. Pohon ini didapati pula di hutan-hutan sekunder, di sepanjang tepian sungai, dan di sabana, hingga ketinggian 1.800 m dpl. Sengon beradaptasi dengan baik pada tanah-tanah miskin, ber-pH tinggi, atau yang mengandung garam; juga tumbuh baik di tanah aluvial lateritik dan tanah berpasir bekas tambang.",
    },
    {
      name: "Burung Hantu",
      image:
        "https://d1bpj0tv6vfxyp.cloudfront.net/articles/7891_6-5-2021_18-27-24.webp",
      description:
        "Burung hantu adalah kelompok burung yang merupakan anggota dari ordo Strigiformes. Burung ini termasuk golongan burung buas (karnivora/ pemakan daging) dan merupakan hewan malam (nokturnal). Seluruhnya, terdapat sekitar 222 spesies yang telah diketahui, yang menyebar di seluruh dunia kecuali Antarktika, sebagian besar Greenland, dan beberapa pulau-pulau terpencil. Di dunia barat, hewan ini dianggap simbol kebijaksanaan, tetapi di beberapa tempat di Indonesia dianggap pembawa pratanda maut, maka dari itu dinamakan Burung Hantu.",
    },
    {
      name: "Ketapang Kencana",
      image:
        "https://agrotanisejahtera.co.id/wp-content/uploads/2024/02/Pohon-Hias-Ketapang-Kencana-Untuk-Penghijauan.jpg",
      description:
        "Ketapang kencana (Terminalia mantaly) adalah sejenis tumbuhan peneduh berwujud pohon. Tajuknya yang mendatar dan berlapis-lapis, sebagaimana kerabat satu marganya, ketapang T. catappa, membuatnya juga menjadi penghias taman rumah dan kebun. Ketapang kencana adalah tumbuhan endemik Madagaskar, namun sekarang diintroduksi ke berbagai daerah tropika.",
    },
    {
      name: "Monyet",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2017/12/06/6414c1ae-fcd1-49a6-8316-4a71c29f93ff_43.jpg?w=600&q=90",
      description:
        "Beberapa monyet telah dimanfaatkan manusia sebagai hewan timangan atau hewan untuk membantu pekerjaan sehari-hari. Monyet ekor panjang (Macaca fascicularis) adalah hewan yang paling biasa berinteraksi dengan manusia dan sering dipelihara sebagai hewan timangan, hewan sirkus, atau percobaan laboratorium. Ia juga primata pertama yang pernah ke angkasa luar. Beruk dipelihara di beberapa tempat di Sumatra dan Malaya untuk dilatih sebagai pemetik kelapa.",
    },
    {
      name: "Jambu Mete",
      image: "https://warbis.id/assets/images/product/1626693084.png",
      description:
        "Jambu mete atau jambu monyet (Anacardium occidentale) adalah sejenis tanaman dari suku Anacardiaceae yang berasal dari Brasil dan memiliki buah yang dapat dimakan. Jambu mete juga dikenal karena bentuknya yang mirip dengan hidung monyet bekantan asal Kalimantan; bijinya biasa dikeringkan dan digoreng untuk dijadikan berbagai macam penganan. Secara botani, tumbuhan ini sama sekali bukan anggota jambu-jambuan (Myrtaceae) maupun kacang-kacangan (Fabaceae), melainkan malah lebih dekat kekerabatannya dengan mangga (suku Anacardiaceae).",
    },
  ];
  /*  container mx-auto md:mt-7*/

  return (
    <div>
      <h2 className="container text-3xl mx-auto mt-9 md:text-4xl font-bold">
        Our Flora & Fauna
      </h2>
      {DataFloraFauna.map((data, index) => {
        const isEven = index % 2 === 0 ? "right" : "left";
        return (
          <div className="container mx-auto mt-10 md:mt-20" key={index}>
            <Fade direction={isEven === "right" ? "right" : "left"}>
              <FFCard image={data.image} title={data.name}>
                {description(data.description)}
              </FFCard>
            </Fade>
          </div>
        );
      })}
    </div>
  );
}
