// Create a product object/json object.
// Sample json object. 

const data = {
  product: [
    {
      name: "iPhone 14 Pro & iPhone 14 Pro Max",
      brand: "apple",
      description: "iPhone 14 Pro & iPhone 14 Pro Max",
      price: "$999",
      image: "images/iphone14pro-digitalmat-gallery-1-202209_GEO_US.png",
    },
    {
      name: "iPhone 14 & iPhone 14 Plus",
      brand: "apple",
      description: "iPhone 14 & iPhone 14 Plus",
      price: "$799",
      image: "images/iphone14-digitalmat-gallery-1-202209_GEO_US.png",
    },
    {
      name: "iPhone 13 mini & iPhone 13",
      brand: "apple",
      description: "iPhone 13 mini & iPhone 13",
      price: "$599",
      image: "images/iphone13-digitalmat-gallery-1-202203_GEO_US.png",
    },
    {
      name: "iPhone SE",
      brand: "apple",
      description: "iPhone SE",
      price: "$425",
      image: "images/iphonese-digitalmat-gallery-1-202203.png",
    },
    {
      name: "iPhone 12",
      brand: "apple",
      description: "iPhone 12",
      price: "$599",
      image: "images/Apple-iPhone-12-PNG-Free-Download.png",
    },
    {
      name: "AirPods Max",
      brand: "apple",
      description: "AirPods Max",
      price: "$549",
      image: "images/hero__gnfk5g59t0qe_large_2x.png",
    },
    {
        name: "AirPods Pro",
        brand: "apple",
        description: "AirPods Pro 2nd generation",
        price: "$249",
        image: "images/airpods-pro.png",
      },
      {
        name: "AirPods",
        brand: "apple",
        description: "AirPods 3rd generation",
        price: "$169",
        image: "images/airpods.png",
      },
  ],
};

// show data to html

for (let i = 0; i < data.product.length; i++) {
  //   productArray = data.product;
  //   console.log(data.product);
  //   productName = data.product[i].name;
  if (i == 0) {
    document.querySelector(".image-01").src = data.product[0].image;
    document.querySelector(".name-01").innerHTML = data.product[0].name;
    document.querySelector(".price-01").innerHTML = data.product[0].price;
  } else if (i == 1) {
    document.querySelector(".image-02").src = data.product[1].image;
    document.querySelector(".name-02").innerHTML = data.product[1].name;
    document.querySelector(".price-02").innerHTML = data.product[1].price;
  } else if (i == 2) {
    document.querySelector(".image-03").src = data.product[2].image;
    document.querySelector(".name-03").innerHTML = data.product[2].name;
    document.querySelector(".price-03").innerHTML = data.product[2].price;
  } else if (i == 3) {
    document.querySelector(".image-04").src = data.product[3].image;
    document.querySelector(".name-04").innerHTML = data.product[3].name;
    document.querySelector(".price-04").innerHTML = data.product[3].price;
  } else if (i == 4) {
    document.querySelector(".image-05").src = data.product[4].image;
    document.querySelector(".name-05").innerHTML = data.product[4].name;
    document.querySelector(".price-05").innerHTML = data.product[4].price;
  } else if (i == 5) {
    document.querySelector(".image-06").src = data.product[5].image;
    document.querySelector(".name-06").innerHTML = data.product[5].name;
    document.querySelector(".price-06").innerHTML = data.product[5].price;
  } else if (i == 6) {
    document.querySelector(".image-07").src = data.product[6].image;
    document.querySelector(".name-07").innerHTML = data.product[6].name;
    document.querySelector(".price-07").innerHTML = data.product[6].price;
  }else if (i == 7) {
    document.querySelector(".image-08").src = data.product[7].image;
    document.querySelector(".name-08").innerHTML = data.product[7].name;
    document.querySelector(".price-08").innerHTML = data.product[7].price;
  } else {
    console.log("Other case");
  }
  //   console.log("array : " + i);
    console.log(data.product[i]);
  //   console.log(data.product[i].name);
  //   console.log(data.product[i].image);
}

// console.log(data.product.length);
