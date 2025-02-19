export async function Recipes() {
  return [
    {
      id: "1",
      name: "Nasi Goreng",
      description: "Nasi goreng khas Indonesia yang gurih dan lezat, cocok untuk sarapan atau makan malam.",
      ingredients: ["Nasi", "Telur", "Kecap Manis", "Bawang Putih", "Garam"],
      steps: ["Panaskan minyak di wajan", "Tumis bawang putih hingga harum", "Masukkan telur dan orak-arik", "Tambahkan nasi dan aduk rata", "Tuang kecap manis dan garam, aduk hingga merata", "Sajikan dengan irisan mentimun dan kerupuk"],
    },
    {
      id: "2",
      name: "Sate Ayam",
      description: "Sate ayam yang empuk dan lezat dengan bumbu kecap serta saus kacang khas.",
      ingredients: ["Daging Ayam", "Kecap Manis", "Bawang Putih", "Garam", "Tusuk Sate"],
      steps: ["Potong daging ayam menjadi bagian kecil", "Marinasi dengan kecap manis, bawang putih, dan garam", "Tusuk daging ke dalam tusuk sate", "Panggang hingga matang dengan bara api", "Sajikan dengan saus kacang dan lontong"],
    },
    {
      id: "3",
      name: "Mie Goreng",
      description: "Mie goreng sederhana yang lezat dengan perpaduan telur, sayur, dan kecap manis.",
      ingredients: ["Mie", "Telur", "Sayur Kol", "Bawang Putih", "Kecap Manis"],
      steps: ["Rebus mie hingga matang, lalu tiriskan", "Tumis bawang putih hingga harum", "Masukkan telur dan orak-arik", "Tambahkan mie dan sayuran", "Tambahkan kecap manis dan aduk rata", "Sajikan selagi hangat"],
    },
    {
      id: "4",
      name: "Ayam Goreng",
      description: "Ayam goreng renyah dan gurih, cocok disantap dengan sambal dan nasi hangat.",
      ingredients: ["Daging Ayam", "Bawang Putih", "Garam", "Minyak Goreng"],
      steps: ["Lumuri ayam dengan bawang putih dan garam", "Diamkan selama 30 menit", "Panaskan minyak goreng", "Goreng ayam hingga matang dan kecoklatan", "Sajikan dengan nasi hangat dan sambal"],
    },
    {
      id: "5",
      name: "Rendang",
      description: "Rendang daging sapi yang kaya bumbu dengan rasa gurih dan pedas.",
      ingredients: ["Daging Sapi", "Santan", "Bumbu Rendang", "Daun Jeruk", "Garam"],
      steps: ["Tumis bumbu rendang hingga harum", "Masukkan potongan daging sapi", "Tuang santan dan masak hingga mengental", "Tambahkan daun jeruk dan garam", "Masak dengan api kecil hingga daging empuk", "Sajikan dengan nasi hangat"],
    },
    {
      id: "6",
      name: "Gado-Gado",
      description: "Salad khas Indonesia dengan saus kacang yang gurih dan lezat.",
      ingredients: ["Sayuran Rebus", "Tahu", "Tempe", "Saus Kacang", "Kerupuk"],
      steps: ["Rebus sayuran seperti bayam, kangkung, dan taoge", "Potong tahu dan tempe, lalu goreng hingga matang", "Tata sayuran, tahu, dan tempe di piring", "Tuang saus kacang di atasnya", "Sajikan dengan kerupuk dan telur rebus"],
    },
    {
      id: "7",
      name: "Soto Ayam",
      description: "Soto ayam segar dengan kuah gurih, cocok untuk menghangatkan tubuh.",
      ingredients: ["Daging Ayam", "Bumbu Soto", "Soun", "Daun Seledri", "Jeruk Nipis"],
      steps: ["Rebus ayam hingga matang, lalu suwir-suwir", "Tumis bumbu soto hingga harum", "Masukkan ayam ke dalam kuah", "Tambahkan soun yang telah direndam air panas", "Sajikan dengan daun seledri dan jeruk nipis"],
    },
    {
      id: "8",
      name: "Bakso",
      description: "Bakso kenyal dengan kuah kaldu gurih, disajikan dengan mie dan sambal.",
      ingredients: ["Daging Sapi", "Tepung Tapioka", "Bawang Putih", "Garam", "Kuah Kaldu"],
      steps: ["Haluskan daging sapi dan campur dengan tepung tapioka", "Bentuk adonan menjadi bola-bola kecil", "Rebus dalam air mendidih hingga mengapung", "Siapkan kuah kaldu yang gurih", "Sajikan bakso dengan mie dan kuah kaldu"],
    },
    {
      id: "9",
      name: "Opor Ayam",
      description: "Opor ayam dengan kuah santan yang lembut dan kaya rempah.",
      ingredients: ["Daging Ayam", "Santan", "Bumbu Opor", "Daun Salam", "Garam"],
      steps: ["Tumis bumbu opor hingga harum", "Masukkan potongan ayam dan aduk rata", "Tuang santan dan masak dengan api kecil", "Tambahkan daun salam dan garam", "Masak hingga ayam empuk dan kuah mengental", "Sajikan dengan ketupat"],
    },
    {
      id: "10",
      name: "Martabak Telur",
      description: "Martabak telur gurih dengan isian daging cincang dan bumbu kari.",
      ingredients: ["Tepung Terigu", "Telur", "Daging Cincang", "Daun Bawang", "Bumbu Kari"],
      steps: [
        "Campur tepung terigu dengan air dan buat adonan kulit",
        "Tumis daging cincang dengan bumbu kari",
        "Campur daging dengan telur dan daun bawang",
        "Ambil adonan kulit dan isi dengan campuran telur",
        "Goreng hingga matang dan kecoklatan",
        "Sajikan dengan acar dan saus",
      ],
    },
  ];
}
